import React, { useEffect } from 'react';
import styles from './Toast.module.css';

interface ToastProps {
  title: string;
  description?: string;
  status: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
  onClose: () => void;
  icon?: string;
}

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  status,
  duration = 5000,
  onClose,
  icon = '💡'
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getStatusColor = () => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'error':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg border ${getStatusColor()} shadow-lg max-w-md ${styles.toastEnter}`}>
      <div className="flex items-start">
        <span className="text-2xl mr-3">{icon}</span>
        <div className="flex-1">
          <h4 className="font-semibold">{title}</h4>
          {description && (
            <p className="mt-1 text-sm opacity-90">{description}</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="ml-4 text-current opacity-70 hover:opacity-100"
        >
          ✕
        </button>
      </div>
    </div>
  );
}; 