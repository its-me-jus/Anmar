import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, BookOpen, Lightbulb, Award } from 'lucide-react';
import AudioManager from '../utils/audio';

interface FeedbackOverlayProps {
  isVisible: boolean;
  isCorrect: boolean;
  message: string;
  explanation?: string;
  onAnimationComplete?: () => void;
}

export const FeedbackOverlay: React.FC<FeedbackOverlayProps> = ({
  isVisible,
  isCorrect,
  message,
  explanation,
  onAnimationComplete
}) => {
  const [audioPlayed, setAudioPlayed] = useState(false);
  const audioManager = AudioManager.getInstance();
  
  // List of encouraging messages
  const encouragingPhrases = isCorrect 
    ? [
        "Keep up the good work!",
        "You're making great progress!",
        "Your knowledge is growing!",
        "Excellent understanding!",
        "That's the way to learn!"
      ]
    : [
        "Don't worry, we learn from mistakes!",
        "Keep trying, you're getting there!",
        "This is how we improve!",
        "Let's understand why and grow from it!",
        "Mistakes are stepping stones to mastery!"
      ];

  // Randomly select an encouraging phrase
  const [encouragement] = useState(
    encouragingPhrases[Math.floor(Math.random() * encouragingPhrases.length)]
  );

  useEffect(() => {
    if (isVisible && !audioPlayed) {
      // Play the feedback audio
      audioManager.speak(message, { useElevenLabs: true });
      setAudioPlayed(true);
    }
    
    if (!isVisible) {
      setAudioPlayed(false);
    }
  }, [isVisible, message, audioPlayed]);

  return (
    <AnimatePresence onExitComplete={onAnimationComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className={`max-w-md w-full mx-4 p-6 rounded-2xl shadow-xl ${
              isCorrect ? 'bg-gradient-to-br from-green-500 to-green-600' : 'bg-gradient-to-br from-rose-500 to-rose-600'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              {isCorrect ? (
                <CheckCircle className="w-8 h-8 text-white" />
              ) : (
                <XCircle className="w-8 h-8 text-white" />
              )}
              <h3 className="text-2xl font-bold text-white">
                {isCorrect ? 'Correct!' : 'Not quite right'}
              </h3>
            </div>
            
            <p className="text-white/90 text-lg mb-4">
              {message}
            </p>
            
            {/* Encouragement section */}
            <div className="bg-white/10 rounded-lg p-3 mb-4 flex items-center gap-3">
              <Award className="w-5 h-5 text-white/90 flex-shrink-0" />
              <p className="text-white/90">
                {encouragement}
              </p>
            </div>
            
            {explanation && (
              <div className="bg-white/10 rounded-lg p-4 mt-2">
                <div className="flex items-center gap-2 mb-2">
                  {isCorrect ? (
                    <Lightbulb className="w-5 h-5 text-white/90" />
                  ) : (
                    <BookOpen className="w-5 h-5 text-white/90" />
                  )}
                  <span className="text-white/90 font-medium">
                    {isCorrect ? 'Learning Point' : 'Explanation'}
                  </span>
                </div>
                <p className="text-white/90">
                  {explanation}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};