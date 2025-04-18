/**
 * Video mapping configuration
 * Maps local video paths to YouTube video IDs
 * 
 * Replace the example IDs with your actual YouTube video IDs after uploading your videos
 */

// Map your local video paths to YouTube video IDs
export const videoMapping: Record<string, string> = {
  // Actual YouTube videos
  '/videos/welcome_dialogue.mp4': '9SSX6NIhY_4', // Welcome Dialogue video
  '/videos/WelcomeUpdate.mp4': '-qPE2BAgcFg',    // Welcome Update video
  '/videos/welcome.mp4': '-qPE2BAgcFg',          // Using WelcomeUpdate as fallback
  
  // Updated with provided YouTube video IDs
  '/videos/definition.mp4': 'NeRYYFYB7Hk',     // Definition video
  '/videos/experience1.mp4': 'JwSfRjDoLP0',    // Experience 1 video
  '/videos/experience2.mp4': 'f6VZ27m_aso',    // Experience 2 video
  '/videos/experience3.mp4': 'aSEpHn-9Q9o',    // Experience 3 video
  '/videos/experience4.mp4': 'jAMWiwOeW6k',    // Experience 4 video
  '/videos/experience5.mp4': 'pQj4AjwqH5g',    // Experience 5 video
  '/videos/experience6.mp4': '0k_PCvtxvqM',    // Experience 6 video
  '/videos/experience7.mp4': '-qPE2BAgcFg',    // Using WelcomeUpdate as fallback
  
  // Lesson videos
  '/videos/lesson_1.mp4': 'NeRYYFYB7Hk',      // Understanding Sexual Harassment
  '/videos/lesson_2.mp4': 'JwSfRjDoLP0',       // Quid Pro Quo Harassment
  '/videos/lesson_3.mp4': 'f6VZ27m_aso',       // Hostile Work Environment
  '/videos/lesson_8.mp4': 'aSEpHn-9Q9o',       // Responding to Uncomfortable Situations
  '/videos/lesson_9.mp4': 'jAMWiwOeW6k',       // Bystander Intervention
};

/**
 * Extracts YouTube video ID from various YouTube URL formats
 * @param url YouTube URL or video ID
 * @returns YouTube video ID or null if invalid
 */
export function getYouTubeId(url: string): string | null {
  // If already just an ID (11 characters), return it
  if (url.length === 11 && /^[a-zA-Z0-9_-]{11}$/.test(url)) {
    return url;
  }
  
  // YouTube URLs can be in several formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  
  if (match && match[2].length === 11) {
    return match[2];
  }
  
  return null;
}

/**
 * Gets YouTube ID for a local video path
 * @param localPath Local video path
 * @returns YouTube video ID or null if no mapping exists
 */
export function getYouTubeIdForVideo(localPath: string): string | null {
  if (!localPath) return null;
  
  // Clean the path for matching
  const cleanPath = localPath.startsWith('/') ? localPath : `/${localPath}`;
  
  // Try direct lookup first
  if (videoMapping[cleanPath]) {
    return videoMapping[cleanPath];
  }
  
  // Try with just the filename
  const filename = cleanPath.split('/').pop();
  const fallbackPath = `/videos/${filename}`;
  
  return videoMapping[fallbackPath] || null;
}

/**
 * Determines if a video should use YouTube or local file
 * Can be used to conditionally use YouTube instead of local video
 */
export function shouldUseYouTube(videoPath: string): boolean {
  // Check if the path is a YouTube video ID (11 characters)
  return videoPath.length === 11 && /^[a-zA-Z0-9_-]{11}$/.test(videoPath);
}

/**
 * Returns either a YouTube video ID or the original path
 * based on whether it's a YouTube ID or not
 */
export function getVideoSource(videoPath: string): { useYouTube: boolean; source: string } {
  // Check if this looks like a YouTube video ID (11 characters, alphanumeric with - and _)
  if (videoPath && videoPath.length === 11 && /^[a-zA-Z0-9_-]{11}$/.test(videoPath)) {
    console.log(`Detected YouTube video ID: ${videoPath}`);
    return { useYouTube: true, source: videoPath };
  }
  
  // If it's a YouTube URL, extract the ID
  const ytId = getYouTubeId(videoPath);
  if (ytId) {
    console.log(`Extracted YouTube ID from URL: ${ytId}`);
    return { useYouTube: true, source: ytId };
  }
  
  // Not a YouTube video, use as local path
  console.log(`Using local video path: ${videoPath}`);
  return { useYouTube: false, source: videoPath };
} 