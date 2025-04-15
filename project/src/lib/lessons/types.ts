export interface LessonContent {
  title: string;
  description: string;
  videoId?: string; // Optional YouTube video ID
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