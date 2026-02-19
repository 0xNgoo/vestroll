"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Clock,
  Calendar,
  NotebookPen,
  Palette,
  User,
  Wallet,
} from "lucide-react";

export default function ProjectDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm rounded-lg border p-4 md:p-6 dark:bg-gray-900 dark:border-gray-800">
      <div className="flex justify-between">
        <span className=" font-bold text-lg dark:text-gray-200">
          Project Details
        </span>
        <ChevronDown
          size={20}
          className={`transition-transform ${open ? "rotate-180" : ""} dark:text-gray-400`}
        />
      </div>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex gap-4 mt-6">
          <div className="bg-purple-100 hidden lg:block py-3 px-3 h-16 rounded-2xl dark:bg-purple-900/50">
            <NotebookPen
              size={35}
              className=" text-purple-800 font-normal dark:text-purple-300"
            />
          </div>
          <div>
            <h2 className="font-semibold text-lg dark:text-white">
              Insyder Website & Webapp Design
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mt-1 dark:text-gray-400">
              <span className="flex items-center gap-1 px-2 border border-gray-200 py-1 bg-gray-100 rounded-full dark:bg-gray-800 dark:border-gray-700">
                <Palette className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                UI/UX Designer
              </span>
              <span className="flex items-center gap-1 px-2 border border-gray-200 py-1 bg-gray-100 rounded-full dark:bg-gray-800 dark:border-gray-700">
                <User className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                Freelancer
              </span>
              <span className="flex items-center gap-1 px-2 border border-gray-200 py-1 bg-gray-100 rounded-full dark:bg-gray-800 dark:border-gray-700">
                <Wallet className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                Fixed rate
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-3 dark:text-gray-400">
              <div className="flex border border-gray-200 px-2 py-1 bg-gray-100 rounded-full items-center gap-1 dark:bg-gray-800 dark:border-gray-700">
                <Clock size={14} /> 14 days notice
              </div>
              <div className="flex border border-gray-200 px-2 py-1 bg-gray-100 rounded-full items-center gap-1 dark:bg-gray-800 dark:border-gray-700">
                <Calendar size={14} /> 25th Oct 22 - 28th Nov 22
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="mt-4 pt-3 text-sm text-gray-700 dark:text-gray-300">
          <span>Scope of work</span>
          <div className="bg-gray-100 p-3 rounded-xl mt-2 text-md font-bold dark:bg-gray-800">
            <p>
              Infrastructure Management: Manage and optimize cloud-based
              infrastructure, ensuring scalability and cost-effectiveness.
            </p>
            <p className="mt-2">
              CI/CD Pipeline Optimization: Expand pipelines to enable faster and
              more reliable deployments.
            </p>
            <p className="mt-2">
              Containerization: Implement Docker and Kubernetes for scalable
              systems.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
