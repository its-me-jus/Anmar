import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, ArrowLeft, ArrowRight, Lightbulb, Shield, Users, Map, Target, CheckCircle, XCircle, Volume2 } from 'lucide-react';
import type { Question } from '../types';
import { getLessonContent } from '../lib/lessons';
import { useStore } from '../store';
import AudioManager from '../utils/audio';
import { ElevenLabsService } from '../utils/elevenLabsService';
import { VideoScene } from './VideoScene';

interface LessonContentProps {
  question: Question;
  onContinue: () => void;
  onBack: () => void;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'harassment':
      return Shield;
    case 'respect':
      return Users;
    default:
      return Book;
  }
};

const getBackgroundImage = (category: string) => {
  switch (category) {
    case 'harassment':
      return 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80';
    case 'respect':
      return 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&q=80';
    case 'policy':
      return 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80';
    default:
      return 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'harassment':
      return 'from-red-500 to-rose-600';
    case 'respect':
      return 'from-blue-500 to-indigo-600';
    case 'policy':
      return 'from-purple-500 to-violet-600';
    default:
      return 'from-emerald-500 to-teal-600';
  }
};

const LessonContent: React.FC<LessonContentProps> = ({
  question,
  onContinue,
  onBack,
}) => {
  const user = useStore((state) => state.user);
  const Icon = getCategoryIcon(question.category || 'default');
  const questionNumber = question.id ? parseInt(question.id.toString()) : 1;
  const content = getLessonContent(questionNumber, user?.language);
  const backgroundImage = getBackgroundImage(question.category || 'default');
  const categoryColor = getCategoryColor(question.category || 'default');
  const [showTeacherTip, setShowTeacherTip] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const audioManager = AudioManager.getInstance();
  const elevenLabsService = ElevenLabsService.getInstance();

  // Log when lesson content loads
  useEffect(() => {
    console.log("Preloading question and options while user reads lesson...");
    // Preload the next question's options while user is reading lesson
    if (user?.language) {
      // Preload options
      question.options.forEach((option, index) => {
        const optionText = `Option ${index + 1}: ${option.substring(0, 15)}`;
        audioManager.preloadAudio(optionText, user.language);
      });
      
      // Preload feedback sounds
      audioManager.preloadAudio('', user.language, {
        type: 'system',
        systemVoiceId: 'correct_answer'
      });
      
      audioManager.preloadAudio('', user.language, {
        type: 'system',
        systemVoiceId: 'incorrect_answer'
      });
    }
  }, [question, user?.language, audioManager]);

  // Add useEffect for automatic audio playback
  useEffect(() => {
    const playLessonAudio = async () => {
      if (user?.language) {
        // Read out the question text
        await elevenLabsService.textToSpeech(
          question.text,
          user.language
        );
      }
    };

    playLessonAudio();
  }, [question.text, user?.language]);

  // Helper function to get a random tip based on question category
  const getTeacherTip = (category?: string) => {
    const generalTips = [
      "Take your time to understand the concept before answering.",
      "Try to connect this information with what you already know.",
      "Visualizing the concept can help with understanding.",
      "Don't hesitate to review this material if needed.",
      "Learning is a journey, not a race. Enjoy the process!"
    ];
    
    const categoryTips: Record<string, string[]> = {
      culture: [
        "Cultural understanding builds bridges between people.",
        "Every culture has unique perspectives worth exploring.",
        "Cultural knowledge helps develop empathy and global awareness."
      ],
      language: [
        "Language is the key to understanding a culture's heart.",
        "Learning new words expands how you see the world.",
        "Practice new vocabulary in context to remember it better."
      ],
      history: [
        "History helps us understand our present and shape our future.",
        "Look for patterns and connections across historical events.",
        "Consider multiple perspectives when studying historical events."
      ]
    };
    
    if (category && categoryTips[category]) {
      const categorySpecificTips = categoryTips[category];
      return categorySpecificTips[Math.floor(Math.random() * categorySpecificTips.length)];
    }
    
    return generalTips[Math.floor(Math.random() * generalTips.length)];
  };
  
  // Get a tip for this specific question
  const teacherTip = getTeacherTip(question.category);

  if (showVideo && content.videoId) {
    console.log('Rendering YouTube video with ID:', content.videoId);
    return (
      <VideoScene
        videoUrl={content.videoId}
        onComplete={() => {
          console.log('Video completed, setting showVideo to false');
          setShowVideo(false);
        }}
        overlays={{
          text: [
            {
              content: content.title,
              position: "top",
              timing: { start: 0, end: 3 }
            },
            {
              content: content.description,
              position: "center",
              timing: { start: 3, end: 6 }
            }
          ],
          buttons: [
            {
              text: "Continue to Lesson",
              timing: { start: 8 },
              action: "COMPLETE"
            }
          ]
        }}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="relative min-h-screen flex flex-col">
        {/* Navigation */}
        <div className="flex justify-between items-center p-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-4xl w-full space-y-8">
            {/* Story Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${categoryColor} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white">{content.title}</h2>
                  <p className="text-xl text-white/80">{content.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Journey Progress */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Your Learning Journey</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Map className="w-5 h-5 text-white/80" />
                    <h4 className="text-lg font-medium text-white">Current Scenario</h4>
                  </div>
                  <p className="text-white/80 pl-7">{content.story.scenario}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-white/80" />
                    <h4 className="text-lg font-medium text-white">Your Challenge</h4>
                  </div>
                  <p className="text-white/80 pl-7">{content.story.challenge}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-white/80" />
                    <h4 className="text-lg font-medium text-white">Key Insight</h4>
                  </div>
                  <p className="text-white/80 pl-7">{content.story.insight}</p>
                </div>
              </div>
            </motion.div>

            {/* Key Points and Examples Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Key Points */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Key Points</h3>
                <ul className="space-y-4">
                  {content.keyPoints.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      <span className="text-white/80">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Examples */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Examples</h3>
                <div className="space-y-6">
                  {content.examples.map((example, index) => (
                    <div key={index} className="space-y-3">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="bg-green-500/20 rounded-xl p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <div className="text-green-400 font-medium">Good Practice</div>
                        </div>
                        <p className="text-white/80 pl-7">{example.good}</p>
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="bg-red-500/20 rounded-xl p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <XCircle className="w-5 h-5 text-red-400" />
                          <div className="text-red-400 font-medium">Avoid</div>
                        </div>
                        <p className="text-white/80 pl-7">{example.bad}</p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Tips for Success */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Tips for Success</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {content.tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-white/5 rounded-xl p-4"
                  >
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <p className="text-white/80">{tip}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Teacher Tip Section */}
            <div className="mt-6 mb-4">
              <button
                onClick={() => {
                  setShowTeacherTip(!showTeacherTip);
                  if (!showTeacherTip) {
                    audioManager.speak("Teacher's tip: " + teacherTip, { useElevenLabs: true });
                  }
                }}
                className="text-white/80 hover:text-white flex items-center gap-2 transition-colors"
              >
                <Lightbulb className="w-5 h-5" />
                <span>{showTeacherTip ? "Hide Teacher's Tip" : "Show Teacher's Tip"}</span>
              </button>
              
              <AnimatePresence>
                {showTeacherTip && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 p-4 bg-indigo-600/30 border border-indigo-500/30 rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-indigo-500/30 p-2 rounded-full">
                        <Lightbulb className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Teacher's Tip</h4>
                        <p className="text-white/90">{teacherTip}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Continue Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center"
            >
              <button
                onClick={onContinue}
                className={`bg-gradient-to-r ${categoryColor} text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity`}
              >
                Continue to Question
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LessonContent;