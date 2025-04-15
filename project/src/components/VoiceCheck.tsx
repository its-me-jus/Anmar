import React, { useState } from 'react';
import AudioManager from '../utils/audio';
import { languages } from './LanguageSelect';
import { Language } from '../types';
import { Volume2, AlertTriangle, CheckCircle, Loader, Home } from 'lucide-react';
import { useStore } from '../store';
import type { Store } from '../store';
// import { systemVoices } from '../lib/systemVoices';
import { useToast } from '../context/ToastContext';

// Temporary SystemVoice interface
interface SystemVoice {
  id: string;
  text: string;
  file: string;
}

// Temporary minimal systemVoices definition with just English voices
const systemVoices = {
  English: [
    {
      id: 'welcome',
      text: "Welcome to your workplace training! I'll be your virtual instructor today.",
      file: "audio/system/en/welcome.mp3"
    },
    {
      id: 'start_quiz',
      text: "Great! Let's begin the quiz.",
      file: "audio/system/en/start_quiz.mp3"
    },
    {
      id: 'next_question',
      text: "Moving on to the next question...",
      file: "audio/system/en/next_question.mp3" 
    }
  ]
};

/**
 * Component to test and diagnose ElevenLabs voice IDs for all supported languages
 */
const VoiceCheck: React.FC = () => {
  const [results, setResults] = useState<Record<Language, { status: 'pending' | 'success' | 'failed', message?: string }>>({} as any);
  const [systemResults, setSystemResults] = useState<Record<string, { status: 'pending' | 'success' | 'failed', message?: string }>>({} as any);
  const [isChecking, setIsChecking] = useState(false);
  const [isCheckingSystem, setIsCheckingSystem] = useState(false);
  const audioManager = AudioManager.getInstance();
  const setQuizState = useStore((state: Store) => state.setQuizState);
  const toast = useToast();

  const testVoice = async (language: Language) => {
    try {
      // Mark this language as pending
      setResults(prev => ({
        ...prev,
        [language]: { status: 'pending' }
      }));

      // Try to speak a test phrase in this language
      const testText = `This is a test for ${language} voice.`;
      await audioManager.speak(testText, {
        language,
        useElevenLabs: true,
        onLanguageFallback: (fallbackLanguage) => {
          if (fallbackLanguage !== language) {
            toast.addToast({
              title: 'Language Fallback',
              description: `Falling back to ${fallbackLanguage} for ${language}`,
              status: 'warning',
              icon: '🗣️'
            });
          }
        }
      });

      // If success, mark it
      setResults(prev => ({
        ...prev,
        [language]: { status: 'success' }
      }));
      
      return true;
    } catch (error) {
      console.error(`Error testing ${language} voice:`, error);
      
      // Mark as failed with error message
      setResults(prev => ({
        ...prev,
        [language]: { 
          status: 'failed', 
          message: error instanceof Error ? error.message : String(error)
        }
      }));
      
      return false;
    }
  };

  const testSystemVoice = async (id: string, language: Language = 'English') => {
    try {
      // Mark this system voice as pending
      setSystemResults(prev => ({
        ...prev,
        [id]: { status: 'pending' }
      }));

      // Try to play the system voice
      await audioManager.playSystemVoice(id, language);

      // If success, mark it
      setSystemResults(prev => ({
        ...prev,
        [id]: { status: 'success' }
      }));
      
      return true;
    } catch (error) {
      console.error(`Error testing system voice ${id}:`, error);
      
      // Mark as failed with error message
      setSystemResults(prev => ({
        ...prev,
        [id]: { 
          status: 'failed', 
          message: error instanceof Error ? error.message : String(error)
        }
      }));
      
      return false;
    }
  };

  const checkAllVoices = async () => {
    setIsChecking(true);
    
    const results: Record<string, boolean> = {};
    
    // Test each language one by one
    for (const lang of languages) {
      results[lang] = await testVoice(lang);
      // Add a small delay to avoid overwhelming the API
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    setIsChecking(false);
    console.log('Voice check results:', results);
  };

  const checkAllSystemVoices = async () => {
    setIsCheckingSystem(true);
    
    const results: Record<string, boolean> = {};
    
    // Get all system voice IDs from English
    const voiceIds = systemVoices.English.map(v => v.id);
    
    // Test each system voice one by one
    for (const id of voiceIds) {
      results[id] = await testSystemVoice(id);
      // Add a small delay to avoid overwhelming the API
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    setIsCheckingSystem(false);
    console.log('System voice check results:', results);
  };

  return (
    <div className="bg-slate-900 text-white p-6 rounded-lg max-w-4xl mx-auto my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Volume2 className="w-6 h-6" />
          Voice System Diagnostic
        </h2>
        <button
          onClick={() => setQuizState('LANGUAGE')}
          className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded flex items-center gap-1"
        >
          <Home className="w-4 h-4" />
          Back
        </button>
      </div>
      
      <h3 className="text-xl font-semibold mb-4">ElevenLabs Voices</h3>
      <div className="mb-6">
        <button 
          onClick={checkAllVoices} 
          disabled={isChecking}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center gap-2 disabled:opacity-50"
        >
          {isChecking ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Testing Voices...
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5" />
              Test All Voices
            </>
          )}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {languages.map(lang => (
          <div 
            key={lang} 
            className={`p-4 rounded-lg border ${
              !results[lang] ? 'border-gray-700 bg-gray-800/50' :
              results[lang].status === 'success' ? 'border-green-500/30 bg-green-900/20' :
              results[lang].status === 'failed' ? 'border-red-500/30 bg-red-900/20' :
              'border-yellow-500/30 bg-yellow-900/20'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{lang}</span>
              {results[lang] && (
                <span>
                  {results[lang].status === 'success' && <CheckCircle className="w-5 h-5 text-green-500" />}
                  {results[lang].status === 'failed' && <AlertTriangle className="w-5 h-5 text-red-500" />}
                  {results[lang].status === 'pending' && <Loader className="w-5 h-5 text-yellow-500 animate-spin" />}
                </span>
              )}
            </div>
            
            <div className="flex mt-2 gap-2">
              <button
                onClick={() => testVoice(lang)}
                disabled={isChecking || results[lang]?.status === 'pending'}
                className="px-3 py-1 text-sm bg-indigo-600/50 hover:bg-indigo-600 rounded disabled:opacity-50"
              >
                Test
              </button>
              
              {results[lang]?.status === 'failed' && (
                <div className="text-xs text-red-400 mt-1 overflow-hidden text-ellipsis">
                  Failed to load voice
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-4">System Voices</h3>
      <div className="mb-6">
        <button 
          onClick={checkAllSystemVoices} 
          disabled={isCheckingSystem}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center gap-2 disabled:opacity-50"
        >
          {isCheckingSystem ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Testing System Voices...
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5" />
              Test All System Voices
            </>
          )}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {systemVoices.English.map(voice => (
          <div 
            key={voice.id} 
            className={`p-4 rounded-lg border ${
              !systemResults[voice.id] ? 'border-gray-700 bg-gray-800/50' :
              systemResults[voice.id].status === 'success' ? 'border-green-500/30 bg-green-900/20' :
              systemResults[voice.id].status === 'failed' ? 'border-red-500/30 bg-red-900/20' :
              'border-yellow-500/30 bg-yellow-900/20'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{voice.id}</span>
              {systemResults[voice.id] && (
                <span>
                  {systemResults[voice.id].status === 'success' && <CheckCircle className="w-5 h-5 text-green-500" />}
                  {systemResults[voice.id].status === 'failed' && <AlertTriangle className="w-5 h-5 text-red-500" />}
                  {systemResults[voice.id].status === 'pending' && <Loader className="w-5 h-5 text-yellow-500 animate-spin" />}
                </span>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-400 italic">"{voice.text.substring(0, 60)}..."</p>
              <div className="flex gap-2">
                <button
                  onClick={() => testSystemVoice(voice.id)}
                  disabled={isCheckingSystem || systemResults[voice.id]?.status === 'pending'}
                  className="px-3 py-1 text-sm bg-indigo-600/50 hover:bg-indigo-600 rounded disabled:opacity-50"
                >
                  Test
                </button>
                
                {systemResults[voice.id]?.status === 'failed' && (
                  <div className="text-xs text-red-400 mt-1 overflow-hidden text-ellipsis">
                    Failed to load voice
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-sm text-gray-400">
        <p>This tool tests the voices configured for your application.</p>
        <p>ElevenLabs voices are used for dynamic text-to-speech, while system voices are pre-defined messages.</p>
      </div>
    </div>
  );
};

export default VoiceCheck; 