import React, { useState } from 'react';
import type { Language } from '../types';
import { ElevenLabsService } from '../utils/elevenLabsService';
import { systemVoices } from '../lib/systemVoices';
import { motion } from 'framer-motion';

interface LanguageSelectorProps {
  onSelect: (language: Language) => void;
  currentLanguage: Language;
  availableLanguages?: Language[];
}

// Language data with flags and native names
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

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onSelect,
  currentLanguage,
  availableLanguages,
}) => {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [previewLanguage, setPreviewLanguage] = useState<Language | null>(null);
  const elevenLabs = ElevenLabsService.getInstance();

  const handleLanguageSelect = async (language: Language) => {
    // Skip voice preview due to API issues
    console.log('Selecting language:', language);
    
    // Temporarily animate as if we're previewing
    setIsPreviewing(true);
    setPreviewLanguage(language);
    
    // Wait a moment for visual feedback, then select the language
    setTimeout(() => {
      setIsPreviewing(false);
      setPreviewLanguage(null);
      onSelect(language);
    }, 500);
    
    // Commented out voice preview functionality due to API issues
    /*
    try {
      const previewAudio = await elevenLabs.previewVoice(language);
      if (previewAudio) {
        const audio = new Audio(URL.createObjectURL(previewAudio));
        await audio.play();
        audio.onended = () => {
          URL.revokeObjectURL(audio.src);
          setIsPreviewing(false);
          setPreviewLanguage(null);
          onSelect(language);
        };
      }
    } catch (error) {
      console.error('Error previewing voice:', error);
      setIsPreviewing(false);
      setPreviewLanguage(null);
      onSelect(language);
    }
    */
  };

  // Default list of all supported languages
  const defaultLanguages: Language[] = [
    'English',
    'Spanish',
    'Mandarin',
    'Arabic',
    'Vietnamese',
    'Cantonese',
    'Punjabi',
    'Greek',
    'Italian',
    'Filipino',
    'Hindi'
  ];

  // Use filtered languages if provided, otherwise use all languages
  const displayedLanguages = availableLanguages || defaultLanguages;

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="language-selector">
      <motion.h3 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-6"
      >
        Select Your Language
      </motion.h3>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="language-grid"
      >
        {displayedLanguages.map((language) => (
          <motion.button
            key={language}
            variants={itemVariants}
            onClick={() => handleLanguageSelect(language)}
            disabled={isPreviewing}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className={`language-button ${currentLanguage === language ? 'active' : ''} ${previewLanguage === language ? 'previewing' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${languageData[language]?.flag})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderColor: currentLanguage === language ? 'rgba(59, 130, 246, 0.8)' : 'rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-xl font-bold text-white">{language}</span>
              <span className="text-md opacity-90 mt-1 text-white">{languageData[language]?.native}</span>
              <span className="text-xs mt-2 opacity-80 text-white/70">{languageData[language]?.info}</span>
            </div>
            {currentLanguage === language && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="checkmark"
              >
                ✓
              </motion.span>
            )}
            {previewLanguage === language && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl"
              >
                <div className="flex flex-col items-center">
                  <div className="sound-wave">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.button>
        ))}
      </motion.div>
      
      {isPreviewing && previewLanguage !== null && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="preview-indicator"
        >
          <div className="animate-pulse bg-blue-600/30 backdrop-blur-md px-6 py-3 rounded-full inline-flex items-center">
            <span className="mr-3 text-xl">🔊</span> 
            <span className="text-white font-medium">Listening to {previewLanguage} voice sample...</span>
          </div>
        </motion.div>
      )}
      
      <style>{`
        .language-selector {
          max-width: 900px;
          margin: 0 auto;
        }

        .language-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.25rem;
          margin-top: 1.5rem;
        }

        .language-button {
          position: relative;
          padding: 1.5rem 1rem;
          border: 2px solid;
          border-radius: 16px;
          cursor: pointer;
          font-size: 1rem;
          text-align: center;
          min-height: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .language-button:hover {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          border-color: rgba(59, 130, 246, 0.5);
        }

        .language-button.active {
          border-width: 3px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }

        .language-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none !important;
        }

        .language-button.previewing {
          border-color: rgba(59, 130, 246, 0.8);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
        }

        .checkmark {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(59, 130, 246, 0.9);
          color: white;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .preview-indicator {
          margin-top: 2rem;
          text-align: center;
          color: white;
          font-size: 1.1rem;
        }
        
        .sound-wave {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3px;
          height: 40px;
          margin-bottom: 8px;
        }
        
        .sound-wave span {
          display: block;
          width: 4px;
          height: 20px;
          background-color: rgba(59, 130, 246, 0.9);
          border-radius: 4px;
          animation: sound-wave 1.2s infinite ease-in-out;
        }
        
        .sound-wave span:nth-child(1) {
          animation-delay: 0s;
        }
        
        .sound-wave span:nth-child(2) {
          animation-delay: 0.2s;
          height: 30px;
        }
        
        .sound-wave span:nth-child(3) {
          animation-delay: 0.4s;
          height: 40px;
        }
        
        .sound-wave span:nth-child(4) {
          animation-delay: 0.6s;
          height: 30px;
        }
        
        .sound-wave span:nth-child(5) {
          animation-delay: 0.8s;
        }
        
        @keyframes sound-wave {
          0%, 100% {
            transform: scaleY(0.5);
          }
          50% {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  );
}; 