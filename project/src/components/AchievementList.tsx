import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Target, Timer, Trophy, Star } from 'lucide-react';
import type { Achievement } from '../types';

const achievementIcons = {
  'award': Award,
  'zap': Zap,
  'target': Target,
  'timer': Timer,
  'trophy': Trophy,
  'star': Star
};

interface AchievementListProps {
  achievements: Achievement[];
}

export const AchievementList: React.FC<AchievementListProps> = ({ achievements }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {achievements.map((achievement) => {
        const Icon = achievementIcons[achievement.icon as keyof typeof achievementIcons] || Trophy;
        
        return (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg p-2">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {achievement.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {achievement.description}
                </p>
                {achievement.progress !== undefined && achievement.maxProgress !== undefined && (
                  <div className="mt-2">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                        className="h-full bg-gradient-to-r from-yellow-400 to-amber-600"
                      />
                    </div>
                    <p className="text-xs text-white/60 mt-1">
                      {achievement.progress} / {achievement.maxProgress}
                    </p>
                  </div>
                )}
                <p className="text-xs text-white/40 mt-2">
                  Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};