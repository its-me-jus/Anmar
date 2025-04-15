import React from 'react';
import { Toast } from './Toast';
import { useToast } from '../hooks/useToast';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  return (
    <>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          title={toast.title}
          description={toast.description}
          status={toast.status}
          icon={toast.icon}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  );
}; 