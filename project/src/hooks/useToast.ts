import { useState, useCallback } from 'react';

interface ToastState {
  id: number;
  title: string;
  description?: string;
  status: 'info' | 'success' | 'warning' | 'error';
  icon?: string;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const addToast = useCallback((toast: Omit<ToastState, 'id'>) => {
    const id = Date.now();
    setToasts(prev => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return {
    toasts,
    addToast,
    removeToast
  };
}; 