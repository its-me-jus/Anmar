import React from 'react';
import { motion } from 'framer-motion';
import type { Achievement } from '../types/dialogue';

interface AchievementDisplayProps {
  achievements: Achievement[];
}

export const AchievementDisplay: React.FC<AchievementDisplayProps> = ({ achievements }) => {
  return (
    <div className="fixed top-4 right-4 bg-black/40 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-white/10">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-bold text-white mb-4 flex items-center"
      >
        <span className="mr-2">🏆</span>
        Achievements
      </motion.h3>
      <div className="space-y-3">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center space-x-3 p-2 rounded-lg ${
              achievement.unlocked 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-black/20 border border-white/5'
            }`}
          >
            <span className="text-2xl">{achievement.icon}</span>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{achievement.title}</div>
              <div className="text-xs text-gray-300">{achievement.description}</div>
              {!achievement.unlocked && (
                <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full"
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}; 