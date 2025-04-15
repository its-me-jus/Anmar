import type { Language } from '../../types';

export interface StoryCharacter {
  name: string;
  avatar: string;
  voiceUrl?: string;
  role: string;
}

export interface StoryScene {
  id: string;
  background: string;
  characters: StoryCharacter[];
  dialogue: {
    characterId: string;
    text: string;
    voiceUrl?: string;
    emotion?: 'happy' | 'sad' | 'angry' | 'neutral' | 'surprised';
  }[];
  transitions?: {
    type: 'fade' | 'slide' | 'zoom';
    duration: number;
  };
}

export interface StoryLesson {
  id: string;
  title: string;
  description: string;
  scenes: StoryScene[];
  category: string;
  questionId: string; // Reference to the original question
}

export const getStoryLessons = (language: Language): StoryLesson[] => {
  // For now, we'll only have English story lessons
  if (language !== 'English') {
    return [];
  }

  return [
    {
      id: 'harassment-story-1',
      title: 'The Office Incident',
      description: 'Join Sarah as she navigates a challenging situation at work',
      category: 'harassment',
      questionId: '1',
      scenes: [
        {
          id: 'scene-1',
          background: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
          characters: [
            {
              name: 'Sarah',
              avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
              role: 'Protagonist',
              voiceUrl: '/voices/sarah.mp3'
            },
            {
              name: 'Mike',
              avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
              role: 'Antagonist',
              voiceUrl: '/voices/mike.mp3'
            }
          ],
          dialogue: [
            {
              characterId: 'Sarah',
              text: "I've been feeling uncomfortable about Mike's comments lately...",
              emotion: 'sad'
            },
            {
              characterId: 'Mike',
              text: "Hey Sarah, you look great today! Why don't you join us for drinks after work?",
              emotion: 'happy'
            }
          ]
        }
      ]
    }
  ];
}; 