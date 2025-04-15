import { create } from 'zustand';
import { Language, User, QuizState, Achievement } from './types';
import { supabase } from './lib/supabase';
import { wrapPromise, useErrorStore } from './utils/errorHandler';
import { wrapWithLoading } from './utils/loadingState';
import { saveCurrentProgress } from './utils/persistence';

export interface Store {
  user: User | null;
  quizState: QuizState;
  achievements: Achievement[];
  analytics: {
    startTime: string | null;
    questionTimes: Record<number, number>;
    incorrectAttempts: Record<number, number>;
  };
  setUser: (user: User) => void;
  setQuizState: (state: QuizState) => void;
  updateAnswer: (questionIndex: number, answer: number) => void;
  resetQuiz: () => void;
  saveProgress: () => Promise<void>;
  unlockAchievement: (achievement: Achievement) => void;
  trackQuestionTime: (questionIndex: number, timeSpent: number) => void;
  trackIncorrectAttempt: (questionIndex: number) => void;
}

export const useStore = create<Store>((set, get) => ({
  user: null,
  quizState: 'HOME',
  achievements: [],
  analytics: {
    startTime: null,
    questionTimes: {},
    incorrectAttempts: {},
  },
  setUser: async (user) => {
    const sessionId = crypto.randomUUID();
    set({ 
      user: { 
        ...user, 
        sessionId,
        isStoryMode: user.isStoryMode || false,
        currentStoryId: user.currentStoryId,
        currentSceneIndex: user.currentSceneIndex || 0,
        currentDialogueIndex: user.currentDialogueIndex || 0
      },
      analytics: {
        startTime: new Date().toISOString(),
        questionTimes: {},
        incorrectAttempts: {},
      }
    });
    
    try {
      await wrapWithLoading(
        'user-create',
        wrapPromise(
          supabase.from('quiz_attempts').insert({
            session_id: sessionId,
            name: `${user.firstName} ${user.lastName}`,
            language: user.language,
            attempt_number: user.currentAttempt,
            answers: user.answers,
            achievements: [],
            analytics: {
              startTime: new Date().toISOString(),
              questionTimes: {},
              incorrectAttempts: {}
            },
            started_at: new Date().toISOString()
          }),
          'Failed to create quiz attempt'
        )
      );
    } catch (error) {
      useErrorStore.getState().addError({
        message: error.message,
        type: 'error'
      });
    }
  },
  setQuizState: (quizState) => set({ quizState }),
  updateAnswer: async (questionIndex, answer) => {
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            answers: state.user.answers.map((a, i) =>
              i === questionIndex ? answer : a
            ),
          }
        : null,
    }));

    await get().saveProgress();
  },
  resetQuiz: async () => {
    const currentUser = get().user;
    if (!currentUser) return;

    const sessionId = crypto.randomUUID();
    const newUser = {
      ...currentUser,
      sessionId,
      answers: new Array(20).fill(-1),
      currentAttempt: currentUser.currentAttempt + 1,
      isStoryMode: currentUser.isStoryMode,
      currentStoryId: currentUser.currentStoryId,
      currentSceneIndex: currentUser.currentSceneIndex || 0,
      currentDialogueIndex: currentUser.currentDialogueIndex || 0
    };
    set({ 
      user: newUser,
      analytics: {
        startTime: new Date().toISOString(),
        questionTimes: {},
        incorrectAttempts: {},
      }
    });

    try {
      await wrapWithLoading(
        'quiz-reset',
        wrapPromise(
          supabase.from('quiz_attempts').insert({
            session_id: sessionId,
            name: `${newUser.firstName} ${newUser.lastName}`,
            language: newUser.language,
            attempt_number: newUser.currentAttempt,
            answers: newUser.answers,
            achievements: [],
            analytics: {
              startTime: new Date().toISOString(),
              questionTimes: {},
              incorrectAttempts: {}
            },
            started_at: new Date().toISOString()
          }),
          'Failed to create new quiz attempt'
        )
      );
    } catch (error) {
      useErrorStore.getState().addError({
        message: error.message,
        type: 'error'
      });
    }
  },
  saveProgress: async () => {
    const currentUser = get().user;
    if (!currentUser) return;

    const answeredQuestions = currentUser.answers.filter(a => a !== -1).length;
    const progress = Math.round((answeredQuestions / currentUser.answers.length) * 100);
    
    try {
      await wrapWithLoading(
        'quiz-save',
        wrapPromise(
          supabase
            .from('quiz_attempts')
            .update({
              answers: currentUser.answers,
              progress_percentage: progress,
              last_updated_at: new Date().toISOString(),
              achievements: get().achievements,
              analytics: {
                ...get().analytics,
                storyMode: currentUser.isStoryMode ? {
                  currentStoryId: currentUser.currentStoryId,
                  currentSceneIndex: currentUser.currentSceneIndex,
                  currentDialogueIndex: currentUser.currentDialogueIndex
                } : undefined
              }
            })
            .eq('session_id', currentUser.sessionId)
            .eq('attempt_number', currentUser.currentAttempt),
          'Failed to save progress'
        )
      );
    } catch (error) {
      useErrorStore.getState().addError({
        message: error.message,
        type: 'error'
      });
    }
  },
  unlockAchievement: async (achievement: Achievement) => {
    set((state) => ({
      achievements: [...state.achievements, achievement]
    }));
    await wrapWithLoading(
      'achievement-unlock',
      get().saveProgress()
    );
  },
  trackQuestionTime: (questionIndex: number, timeSpent: number) => {
    set((state) => ({
      analytics: {
        ...state.analytics,
        questionTimes: {
          ...state.analytics.questionTimes,
          [questionIndex]: timeSpent
        }
      }
    }));
  },
  trackIncorrectAttempt: (questionIndex: number) => {
    set((state) => ({
      analytics: {
        ...state.analytics,
        incorrectAttempts: {
          ...state.analytics.incorrectAttempts,
          [questionIndex]: (state.analytics.incorrectAttempts[questionIndex] || 0) + 1
        }
      }
    }));
  }
}));