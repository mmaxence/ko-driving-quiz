"use client";

import { AnimatePresence } from "motion/react";
import { useQuiz } from "@/hooks/useQuiz";
import HomeScreen from "@/components/HomeScreen";
import PracticeMode from "@/components/PracticeMode";
import ExamMode from "@/components/ExamMode";
import ResultsScreen from "@/components/ResultsScreen";

export default function Home() {
  const {
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
  } = useQuiz();

  return (
    <div className="max-w-lg mx-auto w-full bg-white min-h-screen">
      <AnimatePresence mode="wait">
        {state.screen === "home" && (
          <HomeScreen
            key="home"
            selectedCategory={state.selectedCategory}
            onSelectCategory={setCategory}
            onStart={startQuiz}
          />
        )}

        {state.screen === "quiz" && state.mode === "practice" && currentQuestion && (
          <PracticeMode
            key="practice"
            question={currentQuestion}
            currentIndex={state.currentIndex}
            totalQuestions={state.questions.length}
            progress={progress}
            selectedAnswer={state.selectedAnswer}
            showFeedback={state.showFeedback}
            streak={state.streak}
            xp={state.xp}
            score={state.score}
            onSelectAnswer={selectAnswer}
            onNext={nextQuestion}
            onHome={goHome}
          />
        )}

        {state.screen === "quiz" && state.mode === "exam" && currentQuestion && (
          <ExamMode
            key="exam"
            question={currentQuestion}
            currentIndex={state.currentIndex}
            totalQuestions={state.questions.length}
            progress={progress}
            selectedAnswer={state.selectedAnswer}
            timeRemaining={state.timeRemaining}
            answers={state.answers}
            onSelectAnswer={selectAnswer}
            onNext={nextQuestion}
            onPrev={prevQuestion}
            onGoToQuestion={goToQuestion}
            onSubmit={submitExam}
            onHome={goHome}
          />
        )}

        {state.screen === "results" && (
          <ResultsScreen
            key="results"
            mode={state.mode}
            score={state.score}
            totalQuestions={state.questions.length}
            examScore={examScore}
            passed={passed}
            xp={state.xp}
            bestStreak={state.bestStreak}
            onRetry={() => startQuiz(state.mode, state.selectedCategory)}
            onHome={goHome}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
