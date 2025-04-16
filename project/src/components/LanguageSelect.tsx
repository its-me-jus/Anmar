import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Globe, Languages, Volume2 } from 'lucide-react';
import { useStore } from '../store';
import type { Store } from '../store';
import type { Language } from '../types';
import { getQuestionsSync } from '../lib/questions/index';
import SoundActivation from './SoundActivation';
import { LanguageSelector } from './LanguageSelector';
import { LanguageSettings } from './LanguageSettings';
import { useToast } from '../context/ToastContext';
import AudioManager from '../utils/audio';

const languageData = {
  'English': {
    native: 'English',
    flag: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    info: 'Global language widely used in business and education'
  },
  'Mandarin': {
    native: '中文',
    flag: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    info: 'Most spoken language in the world'
  },
  'Arabic': {
    native: 'العربية',
    flag: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    info: 'Official language in 26 countries'
  },
  'Vietnamese': {
    native: 'Tiếng Việt',
    flag: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    info: 'Spoken by over 95 million people'
  },
  'Cantonese': {
    native: '廣東話',
    flag: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    info: 'Major Chinese dialect spoken in Hong Kong and Guangdong'
  },
  'Punjabi': {
    native: 'ਪੰਜਾਬੀ',
    flag: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    info: 'Widely spoken in India and Pakistan'
  },
  'Greek': {
    native: 'Ελληνικά',
    flag: 'https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    info: 'One of the oldest written languages'
  },
  'Italian': {
    native: 'Italiano',
    flag: 'https://images.unsplash.com/photo-1518730518541-d0843268c287?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    info: 'Rich cultural and historical heritage'
  },
  'Filipino': {
    native: 'Filipino',
    flag: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    info: 'National language of the Philippines'
  },
  'Hindi': {
    native: 'हिन्दी',
    flag: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    info: 'Fourth most spoken language globally'
  },
  'Spanish': {
    native: 'Español',
    flag: 'https://images.unsplash.com/photo-1464790719320-516ecd75af6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    info: 'Second most spoken language by native speakers'
  }
};

const languages: Language[] = [
  'English',
  'Mandarin',
  'Arabic',
  'Vietnamese',
  'Cantonese',
  'Punjabi',
  'Greek',
  'Italian',
  'Filipino',
  'Hindi',
  'Spanish',
];

export const LanguageSelect: React.FC = () => {
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const user = useStore((state: Store) => state.user);
  const setUser = useStore((state: Store) => state.setUser);
  const setQuizState = useStore((state: Store) => state.setQuizState);
  const toast = useToast();
  const audioManager = AudioManager.getInstance();

  const handleLanguageSelect = (language: Language) => {
    if (user) {
      console.log(`Selecting language: ${language}, story mode: ${user.isStoryMode}`);
      
      // For story mode, only allow English
      if (user.isStoryMode && language !== 'English') {
        toast.addToast({
          title: 'English Only',
          description: 'Story mode is currently only available in English',
          status: 'info',
          icon: '🇬🇧'
        });
        // Auto-select English for them
        language = 'English';
      }
      
      try {
        // Get questions for selected language
        const questions = getQuestionsSync(language);
        console.log(`Questions loaded for ${language}:`, questions ? questions.length : 'none');
        
        // Create a clean user state object to avoid any potential state corruption
        const updatedUser = {
          ...user,
          language,
          answers: Array.isArray(questions) ? new Array(questions.length).fill(-1) : [],
          // Keep existing story mode setting
          isStoryMode: user.isStoryMode || false
        };
        
        // Only add story-specific properties if in story mode
        if (updatedUser.isStoryMode) {
          updatedUser.currentStoryId = 'harassment-story-1';  // Match the ID from storyLessons
          updatedUser.currentSceneIndex = 0;
          updatedUser.currentDialogueIndex = 0;
          
          // Set the quiz state to 'STORY' for story mode
          setUser(updatedUser);
          setQuizState('STORY');

          // Play welcome message
          audioManager.playSystemVoice('welcome', language);
        } else {
          // Legacy mode - always go to lesson or quiz state
          // Explicitly remove story properties if they exist
          delete updatedUser.currentStoryId;
          delete updatedUser.currentSceneIndex;
          delete updatedUser.currentDialogueIndex;
          
          // Update user state
          setUser(updatedUser);
          
          // For legacy mode, go to LESSONS for lesson content before quiz
          setQuizState('LESSONS');

          // Play welcome message
          audioManager.playSystemVoice('welcome', language);
        }
        
        console.log('Updated user state:', updatedUser);
      } catch (error) {
        console.error('Error during language selection:', error);
        toast.addToast({
          title: 'Error',
          description: 'Failed to load language data. Please try again.',
          status: 'error',
          icon: '❌'
        });
      }
    }
  };

  const handleLanguageFallback = (language: Language) => {
    toast.addToast({
      title: 'Language Fallback',
      description: `Our virtual instructor is still learning ${language}! Using English for now, but they're practicing every day!`,
      status: 'info',
      icon: '🗣️'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Beautiful global background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
        }}
      >
        {/* Overlay gradient for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-indigo-900/70 to-gray-900/90 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          <div className="flex justify-center items-center mb-8">
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-white" />
              <h2 className="text-3xl font-bold text-white">
                {showAdvancedSettings 
                  ? "Advanced Language Settings" 
                  : user?.isStoryMode 
                    ? "Story Mode - English Only" 
                    : "Select Your Language"
                }
              </h2>
            </div>
          </div>

          {/* Language selection info */}
          {!showAdvancedSettings && (
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 mb-8 border border-white/10">
              <div className="flex items-start gap-4">
                <Languages className="w-6 h-6 text-white/80 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {user?.isStoryMode 
                      ? "Story Mode is available in English only"
                      : "Choose your preferred language"
                    }
                  </h3>
                  <p className="text-white/80">
                    {user?.isStoryMode 
                      ? "Our interactive story training is currently only available in English. Select English to continue."
                      : "Select the language you'd like to use for this training session. All content will be translated."
                    }
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Language grid or advanced settings */}
          {showAdvancedSettings ? (
            <LanguageSettings onBack={() => setShowAdvancedSettings(false)} />
          ) : (
            user?.isStoryMode ? (
              // Only English for Story Mode - Use enhanced selector with voice preview
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <LanguageSelector
                  onSelect={handleLanguageSelect}
                  currentLanguage="English"
                  availableLanguages={['English']}
                />
              </div>
            ) : (
              // All languages for Legacy Mode - Use enhanced selector with voice preview
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <LanguageSelector
                  onSelect={handleLanguageSelect}
                  currentLanguage={user?.language || 'English'}
                />
              </div>
            )
          )}
          
          {/* Mode change button at bottom */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setQuizState('MODE_SELECT')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors border border-white/20 rounded-lg px-4 py-2 hover:bg-white/10"
            >
              <Home className="w-5 h-5" />
              <span>Change Training Mode</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { languages }