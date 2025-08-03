"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  delay?: number;
}

export function StatCard({ value, label, icon, delay = 0 }: StatCardProps) {
  return (
    <motion.article
      className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-600 mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3">
        {value}
        {icon}
      </div>
      <p className="text-gray-600 text-sm sm:text-base lg:text-lg">{label}</p>
    </motion.article>
  );
}
