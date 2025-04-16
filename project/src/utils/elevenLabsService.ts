import type { Language } from '../types';
import { supabase } from '../lib/supabase';
import { systemVoices } from '../lib/systemVoices';
import { generateAudioHash } from './supabaseClient';

interface ElevenLabsOptions {
  voiceId?: string;
  stability?: number;
  similarityBoost?: number;
  modelId?: string;
  type?: 'question' | 'option' | 'feedback' | 'system';
  systemVoiceId?: string;
  onLanguageFallback?: (language: Language) => void;
}

// Default settings for ElevenLabs API
const DEFAULT_VOICE_ID = 'z9fAnlkpzviPz146aGWa'; // Daniel (Australian accent) instead of Charlie
const DEFAULT_MODEL_ID = 'eleven_monolingual_v1';

// IndexedDB configuration
const DB_NAME = 'elevenlabs-cache';
const DB_VERSION = 1;
const STORE_NAME = 'audio-cache';

/**
 * Service to handle ElevenLabs API calls with caching support
 */
export class ElevenLabsService {
  private static instance: ElevenLabsService;
  private apiKey: string | null = null;
  private cacheEnabled: boolean = true;
  private apiBaseUrl: string = 'https://api.elevenlabs.io/v1';
  private db: IDBDatabase | null = null;
  private preloadCache: Map<string, Blob> = new Map();
  private currentAudio: HTMLAudioElement | null = null;
  
  // Voices for different languages
  private languageVoices: Record<Language, string> = {
    'English': 'z9fAnlkpzviPz146aGWa', // Daniel (Australian accent) instead of Charlie
    'Spanish': '29vD33N1CtxCmqQRPOHJ', // Mateo
    'Mandarin': 'ByhETIclHirOlWnWKhHc', // Primary Mandarin voice
    'Arabic': 'IES4nrmZdUBHByLBde0P', // Arabic voice
    'Vietnamese': 'foH7s9fX31wFFH2yqrFa', // Vietnamese voice
    'Cantonese': 'z9fAnlkpzviPz146aGWa', // Using Australian voice as fallback
    'Punjabi': 'SZfY4K69FwXus87eayHK', // Using Hindi voice as fallback
    'Greek': 'cuab90umcstNgL8U7orz', // Greek voice
    'Italian': 'uScy1bXtKz8vPzfdFsFw', // Italian voice
    'Filipino': 'DxICOrDlizHfox9uSCDm', // Filipino voice
    'Hindi': 'SZfY4K69FwXus87eayHK', // Hindi voice
  };

  // Secondary fallback voices for specific languages
  private fallbackVoices: Partial<Record<Language, string[]>> = {
    'Mandarin': ['Ixmp8zKRajBp10jLtsrq'], // Secondary Mandarin voice
    'Vietnamese': ['z9fAnlkpzviPz146aGWa'] // Australian fallback for Vietnamese
  };

  private constructor() {
    this.initIndexedDB();
  }

  /**
   * Initialize IndexedDB
   */
  private initIndexedDB(): void {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      console.error('Failed to open IndexedDB');
    };

    request.onsuccess = (event) => {
      this.db = (event.target as IDBOpenDBRequest).result;
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'hash' });
      }
    };
  }

  /**
   * Get the singleton instance of ElevenLabsService
   */
  public static getInstance(): ElevenLabsService {
    if (!ElevenLabsService.instance) {
      ElevenLabsService.instance = new ElevenLabsService();
    }
    return ElevenLabsService.instance;
  }

  /**
   * Set the API key to use for ElevenLabs API requests
   */
  public setApiKey(apiKey: string): void {
    this.apiKey = apiKey;
  }

  /**
   * Enable or disable caching of audio files
   */
  public setCacheEnabled(enabled: boolean): void {
    this.cacheEnabled = enabled;
  }

  /**
   * Convert text to speech using ElevenLabs API
   */
  public async textToSpeech(
    text: string, 
    language: Language = 'English',
    options: ElevenLabsOptions = {}
  ): Promise<Blob | null> {
    try {
      // Handle system voices
      if (options.type === 'system' && options.systemVoiceId) {
        const systemVoice = systemVoices[language]?.find(v => v.id === options.systemVoiceId);
        if (systemVoice) {
          return this.generateNewAudio(systemVoice.text, language, {
            ...options,
            voiceId: this.languageVoices[language] || DEFAULT_VOICE_ID
          });
        }
      }

      // Generate hash for caching
      const hash = generateAudioHash(text, language);
      const type = options.type || 'question';

      // Try to get from IndexedDB first
      try {
        const cachedAudio = await this.getFromIndexedDB(hash);
        if (cachedAudio) {
          console.log('Using IndexedDB cached audio for:', text);
          return cachedAudio;
        }
      } catch (indexedDBError) {
        console.error('Error accessing IndexedDB cache:', indexedDBError);
        // Continue without cache
      }

      // Skip Supabase cache completely - remove base64 errors

      // Handle language fallback
      let voiceId = this.languageVoices[language];
      if (!voiceId && language !== 'English') {
        // Try fallback voices if available
        const fallbacks = this.fallbackVoices[language];
        if (fallbacks && fallbacks.length > 0) {
          voiceId = fallbacks[0];
        } else {
          // Fallback to English
          voiceId = DEFAULT_VOICE_ID;
          language = 'English';
          // Notify about language fallback
          if (options.onLanguageFallback) {
            options.onLanguageFallback(language);
          }
        }
      }

      // If no cached version, generate new audio
      const audioBlob = await this.generateNewAudio(text, language, {
        ...options,
        voiceId
      });

      if (audioBlob && this.cacheEnabled) {
        // Only save to IndexedDB, skip Supabase
        try {
          this.saveToIndexedDB(hash, audioBlob).catch(err => 
            console.warn('Could not save to IndexedDB:', err)
          );
          // Removed Supabase cache to eliminate base64 issues
        } catch (cacheError) {
          console.warn('Error during cache save:', cacheError);
          // Continue without interrupting since we have the audio
        }
      }

      return audioBlob;
    } catch (error) {
      console.error(`Error in text-to-speech for language "${language}":`, error);
      return null;
    }
  }

  /**
   * Get audio from IndexedDB
   */
  private async getFromIndexedDB(hash: string): Promise<Blob | null> {
    if (!this.db) return null;

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(hash);

      request.onsuccess = () => {
        resolve(request.result?.audioBlob || null);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  /**
   * Save audio to IndexedDB
   */
  private async saveToIndexedDB(hash: string, audioBlob: Blob): Promise<void> {
    if (!this.db) return;

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put({ hash, audioBlob });

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Get audio from Supabase - DISABLED
   * This method is disabled to avoid base64 encoding/decoding issues
   */
  private async getFromSupabase(hash: string): Promise<Blob | null> {
    // Completely disabled to avoid base64 issues
    console.log('Supabase audio cache is disabled');
    return null;
  }

  /**
   * Save audio to Supabase - DISABLED
   * This method is disabled to avoid base64 encoding/decoding issues
   */
  private async saveToSupabase(
    hash: string,
    text: string,
    language: string,
    audioBlob: Blob,
    type: 'question' | 'option' | 'feedback' | 'system'
  ): Promise<void> {
    // Completely disabled to avoid base64 issues
    console.log('Supabase audio cache is disabled');
    return;
  }

  /**
   * Generate new audio using ElevenLabs API
   */
  private async generateNewAudio(
    text: string,
    language: Language,
    options: ElevenLabsOptions
  ): Promise<Blob | null> {
    if (!this.apiKey) {
      console.error('ElevenLabs API key not set');
      return null;
    }

    const primaryVoiceId = options.voiceId || this.languageVoices[language] || DEFAULT_VOICE_ID;
    const stability = options.stability || 0.5;
    const similarityBoost = options.similarityBoost || 0.75;
    const modelId = options.modelId || DEFAULT_MODEL_ID;

    try {
      let response = await this.makeVoiceRequest(primaryVoiceId, text, modelId, stability, similarityBoost);

      // Try fallback voices if primary fails
      if (!response.ok && response.status === 404 && this.fallbackVoices[language]?.length) {
        for (const fallbackVoiceId of this.fallbackVoices[language] || []) {
          response = await this.makeVoiceRequest(fallbackVoiceId, text, modelId, stability, similarityBoost);
          if (response.ok) break;
        }
      }

      // Fall back to English voice if all else fails
      if (!response.ok && response.status === 404) {
        response = await this.makeVoiceRequest(DEFAULT_VOICE_ID, text, modelId, stability, similarityBoost);
      }

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      return await response.blob();
    } catch (error) {
      console.error('Error generating audio:', error);
      return null;
    }
  }

  /**
   * Helper method to make a voice request to ElevenLabs API
   */
  private async makeVoiceRequest(
    voiceId: string,
    text: string,
    modelId: string,
    stability: number,
    similarityBoost: number
  ): Promise<Response> {
    return fetch(`${this.apiBaseUrl}/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': this.apiKey!
      },
      body: JSON.stringify({
        text,
        model_id: modelId,
        voice_settings: {
          stability,
          similarity_boost: similarityBoost
        }
      })
    });
  }

  /**
   * Convert text to speech and save to a file
   */
  public async textToSpeechFile(
    text: string,
    outputPath: string,
    language: Language = 'English',
    options: ElevenLabsOptions = {}
  ): Promise<string | null> {
    const audioBlob = await this.textToSpeech(text, language, options);
    
    if (!audioBlob) {
      return null;
    }

    try {
      // Create audio URL and save as file
      const audioUrl = URL.createObjectURL(audioBlob);
      
      // Create a download link and click it to download the file
      const link = document.createElement('a');
      link.href = audioUrl;
      link.download = outputPath.split('/').pop() || 'speech.mp3';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up
      URL.revokeObjectURL(audioUrl);
      
      return outputPath;
    } catch (error) {
      console.error('Error saving audio file:', error);
      return null;
    }
  }

  /**
   * Play audio directly from text
   */
  public async playTextAudio(
    text: string,
    language: Language = 'English',
    options: ElevenLabsOptions = {}
  ): Promise<void> {
    try {
      // Get audio blob (either from cache or API)
      const audioBlob = await this.textToSpeech(text, language, options);
      
      if (!audioBlob) {
        console.error('Failed to get audio blob');
        return;
      }
      
      // Create a URL for the blob
      const audioUrl = URL.createObjectURL(audioBlob);
      
      // Create and play audio element
      const audio = new Audio(audioUrl);
      
      return new Promise((resolve, reject) => {
        audio.onended = () => {
          URL.revokeObjectURL(audioUrl);
          resolve();
        };
        
        audio.onerror = (error) => {
          URL.revokeObjectURL(audioUrl);
          reject(error);
        };
        
        audio.play().catch((error) => {
          console.error('Error playing audio:', error);
          URL.revokeObjectURL(audioUrl);
          reject(error);
        });
      });
    } catch (error) {
      console.error('Error playing text audio:', error);
    }
  }

  /**
   * Clear all caches
   */
  public async clearCache(): Promise<void> {
    // Clear IndexedDB
    if (this.db) {
      const transaction = this.db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      await store.clear();
    }
    
    // Clear memory cache
    this.preloadCache.clear();
  }

  /**
   * Stop any currently playing audio
   */
  public stopAudio(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }
  }

  /**
   * Preview a voice for a specific language
   */
  public async previewVoice(language: Language): Promise<Blob | null> {
    // Use language-specific greetings for a more authentic preview
    const greetings: Record<Language, string> = {
      'English': "Hello! I'm your virtual instructor. I'll be helping you learn today.",
      'Spanish': "¡Hola! Soy tu instructor virtual. Te ayudaré a aprender hoy.",
      'Mandarin': "你好！我是你的虚拟导师。今天我将帮助你学习。",
      'Arabic': "مرحبا! أنا مدربك الافتراضي. سأساعدك على التعلم اليوم.",
      'Vietnamese': "Xin chào! Tôi là người hướng dẫn ảo của bạn. Tôi sẽ giúp bạn học hôm nay.",
      'Cantonese': "你好！我係你嘅虛擬導師。今日我將幫助你學習。",
      'Punjabi': "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ ਵਰਚੁਅਲ ਇੰਸਟ੍ਰਕਟਰ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਨੂੰ ਸਿੱਖਣ ਵਿੱਚ ਮਦਦ ਕਰਾਂਗਾ।",
      'Greek': "Γεια σας! Είμαι ο εικονικός σας εκπαιδευτής. Θα σας βοηθήσω να μάθετε σήμερα.",
      'Italian': "Ciao! Sono il tuo istruttore virtuale. Ti aiuterò a imparare oggi.",
      'Filipino': "Kumusta! Ako ang iyong virtual na tagapagturo. Tutulungan kitang matuto ngayon.",
      'Hindi': "नमस्ते! मैं आपका वर्चुअल प्रशिक्षक हूँ। आज मैं आपको सीखने में मदद करूँगा।"
    };

    // Get the appropriate greeting for the selected language, falling back to English if not found
    const previewText = greetings[language] || greetings['English'];
    
    return this.textToSpeech(previewText, language, {
      type: 'system',
      systemVoiceId: 'welcome'
    });
  }

  /**
   * Preloads text-to-speech for future use without playing it
   */
  public async preloadTextToSpeech(
    text: string, 
    language: Language = 'English',
    options: ElevenLabsOptions = {}
  ): Promise<Blob | null> {
    const cacheKey = `${language}:${text.substring(0, 50)}:${options.voiceId || ''}`;
    
    // Skip if already in cache
    if (this.preloadCache.has(cacheKey)) {
      console.log('Audio already preloaded:', text.substring(0, 20));
      return this.preloadCache.get(cacheKey) || null;
    }
    
    try {
      // Generate the speech but don't play it
      const audioBlob = await this.textToSpeech(text, language, options);
      
      if (audioBlob) {
        this.preloadCache.set(cacheKey, audioBlob);
        console.log('Successfully preloaded TTS:', text.substring(0, 20));
        return audioBlob;
      }
      return null;
    } catch (error) {
      console.error('Failed to preload TTS:', error);
      return null;
    }
  }
}

export default ElevenLabsService;