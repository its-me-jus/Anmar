import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ChevronRight, Sparkles, Mail, Star } from 'lucide-react';
import { useStore } from '../store';

const FloatingElement: React.FC<{ delay: number; className?: string }> = ({ delay, className }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0.5, 1.2, 0.5],
      y: [-20, -40, -20],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    className={`absolute ${className}`}
  >
    <Star className="w-6 h-6 text-white/30" />
  </motion.div>
);

const pageTransitions = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [formProgress, setFormProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const setUser = useStore((state) => state.setUser);
  const setQuizState = useStore((state) => state.setQuizState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTransitioning(true);
    setTimeout(() => {
      const user = {
        ...formData,
        currentAttempt: 1,
        language: 'English',
        answers: new Array(20).fill(-1),
        sessionId: crypto.randomUUID(),
      };
      setUser(user);
      setQuizState('MODE_SELECT');
    }, 750);
  };

  // Calculate form progress
  React.useEffect(() => {
    let progress = 0;
    if (formData.firstName) progress += 33.33;
    if (formData.lastName) progress += 33.33;
    if (formData.email) progress += 33.34;
    setFormProgress(progress);
  }, [formData]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Beautiful classroom background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80)',
        }}
      >
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-[1px]" />
      </div>

      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -10,
            opacity: 0,
          }}
          animate={{
            y: window.innerHeight + 10,
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key="info"
            {...pageTransitions}
            transition={{ duration: 0.4 }}
            className="max-w-md w-full relative"
          >
            {/* Floating elements */}
            {[...Array(5)].map((_, i) => (
              <FloatingElement
                key={i}
                delay={i * 0.5}
                className={`${
                  i % 2 === 0 ? 'left-1/4' : 'right-1/4'
                } top-${20 + i * 10}`}
              />
            ))}

            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <Sparkles className="w-10 h-10 text-white relative z-10" />
              </motion.div>
              
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-bold text-white mb-3"
              >
                Begin Your Journey
              </motion.h2>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white/80 text-lg"
              >
                Let's start with getting to know you
              </motion.p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-6 relative z-10"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      First Name
                    </label>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/20 focus:ring-2 focus:ring-white/20"
                        placeholder="Enter your first name"
                        required
                      />
                      {formData.firstName && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <Star className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Last Name
                    </label>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/20 focus:ring-2 focus:ring-white/20"
                        placeholder="Enter your last name"
                        required
                      />
                      {formData.lastName && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <Star className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Email Address
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/20 focus:ring-2 focus:ring-white/20"
                        placeholder="Enter your email"
                        required
                      />
                      {formData.email && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <Star className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!formData.firstName || !formData.lastName || !formData.email || isTransitioning}
                className="relative w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 rounded-xl text-lg font-semibold overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "-100%" }}
                  transition={{ duration: 0.5 }}
                />
                
                <motion.span
                  className="relative z-10 flex items-center justify-center gap-2"
                  animate={isTransitioning ? { x: -200 } : {}}
                  transition={{ duration: 0.75, ease: [0.3, 0, 0.2, 1] }}
                >
                  {formProgress === 100 ? "Continue" : "Complete Your Profile"}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.span>

                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, borderRadius: '100%' }}
                  animate={isTransitioning ? { scale: 4, opacity: 1 } : { scale: 0, opacity: 0 }}
                  style={{ originX: 0.5, originY: 0.5 }}
                  transition={{ delay: 0.5, duration: 0.75, ease: [0.3, 0, 0.2, 1] }}
                />
              </motion.button>

              {/* Progress indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-center text-white/60"
              >
                {formProgress < 100 ? (
                  `Profile completion: ${Math.round(formProgress)}%`
                ) : (
                  <span className="text-green-400">Ready to continue!</span>
                )}
              </motion.div>
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};