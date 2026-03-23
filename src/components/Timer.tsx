"use client";

import { motion } from "motion/react";

interface TimerProps {
  timeRemaining: number;
}

export default function Timer({ timeRemaining }: TimerProps) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const isLow = timeRemaining < 300; // under 5 minutes

  return (
    <motion.div
      className={`font-mono text-lg font-bold px-4 py-2 rounded-xl ${
        isLow ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-700"
      }`}
      animate={isLow ? { scale: [1, 1.05, 1] } : {}}
      transition={isLow ? { repeat: Infinity, duration: 1 } : {}}
    >
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </motion.div>
  );
}
