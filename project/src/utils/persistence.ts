import { User, QuizState } from '../types';
import { supabase } from '../lib/supabase';
import { useStore } from '../store';
import { useErrorStore } from './errorHandler';
import { wrapWithLoading } from './loadingState';

interface SavedProgress {
  user: User;
  quizState: QuizState;
  achievements: any[];
  analytics: {
    startTime: string | null;
    questionTimes: Record<number, number>;
    incorrectAttempts: Record<number, number>;
  };
  lastSaved: string;
}

export const saveProgressToLocalStorage = (progress: SavedProgress) => {
  try {
    localStorage.setItem('quiz_progress', JSON.stringify(progress));
  } catch (error) {
    console.warn('Failed to save progress to localStorage:', error);
  }
};

export const loadProgressFromLocalStorage = (): SavedProgress | null => {
  try {
    const saved = localStorage.getItem('quiz_progress');
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.warn('Failed to load progress from localStorage:', error);
    return null;
  }
};

export const clearSavedProgress = () => {
  try {
    localStorage.removeItem('quiz_progress');
  } catch (error) {
    console.warn('Failed to clear progress from localStorage:', error);
  }
};

export const saveCurrentProgress = () => {
  const store = useStore.getState();
  if (!store.user) return;

  const progress: SavedProgress = {
    user: store.user,
    quizState: store.quizState,
    achievements: store.achievements,
    analytics: store.analytics,
    lastSaved: new Date().toISOString(),
  };

  saveProgressToLocalStorage(progress);
};

export const restoreProgress = async () => {
  const savedProgress = loadProgressFromLocalStorage();
  if (!savedProgress) return false;

  const store = useStore.getState();
  const { addError } = useErrorStore.getState();

  // Check if the saved progress is from within the last 24 hours
  const lastSaved = new Date(savedProgress.lastSaved);
  const now = new Date();
  const hoursSinceSaved = (now.getTime() - lastSaved.getTime()) / (1000 * 60 * 60);
  
  if (hoursSinceSaved > 24) {
    clearSavedProgress();
    return false;
  }

  try {
    // Verify the session still exists in the database
    const { data, error } = await wrapWithLoading(
      'global',
      supabase
        .from('quiz_attempts')
        .select('session_id')
        .eq('session_id', savedProgress.user.sessionId)
        .single()
    );

    if (error || !data) {
      clearSavedProgress();
      return false;
    }

    // Restore the saved state
    store.setUser(savedProgress.user);
    store.setQuizState(savedProgress.quizState);
    useStore.setState({
      achievements: savedProgress.achievements,
      analytics: savedProgress.analytics,
    });

    return true;
  } catch (error) {
    addError({
      message: 'Failed to restore previous progress',
      type: 'error',
    });
    clearSavedProgress();
    return false;
  }
}; 