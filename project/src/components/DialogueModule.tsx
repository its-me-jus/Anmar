import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useStore } from '../store';
import type { DialogueStory } from '../types/dialogue';

interface DialogueModuleProps {
  story: DialogueStory;
  onComplete: () => void;
}

export const DialogueModule: React.FC<DialogueModuleProps> = ({ story, onComplete }) => {
  const user = useStore((state: any) => state.user);
  const setUser = useStore((state: any) => state.setUser);
  const setQuizState = useStore((state: any) => state.setQuizState);
  
  const [currentNodeId, setCurrentNodeId] = useState<string>(story.startingNodeId);
  const [accumulatedPoints, setAccumulatedPoints] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [fadeAnimation, setFadeAnimation] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showDialogue, setShowDialogue] = useState(true);
  const [showOptions, setShowOptions] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);

  // Get current node
  const currentNode = story.nodes.find(node => node.id === currentNodeId);
  
  // Get character for current node with fallback to default
  const character = currentNode 
    ? (story.characters.find(char => char.id === currentNode.characterId) || {
        id: 'default',
        name: 'Guide',
        role: 'mentor',
        avatar: '/avatars/default.png',
      })
    : null;

  // Set up video time tracking
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !currentNode?.backgroundVideo) return;

    // Create path variations for Netlify deployment
    const baseUrl = window.location.origin;
    const isDevelopment = baseUrl.includes('webcontainer-api.io') || baseUrl.includes('localhost');
    const videoPath = currentNode.backgroundVideo;
    const videoFilename = videoPath.split('/').pop();
    
    // Try different video paths - use only local paths in development
    const videoSources = isDevelopment 
      ? [
          // For development environment - only use local paths
          `videos/${videoFilename}`,
          `/videos/${videoFilename}`,
          videoPath
        ]
      : [
          // For production (Netlify) environment - can use more options
          `videos/${videoFilename}`,
          `/videos/${videoFilename}`,
          // Only use production URL in production, not in dev (prevents CORS errors)
          baseUrl.includes('netlify.app') ? `${baseUrl}/videos/${videoFilename}` : null,
          videoPath
        ].filter(Boolean);
    
    console.log(`Environment: ${isDevelopment ? 'Development' : 'Production'}`);
    console.log("Attempting to load video with these paths:", videoSources);
    
    // Start with first source
    let currentSourceIndex = 0;
    video.src = videoSources[currentSourceIndex];
    video.load();

    // Add error handling for video loading
    const handleVideoError = () => {
      console.error("Error loading video:", video.src);
      
      // Try next source if available
      currentSourceIndex++;
      if (currentSourceIndex < videoSources.length) {
        console.log(`Trying next source: ${videoSources[currentSourceIndex]}`);
        video.src = videoSources[currentSourceIndex];
        video.load();
        return;
      }
      
      // Continue showing the dialogue even if video fails to load
      console.log("All video sources failed, showing options anyway");
      setShowOptions(true);
    };

    const handleVideoLoaded = () => {
      console.log("Video loaded successfully:", video.src);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      
      // Freeze video at 45 seconds
      if (video.currentTime >= 45) {
        video.pause();
      }
    };

    video.addEventListener('error', handleVideoError);
    video.addEventListener('loadeddata', handleVideoLoaded);
    video.addEventListener('timeupdate', handleTimeUpdate);
    
    return () => {
      video.removeEventListener('error', handleVideoError);
      video.removeEventListener('loadeddata', handleVideoLoaded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [currentNode]);

  // Handle dialogue and options visibility based on video time
  useEffect(() => {
    if (!currentNode?.videoTiming) {
      setShowDialogue(false); // Hide dialogue text by default
      
      // Show options after 28 seconds by default if no specific timing
      if (currentNode?.backgroundVideo) {
        setShowOptions(currentTime >= 28);
      } else {
        setShowOptions(true);
      }
      return;
    }

    const { dialogueAppearTime, optionsAppearTime } = currentNode.videoTiming;
    
    // Show dialogue based on timing (if explicitly set to show)
    if (dialogueAppearTime !== undefined) {
      setShowDialogue(currentTime >= dialogueAppearTime);
    } else {
      setShowDialogue(false); // Default to hiding dialogue text
    }
    
    // Show options based on timing
    if (optionsAppearTime !== undefined) {
      setShowOptions(currentTime >= optionsAppearTime);
    } else if (currentNode.backgroundVideo) {
      setShowOptions(currentTime >= 28); // Default to 28 seconds if not specified
    } else {
      setShowOptions(true);
    }
  }, [currentTime, currentNode]);

  // Handle option selection
  const handleOptionSelect = (optionId: string, nextNodeId: string, points: number) => {
    setFadeAnimation(true);
    
    // Add to selected options
    setSelectedOptions([...selectedOptions, optionId]);
    
    // Add points
    setAccumulatedPoints(prev => prev + points);
    
    // Delay node change for animation
    setTimeout(() => {
      setCurrentNodeId(nextNodeId);
      setFadeAnimation(false);
    }, 500);
  };

  // Handle completion (when a node has no options)
  useEffect(() => {
    if (currentNode && currentNode.options.length === 0) {
      // Update user with points
      if (user) {
        setUser({
          ...user,
          storyPoints: (user.storyPoints || 0) + accumulatedPoints
        });
      }
      
      // Allow a moment to read the final message
      setTimeout(() => {
        onComplete();
      }, 3000);
    }
  }, [currentNode, accumulatedPoints, onComplete, setUser, user]);

  // Handle back to language selection
  const handleBack = () => {
    setQuizState('LANGUAGE');
  };

  // For debugging
  console.log("Current node ID:", currentNodeId);
  console.log("Story starting node ID:", story.startingNodeId);
  console.log("Found node:", currentNode);
  console.log("Character ID:", currentNode?.characterId);
  console.log("Found character:", character);

  if (!currentNode) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
        <h1 className="text-2xl font-bold mb-4">Story node not found</h1>
        <p className="mb-4">Current node ID: {currentNodeId} not found in story. Please try again.</p>
        <button 
          onClick={handleBack}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Return to language selection
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background Video or Image */}
      {currentNode.backgroundVideo ? (
        <div className="absolute inset-0 z-0">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            muted
            onError={(e) => {
              console.error("Video error:", e);
              // If video fails to load, we could set a fallback state here
            }}
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Lighter overlay since we're removing text */}
        </div>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-[1px]" />
        </div>
      )}

      {/* Navigation */}
      <div className="relative z-10 p-4 flex justify-between items-center">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Exit Story</span>
        </button>
        <div className="text-white/80">
          Points: {accumulatedPoints}
        </div>
      </div>

      {/* Content - Modified to position options at bottom */}
      <div className="relative z-10 min-h-[calc(100vh-8rem)] flex flex-col">
        {/* Character dialogue (only shown if explicitly enabled) */}
        {showDialogue && character && (
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNodeId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: fadeAnimation ? 0 : 1, y: fadeAnimation ? 10 : 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8"
                >
                  <div className="flex items-start gap-6">
                    {/* Character avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
                        <img 
                          src={character.avatar || 'https://via.placeholder.com/100'}
                          alt={character.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback if avatar fails to load
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100';
                          }}
                        />
                      </div>
                      <div className="text-white/90 text-center mt-2 text-sm font-medium">
                        {character.name}
                      </div>
                    </div>
                    
                    {/* Dialogue text */}
                    <div className="flex-grow">
                      <p className="text-white/90 text-lg leading-relaxed">
                        {currentNode.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Options - Positioned at fixed bottom */}
        {currentNode.options && currentNode.options.length > 0 && showOptions && (
          <div className="fixed bottom-0 left-0 right-0 p-4 pb-8 w-full z-20">
            <div className="max-w-4xl w-full mx-auto space-y-4">
              <AnimatePresence>
                {!fadeAnimation && currentNode.options.map((option, index) => (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => handleOptionSelect(option.id, option.nextNodeId, option.points || 0)}
                    className="w-full text-left bg-black/70 hover:bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-colors"
                    disabled={selectedOptions.includes(option.id)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white/90">{option.text}</span>
                      {option.points > 0 && (
                        <span className="text-sm text-white/60 bg-white/10 px-2 py-1 rounded-full">
                          +{option.points} pts
                        </span>
                      )}
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}; 