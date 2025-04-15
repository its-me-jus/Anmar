// Language codes for reference
export const languageApiCodes = {
  English: 'en',
  Mandarin: 'zh',
  Arabic: 'ar',
  Vietnamese: 'vi',
  Cantonese: 'zh-TW',
  Punjabi: 'pa',
  Greek: 'el',
  Italian: 'it',
  Filipino: 'tl',
  Hindi: 'hi',
  Spanish: 'es'
} as const;

// ElevenLabs configuration
export const elevenlabsConfig = {
  // Default API key - for production, use environment variables
  apiKey: '',
  
  // Default voice IDs per language
  voiceIds: {
    English: 'IKne3meq5aSn9XLyUdCD', // Charlie's voice
    Spanish: '29vD33N1CtxCmqQRPOHJ', // Mateo - male
    Arabic: 'IES4nrmZdUBHByLBde0P',  // Updated voice ID
    Mandarin: 'ByhETIclHirOlWnWKhHc', // Primary Mandarin voice
    Vietnamese: 'foH7s9fX31wFFH2yqrFa', // Vietnamese voice
    Cantonese: 'EXAVITQu4vr4xnSDxMaL', // Using English voice as fallback
    Punjabi: 'SZfY4K69FwXus87eayHK', // Using Hindi as fallback
    Greek: 'cuab90umcstNgL8U7orz', // Greek voice
    Italian: 'uScy1bXtKz8vPzfdFsFw', // Italian voice
    Filipino: 'DxICOrDlizHfox9uSCDm', // Filipino voice
    Hindi: 'SZfY4K69FwXus87eayHK', // Hindi voice
  },
  
  // Fallback voice IDs for specific languages
  fallbackVoiceIds: {
    Mandarin: ['Ixmp8zKRajBp10jLtsrq'], // Secondary Mandarin voice
  },
  
  // Model ID
  modelId: 'eleven_monolingual_v1',
  
  // Default voice settings
  defaultSettings: {
    stability: 0.5,
    similarityBoost: 0.7,
  }
};

declare global {
  interface Window {
    GOOGLE_TRANSLATE_API_KEY?: string;
  }
}

export const GOOGLE_TRANSLATE_API_KEY = window.GOOGLE_TRANSLATE_API_KEY || ''; 