export interface LessonContent {
  title: string;
  description: string;
  story: {
    scenario: string;
    challenge: string;
    insight: string;
  };
  keyPoints: string[];
  examples: {
    good: string;
    bad: string;
  }[];
  tips: string[];
}

export type LessonTranslations = Record<number, LessonContent>; 