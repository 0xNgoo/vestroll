"use client";

import { FileText, Eye } from "lucide-react";

export default function ComplianceDetails() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <img src="/images/file.png" alt="" />
          <div>
            <p className="font-medium text-sm md:text-lg dark:text-gray-200">
              Standard Agreement
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Agreement file • 1.53MB
            </p>
          </div>
        </div>
        <button className="text-purple-600 bg-purple-100 border py-2 px-4 rounded-full  text-sm font-medium flex items-center gap-1 dark:bg-purple-900/50 dark:text-purple-300 dark:border-purple-800">
          Preview
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <span className="dark:text-gray-300">Additional terms</span>
        <div className="text-gray-700 bg-gray-100 p-4 rounded-2xl text-sm leading-relaxed dark:bg-gray-800 dark:text-gray-300">
          In the event that any payment due under this Agreement is not received
          by the Contractor within fifteen (15) days after the due date, the
          Client agrees to pay a late fee of 1.5% per month on any overdue
          amount, or the maximum amount permitted by law, whichever is lower.
        </div>
      </div>
    </div>
  );
}
