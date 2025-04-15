import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, Volume2, Home } from 'lucide-react';
import { useStore } from '../store';
import type { Language } from '../types';
import type { Store } from '../store';
import { LanguageSelector } from './LanguageSelector';
import AudioManager from '../utils/audio';
import { useToast } from '../context/ToastContext';

interface LanguageSettingsProps {
  onBack?: () => void;
}

export const LanguageSettings: React.FC<LanguageSettingsProps> = ({ onBack }) => {
  const [showVoiceOptions, setShowVoiceOptions] = useState(false);
  const user = useStore((state: Store) => state.user);
  const setUser = useStore((state: Store) => state.setUser);
  const toast = useToast();
  const audioManager = AudioManager.getInstance();

  const handleTextLanguageSelect = (language: Language) => {
    if (!user) return;
    
    // Update text language only
    const updatedUser = {
      ...user,
      language // Keep this as the text language
    };
    
    setUser(updatedUser);
    toast.addToast({
      title: 'Text Language Updated',
      description: `Content will be displayed in ${language}`,
      status: 'success',
      icon: '📝'
    });
    
    // Show voice language options after text language is selected
    setShowVoiceOptions(true);
  };

  const handleVoiceLanguageSelect = (language: Language) => {
    if (!user) return;
    
    // Update voice language only
    const updatedUser = {
      ...user,
      voiceLanguage: language // Add voice language as a new property
    };
    
    setUser(updatedUser);
    
    // Preview the selected voice
    audioManager.speak("This is a preview of your selected voice language.", {
      language: language
    });
    
    toast.addToast({
      title: 'Voice Language Updated',
      description: `Voice will be spoken in ${language}`,
      status: 'success',
      icon: '🔊'
    });
    
    // Return to the previous screen
    if (onBack) {
      setTimeout(() => {
        onBack();
      }, 2000);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={showVoiceOptions ? 'voice' : 'text'}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="language-settings bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
      >
        {!showVoiceOptions ? (
          <div className="text-language-selection">
            <div className="flex items-start gap-4 mb-6">
              <Languages className="w-8 h-8 text-white/80 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Choose Content Language
                </h3>
                <p className="text-white/80 text-lg">
                  Select the language for quiz text and content. You'll be able to choose a separate voice language next.
                </p>
              </div>
            </div>
            
            <LanguageSelector
              onSelect={handleTextLanguageSelect}
              currentLanguage={user?.language || 'English'}
            />
          </div>
        ) : (
          <div className="voice-language-selection">
            <div className="flex items-start gap-4 mb-6">
              <Volume2 className="w-8 h-8 text-white/80 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Choose Voice Language
                </h3>
                <p className="text-white/80 text-lg">
                  Select the language for the spoken voice. This can be different from your content language.
                </p>
              </div>
            </div>
            
            <LanguageSelector
              onSelect={handleVoiceLanguageSelect}
              currentLanguage={user?.voiceLanguage || user?.language || 'English'}
            />
            
            <button 
              onClick={() => setShowVoiceOptions(false)}
              className="mt-6 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/90 hover:text-white transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Back to Content Language</span>
            </button>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default LanguageSettings; 