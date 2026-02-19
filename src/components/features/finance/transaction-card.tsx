import React from "react";
import Image from "next/image";
import { StatusBadge } from "./status-badge";
import { Transaction } from "@/types/finance.types";

interface TransactionCardProps {
  transaction: Transaction;
}

export function TransactionCard({ transaction }: TransactionCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100 mb-3 shadow-sm dark:bg-gray-900 dark:border-gray-800">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 pr-3">
          <p className="text-sm font-medium text-[#0F172A] mb-1 line-clamp-2 dark:text-white">
            {transaction.description}
          </p>
          <p className="text-xs text-[#64748B] font-mono dark:text-gray-400">
            {transaction.id}
          </p>
        </div>
        <StatusBadge status={transaction.status} />
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-[#0F172A] text-sm dark:text-white">
            {transaction.amount}
          </span>
          <div className="flex items-center gap-1.5">
            <Image
              src="/tether-icon.svg"
              alt="USDT"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-xs text-[#64748B] dark:text-gray-400">
              {transaction.asset}
            </span>
          </div>
        </div>
        <span className="text-xs text-[#94A3B8] dark:text-gray-500">
          {transaction.timestamp}
        </span>
      </div>
    </div>
  );
}
