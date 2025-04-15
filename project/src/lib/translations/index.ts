import type { Language, Question, QuestionBank } from '../../types';

// Example structure for manual translations
// You can replace these with actual translations
export const translations: Record<Language, Record<string, string>> = {
  English: {}, // English is our base language, no translations needed
  Mandarin: {
    // Example translation mapping
    "What is the first step in workplace safety?": "工作场所安全的第一步是什么？",
    "Identify hazards": "识别危险",
    "Call supervisor": "打电话给主管",
    "Start working": "开始工作"
    // Add more translations as needed
  },
  Arabic: {
    // Add Arabic translations
  },
  Vietnamese: {
    // Add Vietnamese translations
  },
  Cantonese: {
    // Add Cantonese translations
  },
  Punjabi: {
    // Add Punjabi translations
  },
  Greek: {
    // Add Greek translations
  },
  Italian: {
    // Add Italian translations
  },
  Filipino: {
    // Add Filipino translations
  },
  Hindi: {
    // Add Hindi translations
  }
};

export function translateText(text: string, targetLanguage: Language): string {
  if (targetLanguage === 'English') {
    return text;
  }

  return translations[targetLanguage][text] || text;
}

export function translateQuestion(question: Question, targetLanguage: Language): Question {
  if (targetLanguage === 'English') {
    return question;
  }

  return {
    ...question,
    question: translateText(question.question, targetLanguage),
    options: question.options.map(option => translateText(option, targetLanguage)),
    explanation: question.explanation 
      ? translateText(question.explanation, targetLanguage)
      : undefined,
    feedback: question.feedback ? {
      correct: question.feedback.correct 
        ? translateText(question.feedback.correct, targetLanguage)
        : undefined,
      incorrect: question.feedback.incorrect
        ? translateText(question.feedback.incorrect, targetLanguage)
        : undefined
    } : undefined
  };
}

export function translateQuestionSet(questions: Question[], targetLanguage: Language): Question[] {
  if (targetLanguage === 'English') {
    return questions;
  }

  return questions.map(q => translateQuestion(q, targetLanguage));
} 