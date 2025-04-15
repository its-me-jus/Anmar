import { create } from 'zustand';

export type LoadingKey = 
  | 'quiz-save'
  | 'quiz-reset'
  | 'quiz-submit'
  | 'user-create'
  | 'achievement-unlock'
  | 'global';

export interface LoadingStore {
  loadingStates: Record<LoadingKey, boolean>;
  setLoading: (key: LoadingKey, isLoading: boolean) => void;
  isLoading: (key: LoadingKey) => boolean;
  anyLoading: () => boolean;
}

export const useLoadingStore = create<LoadingStore>((set, get) => ({
  loadingStates: {
    'quiz-save': false,
    'quiz-reset': false,
    'quiz-submit': false,
    'user-create': false,
    'achievement-unlock': false,
    'global': false,
  },
  setLoading: (key, isLoading) =>
    set((state) => ({
      loadingStates: {
        ...state.loadingStates,
        [key]: isLoading,
      },
    })),
  isLoading: (key) => get().loadingStates[key],
  anyLoading: () => Object.values(get().loadingStates).some(Boolean),
}));

export const wrapWithLoading = async <T>(
  key: LoadingKey,
  promise: Promise<T>
): Promise<T> => {
  const { setLoading } = useLoadingStore.getState();
  setLoading(key, true);
  try {
    const result = await promise;
    return result;
  } finally {
    setLoading(key, false);
  }
}; 