"use client";

import { User, Mail, Phone, MapPin } from "lucide-react";

export default function EmployeeDetails() {
  return (
    <div className="space-y-2 w-full">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start  w-full">
        <div className="bg-purple-100 hidden lg:flex items-center justify-center py-3 px-3 h-16 w-16 rounded-2xl dark:bg-purple-900/50">
          <User size={35} className="text-purple-800 dark:text-purple-300" />
        </div>

        <div className="flex flex-col flex-1">
          <h4 className="font-medium text-xl sm:text-2xl text-gray-900 text-left dark:text-white">
            James Adeboye
          </h4>

          <div className="flex flex-col gap-2 mt-2 w-full">
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 w-full">
              <div className="flex items-center gap-2 border bg-gray-100 py-1.5 px-4 rounded-2xl text-gray-600 text-sm w-full sm:w-auto dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
                <Mail size={14} /> mail.james@gmail.com
              </div>
              <div className="flex items-center gap-2 border bg-gray-100 py-1.5 px-4 rounded-2xl text-gray-600 text-sm w-full sm:w-auto dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
                <Phone size={14} /> +234 904 384 2019
              </div>
            </div>

            <div className="flex max-w-md items-center gap-2 border bg-gray-100 py-1.5 px-4 rounded-2xl text-gray-600 text-sm w-full justify-center sm:justify-start dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
              <MapPin size={14} /> 10 James Robertson, Surulere, Lagos, Nigeria.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
