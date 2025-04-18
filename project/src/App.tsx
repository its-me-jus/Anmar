import React, { useEffect, useState, useRef } from 'react';
import { useStore } from './store';
import type { Store } from './store';
import type { LoadingStore } from './utils/loadingState';
import type { ErrorStore } from './utils/errorHandler';
import Home from './components/Home';
import { Signup } from './components/Signup';
import { ModeSelect } from './components/ModeSelect';
import { LanguageSelect } from './components/LanguageSelect';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import { Locked } from './components/Locked';
import { StoryQuiz } from './components/StoryQuiz';
import { EndStoryView } from './components/EndStoryView';
import { VideoScene } from './components/VideoScene';
import { Toast } from './components/Toast';
import { LoadingSpinner } from './components/LoadingSpinner';
import { CharacterDialogue } from './components/CharacterDialogue';
import { introductionDialogue } from './lib/dialogueScripts';
import { restoreProgress } from './utils/persistence';
import { useLoadingStore } from './utils/loadingState';
import { useErrorStore } from './utils/errorHandler';
import { testStory } from './lib/stories/story';
import { DialogueModule } from './components/DialogueModule';
import VoiceCheck from './components/VoiceCheck';
import { ToastProvider } from './context/ToastContext';

function AppContent() {
  const quizState = useStore((state: Store) => state.quizState);
  const user = useStore((state: Store) => state.user);
  const isLoading = useLoadingStore((state: LoadingStore) => state.anyLoading());
  const addError = useErrorStore((state: ErrorStore) => state.addError);
  const setQuizState = useStore((state: Store) => state.setQuizState);
  // TEMPORARY: Force videos to always show for testing
  const [showWelcomeVideo, setShowWelcomeVideo] = useState({
    quiz: true,
    story: true
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useLocalVideo, setUseLocalVideo] = useState(true); // Force local video
  const [videoError, setVideoError] = useState<string | null>(null);

  // Add useEffect for LESSONS state redirect
  // This follows React's Rules of Hooks by being unconditional
  useEffect(() => {
    if (quizState === 'LESSONS' && user) {
      setQuizState('QUIZ');
    }
  }, [quizState, user, setQuizState]);

  // No longer needed - we're forcing videos to show
  /*
  useEffect(() => {
    console.log("DEBUG: Clearing session storage for testing");
    sessionStorage.removeItem('watched_welcome_video_QUIZ');
    sessionStorage.removeItem('watched_welcome_video_STORY');
  }, []);

  useEffect(() => {
    const checkSavedProgress = async () => {
      const restored = await restoreProgress();
      if (restored) {
        addError({
          message: 'Previous progress restored',
          type: 'info'
        });
      }
    };

    // Check for existing session storage values
    const hasWatchedQuizVideo = sessionStorage.getItem('watched_welcome_video_QUIZ');
    const hasWatchedStoryVideo = sessionStorage.getItem('watched_welcome_video_STORY');
    
    if (hasWatchedQuizVideo) {
      console.log("DEBUG: User already watched quiz video");
      setShowWelcomeVideo(prev => ({ ...prev, quiz: false }));
    }
    
    if (hasWatchedStoryVideo) {
      console.log("DEBUG: User already watched story video");
      setShowWelcomeVideo(prev => ({ ...prev, story: false }));
    }

    checkSavedProgress();
  }, [addError]);
  */

  // Add a single useEffect for saved progress
  useEffect(() => {
    const checkSavedProgress = async () => {
      const restored = await restoreProgress();
      if (restored) {
        addError({
          message: 'Previous progress restored',
          type: 'info'
        });
      }
    };
    
    checkSavedProgress();
  }, [addError]);

  console.log('Rendering App with quizState:', quizState);
  console.log('User state:', user);
  console.log('Show welcome video state:', showWelcomeVideo);

  const handleVideoComplete = (videoType: 'quiz' | 'story') => {
    console.log(`Video playback complete: ${videoType}`);
    // Store in session storage for future reference, but we're not using it now
    sessionStorage.setItem(`watched_welcome_video_${videoType === 'quiz' ? 'QUIZ' : 'STORY'}`, 'true');
    setShowWelcomeVideo(prev => ({ 
      ...prev, 
      [videoType]: false 
    }));
  };

  const handleVideoError = (videoType: 'quiz' | 'story', event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const videoElement = event.target as HTMLVideoElement;
    const errorDetails = videoElement.error ? 
      `Error code: ${videoElement.error.code}, Message: ${videoElement.error.message}` : 
      'Unknown error';
    
    console.error(`Video error for ${videoType}:`, errorDetails);
    setVideoError(errorDetails);
    
    // Skip the video on error after a short delay
    setTimeout(() => {
      handleVideoComplete(videoType);
    }, 1000);
  };

  const handleVideoCanPlay = (videoType: 'quiz' | 'story') => {
    console.log(`Video can play: ${videoType}`);
    setVideoError(null);
    if (videoRef.current) {
      videoRef.current.muted = false; // Ensure not muted
      videoRef.current.volume = 1.0;  // Set volume to max
      videoRef.current.play().catch(e => {
        console.error("Video play error:", e);
        setVideoError(`Play error: ${e.message}`);
      });
    }
  };

  // Custom video player component for local file
  const LocalVideoPlayer = ({ videoType }: { videoType: 'quiz' | 'story' }) => (
    <div className="fixed inset-0 w-full h-full z-50 bg-black flex items-center justify-center">
      <div className="relative w-full max-w-4xl mx-auto">
        <video 
          ref={videoRef}
          className="w-full"
          controls
          autoPlay
          muted={false}
          playsInline
          onCanPlay={() => handleVideoCanPlay(videoType)}
          onEnded={() => handleVideoComplete(videoType)}
          onError={(e) => handleVideoError(videoType, e)}
          src="videos/welcome_h264.mp4"
        />
        
        {videoError && (
          <div className="absolute top-0 left-0 right-0 bg-red-600 text-white p-2 text-sm">
            Error: {videoError}
            <button 
              onClick={() => handleVideoComplete(videoType)}
              className="ml-4 px-2 py-1 bg-white text-red-600 rounded text-xs hover:bg-gray-200"
            >
              Continue Anyway
            </button>
          </div>
        )}
        
        <div className="absolute bottom-4 right-4 z-10">
          <button 
            onClick={() => handleVideoComplete(videoType)}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white transition-colors"
          >
            Skip
          </button>
        </div>
        
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.muted = false;
                videoRef.current.volume = 1.0;
                console.log("Volume set to:", videoRef.current.volume, "Muted:", videoRef.current.muted);
              }
            }}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white transition-colors"
          >
            Unmute
          </button>
        </div>
      </div>
    </div>
  );

  // Render video based on preference
  const renderWelcomeVideo = (videoType: 'quiz' | 'story') => {
    if (useLocalVideo) {
      return <LocalVideoPlayer videoType={videoType} />;
    }
    
    return (
      <VideoScene
        videoUrl="videos/welcome_h264.mp4" 
        onComplete={() => handleVideoComplete(videoType)}
        onError={() => handleVideoComplete(videoType)}
      />
    );
  };
  
  switch (quizState) {
    case 'HOME':
      return <Home />;
    case 'SIGNUP':
      return <Signup />;
    case 'MODE_SELECT':
      return <ModeSelect />;
    case 'LANGUAGE':
      return <LanguageSelect />;
    case 'LESSONS':
      // Simply show loading while the useEffect handles the redirect
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="animate-pulse text-white text-xl">Loading lessons...</div>
        </div>
      );
    case 'DIALOGUE':
      return (
        <DialogueModule
          story={testStory}
          onComplete={() => setQuizState('QUIZ')}
        />
      );
    case 'QUIZ':
      // Skip voice check and welcome video - go directly to Quiz
      try {
        // Skip welcome video for quiz mode and go straight to lesson
        return <Quiz />;
      } catch (error) {
        console.error('Error rendering Quiz:', error);
        return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="mb-4">We encountered an issue loading the lessons for {user?.language}.</p>
            <button 
              onClick={() => setQuizState('LANGUAGE')}
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              Return to language selection
            </button>
          </div>
        );
      }
    case 'STORY':
      try {
        console.log("Rendering STORY state, showWelcomeVideo:", showWelcomeVideo.story);
        // Only show welcome video for story mode
        if (showWelcomeVideo.story) {
          // Use local WelcomeUpdate video for story mode
          return (
            <VideoScene
              videoUrl="videos/WelcomeUpdate_h264.mp4" 
              onComplete={() => {
                console.log('Story welcome video completed or skipped');
                handleVideoComplete('story');
              }}
              onError={() => {
                console.error('Error loading story welcome video');
                handleVideoComplete('story');
              }}
            />
          );
        }
        return <StoryQuiz />;
      } catch (error) {
        console.error('Error rendering StoryQuiz:', error);
        return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="mb-4">We encountered an issue loading the story mode.</p>
            <button 
              onClick={() => setQuizState('LANGUAGE')}
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              Return to language selection
            </button>
          </div>
        );
      }
    case 'RESULTS':
      return <Results />;
    case 'LOCKED':
      return <Locked />;
    case 'END_STORY':
      return <EndStoryView />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <button 
            onClick={() => setQuizState('HOME')}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Return to home
          </button>
        </div>
      );
  }
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App;