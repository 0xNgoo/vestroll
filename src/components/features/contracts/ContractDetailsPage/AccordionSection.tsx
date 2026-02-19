"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AccordionSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-800">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-medium dark:text-gray-200">{title}</h3>
        <ChevronDown
          size={20}
          className={`transition-transform ${open ? "rotate-180" : ""} dark:text-gray-400`}
        />
      </div>
      {open && (
        <div className=" p-4 text-sm dark:text-gray-300">{children}</div>
      )}
    </div>
  );
}
