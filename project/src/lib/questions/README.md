# Language Management System

This directory contains the language management system for our quiz application. It uses a dynamic loading approach to efficiently handle multiple languages.

## Structure

- `index.ts` - Contains the base English questions and utility functions for loading language files
- `languages/` - Directory containing individual language files
  - `mandarin.ts` - Mandarin Chinese translations
  - `spanish.ts` - Spanish translations
  - etc.

## How It Works

1. **Base Questions**: English questions are defined in `index.ts` as the base set.

2. **Language Files**: Each language has its own file in the `languages/` directory that exports a `QuestionSet` object.

3. **Dynamic Loading**: When a user selects a language, the system:
   - First loads a cached version if available
   - Then dynamically imports the specific language file
   - Falls back to English if the language file doesn't exist

4. **Caching**: Once loaded, language files are cached to avoid redundant loading.

## Adding a New Language

To add a new language:

1. Create a new file in the `languages/` directory (e.g., `french.ts`)
2. Use the following template:

```typescript
import { QuestionSet } from '../index';
import type { Question } from '../../../types';

export const frenchQuestions: QuestionSet = {
  language: 'French',
  questions: [
    {
      id: 1,
      text: "French translation of question 1",
      options: [
        "French translation of option 1",
        "French translation of option 2",
        "French translation of option 3"
      ],
      correctAnswer: 0,
      category: "personality",
      difficulty: "easy"
    },
    // Additional translated questions
  ]
};
```

3. Make sure the export name follows the pattern `${languageName.toLowerCase()}Questions`

## Benefits of This Approach

- **Reduced File Size**: Only loads the languages that are needed
- **Better Performance**: Avoids loading all languages at once
- **Easy Maintenance**: Each language is in its own file
- **Fallback Mechanism**: Always falls back to English if a translation is missing 