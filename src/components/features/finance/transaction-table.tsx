import React from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "./status-badge";
import { Transaction } from "@/types/finance.types";

interface TransactionTableProps {
  transactions: Transaction[];
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <div className="hidden md:block overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-100 hover:bg-transparent dark:border-gray-800">
            <TableHead className="w-12">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border border-gray-300 cursor-pointer appearance-none bg-transparent checked:appearance-auto dark:border-gray-600"
              />
            </TableHead>
            <TableHead className="text-[#64748B] font-semibold text-xs min-w-[120px] dark:text-gray-400">
              Transaction ID
            </TableHead>
            <TableHead className="text-[#64748B] font-semibold text-xs min-w-[200px] dark:text-gray-400">
              Description
            </TableHead>
            <TableHead className="text-[#64748B] font-semibold text-xs min-w-[100px] dark:text-gray-400">
              Amount
            </TableHead>
            <TableHead className="text-[#64748B] font-semibold text-xs min-w-[100px] dark:text-gray-400">
              Asset
            </TableHead>
            <TableHead className="text-[#64748B] font-semibold text-xs min-w-[120px] dark:text-gray-400">
              Status
            </TableHead>
            <TableHead className="text-[#64748B] font-semibold text-xs min-w-[140px] dark:text-gray-400">
              Timestamp
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow
              key={index}
              className="border-b border-gray-50 hover:bg-gray-50/50 dark:border-gray-800 dark:hover:bg-gray-800/50"
            >
              <TableCell className="py-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border border-gray-300 cursor-pointer appearance-none bg-transparent checked:appearance-auto dark:border-gray-600"
                />
              </TableCell>
              <TableCell className="font-mono text-[#0F172A] text-sm py-3 dark:text-white">
                {transaction.id}
              </TableCell>
              <TableCell className="text-[#475569] text-sm py-3 dark:text-gray-300">
                {transaction.description}
              </TableCell>
              <TableCell className="font-semibold text-[#0F172A] text-sm py-3 dark:text-white">
                {transaction.amount}
              </TableCell>
              <TableCell className="py-3">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <Image
                    src="/tether-icon.svg"
                    alt="USDT"
                    width={20}
                    height={20}
                    className="object-contain shrink-0"
                  />
                  <span className="text-[#0F172A] text-sm dark:text-white">
                    {transaction.asset}
                  </span>
                </div>
              </TableCell>
              <TableCell className="py-3">
                <StatusBadge status={transaction.status} />
              </TableCell>
              <TableCell className="text-[#64748B] text-sm py-3 whitespace-nowrap dark:text-gray-400">
                {transaction.timestamp}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
