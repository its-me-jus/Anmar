import type { Language } from '../types';

export interface DialogueCharacter {
  id: string;
  name: string;
  role: 'mentor' | 'learner' | 'system';
  avatar: string;
  personality?: {
    traits: string[];
    background: string;
    motivation: string;
  };
  achievements?: {
    id: string;
    title: string;
    description: string;
    icon: string;
    unlocked: boolean;
    progress: number;
    maxProgress: number;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
}

export interface DialogueNode {
  id: string;
  characterId: string;
  text: string;
  options: DialogueOption[];
  nextNodeId?: string;
  conditions?: DialogueCondition[];
  effects?: DialogueEffect[];
  achievements?: string[];
  points?: number;
  backgroundVideo?: string;
  videoTiming?: {
    dialogueAppearTime?: number; // Time in seconds when dialogue should appear
    optionsAppearTime?: number; // Time in seconds when options should appear
  };
}

export interface DialogueOption {
  id: string;
  text: string;
  nextNodeId: string;
  points: number;
}

export interface DialogueCondition {
  type: 'achievement' | 'points' | 'previousChoice' | 'language';
  value: string | number;
  operator: 'equals' | 'greaterThan' | 'lessThan' | 'has' | 'notHas';
}

export interface DialogueEffect {
  type: 'addPoints' | 'unlockAchievement' | 'setFlag' | 'changeRelationship';
  value: string | number;
}

export interface DialogueState {
  currentNodeId: string;
  visitedNodes: string[];
  points: number;
  flags: Record<string, boolean>;
  characterRelationships: Record<string, number>;
  achievements: Achievement[];
}

export interface DialogueStory {
  id: string;
  title: string;
  description: string;
  language: string;
  characters: DialogueCharacter[];
  nodes: DialogueNode[];
  startingNodeId: string;
  requiredPoints?: number;
  requiredAchievements?: string[];
} 