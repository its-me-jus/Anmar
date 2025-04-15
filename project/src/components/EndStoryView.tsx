import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Trophy, Clock, Star, Users } from 'lucide-react';
import { useStore } from '../store';
import type { Store } from '../store';
import * as confetti from 'canvas-confetti';

export const EndStoryView: React.FC = () => {
  const user = useStore((state: Store) => state.user);
  const setQuizState = useStore((state: Store) => state.setQuizState);
  const [showConfetti, setShowConfetti] = useState(false);

  // Accomplishments data - in a real app, this would be calculated based on user's journey
  const accomplishments = [
    {
      icon: Trophy,
      title: "Completed Full Story",
      description: "You've completed the full interactive story about workplace harassment prevention"
    },
    {
      icon: Star,
      title: `Earned ${user?.storyPoints || 0} Points`,
      description: "You made thoughtful choices throughout the scenario"
    },
    {
      icon: Clock,
      title: "Key Concepts Learned",
      description: "Identifying harassment, reporting procedures, and creating safe workplaces"
    },
    {
      icon: Award,
      title: "Knowledge Application",
      description: "Successfully applied concepts in realistic workplace scenarios"
    },
    {
      icon: Users,
      title: "Empathy Development",
      description: "Gained perspective on how harassment affects colleagues"
    }
  ];

  // Confetti effect on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const launchConfetti = () => {
        confetti.default({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#1d4ed8', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'],
        });
        
        if (Date.now() < end) {
          requestAnimationFrame(launchConfetti);
        }
      };

      launchConfetti();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=1920&q=80)',
        }}
      >
        {/* Overlay gradient for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4 overflow-y-auto">
        <div className="max-w-4xl w-full text-center py-12">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative">
              <CheckCircle className="w-24 h-24 text-green-400 mx-auto" />
              {showConfetti && (
                <div id="confetti-container" className="absolute inset-0 pointer-events-none" />
              )}
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Congratulations!
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/80 mb-12"
          >
            You've completed the interactive story on workplace harassment prevention.
            Here's a summary of what you've accomplished:
          </motion.p>

          {/* Accomplishments Grid */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {accomplishments.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-left flex items-start gap-4"
                >
                  <div className="rounded-full bg-blue-500/20 p-3 flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Certificate Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-md rounded-xl p-8 border border-white/10 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Completion Certificate</h2>
            <p className="text-white/80 mb-6">
              This certifies that <span className="font-bold text-white">{user?.name || 'you'}</span> have 
              successfully completed the "Workplace Harassment Prevention" training module and 
              demonstrated understanding of key concepts and protocols.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Download Certificate</span>
              </button>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-white/5 backdrop-blur-md rounded-xl p-6 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">What's Next?</h2>
            <p className="text-white/80 mb-6">
              Continue your learning journey with additional modules on workplace ethics, 
              or revisit this scenario to explore different outcomes and perspectives.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button
              onClick={() => setQuizState('HOME')}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl transition-all duration-300"
            >
              <Users className="w-5 h-5" />
              <span>Return Home</span>
            </button>
            <button
              onClick={() => setQuizState('STORY')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-all duration-300"
            >
              <Trophy className="w-5 h-5" />
              <span>Try Another Scenario</span>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default EndStoryView; 