"use client";

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";

interface ScoreCircleProps {
  score: number;
  total: number;
  passed?: boolean;
}

export default function ScoreCircle({ score, total, passed }: ScoreCircleProps) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const circumference = 2 * Math.PI * 54; // radius = 54
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(count, percentage, {
      duration: 1.5,
      ease: "easeOut",
    });
    return controls.stop;
  }, [count, percentage]);

  const color =
    percentage >= 80
      ? "#22c55e"
      : percentage >= 60
        ? "#3b82f6"
        : "#ef4444";

  return (
    <div className="relative flex items-center justify-center">
      <svg width="140" height="140" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="8"
        />
        <motion.circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <motion.span
          className="text-3xl font-bold"
          style={{ color }}
        >
          {rounded}
        </motion.span>
        <span className="text-sm text-gray-500">/ 100점</span>
      </div>
      {passed !== undefined && (
        <motion.div
          className={`absolute -bottom-2 px-3 py-1 rounded-full text-sm font-bold text-white ${
            passed ? "bg-green-500" : "bg-red-500"
          }`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        >
          {passed ? "합격" : "불합격"}
        </motion.div>
      )}
    </div>
  );
}
