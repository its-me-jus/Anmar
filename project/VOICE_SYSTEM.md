# Voice System Guide

This document explains how to use the enhanced voice system with system voices, voice preview, and language fallback features.

## Features

1. **Pre-recorded System Voices**: Welcome messages, navigation prompts, and other system voices
2. **Voice Preview**: Users can hear voice samples before selecting a language
3. **Language Fallback**: Graceful fallback to English when a language is not available
4. **Toast Notifications**: Friendly notifications when language fallback occurs

## How to Use System Voices

```typescript
import AudioManager from '../utils/audio';

// Get the singleton instance
const audioManager = AudioManager.getInstance();

// Play a system voice by its ID
audioManager.playSystemVoice('welcome', 'English');

// Available system voice IDs:
// - welcome: Welcome to the training
// - start_quiz: Starting the quiz
// - next_question: Moving to the next question
// - correct_answer: Feedback for correct answers
// - incorrect_answer: Feedback for incorrect answers
// - quiz_complete: Quiz completion message
// - language_fallback: Message about language fallback
```

## Voice Preview in Language Selection

The `LanguageSelector` component now includes voice preview functionality. When a user selects a language, they will hear a sample of the voice before the language is set.

```typescript
import { LanguageSelector } from './components/LanguageSelector';

// In your component
<LanguageSelector 
  onSelect={handleLanguageSelect}
  currentLanguage={user?.language || 'English'}
/>
```

## Language Fallback with Toast Notifications

When a voice for a specific language is not available, the system will automatically fall back to English and show a friendly notification:

```typescript
import { useToast } from '../context/ToastContext';
import AudioManager from '../utils/audio';

// In your component
const toast = useToast();
const audioManager = AudioManager.getInstance();

// Method to handle language fallback
const handleLanguageFallback = (language: Language) => {
  toast.addToast({
    title: 'Language Fallback',
    description: `Our virtual instructor is still learning ${language}! Using English for now, but they're practicing every day!`,
    status: 'info',
    icon: '🗣️'
  });
};

// When speaking text with potential fallback
audioManager.speak(text, {
  language,
  onLanguageFallback: handleLanguageFallback
});
```

## Integration Points

1. **App.tsx**: The `ToastProvider` has been added to the root component
2. **LanguageSelect.tsx**: Enhanced with voice preview and welcome messages
3. **VoiceCheck.tsx**: Added system voice testing functionality
4. **ElevenLabsService.ts**: Updated to support system voices and language fallback
5. **audio.ts**: Enhanced with system voice playback capabilities

## Testing Voice Setup

You can use the Voice Diagnostic tool to test both ElevenLabs voices and system voices:

1. Navigate to the Language Selection screen
2. Click "Check Voices" button
3. Use the diagnostic tool to test individual voices or all voices at once

## Adding New System Voices

Edit `systemVoices.ts` to add new system voice types:

```typescript
export const systemVoices: Record<Language, SystemVoice[]> = {
  English: [
    {
      id: 'your_new_voice_id',
      text: "The text that will be spoken",
      file: "audio/system/en/your_new_voice.mp3" // Optional pre-recorded file
    },
    // ...
  ],
  // Other languages...
};
```

## Customizing Language Fallback

The language fallback behavior can be customized in the `ElevenLabsService.ts` file by modifying the fallback voices map:

```typescript
private fallbackVoices: Partial<Record<Language, string[]>> = {
  'Mandarin': ['Ixmp8zKRajBp10jLtsrq'], // Secondary Mandarin voice
  'Vietnamese': ['EXAVITQu4vr4xnSDxMaL'] // English fallback for Vietnamese
};
``` 