/// <reference types="react" />
import { useState, useEffect, useCallback, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { useStore } from '../store';
import AudioManager, { languageVoiceMap } from '../utils/audio';
// Fix the import by using any type instead of State which might not be exported
// import type { State } from '../store';

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
}

interface VoiceControlProps {
  textToSpeak: string;
  onVoiceInput: (text: string) => void;
  autoSpeak?: boolean;
  currentQuestion?: {
    text: string;
    options: string[];
  };
  onOptionSelect?: (index: number) => void;
}

interface SpeechRecognitionEvent extends Event {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
    length: number;
  };
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

export const VoiceControl: React.FC<VoiceControlProps> = ({
  textToSpeak,
  onVoiceInput,
  autoSpeak = false,
  currentQuestion,
  onOptionSelect
}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const audioManager = useRef<AudioManager>(AudioManager.getInstance());
  const user = useStore((state: any) => state.user);

  // Initialize speech recognition
  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = false;
      
      // Set the recognition language based on user's selected language
      const recognitionLang = languageVoiceMap[user?.language || 'English'] || 'en-US';
      recognitionRef.current.lang = recognitionLang;

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const text = event.results[event.results.length - 1][0].transcript.toLowerCase();
        handleVoiceInput(text);
      };

      recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
        if (event.error === 'no-speech') {
          // Restart recognition after a brief pause
          if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
          }
          timeoutRef.current = window.setTimeout(() => {
            if (isListening && recognitionRef.current) {
              try {
                recognitionRef.current.start();
              } catch (e) {
                console.error('Failed to restart recognition:', e);
              }
            }
          }, 1000);
        } else {
          setError(`Speech recognition error: ${event.error}`);
          setIsListening(false);
        }
      };

      recognitionRef.current.onend = () => {
        if (isListening && recognitionRef.current) {
          try {
            recognitionRef.current.start();
          } catch (e) {
            console.error('Failed to restart recognition:', e);
            setIsListening(false);
          }
        }
      };
    } else {
      setError('Speech recognition is not supported in this browser.');
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [isListening, user?.language]);

  const handleVoiceInput = useCallback((text: string) => {
    // Handle option selection by letter (A, B, C) or number (1, 2, 3)
    if (currentQuestion && onOptionSelect) {
      const letterMatch = text.match(/option ([a-c])/i);
      const numberMatch = text.match(/option ([1-3])/);
      
      if (letterMatch) {
        const index = letterMatch[1].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
        if (index >= 0 && index < currentQuestion.options.length) {
          onOptionSelect(index);
          return;
        }
      }
      
      if (numberMatch) {
        const index = parseInt(numberMatch[1]) - 1;
        if (index >= 0 && index < currentQuestion.options.length) {
          onOptionSelect(index);
          return;
        }
      }
      
      // Handle direct option matching
      const optionIndex = currentQuestion.options.findIndex(
        (option: string) => text.toLowerCase().includes(option.toLowerCase())
      );
      if (optionIndex !== -1) {
        onOptionSelect(optionIndex);
        return;
      }
    }

    // Handle other commands
    if (text.includes('repeat question')) {
      speak(currentQuestion?.text || '');
    } else if (text.includes('repeat options')) {
      const optionsText = currentQuestion?.options.map((opt, i) => `Option ${i + 1}: ${opt}`).join('. ');
      speak(optionsText || '');
    } else if (text.includes('help')) {
      speak('You can say: repeat question, repeat options, or select an option by saying its number or letter.');
    } else {
      onVoiceInput(text);
    }
  }, [currentQuestion, onOptionSelect, onVoiceInput]);

  const toggleListening = useCallback(() => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        setError(null);
      } catch (e) {
        console.error('Failed to start recognition:', e);
        setError('Failed to start speech recognition. Please try again.');
        setIsListening(false);
      }
    }
  }, [isListening]);

  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      const language = languageVoiceMap[user?.language || 'English'] || 'en-US';
      audioManager.current.speak(text, { 
        language,
        useElevenLabs: true,
        autoDetectLanguage: true
      }).then(() => setIsSpeaking(false));
      setIsSpeaking(true);
    }
  }, [user?.language]);

  useEffect(() => {
    if (autoSpeak && textToSpeak) {
      speak(textToSpeak);
    }
  }, [autoSpeak, textToSpeak, speak]);

  return (
    <div className="fixed bottom-4 right-4 flex gap-2">
      {error && (
        <div className="absolute bottom-full right-0 mb-2 p-2 bg-red-500/20 border border-red-500/50 rounded text-sm text-white/90 whitespace-nowrap">
          {error}
        </div>
      )}
      <button
        onClick={() => {
          audioManager.current.stop();
          setIsSpeaking(false);
        }}
        className={`p-2 rounded-full transition-colors ${
          isSpeaking ? 'bg-purple-500 text-white' : 'bg-white/10 text-white/60 hover:bg-white/20'
        }`}
      >
        {isSpeaking ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
      </button>
      <button
        onClick={toggleListening}
        className={`p-2 rounded-full transition-colors ${
          isListening ? 'bg-green-500 text-white' : 'bg-white/10 text-white/60 hover:bg-white/20'
        }`}
      >
        {isListening ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
      </button>
    </div>
  );
}; 