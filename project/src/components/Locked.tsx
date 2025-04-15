import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Home as HomeIcon } from 'lucide-react';
import { useStore } from '../store';

export const Locked: React.FC = () => {
  const setQuizState = useStore((state) => state.setQuizState);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4"
    >
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setQuizState('HOME')}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Return Home</span>
          </button>
        </div>

        <Lock className="w-16 h-16 text-gray-400 mx-auto mb-6" />
        
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Quiz Locked
        </h2>
        
        <p className="text-gray-600 mb-6">
          You have reached the maximum number of attempts. Please try again later.
        </p>
      </div>
    </motion.div>
  );
};