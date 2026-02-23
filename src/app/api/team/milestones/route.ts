import { db } from "@/api/db";
import { milestones } from "@/api/db/schema";
import { ApiResponse } from "@/api/utils/api-response";

export async function GET() {
  try {
    const allMilestones = await db.select({
      id: milestones.id,
      milestoneName: milestones.milestoneName,
      amount: milestones.amount,
      dueDate: milestones.dueDate,
      status: milestones.status,
    }).from(milestones);

    return ApiResponse.success(allMilestones, "Milestones retrieved successfully");
  } catch (error) {
    console.error("Error fetching milestones:", error);
    return ApiResponse.error("Failed to fetch milestones", 500);
  }
}
