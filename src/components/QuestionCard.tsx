"use client";

import { motion, AnimatePresence } from "motion/react";
import { Question, QuizMode } from "@/types";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  showFeedback: boolean;
  mode: QuizMode;
  onSelectAnswer: (index: number) => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  showFeedback,
  mode,
  onSelectAnswer,
}: QuestionCardProps) {
  const getOptionStyle = (index: number) => {
    if (mode === "exam") {
      return selectedAnswer === index
        ? "border-blue-500 bg-blue-50 text-blue-700"
        : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50";
    }

    if (!showFeedback) {
      return "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 active:scale-[0.98]";
    }

    if (index === question.answer) {
      return "border-green-500 bg-green-50 text-green-700";
    }
    if (index === selectedAnswer && index !== question.answer) {
      return "border-red-500 bg-red-50 text-red-700";
    }
    return "border-gray-200 bg-gray-50 text-gray-400";
  };

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {question.category}
          </span>
          <span className="text-sm text-gray-400">
            {questionNumber} / {totalQuestions}
          </span>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mb-6 leading-relaxed">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => onSelectAnswer(index)}
              disabled={showFeedback}
              className={`w-full text-left p-4 rounded-xl border-2 transition-colors flex items-start gap-3 ${getOptionStyle(index)}`}
              whileTap={!showFeedback ? { scale: 0.98 } : {}}
              animate={
                showFeedback && index === selectedAnswer && index !== question.answer
                  ? { x: [0, -8, 8, -8, 8, 0] }
                  : showFeedback && index === question.answer
                    ? { scale: [1, 1.02, 1] }
                    : {}
              }
              transition={{ duration: 0.4 }}
            >
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                  showFeedback && index === question.answer
                    ? "bg-green-500 text-white"
                    : showFeedback && index === selectedAnswer
                      ? "bg-red-500 text-white"
                      : selectedAnswer === index && mode === "exam"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-600"
                }`}
              >
                {optionLabels[index]}
              </span>
              <span className="pt-0.5">{option}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
