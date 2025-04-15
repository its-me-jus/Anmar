import type { LessonContent } from './types';
import { englishLessons } from './languages/english';
import { arabicLessons } from './languages/arabic';
import { mandarinLessons } from './languages/mandarin';
import { spanishLessons } from './languages/spanish';
import { vietnameseLessons } from './languages/vietnamese';
import { cantoneseLessons } from './languages/cantonese';
import { punjabiLessons } from './languages/punjabi';
import { greekLessons } from './languages/greek';
import { italianLessons } from './languages/italian';
import { filipinoLessons } from './languages/filipino';
import { hindiLessons } from './languages/hindi';

// Export the individual language lessons directly
export {
  englishLessons,
  spanishLessons,
  mandarinLessons,
  arabicLessons,
  vietnameseLessons,
  cantoneseLessons,
  punjabiLessons,
  greekLessons,
  italianLessons,
  filipinoLessons,
  hindiLessons
};

// Languages we support directly
export type Language = 'English' | 'Spanish' | 'Mandarin' | 'Arabic' | 'Vietnamese' | 'Cantonese' | 'Punjabi' | 'Greek' | 'Italian' | 'Filipino' | 'Hindi';
export const SUPPORTED_LANGUAGES: Language[] = ['English', 'Spanish', 'Mandarin', 'Arabic', 'Vietnamese', 'Cantonese', 'Punjabi', 'Greek', 'Italian', 'Filipino', 'Hindi'];

// Cache for lesson content
export const lessonCache: Record<Language, Record<number, LessonContent>> = {
  English: englishLessons,
  Arabic: arabicLessons,
  Mandarin: mandarinLessons,
  Spanish: spanishLessons,
  Vietnamese: vietnameseLessons,
  Cantonese: cantoneseLessons,
  Punjabi: punjabiLessons,
  Greek: greekLessons,
  Italian: italianLessons,
  Filipino: filipinoLessons,
  Hindi: hindiLessons
};

/**
 * Gets lesson content for a specific question number in the specified language
 * Falls back to English if the language or lesson doesn't exist
 */
export function getLessonContent(questionNumber: number, language: Language = 'English'): LessonContent {
  const lessons = lessonCache[language];
  if (!lessons || !lessons[questionNumber]) {
    return lessonCache['English'][questionNumber] || {
      title: 'Lesson Not Found',
      description: 'This lesson is not available.',
      story: {
        scenario: '',
        challenge: '',
        insight: ''
      },
      keyPoints: [],
      examples: [],
      tips: []
    };
  }
  return lessons[questionNumber];
}

/**
 * Translates a specific piece of text (utility function)
 */
export function translateText(text: string, targetLanguage: Language): string {
  // TODO: Implement actual translation logic
  // For now, just return the original text
  return text;
} 