"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { QuizState, QuizMode, Screen } from "@/types";
import { getRandomQuestionsByCategory } from "@/data/questions";

const PRACTICE_COUNT = 15;
const EXAM_COUNT = 40;
const EXAM_TIME = 50 * 60; // 50 minutes in seconds

const initialState: QuizState = {
  mode: "practice",
  screen: "home",
  questions: [],
  currentIndex: 0,
  answers: [],
  score: 0,
  streak: 0,
  bestStreak: 0,
  xp: 0,
  timeRemaining: EXAM_TIME,
  selectedAnswer: null,
  showFeedback: false,
  isComplete: false,
  selectedCategory: null,
};

export function useQuiz() {
  const [state, setState] = useState<QuizState>(initialState);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startQuiz = useCallback(
    (mode: QuizMode, category: string | null = null) => {
      const count = mode === "practice" ? PRACTICE_COUNT : EXAM_COUNT;
      const questions = getRandomQuestionsByCategory(category, count);
      setState({
        ...initialState,
        mode,
        screen: "quiz",
        questions,
        answers: new Array(questions.length).fill(null),
        timeRemaining: EXAM_TIME,
        selectedCategory: category,
      });
    },
    []
  );

  const selectAnswer = useCallback(
    (answerIndex: number) => {
      setState((prev) => {
        if (prev.showFeedback || prev.isComplete) return prev;
        if (prev.mode === "exam" && prev.answers[prev.currentIndex] !== null) {
          // In exam mode, allow changing answers
        }

        const newAnswers = [...prev.answers];
        newAnswers[prev.currentIndex] = answerIndex;

        if (prev.mode === "practice") {
          const isCorrect =
            answerIndex === prev.questions[prev.currentIndex].answer;
          const newStreak = isCorrect ? prev.streak + 1 : 0;
          const streakBonus = newStreak >= 3 ? 10 : 0;
          const xpGain = isCorrect ? 10 + streakBonus : 0;

          return {
            ...prev,
            answers: newAnswers,
            selectedAnswer: answerIndex,
            showFeedback: true,
            score: prev.score + (isCorrect ? 1 : 0),
            streak: newStreak,
            bestStreak: Math.max(prev.bestStreak, newStreak),
            xp: prev.xp + xpGain,
          };
        }

        // Exam mode: just store answer, no feedback
        return {
          ...prev,
          answers: newAnswers,
          selectedAnswer: answerIndex,
        };
      });
    },
    []
  );

  const nextQuestion = useCallback(() => {
    setState((prev) => {
      const nextIndex = prev.currentIndex + 1;
      if (nextIndex >= prev.questions.length) {
        return {
          ...prev,
          screen: "results",
          isComplete: true,
          showFeedback: false,
          selectedAnswer: null,
        };
      }
      return {
        ...prev,
        currentIndex: nextIndex,
        showFeedback: false,
        selectedAnswer: prev.mode === "exam" ? prev.answers[nextIndex] : null,
      };
    });
  }, []);

  const prevQuestion = useCallback(() => {
    setState((prev) => {
      if (prev.currentIndex <= 0) return prev;
      return {
        ...prev,
        currentIndex: prev.currentIndex - 1,
        selectedAnswer: prev.answers[prev.currentIndex - 1],
        showFeedback: false,
      };
    });
  }, []);

  const goToQuestion = useCallback((index: number) => {
    setState((prev) => ({
      ...prev,
      currentIndex: index,
      selectedAnswer: prev.answers[index],
      showFeedback: false,
    }));
  }, []);

  const submitExam = useCallback(() => {
    setState((prev) => {
      const score = prev.questions.reduce((acc, q, i) => {
        return acc + (prev.answers[i] === q.answer ? 1 : 0);
      }, 0);
      return {
        ...prev,
        score,
        screen: "results",
        isComplete: true,
      };
    });
  }, []);

  const goHome = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setState(initialState);
  }, []);

  const setCategory = useCallback((category: string | null) => {
    setState((prev) => ({ ...prev, selectedCategory: category }));
  }, []);

  // Timer for exam mode
  useEffect(() => {
    if (
      state.mode === "exam" &&
      state.screen === "quiz" &&
      !state.isComplete
    ) {
      timerRef.current = setInterval(() => {
        setState((prev) => {
          if (prev.timeRemaining <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            const score = prev.questions.reduce((acc, q, i) => {
              return acc + (prev.answers[i] === q.answer ? 1 : 0);
            }, 0);
            return {
              ...prev,
              timeRemaining: 0,
              score,
              screen: "results",
              isComplete: true,
            };
          }
          return { ...prev, timeRemaining: prev.timeRemaining - 1 };
        });
      }, 1000);

      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [state.mode, state.screen, state.isComplete]);

  const currentQuestion = state.questions[state.currentIndex] || null;
  const progress = state.questions.length
    ? ((state.currentIndex + (state.showFeedback ? 1 : 0)) /
        state.questions.length) *
      100
    : 0;
  const examScore = state.questions.length
    ? Math.round((state.score / state.questions.length) * 100)
    : 0;
  const passed = examScore >= 60;

  return {
    state,
    currentQuestion,
    progress,
    examScore,
    passed,
    startQuiz,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    submitExam,
    goHome,
    setCategory,
  };
}
