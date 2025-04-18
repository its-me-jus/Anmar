export type Language = 
  | 'English' 
  | 'Spanish' 
  | 'Mandarin' 
  | 'Arabic'
  | 'Vietnamese'
  | 'Cantonese'
  | 'Punjabi'
  | 'Greek'
  | 'Italian'
  | 'Filipino'
  | 'Hindi';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty?: string;
  explanation?: string;
  feedback?: {
    correct?: string;
    incorrect?: string;
  };
}

export interface Character {
  id: string;
  name: string;
  description: string;
  theme: {
    primary: string;
    accent: string;
    background: string;
  };
  traits: string[];
}

export const characters: Character[] = [
  {
    id: 'visionary',
    name: 'The Visionary',
    description: 'A forward-thinking leader who drives innovation and change.',
    theme: {
      primary: 'from-blue-500 to-indigo-600',
      accent: 'text-blue-400',
      background: 'bg-blue-500/10'
    },
    traits: ['innovative', 'strategic', 'inspiring']
  },
  {
    id: 'achiever',
    name: 'The Achiever',
    description: 'A results-oriented professional who excels at meeting goals.',
    theme: {
      primary: 'from-emerald-500 to-green-600',
      accent: 'text-emerald-400',
      background: 'bg-emerald-500/10'
    },
    traits: ['determined', 'efficient', 'focused']
  },
  {
    id: 'explorer',
    name: 'The Explorer',
    description: 'A curious learner who seeks out new knowledge and experiences.',
    theme: {
      primary: 'from-purple-500 to-violet-600',
      accent: 'text-purple-400',
      background: 'bg-purple-500/10'
    },
    traits: ['curious', 'adaptable', 'open-minded']
  },
  {
    id: 'connector',
    name: 'The Connector',
    description: 'A relationship builder who excels at bringing people together.',
    theme: {
      primary: 'from-rose-500 to-pink-600',
      accent: 'text-rose-400',
      background: 'bg-rose-500/10'
    },
    traits: ['empathetic', 'collaborative', 'supportive']
  }
];

export type QuizState = 'HOME' | 'SIGNUP' | 'MODE_SELECT' | 'LANGUAGE' | 'QUIZ' | 'RESULTS' | 'LOCKED' | 'STORY' | 'END_STORY' | 'DIALOGUE' | 'LESSONS';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string;
  type: 'progress' | 'speed' | 'accuracy' | 'streak';
  progress?: number;
  maxProgress?: number;
}

export interface AIFeedback {
  score: number;
  strengths: string[];
  areasForImprovement: string[];
  recommendation: string;
  shouldRetry: boolean;
}

export interface QuestionBank {
  version: string;
  lastUpdated: string;
  languages: {
    [key in Language]?: {
      questions: Question[];
      metadata?: {
        totalQuestions: number;
        categories: string[];
        difficulties: Record<string, number>;
      };
    };
  };
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  language: Language;
  voiceLanguage?: Language;
  currentAttempt: number;
  answers: number[];
  sessionId: string;
  isStoryMode?: boolean;
  currentStoryId?: string;
  currentSceneIndex?: number;
  currentDialogueIndex?: number;
}

declare global {
  interface Window {
    GOOGLE_TRANSLATE_API_KEY?: string;
  }
}