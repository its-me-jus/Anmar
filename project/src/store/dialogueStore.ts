import { create } from 'zustand';
import type { DialogueState, DialogueStory, Achievement } from '../types/dialogue';

interface DialogueStore extends DialogueState {
  setCurrentNode: (nodeId: string) => void;
  addPoints: (points: number) => void;
  unlockAchievement: (achievementId: string) => void;
  updateAchievementProgress: (achievementId: string, progress: number) => void;
  setFlag: (flag: string, value: boolean) => void;
  updateRelationship: (characterId: string, value: number) => void;
  resetState: () => void;
  loadStory: (story: DialogueStory) => void;
}

const initialState: DialogueState = {
  currentNodeId: '',
  visitedNodes: [],
  points: 0,
  flags: {},
  characterRelationships: {},
  achievements: []
};

export const useDialogueStore = create<DialogueStore>((set: any) => ({
  ...initialState,
  setCurrentNode: (nodeId: string) => 
    set((state: DialogueState) => ({
      currentNodeId: nodeId,
      visitedNodes: [...state.visitedNodes, nodeId]
    })),
  addPoints: (points: number) =>
    set((state: DialogueState) => ({
      points: state.points + points
    })),
  unlockAchievement: (achievementId: string) =>
    set((state: DialogueState) => ({
      achievements: state.achievements.map((achievement: Achievement) =>
        achievement.id === achievementId
          ? { ...achievement, unlocked: true }
          : achievement
      )
    })),
  updateAchievementProgress: (achievementId: string, progress: number) =>
    set((state: DialogueState) => ({
      achievements: state.achievements.map((achievement: Achievement) =>
        achievement.id === achievementId
          ? { ...achievement, progress }
          : achievement
      )
    })),
  setFlag: (flag: string, value: boolean) =>
    set((state: DialogueState) => ({
      flags: { ...state.flags, [flag]: value }
    })),
  updateRelationship: (characterId: string, value: number) =>
    set((state: DialogueState) => ({
      characterRelationships: {
        ...state.characterRelationships,
        [characterId]: (state.characterRelationships[characterId] || 0) + value
      }
    })),
  resetState: () => set(initialState),
  loadStory: (story: DialogueStory) =>
    set(() => ({
      ...initialState,
      currentNodeId: story.startingNodeId,
      achievements: story.characters.flatMap(char => char.achievements)
    }))
})); 