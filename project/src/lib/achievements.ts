import type { Achievement } from '../types';

export const createAchievement = (
  id: string,
  title: string,
  description: string,
  icon: string,
  type: Achievement['type'],
  progress?: number,
  maxProgress?: number
): Achievement => ({
  id,
  title,
  description,
  icon,
  type,
  progress,
  maxProgress,
  unlockedAt: new Date().toISOString()
});

export const checkSpeedAchievement = (questionTime: number): Achievement | null => {
  if (questionTime <= 10) {
    return createAchievement(
      'quick-thinker',
      'Quick Thinker',
      'Answered correctly in under 10 seconds',
      'zap',
      'speed'
    );
  }
  return null;
};

export const checkStreakAchievement = (streak: number): Achievement | null => {
  if (streak === 3) {
    return createAchievement(
      'perfect-streak',
      'Perfect Streak',
      'Got 3 answers correct in a row',
      'target',
      'streak',
      3,
      3
    );
  }
  return null;
};

export const checkProgressAchievement = (
  progress: number,
  total: number
): Achievement | null => {
  const milestones = [0.25, 0.5, 0.75, 1];
  const currentMilestone = milestones.find(
    m => Math.round((progress / total) * 100) === Math.round(m * 100)
  );

  if (currentMilestone) {
    const percentage = Math.round(currentMilestone * 100);
    return createAchievement(
      `progress-${percentage}`,
      `${percentage}% Complete`,
      `Completed ${percentage}% of the quiz`,
      'trophy',
      'progress',
      progress,
      total
    );
  }
  return null;
};