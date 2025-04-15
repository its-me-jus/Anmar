import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Home as HomeIcon, Award, CheckCircle, XCircle, Trophy, Clock, Target } from 'lucide-react';
import { useStore } from '../store';
import { AchievementList } from './AchievementList';

export const Results: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const user = useStore((state) => state.user);
  const achievements = useStore((state) => state.achievements);
  const analytics = useStore((state) => state.analytics);
  const setQuizState = useStore((state) => state.setQuizState);
  const resetQuiz = useStore((state) => state.resetQuiz);

  const calculateScore = () => {
    if (!user) return 0;
    const correctAnswers = user.answers.filter((answer, index) => answer === 0).length;
    return Math.round((correctAnswers / user.answers.length) * 100);
  };

  const calculateStats = () => {
    if (!analytics.questionTimes || !user) return null;

    const totalTime = Object.values(analytics.questionTimes).reduce((sum, time) => sum + time, 0);
    const avgTime = totalTime / Object.keys(analytics.questionTimes).length;
    const totalIncorrect = Object.values(analytics.incorrectAttempts).reduce((sum, count) => sum + count, 0);

    return {
      totalTime: Math.round(totalTime),
      avgTime: Math.round(avgTime * 10) / 10,
      totalIncorrect
    };
  };

  const score = calculateScore();
  const stats = calculateStats();

  useEffect(() => {
    if (score === 100) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [score]);

  const handleRetry = () => {
    if (user && user.currentAttempt >= 5) {
      setQuizState('LOCKED');
    } else {
      resetQuiz();
      setQuizState('QUIZ');
    }
  };

  if (!user) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900 py-8 px-4 text-white"
    >
      {showConfetti && <Confetti />}
      
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setQuizState('HOME')}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Return Home</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Score Card */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <div className="text-center">
              <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">
                Quiz Results
              </h2>
              <p className="text-white/60 mb-6">
                Attempt {user.currentAttempt} of 5
              </p>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 mb-6">
                <div className="text-6xl font-bold mb-2">
                  {score}%
                </div>
                <p className="text-xl opacity-90">
                  {score === 100 ? 'Perfect Score!' : 'Keep trying!'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-semibold mb-6">Performance Stats</h3>
            
            {stats && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Clock className="w-8 h-8 text-blue-400" />
                  <div>
                    <p className="text-sm text-white/60">Total Time</p>
                    <p className="text-2xl font-semibold">{stats.totalTime}s</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Target className="w-8 h-8 text-green-400" />
                  <div>
                    <p className="text-sm text-white/60">Avg. Time per Question</p>
                    <p className="text-2xl font-semibold">{stats.avgTime}s</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <XCircle className="w-8 h-8 text-rose-400" />
                  <div>
                    <p className="text-sm text-white/60">Incorrect Attempts</p>
                    <p className="text-2xl font-semibold">{stats.totalIncorrect}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Achievements Section */}
        {achievements.length > 0 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-yellow-400" />
              Achievements Unlocked
            </h3>
            <AchievementList achievements={achievements} />
          </motion.div>
        )}

        <div className="space-y-6">
          {score === 100 ? (
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-green-400">
                <CheckCircle className="w-6 h-6" />
                <span className="text-xl font-semibold">
                  Congratulations! You've mastered the content!
                </span>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <label className="flex items-center justify-center space-x-3">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-5 w-5 text-blue-600 rounded border-white/20 bg-white/10"
                  />
                  <span className="text-lg">
                    I understand and will follow these workplace safety guidelines
                  </span>
                </label>
              </motion.div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-amber-400">
                <XCircle className="w-6 h-6" />
                <span className="text-xl font-semibold">
                  You need a perfect score to pass
                </span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRetry}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Try Again
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};