import type { Language, Question, QuestionBank } from '../../types';
// Import language-specific question sets
import { mandarinQuestions } from './languages/mandarin';
import { spanishQuestions } from './languages/spanish';
import { arabicQuestions } from './languages/arabic';
import { vietnameseQuestions } from './languages/vietnamese';
import { cantoneseQuestions } from './languages/cantonese';
import { punjabiQuestions } from './languages/punjabi';
import { greekQuestions } from './languages/greek';
import { italianQuestions } from './languages/italian';
import { filipinoQuestions } from './languages/filipino';
import { hindiQuestions } from './languages/hindi';

// Export the individual language question sets directly
export {
  mandarinQuestions,
  spanishQuestions,
  arabicQuestions,
  vietnameseQuestions,
  cantoneseQuestions,
  punjabiQuestions,
  greekQuestions,
  italianQuestions,
  filipinoQuestions,
  hindiQuestions
};

export interface QuestionSet {
  language: string;
  questions: Question[];
  metadata?: {
    totalQuestions: number;
    categories: string[];
    difficulties: Record<string, number>;
  };
}

// Base English questions for our application - exactly 20 questions
export const englishQuestions: Question[] = [
  {
    id: 1,
    text: "What is sexual harassment in the workplace?",
    options: [
      "Any unwanted conduct of a sexual nature that violates dignity or creates an intimidating, hostile, degrading, humiliating, or offensive environment.",
      "Only physical touching of a sexual nature.",
      "Friendly compliments between colleagues."
    ],
    correctAnswer: 0,
    category: "harassment",
    difficulty: "medium",
    explanation: "Sexual harassment includes any unwanted conduct of a sexual nature that creates an intimidating, hostile, degrading, humiliating, or offensive environment.",
    feedback: {
      correct: "Correct! Understanding what constitutes sexual harassment is fundamental to maintaining a safe workplace.",
      incorrect: "Sexual harassment includes any unwanted conduct of a sexual nature that creates an intimidating, hostile environment."
    }
  },
  {
    id: 2,
    text: "Which of the following is an example of 'Quid Pro Quo' sexual harassment?",
    options: [
      "A manager offering a promotion in exchange for sexual favours.",
      "Co-workers frequently telling dirty jokes that make someone uncomfortable.",
      "Displaying a calendar with inappropriate images in the office."
    ],
    correctAnswer: 0,
    category: "harassment",
    difficulty: "medium",
    explanation: "Quid Pro Quo harassment occurs when job benefits are contingent on sexual favors.",
    feedback: {
      correct: "Correct! This is a classic example of quid pro quo harassment, where employment benefits are tied to sexual favors.",
      incorrect: "Quid Pro Quo harassment specifically involves conditioning employment benefits on sexual favors."
    }
  },
  {
    id: 3,
    text: "What constitutes a 'Hostile Work Environment' due to sexual harassment?",
    options: [
      "A single, minor offensive comment.",
      "Severe or pervasive sexually charged conduct that unreasonably interferes with an individual's work performance or creates an intimidating environment.",
      "Having a disagreement with a supervisor about work tasks."
    ],
    correctAnswer: 1,
    category: "harassment",
    difficulty: "hard",
    explanation: "A hostile work environment involves severe or pervasive conduct that creates an intimidating, offensive atmosphere.",
    feedback: {
      correct: "Correct! A hostile work environment requires conduct that is either severe or pervasive enough to create an intimidating environment.",
      incorrect: "A hostile work environment is characterized by severe or pervasive conduct that creates an intimidating atmosphere."
    }
  },
  {
    id: 4,
    text: "Is repeatedly asking a colleague for a date, despite them declining each time, considered potential sexual harassment?",
    options: [
      "No, it's just showing persistence.",
      "Yes, repeated unwelcome advances can constitute harassment.",
      "Only if the person asking is a manager."
    ],
    correctAnswer: 1,
    category: "harassment",
    difficulty: "medium",
    explanation: "Persistent unwelcome romantic or sexual advances can constitute harassment, regardless of the intent.",
    feedback: {
      correct: "Correct! Continuing to pursue someone romantically after they've declined is unwelcome conduct that can constitute harassment.",
      incorrect: "Persistence in romantic pursuits after rejection is not appropriate and can constitute harassment."
    }
  },
  {
    id: 5,
    text: "Which of these actions is a form of physical sexual harassment?",
    options: [
      "A consensual hug between friends at work.",
      "Unwanted touching, brushing against someone, or blocking their path.",
      "A firm handshake during an introduction."
    ],
    correctAnswer: 1,
    category: "harassment",
    difficulty: "medium",
    explanation: "Physical sexual harassment includes any unwanted physical contact of a sexual nature.",
    feedback: {
      correct: "Correct! Unwanted physical contact or deliberate physical interference constitutes physical sexual harassment.",
      incorrect: "Physical sexual harassment involves unwanted touching or deliberate physical interference with someone."
    }
  },
  {
    id: 6,
    text: "Can displaying sexually explicit posters or sending emails with suggestive content contribute to sexual harassment?",
    options: [
      "Yes, this can be considered visual harassment and contribute to a hostile work environment.",
      "No, as long as it's not directed at one specific person.",
      "Only if the images are illegal."
    ],
    correctAnswer: 0,
    category: "harassment",
    difficulty: "medium",
    explanation: "Visual materials with sexual content can create a hostile work environment and constitute harassment.",
    feedback: {
      correct: "Correct! Visual materials with sexual content can create a hostile environment even if not directed at a specific person.",
      incorrect: "Visual sexual content can create a hostile environment regardless of whether it targets a specific individual."
    }
  },
  {
    id: 7,
    text: "If someone says their behaviour was 'just a joke,' can it still be considered sexual harassment?",
    options: [
      "No, if the intent was humour, it's not harassment.",
      "Yes, the impact of the behaviour on the recipient is key, regardless of intent.",
      "Only if the joke was told by a manager."
    ],
    correctAnswer: 1,
    category: "harassment",
    difficulty: "medium",
    explanation: "Intent doesn't determine harassment - the impact and how a reasonable person would perceive it are what matter.",
    feedback: {
      correct: "Correct! The impact of the behavior, not the intent, determines whether it constitutes harassment.",
      incorrect: "Even if someone claims something was 'just a joke,' the impact on recipients is what matters in determining harassment."
    }
  },
  {
    id: 8,
    text: "What should you do if a colleague's comments or jokes of a sexual nature make you uncomfortable?",
    options: [
      "Laugh along so you don't seem difficult.",
      "Ignore it and hope it stops on its own.",
      "Clearly state the behaviour is unwelcome, and if it continues, consider reporting it according to company policy."
    ],
    correctAnswer: 2,
    category: "policy",
    difficulty: "easy",
    explanation: "The best approach is to clearly communicate boundaries and follow reporting procedures if the behavior continues.",
    feedback: {
      correct: "Correct! Clearly communicating that behavior is unwelcome and reporting if necessary are appropriate steps.",
      incorrect: "When uncomfortable with comments or jokes, it's best to clearly state they're unwelcome and report if they continue."
    }
  },
  {
    id: 9,
    text: "If you witness behaviour you believe could be sexual harassment directed at a colleague, what is a responsible action to take?",
    options: [
      "Confront the harasser aggressively in public.",
      "Ignore it, as it's not your business.",
      "Offer support to the targeted colleague and/or report the incident according to company procedures, if appropriate."
    ],
    correctAnswer: 2,
    category: "policy",
    difficulty: "medium",
    explanation: "Bystanders play an important role in preventing harassment by supporting targets and reporting incidents.",
    feedback: {
      correct: "Correct! Supporting colleagues and reporting through proper channels helps create a safer workplace.",
      incorrect: "As a witness to potential harassment, supporting the target and reporting through appropriate channels is the responsible approach."
    }
  },
  {
    id: 10,
    text: "Where can employees typically find the company's specific policy and reporting procedures for sexual harassment?",
    options: [
      "It's usually unwritten common knowledge.",
      "In the employee handbook, company intranet, or from the HR department.",
      "Only supervisors have access to this information."
    ],
    correctAnswer: 1,
    category: "policy",
    difficulty: "easy",
    explanation: "Companies typically document harassment policies in employee handbooks and company intranets.",
    feedback: {
      correct: "Correct! Policies and procedures are typically documented in employee resources and available from HR.",
      incorrect: "Harassment policies are typically documented in employee handbooks, the company intranet, or available from HR."
    }
  },
  {
    id: 11,
    text: "What is retaliation in the context of reporting sexual harassment?",
    options: [
      "Thanking someone for bringing an issue forward.",
      "Taking adverse action (like demotion, firing, exclusion) against someone for reporting harassment or participating in an investigation.",
      "Conducting a fair and impartial investigation."
    ],
    correctAnswer: 1,
    category: "policy",
    difficulty: "hard",
    explanation: "Retaliation involves taking negative action against someone for reporting harassment or participating in an investigation.",
    feedback: {
      correct: "Correct! Retaliation is any adverse action taken against someone for reporting harassment or participating in an investigation.",
      incorrect: "Retaliation refers to negative actions taken against someone for reporting harassment or participating in investigations."
    }
  },
  {
    id: 12,
    text: "Can sexual harassment occur through digital means like email, work chat platforms, or social media?",
    options: [
      "No, harassment only happens face-to-face.",
      "Yes, unwelcome sexual conduct through electronic means is also harassment.",
      "Only if company devices are used."
    ],
    correctAnswer: 1,
    category: "harassment",
    difficulty: "medium",
    explanation: "Sexual harassment can occur through any medium, including digital and electronic communications.",
    feedback: {
      correct: "Correct! Harassment can occur through any form of communication, including digital platforms.",
      incorrect: "Sexual harassment can occur through any communication medium, including digital platforms like email and chat."
    }
  },
  {
    id: 13,
    text: "Is consent required for physical contact (like hugs or touching shoulders) between colleagues in the workplace?",
    options: [
      "No, friendly gestures are always acceptable.",
      "Yes, consent should not be assumed, and personal boundaries must be respected.",
      "Consent is only needed for explicitly romantic or sexual contact."
    ],
    correctAnswer: 1,
    category: "respect",
    difficulty: "medium",
    explanation: "Consent should not be assumed for any physical contact, and personal boundaries must be respected.",
    feedback: {
      correct: "Correct! Consent should never be assumed for physical contact, and everyone's personal boundaries must be respected.",
      incorrect: "Even for seemingly friendly physical contact, consent should not be assumed and personal boundaries must be respected."
    }
  },
  {
    id: 14,
    text: "How might power dynamics (e.g., a manager and a subordinate) influence situations involving potential sexual harassment?",
    options: [
      "Power dynamics make no difference in defining harassment.",
      "A person in a subordinate position may feel less able to refuse advances or report unwelcome behaviour due to fear of reprisal.",
      "Only managers can be harassers."
    ],
    correctAnswer: 1,
    category: "harassment",
    difficulty: "hard",
    explanation: "Power imbalances can make it difficult for subordinates to refuse advances or report harassment due to fear of consequences.",
    feedback: {
      correct: "Correct! Power imbalances can create situations where subordinates feel unable to refuse or report harassment.",
      incorrect: "Power dynamics are significant because subordinates may fear reprisal if they refuse advances or report harassment."
    }
  },
  {
    id: 15,
    text: "Is a company potentially liable if an employee is sexually harassed by a third party, such as a client or customer?",
    options: [
      "No, the company is only responsible for the conduct of its employees.",
      "Yes, if the company knew or should have known about the harassment and failed to take appropriate corrective action.",
      "Only if the harassment happens on company property."
    ],
    correctAnswer: 1,
    category: "policy",
    difficulty: "hard",
    explanation: "Companies can be liable for third-party harassment if they knew or should have known about it and failed to take action.",
    feedback: {
      correct: "Correct! Companies have a duty to protect employees from harassment, even by third parties, once they're aware of it.",
      incorrect: "Companies can be liable for third-party harassment if they knew about it and failed to take appropriate action."
    }
  },
  {
    id: 16,
    text: "Who holds the primary responsibility for preventing sexual harassment and fostering a respectful workplace culture?",
    options: [
      "Only the Human Resources department.",
      "Only senior management.",
      "Everyone, including management, HR, and all employees."
    ],
    correctAnswer: 2,
    category: "policy",
    difficulty: "easy",
    explanation: "Creating a harassment-free workplace is everyone's responsibility, though management has additional obligations.",
    feedback: {
      correct: "Correct! Everyone in an organization shares responsibility for maintaining a respectful workplace.",
      incorrect: "Preventing harassment and fostering respect is a shared responsibility that includes everyone in the organization."
    }
  },
  {
    id: 17,
    text: "If someone initially consented to a romantic relationship with a colleague but later withdraws consent, must that withdrawal be respected?",
    options: [
      "No, consent cannot be withdrawn once given.",
      "Yes, consent must be ongoing and can be withdrawn at any time. Continuing advances after withdrawal can be harassment.",
      "Only if the relationship was officially declared to HR."
    ],
    correctAnswer: 1,
    category: "respect",
    difficulty: "medium",
    explanation: "Consent must be ongoing and can be withdrawn at any time. Continuing advances after withdrawal can constitute harassment.",
    feedback: {
      correct: "Correct! Consent can be withdrawn at any time, and continuing advances after withdrawal can be harassment.",
      incorrect: "Consent is not permanent - it can be withdrawn at any time, and continuing advances after withdrawal can constitute harassment."
    }
  },
  {
    id: 18,
    text: "Which of the following is NOT typically considered sexual harassment?",
    options: [
      "Making offensive comments about someone's gender identity or sexual orientation.",
      "Providing constructive feedback on work performance in a professional manner.",
      "Staring or leering at someone in a sexually suggestive way."
    ],
    correctAnswer: 1,
    category: "harassment",
    difficulty: "medium",
    explanation: "Professional feedback on work performance, when delivered appropriately, is not harassment.",
    feedback: {
      correct: "Correct! Professional, work-related feedback is not harassment when delivered appropriately.",
      incorrect: "Professional feedback on work performance is a normal part of the workplace and not harassment when delivered appropriately."
    }
  },
  {
    id: 19,
    text: "When an employee reports sexual harassment, what should they generally expect from the company?",
    options: [
      "Immediate dismissal of the accused person without investigation.",
      "To be told to handle it themselves quietly.",
      "A prompt, confidential (as possible), and impartial investigation, and protection from retaliation."
    ],
    correctAnswer: 2,
    category: "policy",
    difficulty: "medium",
    explanation: "Companies should respond to harassment reports with prompt, confidential investigations and protect reporters from retaliation.",
    feedback: {
      correct: "Correct! Employees should expect a fair investigation and protection from retaliation when reporting harassment.",
      incorrect: "Companies should respond to harassment reports with thorough investigations and protect reporters from retaliation."
    }
  },
  {
    id: 20,
    text: "Can a single, severe incident (like a sexual assault) be enough to constitute sexual harassment?",
    options: [
      "No, harassment always requires repeated incidents.",
      "Yes, a single severe incident can absolutely be considered sexual harassment and potentially illegal.",
      "Only if there were witnesses to the incident."
    ],
    correctAnswer: 1,
    category: "harassment",
    difficulty: "medium",
    explanation: "A single incident, if severe enough, can constitute sexual harassment - multiple incidents are not always required.",
    feedback: {
      correct: "Correct! A single severe incident can absolutely constitute sexual harassment.",
      incorrect: "Sexual harassment does not require multiple incidents - a single severe incident can be sufficient."
    }
  }
];

// List of supported languages
const SUPPORTED_LANGUAGES = ['English', 'Spanish', 'Mandarin', 'Arabic', 'Vietnamese', 
                           'Cantonese', 'Punjabi', 'Greek', 'Italian', 'Filipino', 'Hindi'];

// Define a simple version of the translation function that just returns the original text
// In a real implementation, you would use a proper translation system
function simpleTranslate(text: string, language: Language): string {
  return text; // This is a fallback that returns the original text
}

// Function to translate questions for languages without explicit question sets
// This version returns a Promise to be compatible with the Quiz component
export function translateQuestionSet(questions: Question[], targetLanguage: Language): Promise<Question[]> {
  return Promise.resolve(questions.map(q => ({
    ...q,
    text: simpleTranslate(q.text, targetLanguage),
    options: q.options.map(option => simpleTranslate(option, targetLanguage)),
    explanation: q.explanation ? simpleTranslate(q.explanation, targetLanguage) : undefined,
    feedback: q.feedback ? {
      correct: q.feedback.correct ? simpleTranslate(q.feedback.correct, targetLanguage) : undefined,
      incorrect: q.feedback.incorrect ? simpleTranslate(q.feedback.incorrect, targetLanguage) : undefined
    } : undefined
  })));
}

// Updated code to access .questions property correctly
export const questionCache: QuestionBank = {
  version: '2.0.0',
  lastUpdated: '2024-03-29',
  languages: {
    English: {
      questions: englishQuestions,
      metadata: {
        totalQuestions: englishQuestions.length,
        categories: Array.from(new Set(englishQuestions.map(q => q.category))),
        difficulties: englishQuestions.reduce((acc: Record<string, number>, q) => {
          if (q.difficulty) {
            acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
          }
          return acc;
        }, {})
      }
    },
    Mandarin: {
      questions: mandarinQuestions.questions,
      metadata: {
        totalQuestions: mandarinQuestions.questions.length,
        categories: Array.from(new Set(mandarinQuestions.questions.map(q => q.category))),
        difficulties: mandarinQuestions.questions.reduce((acc: Record<string, number>, q) => {
          if (q.difficulty) {
            acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
          }
          return acc;
        }, {})
      }
    },
    Spanish: {
      questions: spanishQuestions.questions,
      metadata: {
        totalQuestions: spanishQuestions.questions.length,
        categories: Array.from(new Set(spanishQuestions.questions.map(q => q.category))),
        difficulties: spanishQuestions.questions.reduce((acc: Record<string, number>, q) => {
          if (q.difficulty) {
            acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
          }
          return acc;
        }, {})
      }
    },
    Arabic: {
      questions: arabicQuestions.questions,
      metadata: {
        totalQuestions: arabicQuestions.questions.length,
        categories: Array.from(new Set(arabicQuestions.questions.map(q => q.category))),
        difficulties: arabicQuestions.questions.reduce((acc: Record<string, number>, q) => {
          if (q.difficulty) {
            acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
          }
          return acc;
        }, {})
      }
    },
    Vietnamese: {
      questions: vietnameseQuestions.questions,
      metadata: {
        totalQuestions: vietnameseQuestions.questions.length,
        categories: Array.from(new Set(vietnameseQuestions.questions.map(q => q.category))),
        difficulties: vietnameseQuestions.questions.reduce((acc: Record<string, number>, q) => {
          if (q.difficulty) {
            acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
          }
          return acc;
        }, {})
      }
    },
    Cantonese: {
      questions: cantoneseQuestions.questions,
      metadata: {
        totalQuestions: cantoneseQuestions.questions.length,
        categories: Array.from(new Set(cantoneseQuestions.questions.map(q => q.category))),
        difficulties: cantoneseQuestions.questions.reduce((acc: Record<string, number>, q) => {
          if (q.difficulty) {
            acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
          }
          return acc;
        }, {})
      }
    },
    Punjabi: {
      questions: punjabiQuestions.questions,
      metadata: {
        totalQuestions: punjabiQuestions.questions.length,
        categories: Array.from(new Set(punjabiQuestions.questions.map(q => q.category))),
        difficulties: punjabiQuestions.questions.reduce((acc: Record<string, number>, q) => {
          if (q.difficulty) {
            acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
          }
          return acc;
        }, {})
      }
    },
    Greek: {
      questions: greekQuestions.questions,
      metadata: {
        totalQuestions: greekQuestions.questions.length,
        categories: Array.from(new Set(greekQuestions.questions.map(q => q.category))),
        difficulties: greekQuestions.questions.reduce((acc: Record<string, number>, q) => {
          if (q.difficulty) {
            acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
          }
          return acc;
        }, {})
      }
    },
    Italian: {
      questions: italianQuestions.questions,
      metadata: {
        totalQuestions: italianQuestions.questions.length,
        categories: Array.from(new Set(italianQuestions.questions.map(q => q.category))),
        difficulties: italianQuestions.questions.reduce((acc: Record<string, number>, q) => {
          if (q.difficulty) {
            acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
          }
          return acc;
        }, {})
      }
    },
    Filipino: {
      questions: filipinoQuestions.questions,
      metadata: filipinoQuestions.metadata
    },
    Hindi: {
      questions: hindiQuestions.questions,
      metadata: hindiQuestions.metadata
    }
  }
};

export function getQuestionsSync(language: string = 'English'): Question[] {
  // If the language is valid and we have questions cached for it, return them
  if (language in questionCache.languages && questionCache.languages[language as Language]?.questions) {
    return questionCache.languages[language as Language]!.questions;
  }

  // If the language is valid but we don't have specific questions for it,
  // try to get questions from the imported language-specific question sets
  if (SUPPORTED_LANGUAGES.includes(language)) {
    switch (language) {
      case 'Mandarin':
        return mandarinQuestions.questions;
      case 'Spanish':
        return spanishQuestions.questions;
      case 'Arabic':
        return arabicQuestions.questions;
      case 'Vietnamese':
        return vietnameseQuestions.questions;
      case 'Cantonese':
        return cantoneseQuestions.questions;
      case 'Punjabi':
        return punjabiQuestions.questions;
      case 'Greek':
        return greekQuestions.questions;
      case 'Italian':
        return italianQuestions.questions;
      case 'Filipino':
        return filipinoQuestions.questions;
      case 'Hindi':
        return hindiQuestions.questions;
      default:
        return questionCache.languages.English!.questions;
    }
  }
  
  // If the language is invalid, return English as a fallback
  return questionCache.languages.English!.questions;
}

// Add these exports at the end of the file
export const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    harassment: 'from-red-500 to-pink-500',
    respect: 'from-blue-500 to-indigo-500',
    safety: 'from-green-500 to-emerald-500',
    policy: 'from-purple-500 to-violet-500'
  };
  return colors[category] || 'from-gray-500 to-slate-500';
};

export const getDifficultyColor = (difficulty: string) => {
  const colors: Record<string, string> = {
    easy: 'from-green-400 to-emerald-500',
    medium: 'from-yellow-400 to-orange-500',
    hard: 'from-red-400 to-rose-500'
  };
  return colors[difficulty] || 'from-gray-400 to-slate-500';
}; 