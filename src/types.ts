export type ViewState = "AUTH" | "INTRO" | "QUESTIONNAIRE" | "RANKING" | "MODULE_SUMMARY" | "PROFILE" | "PHASES" | "PUBLIC_PROFILE";

export interface UserData {
  nick: string;
  score: number;
  completed: boolean;
  lastFeedback?: string;
  codigoVirtual?: string;
  tips?: Record<string, string>;
  currentPhase?: number;
  currentTask?: number;
}

export interface Question {
  id: string;
  text: string;
  type: "SCALE" | "MULTIPLE" | "BOOLEAN" | "OPEN";
  options?: { label: string; value: number; emoji?: string }[];
}

export interface Category {
  id: string;
  title: string;
  questions: Question[];
}

export interface RankingEntry {
  nick: string;
  score: number;
}
