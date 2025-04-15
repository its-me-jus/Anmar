import React, { useEffect } from 'react';
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
import { WaveBackground } from './components/WaveBackground';
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

  switch (quizState) {
    case 'HOME':
      return <Home />;
    case 'SIGNUP':
      return <Signup />;
    case 'MODE_SELECT':
      return <ModeSelect />;
    case 'LANGUAGE':
      return <LanguageSelect />;
    case 'DIALOGUE':
      return (
        <DialogueModule
          story={testStory}
          onComplete={() => setQuizState('QUIZ')}
        />
      );
    case 'VOICE_CHECK':
      return <VoiceCheck />;
    case 'LESSONS':
      try {
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
    case 'QUIZ':
      return <Quiz />;
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