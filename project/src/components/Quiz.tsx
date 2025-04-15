import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ChevronRight, Award, Timer, Volume2 } from 'lucide-react';
import { useStore } from '../store';
import { ProgressBar } from './ProgressBar';
import { AchievementPopup } from './AchievementPopup';
import { VoiceControl } from './VoiceControl';
import { getQuestionsSync } from '../lib/questions/index';
import { getCategoryColor, getDifficultyColor } from '../lib/questions/index';
import type { Question, Character, QuizState } from '../types';
import LessonContent from './LessonContent';
import { characters } from '../types';
import AudioManager from '../utils/audio';
import { FeedbackOverlay } from './FeedbackOverlay';
import SoundActivation from './SoundActivation';
import ElevenLabsService from '../utils/elevenLabsService';
import { useToast } from '../context/ToastContext';

interface Store {
  user: {
    language: string;
    answers: number[];
    voiceLanguage?: string;
  } | null;
  updateAnswer: (questionIndex: number, answer: number) => Promise<void>;
  setQuizState: (state: QuizState) => void;
  unlockAchievement: (achievement: any) => void;
  trackQuestionTime: (questionIndex: number, time: number) => void;
  trackIncorrectAttempt: (questionIndex: number) => void;
}

export const Quiz: React.FC = () => {
  const user = useStore((state: Store) => state.user);
  const updateAnswer = useStore((state: Store) => state.updateAnswer);
  const setQuizState = useStore((state: Store) => state.setQuizState);
  const unlockAchievement = useStore((state: Store) => state.unlockAchievement);
  const trackQuestionTime = useStore((state: Store) => state.trackQuestionTime);
  const trackIncorrectAttempt = useStore((state: Store) => state.trackIncorrectAttempt);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAchievement, setShowAchievement] = useState<{ title: string; description: string } | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [showFeedback, setShowFeedback] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [finalCharacter, setFinalCharacter] = useState<Character | null>(null);
  const [currentQuestionText, setCurrentQuestionText] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showLesson, setShowLesson] = useState(true);
  const [translationError, setTranslationError] = useState<string | null>(null);
  const [audioInitialized, setAudioInitialized] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [feedbackExplanation, setFeedbackExplanation] = useState<string>('');
  const audioManager = AudioManager.getInstance();
  const [isReadingOptions, setIsReadingOptions] = useState(false);
  const elevenLabsService = ElevenLabsService.getInstance();
  const toast = useToast();
  const [hasStartedQuiz, setHasStartedQuiz] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (user?.language) {
      setIsLoading(true);
      setTranslationError(null);
      
      // Get questions for the selected language directly
      const questions = getQuestionsSync(user.language);
      setQuestions(questions);
      setIsLoading(false);
    }
  }, [user?.language]);

  useEffect(() => {
    setStartTime(Date.now());
  }, [currentQuestion]);

  useEffect(() => {
    if (currentQuestion === 0 && !hasStartedQuiz) {
      audioManager.playSystemVoice('start_quiz', user?.language || 'English').catch((error) => {
        console.error('Failed to play start quiz audio:', error);
      });
      setHasStartedQuiz(true);
    }
  }, [currentQuestion, hasStartedQuiz, user?.language]);

  const currentQ = questions[currentQuestion];

  useEffect(() => {
    if (currentQ) {
      const questionText = `Question ${currentQuestion + 1} of ${questions.length}. ${currentQ.text}. `;
      const optionsText = currentQ.options.map((opt: string, idx: number) => `Option ${idx + 1}: ${opt}`).join('. ');
      setCurrentQuestionText(questionText + optionsText);
    }
  }, [currentQuestion, currentQ, questions.length]);

  // Add useEffect for automatic audio playback of options
  useEffect(() => {
    const readOptions = async () => {
      if (!showLesson && currentQ && user?.language) {
        setIsReadingOptions(true);
        // Read out each option with a slight delay between them
        for (let i = 0; i < currentQ.options.length; i++) {
          await elevenLabsService.textToSpeech(
            `Option ${i + 1}: ${currentQ.options[i]}`,
            user.language
          );
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
        setIsReadingOptions(false);
      }
    };

    readOptions();

    // Add cleanup function
    return () => {
      // Cancel any ongoing speech
      elevenLabsService.stopAudio();
      setIsReadingOptions(false);
    };
  }, [showLesson, currentQ, user?.language]);

  // Function to preload the next question's audio
  const preloadNextQuestion = useCallback(() => {
    if (!user?.language || currentQuestion >= questions.length - 1) return;
    
    const nextQ = questions[currentQuestion + 1];
    if (!nextQ) return;
    
    console.log('Preloading next question audio...');
    
    // Use the voice language if set, otherwise fall back to content language
    const speechLanguage = user.voiceLanguage || user.language;
    
    // Preload the question text
    audioManager.preloadAudio(nextQ.text, speechLanguage);
    
    // Preload options
    nextQ.options.forEach(option => {
      audioManager.preloadAudio(
        `Option ${nextQ.options.indexOf(option) + 1}: ${option}`, 
        speechLanguage
      );
    });
    
    // Preload feedback system voices
    audioManager.preloadAudio('', speechLanguage, {
      type: 'system',
      systemVoiceId: 'correct_answer'
    });
    
    audioManager.preloadAudio('', speechLanguage, {
      type: 'system',
      systemVoiceId: 'incorrect_answer'
    });
    
    // If it's the second to last question, preload quiz complete voice
    if (currentQuestion === questions.length - 2) {
      audioManager.preloadAudio('', speechLanguage, {
        type: 'system',
        systemVoiceId: 'quiz_complete'
      });
    } else {
      // Otherwise preload next question system voice
      audioManager.preloadAudio('', speechLanguage, {
        type: 'system',
        systemVoiceId: 'next_question'
      });
    }
  }, [currentQuestion, questions, user?.language, user?.voiceLanguage]);
  
  // Add effect to trigger preloading
  useEffect(() => {
    if (showLesson || isReadingOptions) return;
    
    // Preload after a short delay to avoid competing with current audio
    const timer = setTimeout(() => {
      preloadNextQuestion();
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [currentQuestion, showLesson, isReadingOptions, preloadNextQuestion]);

  if (!user) return null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900 flex items-center justify-center p-4">
        <div className="text-white text-2xl">Loading questions for {user.language}...</div>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900 flex items-center justify-center p-4"
      >
        <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
          <button
            onClick={() => setQuizState('LANGUAGE')}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 mx-auto"
          >
            <Home className="w-5 h-5" />
            <span>Choose Another Language</span>
          </button>
          <h2 className="text-2xl font-bold text-white mb-4">
            No Questions Available
          </h2>
          <p className="text-white/80">
            Questions for {user.language} are currently being developed. Please select a different language to continue.
          </p>
        </div>
      </motion.div>
    );
  }

  if (!currentQ) {
    setQuizState('LANGUAGE');
    return null;
  }

  if (showLesson) {
    return (
      <LessonContent
        question={currentQ}
        onContinue={() => setShowLesson(false)}
        onBack={() => {
          if (currentQuestion === 0) {
            setQuizState('LANGUAGE');
          } else {
            setCurrentQuestion(prev => prev - 1);
            setShowLesson(true);
          }
        }}
      />
    );
  }

  const handleOptionSelect = async (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const timeSpent = (Date.now() - startTime) / 1000;
    trackQuestionTime(currentQuestion, timeSpent);

    const isCorrect = optionIndex === currentQ.correctAnswer;
    
    // Generate feedback based on whether the answer is correct
    if (isCorrect) {
      // Array of positive feedback phrases
      const positiveFeedback = [
        "That's correct!",
        "Well done!",
        "Excellent work!",
        "You got it right!",
        "Fantastic job!",
        "Perfect answer!",
        "Great thinking!",
        "That's exactly right!",
        "You're making excellent progress!",
        "Spot on! Keep up the good work!"
      ];
      
      // Pick a random positive feedback message
      setFeedbackMessage(positiveFeedback[Math.floor(Math.random() * positiveFeedback.length)]);
      
      // Provide educational explanation for the correct answer
      setFeedbackExplanation(currentQ.explanation || `The correct answer is ${currentQ.options[currentQ.correctAnswer]}.`);
    } else {
      // Array of encouraging feedback phrases for incorrect answers
      const encouragingFeedback = [
        "That's not quite right.",
        "Not exactly, but that's okay!",
        "Good attempt, but not correct.",
        "Let's learn from this mistake.",
        "Don't worry, learning is a process!",
        "Almost there! Let's see the correct answer.",
        "Not quite, but you're making progress!",
        "Remember, mistakes help us learn!",
        "That's a common misconception. Let's clarify."
      ];
      
      // Pick a random encouraging feedback message
      setFeedbackMessage(encouragingFeedback[Math.floor(Math.random() * encouragingFeedback.length)]);
      
      // Provide educational explanation for why the answer is incorrect and what the correct answer is
      setFeedbackExplanation(
        `The correct answer is ${currentQ.options[currentQ.correctAnswer]}. ` +
        (currentQ.explanation || '')
      );
      
      trackIncorrectAttempt(currentQuestion);
    }

    await updateAnswer(currentQuestion, optionIndex);
    setShowFeedback(true);

    const answeredQuestions = user?.answers.filter((a: number) => a !== -1).length ?? 0;
    if (answeredQuestions === 5) {
      const achievement = {
        id: 'first-milestone',
        title: 'First Milestone!',
        description: 'Completed your first 5 questions',
        icon: 'award',
        type: 'progress',
        progress: 5,
        maxProgress: questions.length,
        unlockedAt: new Date().toISOString()
      };
      unlockAchievement(achievement);
      setShowAchievement({ title: achievement.title, description: achievement.description });
      
      // Play celebration sound
      audioManager.playCelebration();
      
      setTimeout(() => setShowAchievement(null), 3000);
    }

    // Play audio feedback based on whether the answer is correct
    if (isCorrect) {
      audioManager.playSystemVoice('correct_answer', user?.language || 'English');
    } else {
      audioManager.playSystemVoice('incorrect_answer', user?.language || 'English');
    }

    // Extend the feedback display time for more educational value
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedOption(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setShowLesson(true);
      } else {
        handleQuizComplete();
      }
    }, 4000); // Extended from 2000ms to 4000ms
  };

  const handleVoiceInput = (text: string) => {
    const normalizedText = text.toLowerCase();
    const optionNumber = normalizedText.match(/option (\d+)/)?.[1] || 
                        normalizedText.match(/(\d+)/)?.[1];
    
    if (optionNumber) {
      const optionIndex = parseInt(optionNumber) - 1;
      if (optionIndex >= 0 && optionIndex < currentQ.options.length) {
        handleOptionSelect(optionIndex);
      }
    }
  };

  const progress = user.answers.filter(a => a !== -1).length;

  const calculateCharacterType = (answers: number[]) => {
    const characterScores = {
      visionary: {
        points: 0,
        traits: ['innovation', 'leadership', 'future-thinking', 'strategy'],
        questions: [0, 4, 8, 12, 16]
      },
      achiever: {
        points: 0,
        traits: ['performance', 'goals', 'excellence', 'determination'],
        questions: [1, 5, 9, 13, 17]
      },
      explorer: {
        points: 0,
        traits: ['curiosity', 'learning', 'adaptability', 'discovery'],
        questions: [2, 6, 10, 14, 18]
      },
      connector: {
        points: 0,
        traits: ['empathy', 'communication', 'collaboration', 'community'],
        questions: [3, 7, 11, 15, 19]
      }
    };

    answers.forEach((answer, index) => {
      if (characterScores.visionary.questions.includes(index)) {
        characterScores.visionary.points += answer === 1 ? 2 : answer === 2 ? 1 : 0;
      }
      if (characterScores.achiever.questions.includes(index)) {
        characterScores.achiever.points += answer === 1 ? 2 : answer === 2 ? 1 : 0;
      }
      if (characterScores.explorer.questions.includes(index)) {
        characterScores.explorer.points += answer === 1 ? 2 : answer === 2 ? 1 : 0;
      }
      if (characterScores.connector.questions.includes(index)) {
        characterScores.connector.points += answer === 1 ? 2 : answer === 2 ? 1 : 0;
      }
    });

    const sortedScores = Object.entries(characterScores)
      .sort(([,a], [,b]) => b.points - a.points);
    
    const primaryType = sortedScores[0][0];
    const secondaryType = sortedScores[1][0];
    
    return {
      primary: primaryType,
      secondary: secondaryType,
      scores: characterScores,
      description: getHybridDescription(primaryType, secondaryType)
    };
  };

  const getHybridDescription = (primary: string, secondary: string) => {
    const hybridDescriptions = {
      'visionary-achiever': 'You combine innovative thinking with exceptional execution abilities.',
      'visionary-explorer': 'Your forward-thinking nature is enhanced by your curiosity and adaptability.',
      'visionary-connector': 'You inspire others while building strong collaborative networks.',
      'achiever-explorer': 'Your drive for excellence is powered by continuous learning and discovery.',
      'achiever-connector': 'You achieve goals through strong relationships and team leadership.',
      'explorer-connector': 'Your quest for knowledge is enriched by your ability to bring people together.'
    };

    return hybridDescriptions[`${primary}-${secondary}`] || 
           hybridDescriptions[`${secondary}-${primary}`] ||
           'You have a unique combination of leadership qualities.';
  };

  const handleQuizComplete = () => {
    if (user) {
      const characterType = calculateCharacterType(user.answers);
      const character = characters.find(c => c.id === characterType.primary);
      
      setShowResults(true);
      setFinalCharacter(character);
    }
  };

  // Add function to repeat options
  const handleRepeatOptions = async () => {
    if (!currentQ || !user?.language) return;
    
    setIsReadingOptions(true);
    for (let i = 0; i < currentQ.options.length; i++) {
      await elevenLabsService.textToSpeech(
        `Option ${i + 1}: ${currentQ.options[i]}`,
        user.language
      );
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    setIsReadingOptions(false);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
      
      // Play next question voice
      audioManager.playSystemVoice('next_question', user?.language || 'English');
    } else {
      // Save progress and go to results
      handleQuizComplete();
      
      // Play quiz complete message
      audioManager.playSystemVoice('quiz_complete', user?.language || 'English');
      
      setTimeout(() => {
        setQuizState('RESULTS');
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900 p-4 md:p-8">
      {translationError && (
        <div className="bg-yellow-500/20 border border-yellow-500/50 text-yellow-200 px-4 py-2 rounded-lg mb-4">
          {translationError}
        </div>
      )}
      
      {!audioInitialized && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 cursor-pointer"
          onClick={() => {
            try {
              // Use our new SoundActivation logic instead
              setAudioInitialized(true);
            } catch (error) {
              console.error("Error initializing audio:", error);
              setAudioInitialized(true);
            }
          }}
        >
          <Volume2 className="w-5 h-5" />
          <span>Enable Audio</span>
        </div>
      )}
      
      {/* Sound activation for current language */}
      {!audioInitialized && user?.language && user.language !== 'English' && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50">
          <SoundActivation 
            language={user.language} 
            onActivated={() => setAudioInitialized(true)}
          />
        </div>
      )}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 py-8 px-4 text-white"
      >
        <VoiceControl
          textToSpeak={currentQuestionText}
          onVoiceInput={handleVoiceInput}
          autoSpeak={audioInitialized}
          currentQuestion={{
            text: currentQ.text,
            options: currentQ.options
          }}
          onOptionSelect={handleOptionSelect}
        />
        
        <AchievementPopup achievement={showAchievement} />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 sticky top-4 z-10 border border-white/10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuizState('HOME')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Home className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold">Question {currentQuestion + 1} of {questions.length}</h2>
              </div>
              <div className="flex items-center gap-4">
                <Award className="w-6 h-6 text-yellow-400" />
                <span className="text-lg font-semibold">{progress} / {questions.length}</span>
              </div>
            </div>
            <div className="mt-4">
              <ProgressBar progress={progress} total={questions.length} />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/10 shadow-xl"
            >
              <div className="flex gap-2 mb-4">
                {currentQ.category && (
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(currentQ.category)} shadow-lg`}>
                    {currentQ.category}
                  </span>
                )}
                {currentQ.difficulty && (
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getDifficultyColor(currentQ.difficulty)} shadow-lg`}>
                    {currentQ.difficulty}
                  </span>
                )}
              </div>

              <motion.h3 
                className="text-2xl font-semibold mb-8 text-white/90"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {currentQ.text}
              </motion.h3>

              <div className="grid gap-4">
                {currentQ.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    disabled={selectedOption !== null || isReadingOptions}
                    className={`p-4 rounded-xl text-left transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
                      selectedOption === index
                        ? showFeedback
                          ? index === currentQ.correctAnswer
                            ? 'bg-green-500/20 border-green-500/50 shadow-green-500/20'
                            : 'bg-red-500/20 border-red-500/50 shadow-red-500/20'
                          : 'bg-white/20 border-white/50'
                        : 'bg-white/5 hover:bg-white/10 border-transparent'
                    } backdrop-blur-lg border-2 shadow-lg`}
                    initial={false}
                    animate={{
                      scale: selectedOption === index ? 1.02 : 1,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 font-medium text-white/90">
                        {index + 1}
                      </span>
                      <span className="flex-1 text-white/80">{option}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Add repeat button */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleRepeatOptions}
                  disabled={isReadingOptions}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    isReadingOptions
                      ? 'bg-white/5 text-white/50 cursor-not-allowed'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  } transition-colors`}
                >
                  <Volume2 className="w-5 h-5" />
                  {isReadingOptions ? 'Reading...' : 'Repeat Options'}
                </button>
              </div>

              <AnimatePresence>
                {showFeedback && (
                  <FeedbackOverlay
                    isVisible={showFeedback}
                    isCorrect={selectedOption === currentQ.correctAnswer}
                    message={feedbackMessage}
                    explanation={feedbackExplanation}
                    onAnimationComplete={() => {}}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          <motion.div 
            className="flex justify-between items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="text-white/60">
              <Timer className="w-5 h-5 inline-block mr-2" />
              Take your time
            </div>
            {currentQuestion < questions.length - 1 && (
              <div className="text-white/60">
                Next Question <ChevronRight className="w-5 h-5 inline-block" />
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};