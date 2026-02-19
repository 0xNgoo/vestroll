import { User } from "lucide-react";
import NextImage from "next/image";
import { Employee } from "@/types/teamManagement.types";
import { StatusBadge } from "./StatusBadge";

type EmployeeCardProps = {
  employee: Employee;
};

export const EmployeeCard = ({ employee }: EmployeeCardProps) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow dark:bg-gray-900 dark:border-gray-800">
    <div className="flex items-start gap-3 mb-3">
      <div className="w-12 h-12 rounded-full bg-gray-300 shrink-0 overflow-hidden relative dark:bg-gray-700">
        {employee.avatar ? (
          <NextImage
            src={employee.avatar}
            alt={employee.name}
            className="object-cover"
            fill
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
            <User size={24} />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 truncate dark:text-gray-100">
          {employee.name}
        </h3>
        <p className="text-xs pt-1 text-gray-500 dark:text-gray-400">
          {employee.role}
        </p>
      </div>
    </div>
    <span className="mb-4 block border-b border-[#DCE0E5] dark:border-gray-800"></span>
    <div className="flex items-center justify-between gap-2 text-sm text-gray-600">
      <span className="flex gap-2 bg-[#F5F6F7] border  p-2 rounded-full">
        <User size={16} />
        {employee.type}
      </span>
      <StatusBadge status={employee.status} />
    </div>
  </div>
);
