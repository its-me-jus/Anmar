import { create } from 'zustand';

export interface VideoSequenceState {
  currentVideoIndex: number;
  videoUrls: string[];
  isComplete: boolean;
  videoOverlays: {
    [key: string]: {
      text?: Array<{
        content: string;
        position: 'top' | 'bottom' | 'center';
        timing: { start: number; end?: number };
      }>;
      buttons?: Array<{
        text: string;
        timing: { start: number };
        action: "NEXT_SCENE" | "COMPLETE";
      }>;
    }
  };
  setVideoSequence: (videos: string[], overlays?: VideoSequenceState['videoOverlays']) => void;
  nextVideo: () => void;
  resetSequence: () => void;
  completeSequence: () => void;
}

export const useVideoStore = create<VideoSequenceState>((set) => ({
  currentVideoIndex: 0,
  videoUrls: [],
  isComplete: false,
  videoOverlays: {},
  
  setVideoSequence: (videos, overlays = {}) => set(() => ({ 
    videoUrls: videos,
    videoOverlays: overlays,
    currentVideoIndex: 0,
    isComplete: false
  })),
  
  nextVideo: () => set((state) => {
    const nextIndex = state.currentVideoIndex + 1;
    const isLastVideo = nextIndex >= state.videoUrls.length;
    
    return {
      currentVideoIndex: isLastVideo ? state.currentVideoIndex : nextIndex,
      isComplete: isLastVideo
    };
  }),
  
  resetSequence: () => set(() => ({
    currentVideoIndex: 0,
    isComplete: false
  })),
  
  completeSequence: () => set(() => ({
    isComplete: true
  }))
}));