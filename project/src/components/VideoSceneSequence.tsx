import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { VideoScene } from './VideoScene';
import { useVideoStore } from '../utils/videoStore';
import type { VideoSequenceState } from '../utils/videoStore';

interface VideoSceneSequenceProps {
  onComplete: () => void;
  onError?: () => void;
}

// Fallback videos to try if the main one fails
const FALLBACK_VIDEOS = [
  // Limit to just these two most likely to work
  'videos/WelcomeUpdate.mp4',
  'videos/welcome.mp4'
];

// Improved preload utility function
const preloadVideo = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    // Skip preloading for non-essential fallbacks
    if (src.includes('chrome.mp4')) {
      console.log(`Skipping preload for external video: ${src}`);
      resolve(false);
      return;
    }
    
    const video = document.createElement('video');
    
    // Add muted attribute to help with autoplay restrictions
    video.muted = true;
    // Only load metadata first for better performance
    video.preload = 'metadata';
    
    // Listen for metadata loaded - this is faster than waiting for all data
    video.onloadedmetadata = () => {
      console.log(`Successfully loaded metadata for video: ${src}`);
      // At this point, we know the video exists and is accessible
      resolve(true);
    };
    
    video.onloadeddata = () => {
      console.log(`Successfully preloaded video: ${src}`);
      resolve(true);
    };
    
    video.onerror = () => {
      console.warn(`Failed to preload video: ${src}`, video.error?.message || 'Unknown error');
      resolve(false);
    };
    
    // Reduce timeout to 3 seconds to prevent UI blocking
    setTimeout(() => {
      if (video.readyState === 0) {
        console.warn(`Preload timeout for: ${src}`);
        resolve(false);
      }
    }, 3000);
    
    video.src = src;
    video.load();
  });
};

const VideoSceneSequence: React.FC<VideoSceneSequenceProps> = ({ onComplete, onError }) => {
  const videoUrls = useVideoStore((state: VideoSequenceState) => state.videoUrls);
  const currentVideoIndex = useVideoStore((state: VideoSequenceState) => state.currentVideoIndex);
  const isComplete = useVideoStore((state: VideoSequenceState) => state.isComplete);
  const videoOverlays = useVideoStore((state: VideoSequenceState) => state.videoOverlays);
  const nextVideo = useVideoStore((state: VideoSequenceState) => state.nextVideo);
  const completeSequence = useVideoStore((state: VideoSequenceState) => state.completeSequence);
  const setVideoSequence = useVideoStore((state: VideoSequenceState) => state.setVideoSequence);
  const [videoError, setVideoError] = useState(false);
  const [loadStarted, setLoadStarted] = useState(false);
  const [fallbackIndex, setFallbackIndex] = useState(-1); // -1 means use original videos
  const [currentFallbackVideo, setCurrentFallbackVideo] = useState<string | null>(null);
  const [preloadStatus, setPreloadStatus] = useState<{ [key: string]: boolean }>({});

  // Improved preload strategy with progressive loading
  useEffect(() => {
    if (videoUrls.length > 0) {
      const preloadAllVideos = async () => {
        console.log('Starting video preload...');
        const results: { [key: string]: boolean } = {};
        
        // Only preload the first video to reduce resource usage
        const mainVideo = videoUrls[0];
        
        try {
          // Try primary video first
          console.log(`Attempting to preload: ${mainVideo}`);
          const success = await preloadVideo(mainVideo);
          results[mainVideo] = success;
          
          // If primary fails, try the first fallback immediately
          if (!success && FALLBACK_VIDEOS.length > 0) {
            console.log(`Primary video failed, trying fallback: ${FALLBACK_VIDEOS[0]}`);
            const fallbackSuccess = await preloadVideo(FALLBACK_VIDEOS[0]);
            results[FALLBACK_VIDEOS[0]] = fallbackSuccess;
          }
          
          console.log('Preload results:', results);
          setPreloadStatus(results);
          
          // Any success is good enough to proceed
          const anySuccess = Object.values(results).some(result => result === true);
          if (!anySuccess) {
            console.warn('None of the videos preloaded successfully');
            // Don't set error immediately - let the VideoScene component try with its own path resolution
          }
        } catch (err) {
          console.error('Error during preload:', err);
          // Continue anyway - the VideoScene will handle fallbacks
        }
      };
      
      preloadAllVideos();
    }
  }, [videoUrls]);

  // Safety check - complete if there are no videos to show
  useEffect(() => {
    if (!videoUrls || videoUrls.length === 0) {
      console.warn('No videos to play in sequence');
      if (onError) {
        onError();
      } else {
        onComplete();
      }
    } else {
      setLoadStarted(true);
    }
  }, [videoUrls, onComplete, onError]);

  // If the sequence is complete, call the onComplete callback
  useEffect(() => {
    if (isComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  // If there are no videos or there was an error, complete the sequence
  useEffect(() => {
    if ((!videoUrls.length || videoError) && onError) {
      onError();
    } else if (!videoUrls.length) {
      onComplete();
    }
  }, [videoUrls.length, videoError, onComplete, onError]);

  // If load started but videos array is empty, return loading spinner
  if (!videoUrls.length && loadStarted) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-300/20 border-t-blue-500 rounded-full animate-spin mb-4"></div>
          <p className="text-white">Loading video resources...</p>
        </div>
      </div>
    );
  }

  // If no videos in the array, return null (handled by useEffect)
  if (!videoUrls.length) {
    return null;
  }

  // Get the current video URL (either original or fallback)
  let currentVideoUrl = videoUrls[currentVideoIndex];
  
  // Use fallback if we're in fallback mode
  if (currentFallbackVideo) {
    currentVideoUrl = currentFallbackVideo;
  } else if (fallbackIndex >= 0 && fallbackIndex < FALLBACK_VIDEOS.length) {
    currentVideoUrl = FALLBACK_VIDEOS[fallbackIndex];
  }
  
  // Always use original for overlays
  const currentOverlays = videoOverlays[videoUrls[currentVideoIndex]] || {}; 

  const handleVideoComplete = () => {
    if (currentVideoIndex === videoUrls.length - 1) {
      // If this is the last video, complete the sequence
      completeSequence();
    } else {
      // Otherwise, move to the next video
      nextVideo();
      // Reset fallback index for next video
      setFallbackIndex(-1);
      setCurrentFallbackVideo(null);
    }
  };

  const handleVideoError = () => {
    console.error(`Error loading video: ${currentVideoUrl}`);
    
    // Try next fallback with a more aggressive approach
    if (currentFallbackVideo) {
      // We're already using a fallback, try the next one in FALLBACK_VIDEOS
      const nextFallbackIndex = fallbackIndex + 1;
      if (nextFallbackIndex < FALLBACK_VIDEOS.length) {
        console.log(`Trying fallback video ${nextFallbackIndex + 1}/${FALLBACK_VIDEOS.length}: ${FALLBACK_VIDEOS[nextFallbackIndex]}`);
        setFallbackIndex(nextFallbackIndex);
        setCurrentFallbackVideo(FALLBACK_VIDEOS[nextFallbackIndex]);
        return;
      }
    } else {
      // Try the first fallback immediately
      console.log(`Trying first fallback video: ${FALLBACK_VIDEOS[0]}`);
      setFallbackIndex(0);
      setCurrentFallbackVideo(FALLBACK_VIDEOS[0]);
      return;
    }
    
    // If all fallbacks failed, try proceeding with the next video if available
    if (videoUrls.length > 1 && currentVideoIndex < videoUrls.length - 1) {
      console.log(`All fallbacks failed. Skipping to next video in sequence.`);
      nextVideo();
      setFallbackIndex(-1);
      setCurrentFallbackVideo(null);
      return;
    }
    
    // If all else fails, trigger error callback
    setVideoError(true);
    if (onError) {
      onError();
    } else {
      completeSequence();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-screen"
    >
      <VideoScene
        videoUrl={currentVideoUrl}
        onComplete={handleVideoComplete}
        overlays={currentOverlays}
        onError={handleVideoError}
      />
    </motion.div>
  );
};

export default VideoSceneSequence;