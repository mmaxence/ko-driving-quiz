export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  answer: number;
  image?: string;
}

export type QuizMode = "practice" | "exam";

export type Screen = "home" | "quiz" | "results";

export interface QuizState {
  mode: QuizMode;
  screen: Screen;
  questions: Question[];
  currentIndex: number;
  answers: (number | null)[];
  score: number;
  streak: number;
  bestStreak: number;
  xp: number;
  timeRemaining: number;
  selectedAnswer: number | null;
  showFeedback: boolean;
  isComplete: boolean;
  selectedCategory: string | null;
}
