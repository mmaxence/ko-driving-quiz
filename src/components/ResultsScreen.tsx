"use client";

import { motion } from "motion/react";
import { QuizMode } from "@/types";
import ScoreCircle from "./ScoreCircle";
import Confetti from "./Confetti";

interface ResultsScreenProps {
  mode: QuizMode;
  score: number;
  totalQuestions: number;
  examScore: number;
  passed: boolean;
  xp: number;
  bestStreak: number;
  onRetry: () => void;
  onHome: () => void;
}

export default function ResultsScreen({
  mode,
  score,
  totalQuestions,
  examScore,
  passed,
  xp,
  bestStreak,
  onRetry,
  onHome,
}: ResultsScreenProps) {
  const showConfetti = mode === "practice" ? examScore >= 80 : passed;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-5 py-8"
    >
      {showConfetti && <Confetti />}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="text-center"
      >
        <div className="text-4xl mb-4">
          {examScore >= 80 ? "🎉" : examScore >= 60 ? "👍" : "💪"}
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-6">
          {mode === "exam"
            ? passed
              ? "축하합니다! 합격!"
              : "아쉽지만 불합격..."
            : examScore >= 80
              ? "훌륭합니다!"
              : examScore >= 60
                ? "잘했습니다!"
                : "더 연습해봐요!"}
        </h2>
      </motion.div>

      <ScoreCircle
        score={score}
        total={totalQuestions}
        passed={mode === "exam" ? passed : undefined}
      />

      {/* Stats */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 w-full max-w-xs"
      >
        <div className="bg-gray-50 rounded-2xl p-5 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">정답</span>
            <span className="font-bold text-gray-900">
              {score} / {totalQuestions}
            </span>
          </div>
          {mode === "practice" && (
            <>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">획득 XP</span>
                <span className="font-bold text-blue-600">{xp} XP</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">최고 스트릭</span>
                <span className="font-bold text-orange-500">
                  🔥 {bestStreak}
                </span>
              </div>
            </>
          )}
          {mode === "exam" && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">합격 기준</span>
              <span className="font-bold text-gray-900">60점 이상</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-6 w-full max-w-xs space-y-3"
      >
        <button
          onClick={onRetry}
          className="w-full py-4 rounded-xl bg-blue-500 text-white font-bold text-lg hover:bg-blue-600 active:scale-[0.98] transition-transform"
        >
          다시 하기
        </button>
        <button
          onClick={onHome}
          className="w-full py-4 rounded-xl border-2 border-gray-200 text-gray-600 font-bold text-lg hover:bg-gray-50 active:scale-[0.98] transition-transform"
        >
          홈으로
        </button>
      </motion.div>
    </motion.div>
  );
}
