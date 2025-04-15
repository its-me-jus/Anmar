import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store';

interface VideoSceneProps {
  videoUrl: string;
  onComplete: () => void;
  onError?: () => void;
  overlays?: {
    text?: Array<{
      content: string;
      position: 'top' | 'bottom' | 'center';
      timing: { start: number; end: number };
    }>;
    buttons?: Array<{
      text: string;
      timing: { start: number };
      action: string;
    }>;
  };
}

export const VideoScene: React.FC<VideoSceneProps> = ({
  videoUrl,
  onComplete,
  onError,
  overlays
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [visibleOverlays, setVisibleOverlays] = useState<{
    text: string[];
    buttons: string[];
  }>({ text: [], buttons: [] });
  const [loadAttempts, setLoadAttempts] = useState(0);

  // Try different video paths
  const baseUrl = window.location.origin;
  const publicPath = `${baseUrl}/`;
  const isDevelopment = baseUrl.includes('webcontainer-api.io') || baseUrl.includes('localhost');
  
  // Create path variations for Netlify deployment
  const videoSources = isDevelopment
    ? [
        // For development environment - only use local paths to avoid CORS errors
        videoUrl.startsWith('/') ? videoUrl.substring(1) : videoUrl,
        videoUrl.startsWith('/') ? videoUrl : `/${videoUrl}`,
        `videos/${videoUrl.split('/').pop()}`,
        // Fallback to a known working video
        'https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4'
      ]
    : [
        // For production environment (Netlify) - can use all path variations
        // Hard-coded netlify base URL only if we're in production on netlify
        baseUrl.includes('netlify.app') ? `${baseUrl}/videos/${videoUrl.split('/').pop()}` : null,
        // Plain filename variations (often works best with Netlify)
        `videos/${videoUrl.split('/').pop()}`,
        // Simple paths that often work with Netlify
        videoUrl,
        videoUrl.startsWith('/') ? videoUrl.substring(1) : videoUrl,
        // Try with leading slash
        videoUrl.startsWith('/') ? videoUrl : `/${videoUrl}`,
        // Fallback to a known working video
        'https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4'
      ];
  
  // Filter out nulls and limit to 5 paths to prevent excessive retries
  const filteredSources = videoSources.filter(Boolean).slice(0, 5);
  
  console.log(`Environment: ${isDevelopment ? 'Development' : 'Production'}`);
  console.log('Attempting to load video with these paths:', filteredSources);

  useEffect(() => {
    // Set a LONGER timeout to detect video loading issues (10 seconds instead of 5)
    const loadTimeout = setTimeout(() => {
      if (!videoLoaded && !loadError && loadAttempts < filteredSources.length - 1) {
        console.error('Video loading timeout:', filteredSources[loadAttempts]);
        setLoadAttempts(prev => prev + 1);
      } else if (!videoLoaded && !loadError) {
        setLoadError(true);
        if (onError) onError();
      }
    }, 10000); // 10 second timeout - give more time for videos to load

    return () => clearTimeout(loadTimeout);
  }, [videoLoaded, loadError, loadAttempts, filteredSources, onError]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log(`Attempting to load video from: ${filteredSources[loadAttempts]}`);
    video.src = filteredSources[loadAttempts];
    video.load();

    const handleTimeUpdate = () => {
      const time = video.currentTime;
      setCurrentTime(time);

      // Show/hide text overlays based on timing
      if (overlays?.text) {
        const visibleTexts = overlays.text
          .filter(overlay => time >= overlay.timing.start && time <= overlay.timing.end)
          .map(overlay => overlay.content);
          
        setVisibleOverlays(prev => ({
          ...prev,
          text: visibleTexts
        }));
      }

      // Show buttons based on timing
      if (overlays?.buttons) {
        const visibleButtons = overlays.buttons
          .filter(button => time >= button.timing.start)
          .map(button => button.text);
          
        setVisibleOverlays(prev => ({
          ...prev,
          buttons: visibleButtons
        }));
      }
    };

    const handleEnded = () => {
      console.log('Video playback ended normally');
      onComplete();
    };

    const handleError = (e: Event) => {
      console.error('Video playback error:', e);
      console.error('Video source that failed:', filteredSources[loadAttempts]);
      console.error('Video element error code:', videoRef.current?.error?.code);
      console.error('Video element error message:', videoRef.current?.error?.message);
      
      // Try next source if available
      if (loadAttempts < filteredSources.length - 1) {
        console.log(`Trying next source (${loadAttempts + 1}/${filteredSources.length - 1}): ${filteredSources[loadAttempts + 1]}`);
        setLoadAttempts(prev => prev + 1);
      } else {
        setLoadError(true);
        if (onError) {
          onError();
        }
      }
    };

    const handleLoadedData = () => {
      console.log('Video loaded successfully:', filteredSources[loadAttempts]);
      setVideoLoaded(true);
      video.play().catch(e => {
        console.error('Failed to autoplay video:', e);
        // Try to play on user interaction
        document.addEventListener('click', () => video.play(), { once: true });
      });
    };

    const handleLoadStart = () => {
      console.log('Video load started:', filteredSources[loadAttempts]);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('play', () => setIsPlaying(true));
    video.addEventListener('pause', () => setIsPlaying(false));

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('play', () => setIsPlaying(true));
      video.removeEventListener('pause', () => setIsPlaying(false));
    };
  }, [onComplete, onError, overlays, filteredSources, loadAttempts]);

  // Skip button for testing
  const handleSkip = () => {
    console.log('Video skipped by user');
    onComplete();
  };

  if (loadError) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center p-8">
          <h3 className="text-xl mb-4">Unable to load video</h3>
          <p className="mb-4 text-gray-300">There was a problem loading the training video.</p>
          <p className="mb-4 text-sm text-gray-400">Source: {videoUrl}</p>
          
          {/* Show more technical details - helpful for debugging */}
          <div className="mb-6 p-4 bg-gray-800 rounded-lg text-left text-xs overflow-auto max-h-32">
            <p className="mb-1 text-gray-500">Attempted paths:</p>
            {filteredSources.map((source, i) => (
              <p key={i} className="truncate text-gray-400">
                {i+1}. {source}
              </p>
            ))}
          </div>
          
          <button 
            onClick={onComplete} 
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue Anyway
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Video Player */}
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        autoPlay
        playsInline
        crossOrigin="anonymous"
        onPlay={() => setIsPlaying(true)}
      />

      {/* Loading Indicator */}
      {!videoLoaded && !loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-white/20 border-t-blue-500 rounded-full animate-spin mb-4 mx-auto"></div>
            <p className="text-white">Loading video...</p>
            <p className="text-white/60 text-sm mt-2">Source: {filteredSources[loadAttempts]}</p>
          </div>
        </div>
      )}

      {/* Overlay Container */}
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        {/* Text Overlays */}
        <div className="w-full flex flex-col items-center">
          <AnimatePresence>
            {visibleOverlays.text.map((text) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-white text-3xl font-bold text-center bg-black/30 p-3 rounded-lg backdrop-blur-sm mb-4"
              >
                {text}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Button Overlays */}
        <div className="w-full flex justify-center">
          <AnimatePresence>
            {visibleOverlays.buttons.map((buttonText) => (
              <motion.button
                key={buttonText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onComplete}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg backdrop-blur-sm transition-colors text-xl"
              >
                {buttonText}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* Skip button (for development/testing) */}
        <div className="absolute bottom-4 right-4">
          <button 
            onClick={handleSkip}
            className="text-white/50 hover:text-white/90 text-sm bg-black/30 rounded-full px-3 py-1"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};