import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';

interface QuestionTimerProps {
  onTimeUpdate: (time: number) => void;
  isActive: boolean;
}

export const QuestionTimer: React.FC<QuestionTimerProps> = ({ onTimeUpdate, isActive }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive) {
      interval = setInterval(() => {
        setTime(t => {
          const newTime = t + 1;
          onTimeUpdate(newTime);
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, onTimeUpdate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2 text-white/60"
    >
      <Timer className="w-5 h-5" />
      <span>{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</span>
    </motion.div>
  );
};