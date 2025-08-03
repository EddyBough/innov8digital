"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
}

export function AnimatedText({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  y = 20,
  x = 0,
}: AnimatedTextProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
