import { db, employees, leaveRequests } from "../db";
import { eq, and } from "drizzle-orm";
import { TimeOffRequestInput } from "../validations/time-off.schema";
import { BadRequestError, ForbiddenError, NotFoundError } from "../utils/errors";

export class TimeOffService {
    /**
     * Calculate the number of business days (Mon–Fri) between two dates, inclusive.
     */
    static calculateBusinessDays(startDate: Date, endDate: Date): number {
        if (endDate < startDate) return 0;

        let count = 0;
        const current = new Date(startDate);
        current.setHours(0, 0, 0, 0);

        const end = new Date(endDate);
        end.setHours(0, 0, 0, 0);

        while (current <= end) {
            const dayOfWeek = current.getDay(); // 0 = Sunday, 6 = Saturday
            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                count++;
            }
            current.setDate(current.getDate() + 1);
        }

        return count;
    }

    /**
     * Submit a time-off / leave request.
     * - Team members can submit for themselves (employeeId resolved from their userId).
     * - Admins can submit on behalf of any employee by providing employeeId explicitly.
     */
    static async submitRequest(
        data: TimeOffRequestInput,
        context: {
            userId: string;
            organizationId: string;
            isAdmin: boolean;
        },
    ) {
        const { userId, organizationId, isAdmin } = context;

        const startDate = new Date(data.startDate);
        const endDate = new Date(data.endDate);

        // Validate date range
        if (endDate < startDate) {
            throw new BadRequestError("endDate cannot be before startDate");
        }

        let targetEmployeeId: string;

        if (data.employeeId) {
            // Only admins can submit on behalf of another employee
            if (!isAdmin) {
                throw new ForbiddenError(
                    "Only admins can submit leave requests on behalf of other employees",
                );
            }
            targetEmployeeId = data.employeeId;
        } else {
            // Find the employee record for the current user within this org
            const employee = await db.query.employees.findFirst({
                where: and(
                    eq(employees.userId, userId),
                    eq(employees.organizationId, organizationId),
                ),
            });

            if (!employee) {
                throw new NotFoundError(
                    "No employee record found for the current user in this organization",
                );
            }
            targetEmployeeId = employee.id;
        }

        // Verify the employee belongs to this organization
        const employee = await db.query.employees.findFirst({
            where: and(
                eq(employees.id, targetEmployeeId),
                eq(employees.organizationId, organizationId),
            ),
        });

        if (!employee) {
            throw new NotFoundError("Employee not found in this organization");
        }

        const totalDuration = TimeOffService.calculateBusinessDays(
            startDate,
            endDate,
        );

        const [newRequest] = await db
            .insert(leaveRequests)
            .values({
                organizationId,
                employeeId: targetEmployeeId,
                submittedByUserId: userId,
                leaveType: data.leaveType,
                startDate,
                endDate,
                totalDuration,
                reason: data.reason ?? null,
                status: "Pending",
            })
            .returning({
                id: leaveRequests.id,
                status: leaveRequests.status,
                totalDuration: leaveRequests.totalDuration,
                startDate: leaveRequests.startDate,
                endDate: leaveRequests.endDate,
                leaveType: leaveRequests.leaveType,
                employeeId: leaveRequests.employeeId,
                createdAt: leaveRequests.createdAt,
            });

        return {
            requestId: newRequest.id,
            status: newRequest.status,
            totalDuration: newRequest.totalDuration,
            startDate: newRequest.startDate,
            endDate: newRequest.endDate,
            leaveType: newRequest.leaveType,
            employeeId: newRequest.employeeId,
            createdAt: newRequest.createdAt,
        };
    }
}