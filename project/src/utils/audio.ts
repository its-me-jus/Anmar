import { questionVoiceMap, optionVoiceMap, feedbackVoiceMap } from '../lib/voiceMappings';
// import { systemVoices } from '../lib/systemVoices';
import type { Language } from '../types';
import ElevenLabsService from './elevenLabsService';

// Temporary SystemVoice interface
interface SystemVoice {
  id: string;
  text: string;
  file: string;
}

// Temporary minimal systemVoices definition
const systemVoices: Record<Language, SystemVoice[]> = {
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
    },
    {
      id: 'correct_answer',
      text: "Excellent work! That's the correct answer.",
      file: "audio/system/en/correct.mp3"
    },
    {
      id: 'incorrect_answer',
      text: "Not quite right, but don't worry!",
      file: "audio/system/en/incorrect.mp3"
    },
    {
      id: 'quiz_complete',
      text: "Congratulations! You've completed the quiz.",
      file: "audio/system/en/complete.mp3"
    },
    {
      id: 'language_fallback',
      text: "I'm still learning to speak that language fluently!",
      file: "audio/system/en/language_fallback.mp3"
    }
  ],
  Arabic: [],
  Mandarin: [],
  Spanish: [],
  Vietnamese: [],
  Cantonese: [],
  Punjabi: [],
  Greek: [],
  Italian: [],
  Filipino: [],
  Hindi: []
};

interface SpeechOptions {
  language?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
  useElevenLabs?: boolean;
  storyMode?: boolean;
  autoDetectLanguage?: boolean;
  type?: 'question' | 'option' | 'feedback' | 'system';
  systemVoiceId?: string;
  onLanguageFallback?: (language: Language) => void;
}

/**
 * Maps language names to browser speech synthesis language codes
 * Used as a fallback when pre-recorded audio is not available
 */
export const languageVoiceMap: Record<string, string> = {
  'English': 'en-US',
  'Mandarin': 'zh-CN',
  'Arabic': 'ar-SA',
  'Vietnamese': 'vi-VN',
  'Cantonese': 'zh-HK',
  'Punjabi': 'pa-IN',
  'Greek': 'el-GR',
  'Filipino': 'fil-PH',
  'Hindi': 'hi-IN',
  'Italian': 'it-IT',
  'Spanish': 'es-ES'
};

class AudioManager {
  private static instance: AudioManager;
  private speechSynthesis: typeof window.speechSynthesis;
  private audioContext: AudioContext | null = null;
  private audioCache: Map<string, HTMLAudioElement> = new Map();
  private elevenLabs: ElevenLabsService;
  private currentAudio: HTMLAudioElement | null = null;
  private preloadCache: Map<string, HTMLAudioElement | Blob> = new Map();
  private currentlyPreloading: Set<string> = new Set();

  private constructor() {
    this.speechSynthesis = window.speechSynthesis;
    this.initAudioContext();
    this.elevenLabs = ElevenLabsService.getInstance();
    
    // Initialize with the environment variable if available
    if (import.meta.env.VITE_ELEVENLABS_API_KEY) {
      console.log('Setting ElevenLabs API key from environment variable');
      this.elevenLabs.setApiKey(import.meta.env.VITE_ELEVENLABS_API_KEY);
      
      // Verify the API key asynchronously 
      this.verifyElevenLabsConnection();
    } else {
      console.warn('No ElevenLabs API key found in environment variables');
    }
  }

  private initAudioContext() {
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  public static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  private getPrerecordedPath(text: string, language: Language = 'English'): string | null {
    console.log('Looking for pre-recorded audio for text:', text);
    console.log('Language:', language);
    
    // Check question mappings
    if (questionVoiceMap[language]?.[text]) {
      console.log('Found pre-recorded audio path:', questionVoiceMap[language][text]);
      return questionVoiceMap[language][text];
    }
    // Check option mappings
    if (optionVoiceMap[language]?.[text]) {
      console.log('Found pre-recorded audio path:', optionVoiceMap[language][text]);
      return optionVoiceMap[language][text];
    }
    // Check feedback mappings
    if (feedbackVoiceMap[language]?.[text]) {
      console.log('Found pre-recorded audio path:', feedbackVoiceMap[language][text]);
      return feedbackVoiceMap[language][text];
    }
    console.log('No pre-recorded audio found, will fall back to speech synthesis');
    return null;
  }

  private async playAudioFile(path: string): Promise<void> {
    console.log('Attempting to play audio file:', path);
    return new Promise((resolve, reject) => {
      let audio = this.audioCache.get(path);
      
      if (!audio) {
        console.log('Creating new Audio element for:', path);
        audio = new Audio(path);
        
        // Add error handling with specific error messages
        audio.onerror = (e) => {
          const error = e as ErrorEvent;
          let errorMessage = 'Unknown audio playback error';
          
          if (audio?.error) {
            switch (audio.error.code) {
              case MediaError.MEDIA_ERR_ABORTED:
                errorMessage = 'Audio playback aborted';
                break;
              case MediaError.MEDIA_ERR_NETWORK:
                errorMessage = 'Network error while loading audio';
                break;
              case MediaError.MEDIA_ERR_DECODE:
                errorMessage = 'Audio decoding error';
                break;
              case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                errorMessage = `Audio format not supported: ${path}`;
                break;
            }
          }
          
          console.error('Audio error:', errorMessage);
          reject(new Error(`Failed to load audio file: ${path}`));
        };
        
        audio.oncanplaythrough = () => {
          console.log('Audio file loaded and ready to play:', path);
        };
        
        this.audioCache.set(path, audio);
      }

      audio.onended = () => {
        console.log('Audio playback completed:', path);
        resolve();
      };
      
      // Handle playback errors
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Play error:', error);
          // Try to recover by recreating the audio element
          this.audioCache.delete(path);
          reject(error);
        });
      }
    });
  }

  private getMappedLanguage(languageCode: string): Language {
    const languageMap: Record<string, Language> = {
      'en': 'English',
      'ar': 'Arabic',
      'zh': 'Mandarin',
      'es': 'Spanish',
      'vi': 'Vietnamese',
      'yue': 'Cantonese',
      'pa': 'Punjabi',
      'el': 'Greek',
      'it': 'Italian',
      'fil': 'Filipino',
      'hi': 'Hindi'
    };
    
    return languageMap[languageCode] || 'English';
  }

  /**
   * Sets the ElevenLabs API key
   */
  public setElevenLabsApiKey(apiKey: string): void {
    this.elevenLabs.setApiKey(apiKey);
  }

  /**
   * Automatically detects the language of the provided text
   * Returns the detected language code or defaults to English
   */
  private async detectLanguage(text: string): Promise<Language> {
    try {
      // Use browser's Intl.Locale API for language detection if available
      if (window.Intl && typeof window.Intl.Locale === 'function') {
        const words = text.split(/\s+/);
        
        // Check for specific language patterns
        // Mandarin/Chinese (has Chinese characters)
        if (/[\u4E00-\u9FFF]/.test(text)) {
          // Differentiate between Mandarin and Cantonese is complex, default to Mandarin
          return 'Mandarin';
        }
        
        // Arabic (has Arabic script)
        if (/[\u0600-\u06FF]/.test(text)) {
          return 'Arabic';
        }
        
        // Hindi (has Devanagari script)
        if (/[\u0900-\u097F]/.test(text)) {
          return 'Hindi';
        }
        
        // Greek (has Greek script)
        if (/[\u0370-\u03FF]/.test(text)) {
          return 'Greek';
        }
        
        // Spanish detection (looking for common Spanish words)
        const spanishMarkers = ['el', 'la', 'los', 'las', 'un', 'una', 'es', 'son', 'está', 'están', 'y', 'o', 'pero', 'porque', 'que', 'cómo', 'quién', 'dónde'];
        const spanishWordCount = words.filter(word => spanishMarkers.includes(word.toLowerCase())).length;
        const spanishRatio = spanishWordCount / words.length;
        
        if (spanishRatio > 0.2) {
          return 'Spanish';
        }
        
        // Add more language detection logic as needed for other supported languages
        
        // Fall back to English for any undetected language
        return 'English';
      }
      
      console.warn('Intl.Locale API not available, defaulting to English');
      return 'English';
    } catch (error) {
      console.error('Error in language detection:', error);
      return 'English';
    }
  }

  /**
   * Preloads audio for future use
   */
  public preloadAudio(text: string, language: Language = 'English', options: SpeechOptions = {}): void {
    // Generate a cache key for this audio request
    const cacheKey = this.generateCacheKey(text, language, options);
    
    // Skip if already preloaded or currently preloading
    if (this.preloadCache.has(cacheKey) || this.currentlyPreloading.has(cacheKey)) {
      console.log('Already preloaded or preloading:', text.substring(0, 20));
      return;
    }
    
    console.log('Preloading audio for:', text.substring(0, 20));
    this.currentlyPreloading.add(cacheKey);
    
    // If it's a system voice, try to preload it
    if (options.type === 'system' && options.systemVoiceId) {
      this.preloadSystemVoice(options.systemVoiceId, language)
        .then(() => {
          this.currentlyPreloading.delete(cacheKey);
        })
        .catch(error => {
          console.error('Error preloading system voice:', error);
          this.currentlyPreloading.delete(cacheKey);
        });
      return;
    }
    
    // For text speech, preload from various sources
    const prerecordedPath = this.getPrerecordedPath(text, language);
    if (prerecordedPath) {
      // Preload pre-recorded audio
      const audio = new Audio();
      audio.src = prerecordedPath;
      audio.preload = 'auto';
      
      audio.oncanplaythrough = () => {
        this.preloadCache.set(cacheKey, audio);
        this.currentlyPreloading.delete(cacheKey);
        console.log('Preloaded audio file successfully:', prerecordedPath);
      };
      
      audio.onerror = () => {
        this.currentlyPreloading.delete(cacheKey);
        console.error('Error preloading audio file:', prerecordedPath);
      };
      
      // Start loading
      audio.load();
    } else {
      // For ElevenLabs TTS, pregenerate and cache
      this.elevenLabs.preloadTextToSpeech(text, language, options)
        .then((blob: Blob | null) => {
          if (blob) {
            this.preloadCache.set(cacheKey, blob);
            console.log('Preloaded TTS successfully:', text.substring(0, 20));
          }
          this.currentlyPreloading.delete(cacheKey);
        })
        .catch((error: Error) => {
          console.error('Error preloading TTS:', error);
          this.currentlyPreloading.delete(cacheKey);
        });
    }
  }

  /**
   * Preload system voice
   */
  private async preloadSystemVoice(id: string, language: Language): Promise<void> {
    // Find the system voice
    const systemVoice = systemVoices[language]?.find(v => v.id === id);
    
    if (!systemVoice) {
      console.warn(`System voice with id "${id}" not found for language ${language}`);
      // Try finding it in English as a fallback
      const englishVoice = systemVoices['English']?.find(v => v.id === id);
      if (englishVoice && englishVoice.file) {
        await this.preloadAudioFile(englishVoice.file);
      }
      return;
    }
    
    // If the voice has a pre-recorded file, preload it
    if (systemVoice.file) {
      await this.preloadAudioFile(systemVoice.file);
    } else {
      // Otherwise, preload with ElevenLabs
      await this.elevenLabs.preloadTextToSpeech(systemVoice.text, language, {
        type: 'system',
        systemVoiceId: id
      });
    }
  }

  /**
   * Preload an audio file
   */
  private preloadAudioFile(path: string): Promise<void> {
    return new Promise((resolve, reject) => {
      // Skip if already in cache
      if (this.audioCache.has(path)) {
        resolve();
        return;
      }
      
      console.log('Preloading audio file:', path);
      const audio = new Audio(path);
      audio.preload = 'auto';
      
      audio.oncanplaythrough = () => {
        this.audioCache.set(path, audio);
        console.log('Preloaded audio file successfully:', path);
        resolve();
      };
      
      audio.onerror = (error) => {
        console.error('Error preloading audio file:', path, error);
        reject(error);
      };
      
      // Start loading
      audio.load();
    });
  }

  /**
   * Generate a cache key for audio requests
   */
  private generateCacheKey(text: string, language: Language, options: SpeechOptions): string {
    const key = `${language}:${options.type || 'text'}:${options.systemVoiceId || ''}:${text.substring(0, 50)}`;
    return key;
  }

  /**
   * Speaks the provided text using either pre-recorded audio, ElevenLabs, or speech synthesis
   */
  public async speak(
    text: string,
    options: SpeechOptions = {}
  ): Promise<void> {
    // Temporarily disable audio to avoid 404 errors
    console.log('Audio playback disabled for:', text.substring(0, 20));
    return;
    
    // The rest of the function will be skipped
    // ...
  }

  /**
   * Plays a system voice prompt
   */
  public async playSystemVoice(
    voiceId: string,
    language: Language = 'English'
  ): Promise<void> {
    // Temporarily disable audio to avoid 404 errors
    console.log('System voice playback disabled for:', voiceId);
    return;
    
    // The rest of the function will be skipped
    // ...
  }

  private async createTone(frequency: number, duration: number, type: OscillatorType = 'sine'): Promise<void> {
    this.initAudioContext();
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    
    // Create a nice envelope
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + duration);

    return new Promise(resolve => {
      setTimeout(resolve, duration * 1000);
    });
  }

  /**
   * Play a sound for correct answers
   */
  public async playCorrect(): Promise<void> {
    // Play a happy sound (major chord arpeggio)
    await this.createTone(440, 0.1); // A4
    await this.createTone(554.37, 0.1); // C#5
    await this.createTone(659.25, 0.1); // E5
    await this.createTone(880, 0.2); // A5
    
    // Can also speak encouraging words
    const encouragement = [
      "Great job!",
      "Excellent!",
      "Well done!",
      "Perfect!",
      "That's right!",
      "Fantastic!"
    ];
    
    // Use ElevenLabs for feedback
    const randomPhrase = encouragement[Math.floor(Math.random() * encouragement.length)];
    await this.speak(randomPhrase, { rate: 1.1, pitch: 1.2 });
  }

  /**
   * Play a sound for incorrect answers
   */
  public async playIncorrect(): Promise<void> {
    // Play a gentle "incorrect" sound
    await this.createTone(349.23, 0.1, 'sine'); // F4
    await this.createTone(329.63, 0.1, 'sine'); // E4
    await this.createTone(293.66, 0.2, 'sine'); // D4
    
    // Can also speak encouraging words for wrong answers
    const encouragement = [
      "Try again!",
      "Keep going!",
      "You'll get it!",
      "Almost there!",
      "Let's learn!"
    ];
    
    // Use ElevenLabs for feedback
    const randomPhrase = encouragement[Math.floor(Math.random() * encouragement.length)];
    await this.speak(randomPhrase, { rate: 1, pitch: 1 });
  }

  /**
   * Play a celebratory sound for completing a milestone
   */
  public async playCelebration(): Promise<void> {
    // Play a more elaborate celebration
    await this.createTone(523.25, 0.1, 'sine'); // C5
    await this.createTone(659.25, 0.1, 'sine'); // E5
    await this.createTone(783.99, 0.1, 'sine'); // G5
    await this.createTone(1046.50, 0.3, 'sine'); // C6
    
    // Add some sparkles
    await this.createTone(1318.51, 0.05, 'sine'); // E6
    await this.createTone(1567.98, 0.05, 'sine'); // G6
    await this.createTone(2093.00, 0.05, 'sine'); // C7
    
    // Can also speak celebratory phrases
    const celebration = [
      "Amazing progress!",
      "You're doing great!",
      "Exceptional work!",
      "Fantastic achievement!",
      "You're really learning!"
    ];
    
    // Always speak for celebrations
    const randomPhrase = celebration[Math.floor(Math.random() * celebration.length)];
    await this.speak(randomPhrase, { rate: 1.1, pitch: 1.2, useElevenLabs: true });
  }

  public getVoices(): SpeechSynthesisVoice[] {
    return this.speechSynthesis.getVoices();
  }

  public stop(): void {
    this.speechSynthesis.cancel();
  }

  /**
   * Verify the ElevenLabs connection by checking the API key
   */
  public async verifyElevenLabsConnection(): Promise<boolean> {
    try {
      // Use a simple test to check if the API key is valid
      const testText = "This is a test.";
      const blob = await this.elevenLabs.textToSpeech(testText);
      if (blob) {
        console.log('ElevenLabs API key verified successfully');
        return true;
      } else {
        console.error('Failed to verify ElevenLabs API key');
        return false;
      }
    } catch (error) {
      console.error('Error verifying ElevenLabs API key:', error);
      return false;
    }
  }

  /**
   * Use browser speech synthesis as fallback
   */
  private speakWithBrowserSynthesis(text: string, options: SpeechOptions = {}): Promise<void> {
    console.warn('No audio available, using browser TTS for:', text);
    
    // Use browser TTS as a last resort
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set speech options
      utterance.lang = options.language || 'en-US';
      utterance.rate = options.rate || 1;
      utterance.pitch = options.pitch || 1;
      utterance.volume = options.volume || 1;

      // Find the appropriate voice for the language
      const voices = this.getVoices();
      const voice = voices.find(v => v.lang.startsWith(utterance.lang)) ||
                  voices.find(v => v.lang.startsWith(utterance.lang.split('-')[0]));
      
      if (voice) {
        utterance.voice = voice;
        console.log('Using voice:', voice.name);
      }

      utterance.onend = () => {
        console.log('Speech synthesis completed');
        resolve();
      };

      // Cancel any ongoing speech
      this.speechSynthesis.cancel();
      this.speechSynthesis.speak(utterance);
    });
  }

  private stopCurrentAudio(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }
    
    // Also cancel any speech synthesis if it's speaking
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  }

  // Update your playAudio method to track the current audio element
  private playAudio(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.stopCurrentAudio();
      
      const audio = new Audio(url);
      this.currentAudio = audio;
      
      audio.onended = () => {
        this.currentAudio = null;
        resolve();
      };
      
      audio.onerror = (error) => {
        this.currentAudio = null;
        reject(error);
      };
      
      audio.play().catch(reject);
    });
  }
}

export default AudioManager;