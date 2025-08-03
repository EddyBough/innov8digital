"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "24+", label: "Projets web & apps mobiles livrées" },
  {
    value: "85%",
    label: "Temps gagné par nos clients grâce à l'automatisation",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  { value: "100%", label: "Clients satisfaits" },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {stats.map((stat, index) => (
        <motion.article
          key={index}
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
        >
          <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-800 mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3">
            {stat.value}
            {stat.icon}
          </div>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            {stat.label}
          </p>
        </motion.article>
      ))}
    </div>
  );
}
