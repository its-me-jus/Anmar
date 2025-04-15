import { create } from 'zustand';

export interface ErrorState {
  message: string;
  type: 'error' | 'warning' | 'info';
  id: string;
}

export interface ErrorStore {
  errors: ErrorState[];
  addError: (error: Omit<ErrorState, 'id'>) => void;
  removeError: (id: string) => void;
  clearErrors: () => void;
}

export const useErrorStore = create<ErrorStore>((set) => ({
  errors: [],
  addError: (error) => {
    const id = Math.random().toString(36).substring(7);
    set((state) => ({
      errors: [...state.errors, { ...error, id }],
    }));
    // Auto-remove error after 5 seconds
    setTimeout(() => {
      set((state) => ({
        errors: state.errors.filter((e) => e.id !== id),
      }));
    }, 5000);
  },
  removeError: (id) =>
    set((state) => ({
      errors: state.errors.filter((error) => error.id !== id),
    })),
  clearErrors: () => set({ errors: [] }),
}));

export class AppError extends Error {
  constructor(
    message: string,
    public type: ErrorState['type'] = 'error',
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export const handleError = (error: unknown): AppError => {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof Error) {
    return new AppError(error.message, 'error', error);
  }

  return new AppError('An unexpected error occurred', 'error', error);
};

export const wrapPromise = async <T>(
  promise: Promise<T>,
  errorMessage: string
): Promise<T> => {
  try {
    return await promise;
  } catch (error) {
    throw new AppError(
      errorMessage,
      'error',
      error
    );
  }
}; 