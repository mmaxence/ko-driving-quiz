"use client";

import { motion } from "motion/react";
import { QuizMode } from "@/types";
import { CATEGORIES } from "@/data/questions";

interface HomeScreenProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  onStart: (mode: QuizMode, category: string | null) => void;
}

export default function HomeScreen({
  selectedCategory,
  onSelectCategory,
  onStart,
}: HomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center px-5 py-8 min-h-screen"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-center mb-8"
      >
        <div className="text-5xl mb-3">🚗</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          운전면허 필기시험
        </h1>
        <p className="text-gray-500 text-sm">
          도로교통공단 문제은행으로 학습하세요
        </p>
      </motion.div>

      {/* Mode Cards */}
      <div className="w-full max-w-sm space-y-4 mb-8">
        <motion.button
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onStart("practice", selectedCategory)}
          className="w-full p-5 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white text-left shadow-lg shadow-blue-200"
        >
          <div className="text-2xl mb-2">📝</div>
          <div className="font-bold text-lg mb-1">연습 모드</div>
          <div className="text-blue-100 text-sm">
            15문제 · 즉시 피드백 · 스트릭 보너스
          </div>
        </motion.button>

        <motion.button
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onStart("exam", selectedCategory)}
          className="w-full p-5 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white text-left shadow-lg shadow-purple-200"
        >
          <div className="text-2xl mb-2">🎯</div>
          <div className="font-bold text-lg mb-1">모의시험 모드</div>
          <div className="text-purple-100 text-sm">
            40문제 · 50분 타이머 · 60점 합격
          </div>
        </motion.button>
      </div>

      {/* Category Filter */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-sm"
      >
        <h3 className="text-sm font-semibold text-gray-500 mb-3 text-center">
          카테고리 필터
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => onSelectCategory(null)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            전체
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
