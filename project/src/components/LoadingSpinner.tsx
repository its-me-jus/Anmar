import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  light?: boolean;
  fullscreen?: boolean;
}

const sizeClasses = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-3',
  lg: 'w-12 h-12 border-4',
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  light = false,
  fullscreen = false,
}) => {
  const spinnerElement = (
    <div
      className={`
        ${sizeClasses[size]}
        border-solid
        border-t-transparent
        rounded-full
        animate-spin
        ${light ? 'border-white/30 border-t-white' : 'border-gray-200 border-t-blue-600'}
      `}
      role="status"
      aria-label="Loading"
    />
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
        {spinnerElement}
      </div>
    );
  }

  return spinnerElement;
}; 