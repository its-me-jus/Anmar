import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { useStore } from '../store';
import type { Language, User, QuizState } from '../types';
import { getQuestionsSync } from '../lib/questions/index';
import AudioManager from '../utils/audio';
import { VideoScene } from './VideoScene';

interface Character {
  id: string;
  name: string;
  role: string;
  avatar: string;
  position: 'left' | 'right';
  voiceUrl?: string;
  expressions?: {
    [key: string]: string;
  };
}

interface StoryScene {
  id: string;
  title: string;
  description: string;
  questionIndex: number;
  backgroundImage?: string;
  characters: Character[];
  dialogue: {
    characterId: string;
    text: string;
    delay?: number;
    voiceUrl?: string;
    expression?: string;
  }[];
}

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty?: string;
  explanation?: string;
  feedback?: {
    correct?: string;
    incorrect?: string;
  };
}

const storyScenes: StoryScene[] = [
  {
    id: 'scene-1',
    title: 'Welcome to Workplace Harassment Prevention',
    description: 'Understanding workplace harassment is the first step in creating a safe and respectful work environment.',
    questionIndex: 0,
    backgroundImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    characters: [
      {
        id: 'hr-manager',
        name: 'Sarah Chen',
        role: 'HR Manager',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        position: 'left',
        voiceUrl: 'https://storage.googleapis.com/your-bucket/voices/sarah-chen.mp3',
        expressions: {
          neutral: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
          concerned: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
          supportive: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
        }
      },
      {
        id: 'employee',
        name: 'Alex Thompson',
        role: 'Employee',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        position: 'right',
        voiceUrl: 'https://storage.googleapis.com/your-bucket/voices/alex-thompson.mp3',
        expressions: {
          neutral: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
          worried: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
          relieved: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
        }
      }
    ],
    dialogue: [
      {
        characterId: 'hr-manager',
        text: 'Welcome to our workplace harassment prevention training. I\'m Sarah, and I\'ll be guiding you through this important journey.',
        delay: 0,
        voiceUrl: 'https://storage.googleapis.com/your-bucket/dialogue/sarah-welcome.mp3',
        expression: 'supportive'
      },
      {
        characterId: 'employee',
        text: 'I\'ve been hearing some concerning things at work lately. I\'m not sure what to do.',
        delay: 2000,
        voiceUrl: 'https://storage.googleapis.com/your-bucket/dialogue/alex-concern.mp3',
        expression: 'worried'
      }
    ]
  },
  {
    id: 'scene-2',
    title: 'Identifying Harassment',
    description: 'Learn to recognize different forms of workplace harassment and their impact.',
    questionIndex: 1,
    backgroundImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
    characters: [
      {
        id: 'hr-manager',
        name: 'Sarah Chen',
        role: 'HR Manager',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        position: 'left',
        voiceUrl: 'https://storage.googleapis.com/your-bucket/voices/sarah-chen.mp3',
        expressions: {
          neutral: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
          concerned: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
          supportive: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
        }
      },
      {
        id: 'employee',
        name: 'Alex Thompson',
        role: 'Employee',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        position: 'right',
        voiceUrl: 'https://storage.googleapis.com/your-bucket/voices/alex-thompson.mp3',
        expressions: {
          neutral: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
          worried: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
          relieved: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
        }
      }
    ],
    dialogue: [
      {
        characterId: 'hr-manager',
        text: 'Let\'s work through some scenarios together. This will help you understand how to handle different situations.',
        delay: 0,
        voiceUrl: 'https://storage.googleapis.com/your-bucket/dialogue/sarah-scenarios.mp3',
        expression: 'supportive'
      },
      {
        characterId: 'employee',
        text: 'I\'m ready to learn. What should I do if I witness inappropriate behavior?',
        delay: 2000,
        voiceUrl: 'https://storage.googleapis.com/your-bucket/dialogue/alex-question.mp3',
        expression: 'neutral'
      }
    ]
  },
  {
    id: 'scene-3',
    title: 'Taking Action',
    description: 'Understanding the steps to take when harassment occurs.',
    questionIndex: 2,
    backgroundImage: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=1600&q=80',
    characters: [
      {
        id: 'hr-manager',
        name: 'Sarah Chen',
        role: 'HR Manager',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        position: 'left',
        voiceUrl: 'https://storage.googleapis.com/your-bucket/voices/sarah-chen.mp3',
        expressions: {
          neutral: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
          concerned: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
          supportive: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
        }
      },
      {
        id: 'employee',
        name: 'Alex Thompson',
        role: 'Employee',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        position: 'right',
        voiceUrl: 'https://storage.googleapis.com/your-bucket/voices/alex-thompson.mp3',
        expressions: {
          neutral: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
          worried: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
          relieved: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
        }
      }
    ],
    dialogue: [
      {
        characterId: 'hr-manager',
        text: 'It\'s important to document everything and report incidents promptly. Let\'s go through the proper channels.',
        delay: 0,
        voiceUrl: 'https://storage.googleapis.com/your-bucket/dialogue/sarah-documentation.mp3',
        expression: 'concerned'
      },
      {
        characterId: 'employee',
        text: 'I understand. What if I\'m afraid of retaliation?',
        delay: 2000,
        voiceUrl: 'https://storage.googleapis.com/your-bucket/dialogue/alex-fear.mp3',
        expression: 'worried'
      }
    ]
  },
  {
    id: 'scene-4',
    title: 'Support and Resources',
    description: 'Learning about available support systems and resources.',
    questionIndex: 3,
    backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
    characters: [
      {
        id: 'hr-manager',
        name: 'Sarah Chen',
        role: 'HR Manager',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        position: 'left',
        voiceUrl: 'https://storage.googleapis.com/your-bucket/voices/sarah-chen.mp3',
        expressions: {
          neutral: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
          concerned: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
          supportive: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
        }
      },
      {
        id: 'employee',
        name: 'Alex Thompson',
        role: 'Employee',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        position: 'right',
        voiceUrl: 'https://storage.googleapis.com/your-bucket/voices/alex-thompson.mp3',
        expressions: {
          neutral: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
          worried: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
          relieved: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
        }
      }
    ],
    dialogue: [
      {
        characterId: 'hr-manager',
        text: 'Remember, you\'re not alone. We have confidential support services and employee assistance programs available.',
        delay: 0,
        voiceUrl: 'https://storage.googleapis.com/your-bucket/dialogue/sarah-support.mp3',
        expression: 'supportive'
      },
      {
        characterId: 'employee',
        text: 'That\'s reassuring. I feel more confident about handling these situations now.',
        delay: 2000,
        voiceUrl: 'https://storage.googleapis.com/your-bucket/dialogue/alex-confidence.mp3',
        expression: 'relieved'
      }
    ]
  },
  {
    id: 'scene-5',
    title: 'Creating a Positive Workplace',
    description: 'Exploring strategies for fostering an inclusive and respectful work environment.',
    questionIndex: 4,
    backgroundImage: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?w=1600&q=80',
    characters: [
      {
        id: 'hr-manager',
        name: 'Sarah Chen',
        role: 'HR Manager',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        position: 'left',
        voiceUrl: 'https://storage.googleapis.com/your-bucket/voices/sarah-chen.mp3',
        expressions: {
          neutral: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
          concerned: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
          supportive: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
        }
      },
      {
        id: 'employee',
        name: 'Alex Thompson',
        role: 'Employee',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        position: 'right',
        voiceUrl: 'https://storage.googleapis.com/your-bucket/voices/alex-thompson.mp3',
        expressions: {
          neutral: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
          worried: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
          relieved: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
        }
      }
    ],
    dialogue: [
      {
        characterId: 'hr-manager',
        text: 'Building a positive workplace culture is everyone\'s responsibility. Small actions can make a big difference.',
        delay: 0,
        voiceUrl: 'https://storage.googleapis.com/your-bucket/dialogue/sarah-positive.mp3',
        expression: 'supportive'
      },
      {
        characterId: 'employee',
        text: 'I\'d like to be part of that change. What can I do on a daily basis?',
        delay: 2000,
        voiceUrl: 'https://storage.googleapis.com/your-bucket/dialogue/alex-change.mp3',
        expression: 'neutral'
      }
    ]
  }
];

export const StoryLessonView: React.FC = () => {
  const user = useStore((state: any) => state.user);
  const setQuizState = useStore((state: any) => state.setQuizState);
  const updateAnswer = useStore((state: any) => state.updateAnswer);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(user.currentSceneIndex || 0);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioManager = useRef<AudioManager>(AudioManager.getInstance());

  // Initialize ElevenLabs with API key (only needed if not set via environment variable)
  useEffect(() => {
    // Set API key if passed as URL parameter for testing
    const urlParams = new URLSearchParams(window.location.search);
    const apiKey = urlParams.get('elevenlabs_key');
    if (apiKey) {
      audioManager.current.setElevenLabsApiKey(apiKey);
    }
  }, []);

  // Check if user exists
  if (!user) {
    console.error('No user found');
    setQuizState('SIGNUP');
    return null;
  }

  // Check if user is in story mode
  if (!user.isStoryMode) {
    console.error('User is not in story mode');
    setQuizState('LESSONS');
    return null;
  }

  // Check if user has selected a language
  if (!user.language) {
    console.error('No language selected');
    setQuizState('LANGUAGE');
    return null;
  }

  // Check if user has a valid story ID
  if (!user.currentStoryId) {
    console.error('No story ID selected');
    setQuizState('HOME');
    return null;
  }

  // Get questions for the user's selected language
  const questions = getQuestionsSync(user.language);
  if (!questions || questions.length === 0) {
    console.error(`No questions available for language: ${user.language}`);
    // Fallback to English if questions are not available
    const englishQuestions = getQuestionsSync('English');
    if (!englishQuestions || englishQuestions.length === 0) {
      throw new Error('No questions available in any language');
    }
  }

  const currentScene = storyScenes[currentSceneIndex];
  if (!currentScene) {
    console.error(`No scene found at index ${currentSceneIndex}`);
    setQuizState('HOME');
    return null;
  }

  const currentQuestion = questions[currentScene.questionIndex];
  if (!currentQuestion) {
    console.error(`No question found at index ${currentScene.questionIndex}`);
    setQuizState('HOME');
    return null;
  }

  // Add error handling for missing dialogue index
  if (user.currentDialogueIndex === undefined) {
    console.error('No dialogue index found');
    updateAnswer({
      ...user,
      currentDialogueIndex: 0
    });
  }

  // Add error handling for missing dialogue
  if (!currentScene.dialogue || currentScene.dialogue.length === 0) {
    console.error(`No dialogue found in scene ${currentScene.id}`);
    setQuizState('HOME');
    return null;
  }

  // Add error handling for missing characters
  if (!currentScene.characters || currentScene.characters.length === 0) {
    console.error(`No characters found in scene ${currentScene.id}`);
    setQuizState('HOME');
    return null;
  }

  const [visibleDialogue, setVisibleDialogue] = useState<number[]>([]);
  const [currentExpressions, setCurrentExpressions] = useState<{[key: string]: string}>({});
  const [isAnswerSelected, setIsAnswerSelected] = useState<number | null>(null);
  const [sceneTransition, setSceneTransition] = useState(false);

  useEffect(() => {
    // Reset states when scene changes
    setVisibleDialogue([]);
    setCurrentExpressions({});
    setIsAnswerSelected(null);
    setSceneTransition(false);
    setAudioError(false);

    // Show dialogue with delays
    currentScene.dialogue.forEach((dialogue, index) => {
      const timer = setTimeout(() => {
        setVisibleDialogue((prev: number[]) => [...prev, index]);
        // Update character expressions
        if (dialogue.expression) {
          const character = currentScene.characters.find(c => c.id === dialogue.characterId);
          if (character?.expressions?.[dialogue.expression]) {
            setCurrentExpressions((prev: { [key: string]: string }) => ({
              ...prev,
              [dialogue.characterId]: dialogue.expression as string
            }));
          }
        }
      }, dialogue.delay || 0);
      return () => clearTimeout(timer);
    });

    // Cleanup audio on unmount or scene change
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentSceneIndex, currentScene]);

  const speakDialogue = async (text: string, characterId?: string) => {
    try {
      if (!text) return;
      
      // If character has specific voice settings, use them
      let language = user?.language || 'English';
      
      // Find the character to get voice settings
      let character = undefined;
      if (characterId) {
        character = currentScene.characters.find(c => c.id === characterId);
      }
      
      // Play the dialogue using ElevenLabs
      await audioManager.current.speak(text, {
        language: language,
        storyMode: true, // This will trigger ElevenLabs usage
      });
      
    } catch (error) {
      console.error('Error speaking dialogue:', error);
    }
  };

  const toggleAudio = async (voiceUrl: string) => {
    try {
      if (!voiceUrl) {
        console.warn('No voice URL provided');
        return;
      }

      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          try {
            await audioRef.current.play();
            setIsPlaying(true);
            setAudioError(false);
          } catch (error) {
            console.warn(`Error playing audio: ${error}`);
            setAudioError(true);
            setIsPlaying(false);
            
            // Try ElevenLabs as fallback
            const dialogue = currentScene.dialogue[currentDialogueIndex];
            if (dialogue) {
              speakDialogue(dialogue.text, dialogue.characterId);
            }
          }
        }
      } else {
        // Try to play pre-recorded audio first
        try {
          const audio = new Audio(voiceUrl);
          audio.addEventListener('ended', () => {
            setIsPlaying(false);
          });
          audio.addEventListener('error', (error) => {
            console.warn(`Failed to load audio: ${voiceUrl}`, error);
            setAudioError(true);
            setIsPlaying(false);
            
            // Use ElevenLabs as fallback
            const dialogue = currentScene.dialogue[currentDialogueIndex];
            if (dialogue) {
              speakDialogue(dialogue.text, dialogue.characterId);
            }
          });
          audioRef.current = audio;
          
          await audio.play();
          setIsPlaying(true);
          setAudioError(false);
        } catch (error) {
          console.warn(`Error handling audio: ${voiceUrl}`, error);
          setAudioError(true);
          setIsPlaying(false);
          
          // Use ElevenLabs as fallback
          const dialogue = currentScene.dialogue[currentDialogueIndex];
          if (dialogue) {
            speakDialogue(dialogue.text, dialogue.characterId);
          }
        }
      }
    } catch (error) {
      console.warn(`Error handling audio: ${voiceUrl}`, error);
      setAudioError(true);
      setIsPlaying(false);
    }
  };

  const handleAnswer = (answerIndex: number) => {
    if (user) {
      // Mark the selected answer visually
      setIsAnswerSelected(answerIndex);
      const newAnswers = [...user.answers];
      newAnswers[currentScene.questionIndex] = answerIndex;
      
      // Start scene transition animation
      setSceneTransition(true);
      
      // Add a small delay before transitioning to the next scene
      setTimeout(() => {
        updateAnswer({
          ...user,
          answers: newAnswers,
          currentSceneIndex: currentSceneIndex + 1
        });

        // If we've reached the end of the story, show end screen
        if (currentSceneIndex === storyScenes.length - 1) {
          setQuizState('END_STORY');
        }
      }, 1200);
    }
  };

  const handleBack = () => {
    if (user && currentSceneIndex > 0) {
      updateAnswer({
        ...user,
        currentSceneIndex: currentSceneIndex - 1
      });
      setVisibleDialogue([]);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    // When dialogue changes, speak the new dialogue
    if (
      currentSceneIndex >= 0 &&
      currentSceneIndex < storyScenes.length &&
      currentDialogueIndex >= 0 &&
      currentDialogueIndex < storyScenes[currentSceneIndex].dialogue.length
    ) {
      const dialogue = storyScenes[currentSceneIndex].dialogue[currentDialogueIndex];
      
      // Try to play the pre-recorded audio if available
      if (dialogue.voiceUrl) {
        toggleAudio(dialogue.voiceUrl);
      } else {
        // Otherwise use ElevenLabs
        speakDialogue(dialogue.text, dialogue.characterId);
      }
    }
  }, [currentSceneIndex, currentDialogueIndex]);

  if (showVideo) {
    return (
      <VideoScene
        videoUrl="/videos/welcome.mp4"
        onComplete={() => {
          setShowVideo(false);
          // Start the first dialogue scene
          setCurrentSceneIndex(0);
        }}
        overlays={{
          text: [
            {
              content: "Welcome to Anwar Group",
              position: "top",
              timing: { start: 0, end: 3 }
            },
            {
              content: "Respect at Work Training",
              position: "center",
              timing: { start: 3, end: 6 }
            }
          ],
          buttons: [
            {
              text: "Continue",
              timing: { start: 8 },
              action: "NEXT_SCENE"
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
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${currentScene.backgroundImage})`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-[1px]" />
      </motion.div>

      {/* Scene Transition Overlay */}
      <AnimatePresence>
        {sceneTransition && (
          <motion.div 
            className="absolute inset-0 bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col">
        {/* Navigation */}
        <div className="flex justify-between items-center p-6">
          <button
            onClick={handleBack}
            disabled={currentSceneIndex === 0}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous Scene</span>
          </button>
          <div className="text-white/60">
            Scene {currentSceneIndex + 1} of {storyScenes.length}
          </div>
        </div>

        {/* Characters and Dialogue */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-6xl w-full">
            {/* Scene Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-center"
            >
              <h2 className="text-2xl font-bold text-white">{currentScene.title}</h2>
              <p className="text-white/70">{currentScene.description}</p>
            </motion.div>

            {/* Characters */}
            <div className="relative h-[400px]">
              {currentScene.characters.map((character) => (
                <motion.div
                  key={`character-${character.id}`}
                  initial={{ scale: 0.8, opacity: 0, x: character.position === 'left' ? -50 : 50 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute bottom-0 ${character.position === 'left' ? 'left-1/4' : 'right-1/4'}`}
                >
                  <div className="relative">
                    <motion.img
                      key={`character-image-${character.id}`}
                      src={character.expressions && currentExpressions[character.id] && character.expressions[currentExpressions[character.id]] 
                        ? character.expressions[currentExpressions[character.id]] 
                        : character.avatar}
                      alt={character.name}
                      className="w-48 h-48 rounded-full object-cover border-4 border-white/20"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                      <p className="text-white font-medium">{character.name}</p>
                      <p className="text-white/60 text-sm">{character.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Dialogue */}
            <div className="space-y-4 mt-8">
              {currentScene.dialogue.map((dialogue, index) => (
                <AnimatePresence key={`dialogue-container-${currentScene.id}-${index}`} mode="wait">
                  {visibleDialogue.includes(index) && (
                    <motion.div
                      key={`dialogue-${currentScene.id}-${index}`}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className={`bg-white/10 backdrop-blur-lg rounded-xl p-4 max-w-[80%] ${
                        currentScene.characters.find(c => c.id === dialogue.characterId)?.position === 'left'
                          ? 'ml-0'
                          : 'ml-auto'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-white">{dialogue.text}</p>
                        {dialogue.voiceUrl && !audioError && (
                          <button
                            key={`audio-button-${currentScene.id}-${dialogue.characterId}-${index}`}
                            onClick={() => toggleAudio(dialogue.voiceUrl!)}
                            className="ml-4 text-white/80 hover:text-white transition-colors"
                            aria-label={isPlaying ? "Pause audio" : "Play audio"}
                          >
                            {isPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>

            {/* Question */}
            <motion.div
              key={`question-${currentScene.id}-${currentQuestion.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 mt-8 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {currentQuestion.text}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={`option-${currentScene.id}-${currentQuestion.id}-${index}`}
                    whileHover={{ scale: isAnswerSelected === null ? 1.05 : 1, backgroundColor: isAnswerSelected === null ? 'rgba(255, 255, 255, 0.15)' : undefined }}
                    whileTap={{ scale: isAnswerSelected === null ? 0.95 : 1 }}
                    onClick={() => isAnswerSelected === null && handleAnswer(index)}
                    className={`group relative p-6 bg-white/10 rounded-2xl text-left text-white transition-all duration-300 overflow-hidden ${
                      isAnswerSelected === index ? 'ring-2 ring-green-400 bg-green-500/20' :
                      isAnswerSelected !== null ? 'opacity-50' : 'hover:bg-white/15'
                    }`}
                  >
                    {/* Background gradient effect */}
                    <div 
                      key={`gradient-${currentScene.id}-${currentQuestion.id}-${index}`}
                      className={`absolute inset-0 bg-gradient-to-br ${
                        isAnswerSelected === index ? 'from-green-500/20 to-green-400/5' : 'from-white/5 to-transparent'
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} 
                    />
                    
                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`w-8 h-8 flex items-center justify-center rounded-full ${
                          isAnswerSelected === index ? 'bg-green-500/30 text-white' : 'bg-white/10 text-white/80'
                        } font-medium`}>
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-lg font-medium">{option}</span>
                      </div>
                    </div>

                    {/* Hover effect */}
                    <div 
                      key={`border-${currentScene.id}-${currentQuestion.id}-${index}`}
                      className={`absolute inset-0 border-2 ${
                        isAnswerSelected === index ? 'border-green-400/50' : 'border-white/0 group-hover:border-white/20'
                      } rounded-2xl transition-all duration-300`} 
                    />
                    
                    {/* Selection indicator */}
                    {isAnswerSelected === index && (
                      <motion.div 
                        key={`selection-${currentScene.id}-${currentQuestion.id}-${index}`}
                        className="absolute top-2 right-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StoryLessonView; 