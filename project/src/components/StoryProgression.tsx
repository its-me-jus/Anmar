import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, Target, Network, Lightbulb, Sparkles } from 'lucide-react';
import { Character } from '../types';
import { useStore } from '../store';

interface StoryProgressionProps {
  character: Character;
  onComplete: (choice: string) => void;
}

const roleIcons = {
  visionary: Lightbulb,
  achiever: Target,
  explorer: Compass,
  connector: Network,
};

const FloatingParticle: React.FC<{ delay: number; className?: string }> = ({ delay, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: [0, 1, 0],
      y: [20, -20],
      x: [0, Math.random() * 40 - 20],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    className={`absolute ${className}`}
  >
    <Sparkles className="w-4 h-4" />
  </motion.div>
);

const AmbientBackground: React.FC<{ theme: string }> = ({ theme }) => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(8)].map((_, i) => (
      <FloatingParticle
        key={i}
        delay={i * 0.5}
        className={`${theme} opacity-30`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ))}
    <motion.div
      className={`absolute inset-0 bg-gradient-to-r ${theme} opacity-10`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.1, 0.15, 0.1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  </div>
);

export const StoryProgression: React.FC<StoryProgressionProps> = ({
  character,
  onComplete,
}) => {
  const [step, setStep] = useState<'intro' | 'challenge' | 'outcome'>('intro');
  const [choice, setChoice] = useState<string | null>(null);

  const getChoices = () => {
    return Object.entries(character.storyArc.outcomes).map(([key, value]) => ({
      id: key,
      text: value,
    }));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <AmbientBackground theme={character.theme.primary} />
      
      <AnimatePresence mode="wait">
        {step === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative text-center p-8 backdrop-blur-lg rounded-2xl bg-white/5"
          >
            <motion.div 
              className="mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {React.createElement(roleIcons[character.id as keyof typeof roleIcons] || Lightbulb, {
                className: `w-16 h-16 ${character.theme.accent} mx-auto mb-6`
              })}
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Your Journey Begins
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/80 leading-relaxed"
            >
              {character.storyArc.intro}
            </motion.p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStep('challenge')}
              className="group px-8 py-4 mt-8 bg-white/10 rounded-xl hover:bg-white/20 transition-all"
            >
              <span className="flex items-center gap-2 text-white">
                Continue
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.button>
          </motion.div>
        )}

        {step === 'challenge' && (
          <motion.div
            key="challenge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative p-8 backdrop-blur-lg rounded-2xl bg-white/5"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-white text-center mb-8"
            >
              {character.storyArc.challenge}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getChoices().map((choice, index) => (
                <motion.button
                  key={choice.id}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * (index + 1) }}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setChoice(choice.id);
                    setStep('outcome');
                  }}
                  className={`p-6 rounded-xl bg-gradient-to-r ${character.theme.primary} hover:shadow-lg transition-all relative overflow-hidden group`}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "-100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <p className="text-lg text-white font-medium relative z-10">
                    {choice.text}
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 'outcome' && choice && (
          <motion.div
            key="outcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative text-center p-8 backdrop-blur-lg rounded-2xl bg-white/5"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mb-8"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${character.theme.primary} mx-auto mb-6 flex items-center justify-center`}>
                {React.createElement(roleIcons[character.id as keyof typeof roleIcons] || Lightbulb, {
                  className: "w-10 h-10 text-white"
                })}
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Your Path is Set
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/80 leading-relaxed mb-8"
            >
              {character.storyArc.outcomes[choice]}
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onComplete(choice)}
              className={`px-8 py-4 rounded-xl bg-gradient-to-r ${character.theme.primary} text-white font-semibold relative overflow-hidden group`}
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "100%" }}
                whileHover={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Begin Your Journey</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 