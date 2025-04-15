import React, { useEffect, useState } from 'react';

interface YouTubePlayerProps {
  videoId: string;
  onEnd: () => void;
  autoplay?: boolean;
  muted?: boolean;
}

/**
 * A YouTube video player component that can be used as a drop-in replacement for video elements.
 * This component dynamically loads the YouTube iframe API to avoid bundling issues.
 */
const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ 
  videoId, 
  onEnd, 
  autoplay = true,
  muted = true 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState<any>(null);
  const containerId = `youtube-player-${videoId}`;

  // Load the YouTube IFrame API asynchronously
  useEffect(() => {
    // Create YouTube script element if it doesn't exist
    if (!document.getElementById('youtube-iframe-api')) {
      const tag = document.createElement('script');
      tag.id = 'youtube-iframe-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Setup the player once the API is ready
    const onYouTubeIframeAPIReady = () => {
      if (!document.getElementById(containerId)) return;
      
      const ytPlayer = new (window as any).YT.Player(containerId, {
        videoId: videoId,
        playerVars: {
          autoplay: autoplay ? 1 : 0,
          mute: muted ? 1 : 0,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          playsinline: 1
        },
        events: {
          onReady: (event: any) => {
            setIsLoaded(true);
            if (autoplay) event.target.playVideo();
            setPlayer(event.target);
          },
          onStateChange: (event: any) => {
            setIsPlaying(event.data === (window as any).YT.PlayerState.PLAYING);
            
            // Call onEnd when the video ends
            if (event.data === (window as any).YT.PlayerState.ENDED) {
              onEnd();
            }
          },
          onError: (event: any) => {
            console.error('YouTube player error:', event);
            // Continue with content even if video fails
            setTimeout(onEnd, 2000);
          }
        }
      });
    };

    // If the API is already loaded, initialize player
    if ((window as any).YT && (window as any).YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      // Otherwise, set up a callback for when it's ready
      (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }

    return () => {
      // Clean up player on unmount
      if (player && player.destroy) {
        player.destroy();
      }
    };
  }, [videoId, autoplay, muted, containerId, onEnd]);

  return (
    <div className="w-full h-full relative bg-black">
      {/* YouTube will replace this div with an iframe */}
      <div id={containerId} className="w-full h-full"></div>
      
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-blue-300/20 border-t-blue-500 rounded-full animate-spin mb-4"></div>
            <p className="text-white">Loading video...</p>
          </div>
        </div>
      )}

      {/* Video controls (optional) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center z-20">
        {isLoaded && (
          <button 
            onClick={() => {
              if (isPlaying) {
                player?.pauseVideo();
              } else {
                player?.playVideo();
              }
            }}
            className="px-4 py-2 bg-blue-600/70 hover:bg-blue-700 rounded text-white"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        )}
      </div>
    </div>
  );
};

export default YouTubePlayer; 