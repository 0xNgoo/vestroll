"use client";

import React from "react";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BalanceSectionProps {
  balance: string;
  change: string;
}

export function BalanceSection({ balance, change }: BalanceSectionProps) {
  const handleFundWallet = () => {
    console.log("Fund wallet clicked");
  };

  const handleWithdraw = () => {
    console.log("Withdraw clicked");
  };

  return (
    <div className="bg-white rounded-xl p-6 md:p-10 mb-4 text-center shadow-sm dark:bg-gray-900">
      <p className="text-[#64748B] text-xs md:text-sm mb-2 dark:text-gray-400">
        Total balance
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-2 dark:text-white">
        {balance}
      </h1>
      <p className="text-[#EF4444] text-sm mb-6">{change}</p>
      <div className="flex justify-center gap-3">
        <Button
          onClick={handleFundWallet}
          className="flex items-center gap-2 px-5 py-2 bg-[#F3EBF9] text-[#5A42DE] hover:bg-[#E5D5F3] rounded-lg font-medium h-auto dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50"
        >
          <ArrowDownLeft size={16} strokeWidth={2.5} />
          Fund wallet
        </Button>
        <Button
          onClick={handleWithdraw}
          className="flex items-center gap-2 px-5 py-2 bg-[#F3EBF9] text-[#5A42DE] hover:bg-[#E5D5F3] rounded-lg font-medium h-auto dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50"
        >
          <ArrowUpRight size={16} strokeWidth={2.5} />
          Withdraw
        </Button>
      </div>
    </div>
  );
}
