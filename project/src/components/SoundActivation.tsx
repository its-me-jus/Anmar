import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import AudioManager from '../utils/audio';
import type { Language } from '../types';

interface SoundActivationProps {
  language?: Language;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onActivated?: () => void;
}

/**
 * Button component to initialize audio context for browsers with autoplay restrictions
 * This is especially important for non-English languages where audio might not work automatically
 */
const SoundActivation: React.FC<SoundActivationProps> = ({ 
  language = 'English',
  className = '',
  size = 'md',
  onActivated
}) => {
  const [activated, setActivated] = useState(false);
  const [activating, setActivating] = useState(false);
  const audioManager = AudioManager.getInstance();

  const sizeClasses = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-3 py-1.5',
    lg: 'text-lg px-4 py-2'
  };
  
  const activateAudio = async () => {
    try {
      setActivating(true);
      
      // Try to create and play a silent sound to unlock audio context
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      oscillator.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(0.001);
      
      // Test play a short audio to confirm activation
      await audioManager.speak(`Audio initialized for ${language}`, {
        language,
        autoDetectLanguage: true
      });
      
      setActivated(true);
      if (onActivated) onActivated();
    } catch (error) {
      console.error('Failed to activate audio:', error);
    } finally {
      setActivating(false);
    }
  };

  if (activated) {
    return null; // Hide button once activated
  }

  return (
    <button
      onClick={activateAudio}
      disabled={activating}
      className={`flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white ${sizeClasses[size]} shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all ${activating ? 'opacity-70' : ''} ${className}`}
    >
      <Volume2 className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />
      <span>{activating ? `Activating ${language} Audio...` : `Enable ${language} Audio`}</span>
    </button>
  );
};

export default SoundActivation; 