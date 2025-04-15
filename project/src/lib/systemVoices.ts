import type { Language } from '../types';

export interface SystemVoice {
  id: string;
  text: string;
  file: string;
}

export const systemVoices: Record<Language, SystemVoice[]> = {
  English: [
    {
      id: 'welcome',
      text: "Welcome to your workplace training! I'll be your virtual instructor today. Let's make this learning experience engaging and informative.",
      file: "audio/system/en/welcome.mp3"
    },
    {
      id: 'start_quiz',
      text: "Great! Let's begin the quiz. I'll read each question and its options to you. Take your time to think about your answers.",
      file: "audio/system/en/start_quiz.mp3"
    },
    {
      id: 'next_question',
      text: "Moving on to the next question...",
      file: "audio/system/en/next_question.mp3"
    },
    {
      id: 'correct_answer',
      text: "Excellent work! That's the correct answer.",
      file: "audio/system/en/correct.mp3"
    },
    {
      id: 'incorrect_answer',
      text: "Not quite right, but don't worry! Let me explain why...",
      file: "audio/system/en/incorrect.mp3"
    },
    {
      id: 'quiz_complete',
      text: "Congratulations! You've completed the quiz. Let's review your results together.",
      file: "audio/system/en/complete.mp3"
    },
    {
      id: 'language_fallback',
      text: "I'm still learning to speak that language fluently, but I'll do my best to help you in English!",
      file: "audio/system/en/language_fallback.mp3"
    }
  ],
  // Add other languages as needed
  Arabic: [],
  Mandarin: [],
  Spanish: [],
  Vietnamese: [],
  Cantonese: [],
  Punjabi: [],
  Greek: [],
  Italian: [],
  Filipino: [],
  Hindi: []
};