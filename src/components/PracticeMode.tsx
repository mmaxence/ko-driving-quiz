"use client";

import { motion, AnimatePresence } from "motion/react";
import { Question } from "@/types";
import QuestionCard from "./QuestionCard";
import ProgressBar from "./ProgressBar";

interface PracticeModeProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  progress: number;
  selectedAnswer: number | null;
  showFeedback: boolean;
  streak: number;
  xp: number;
  score: number;
  onSelectAnswer: (index: number) => void;
  onNext: () => void;
  onHome: () => void;
}

export default function PracticeMode({
  question,
  currentIndex,
  totalQuestions,
  progress,
  selectedAnswer,
  showFeedback,
  streak,
  xp,
  score,
  onSelectAnswer,
  onNext,
  onHome,
}: PracticeModeProps) {
  const answered = currentIndex + (showFeedback ? 1 : 0);
  const wrong = answered - score;
  const currentPercent = answered > 0 ? Math.round((score / answered) * 100) : 0;
  const passingThreshold = 60;
  const isOnTrack = currentPercent >= passingThreshold;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen px-5 py-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={onHome}
          className="text-gray-400 hover:text-gray-600 text-sm font-medium"
        >
          ✕ 나가기
        </button>
        <div className="flex items-center gap-3">
          {/* XP */}
          <div className="text-sm font-bold text-blue-600">
            {xp} XP
          </div>
          {/* Streak */}
          <AnimatePresence>
            {streak >= 2 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-1"
              >
                <motion.span
                  animate={
                    streak >= 3
                      ? { scale: [1, 1.3, 1] }
                      : {}
                  }
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  className="text-lg"
                >
                  🔥
                </motion.span>
                <span className="text-sm font-bold text-orange-500">
                  {streak}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Bar */}
      <ProgressBar progress={progress} className="mb-3" />

      {/* Pass Threshold Tracker */}
      {answered > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="flex items-center justify-between text-xs mb-4 px-1"
        >
          <div className="flex items-center gap-2">
            <span className="text-green-600 font-semibold">{score}맞음</span>
            <span className="text-gray-300">/</span>
            <span className="text-red-500 font-semibold">{wrong}틀림</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div
              className={`w-2 h-2 rounded-full ${isOnTrack ? "bg-green-500" : "bg-red-400"}`}
            />
            <span className={`font-bold ${isOnTrack ? "text-green-600" : "text-red-500"}`}>
              {currentPercent}%
            </span>
            <span className="text-gray-400">/ 합격 {passingThreshold}%</span>
          </div>
        </motion.div>
      )}

      {/* XP Float Animation */}
      <div className="relative">
        <AnimatePresence>
          {showFeedback && selectedAnswer === question.answer && (
            <motion.div
              key={`xp-${currentIndex}`}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -40 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute -top-2 right-0 text-lg font-bold text-green-500 z-10"
            >
              +{streak >= 3 ? 20 : 10} XP
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Question */}
      <QuestionCard
        question={question}
        questionNumber={currentIndex + 1}
        totalQuestions={totalQuestions}
        selectedAnswer={selectedAnswer}
        showFeedback={showFeedback}
        mode="practice"
        onSelectAnswer={onSelectAnswer}
      />

      {/* Next Button */}
      <AnimatePresence>
        {showFeedback && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onClick={onNext}
            className="mt-6 w-full py-4 rounded-xl bg-blue-500 text-white font-bold text-lg hover:bg-blue-600 active:scale-[0.98] transition-transform"
          >
            {currentIndex + 1 >= totalQuestions ? "결과 보기" : "다음 문제"}
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
