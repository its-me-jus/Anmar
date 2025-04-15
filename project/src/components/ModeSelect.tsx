import React from 'react';
import { motion } from 'framer-motion';
import { Book, CheckSquare, Home as HomeIcon, BookOpen } from 'lucide-react';
import { useStore } from '../store';
import type { Store } from '../store';

export const ModeSelect: React.FC = () => {
  const setQuizState = useStore((state: Store) => state.setQuizState);
  const user = useStore((state: Store) => state.user);
  const setUser = useStore((state: Store) => state.setUser);

  const handleModeSelect = (isStoryMode: boolean) => {
    if (user) {
      // Update user with the selected mode
      setUser({
        ...user,
        isStoryMode
      });
      
      // Proceed to language selection
      setQuizState('LANGUAGE');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Beautiful background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920&q=80)',
        }}
      >
        {/* Overlay gradient for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-white" />
              <h2 className="text-3xl font-bold text-white">
                Select Training Mode
              </h2>
            </div>
            <button
              onClick={() => setQuizState('HOME')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <HomeIcon className="w-5 h-5" />
              <span>Return Home</span>
            </button>
          </div>

          {/* Mode selection info */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 mb-8 border border-white/10">
            <div className="flex items-start gap-4">
              <Book className="w-6 h-6 text-white/80 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Choose your learning experience
                </h3>
                <p className="text-white/80">
                  Select the training mode that best fits your learning style. You can experience our immersive story-based training or our traditional question-based assessment.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mode selection cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Story Mode Card */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleModeSelect(true)}
              className="group relative h-80 rounded-xl overflow-hidden transition-all duration-300 bg-gradient-to-br from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 backdrop-blur-sm border border-white/10"
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3)',
                }}
              >
                {/* Enhanced overlay with stronger gradient for better readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 group-hover:bg-black/50 transition-colors duration-300" />
              </div>

              {/* Content - Simplified and improved readability */}
              <div className="relative h-full flex flex-col justify-between p-6 text-left">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Story Mode</h3>
                  <div className="bg-black/40 backdrop-blur-md p-3 rounded-lg">
                    <p className="text-white font-medium">Learn through an engaging narrative experience.</p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="self-start bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium"
                >
                  Start Journey
                </motion.div>
              </div>
            </motion.button>

            {/* Quiz Mode Card (formerly Training Mode) */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleModeSelect(false)}
              className="group relative h-80 rounded-xl overflow-hidden transition-all duration-300 bg-gradient-to-br from-blue-500/20 to-teal-500/20 hover:from-blue-500/30 hover:to-teal-500/30 backdrop-blur-sm border border-white/10"
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3)',
                }}
              >
                {/* Enhanced overlay with stronger gradient for better readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 group-hover:bg-black/50 transition-colors duration-300" />
              </div>

              {/* Content - Simplified and improved readability */}
              <div className="relative h-full flex flex-col justify-between p-6 text-left">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Quiz Mode</h3>
                  <div className="bg-black/40 backdrop-blur-md p-3 rounded-lg">
                    <p className="text-white font-medium">Test your knowledge with interactive questions.</p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="self-start bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium"
                >
                  Start Quiz
                </motion.div>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 