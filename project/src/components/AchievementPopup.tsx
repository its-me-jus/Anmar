import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy } from 'lucide-react';

interface AchievementPopupProps {
  achievement: {
    title: string;
    description: string;
  } | null;
}

export const AchievementPopup: React.FC<AchievementPopupProps> = ({ achievement }) => {
  return (
    <AnimatePresence>
      {achievement && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-4 right-4 z-50"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg p-4 flex items-center gap-4">
            <div className="bg-yellow-500 rounded-full p-2">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white">{achievement.title}</h3>
              <p className="text-yellow-100 text-sm">{achievement.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};