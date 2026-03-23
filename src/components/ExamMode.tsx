"use client";

import { motion } from "motion/react";
import { Question } from "@/types";
import QuestionCard from "./QuestionCard";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";

interface ExamModeProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  progress: number;
  selectedAnswer: number | null;
  timeRemaining: number;
  answers: (number | null)[];
  onSelectAnswer: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
  onGoToQuestion: (index: number) => void;
  onSubmit: () => void;
  onHome: () => void;
}

export default function ExamMode({
  question,
  currentIndex,
  totalQuestions,
  progress,
  selectedAnswer,
  timeRemaining,
  answers,
  onSelectAnswer,
  onNext,
  onPrev,
  onGoToQuestion,
  onSubmit,
  onHome,
}: ExamModeProps) {
  const answeredCount = answers.filter((a) => a !== null).length;

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
        <Timer timeRemaining={timeRemaining} />
      </div>

      {/* Progress */}
      <ProgressBar progress={progress} className="mb-4" />

      {/* Question Navigation Grid */}
      <div className="flex flex-wrap gap-1.5 mb-4 justify-center">
        {answers.map((ans, i) => (
          <button
            key={i}
            onClick={() => onGoToQuestion(i)}
            className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${
              i === currentIndex
                ? "bg-purple-500 text-white"
                : ans !== null
                  ? "bg-purple-100 text-purple-600"
                  : "bg-gray-100 text-gray-400"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Question */}
      <QuestionCard
        question={question}
        questionNumber={currentIndex + 1}
        totalQuestions={totalQuestions}
        selectedAnswer={selectedAnswer}
        showFeedback={false}
        mode="exam"
        onSelectAnswer={onSelectAnswer}
      />

      {/* Navigation */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          이전
        </button>
        {currentIndex + 1 < totalQuestions ? (
          <button
            onClick={onNext}
            className="flex-1 py-3 rounded-xl bg-purple-500 text-white font-medium hover:bg-purple-600"
          >
            다음
          </button>
        ) : (
          <button
            onClick={onSubmit}
            className="flex-1 py-3 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600"
          >
            제출하기 ({answeredCount}/{totalQuestions})
          </button>
        )}
      </div>

      {/* Submit anytime button */}
      {currentIndex + 1 < totalQuestions && (
        <button
          onClick={onSubmit}
          className="mt-3 w-full py-2 text-sm text-gray-400 hover:text-gray-600"
        >
          시험 제출하기 ({answeredCount}/{totalQuestions} 답변 완료)
        </button>
      )}
    </motion.div>
  );
}
