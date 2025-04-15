import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store';
import type { Store } from '../store';
import { getStoryLessons } from '../lib/storyLessons';
import { testStory } from '../lib/stories/story';
import StoryLessonView from './StoryLessonView';
import { VideoScene } from './VideoScene';
import VideoSceneSequence from './VideoSceneSequence';
import { useVideoStore } from '../utils/videoStore';
import type { VideoSequenceState } from '../utils/videoStore';

// Simple error boundary component
class StoryErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Story error boundary caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Simple icon components
const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const AwardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const BookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const StoryQuiz: React.FC = () => {
  const user = useStore((state: Store) => state.user);
  const setQuizState = useStore((state: Store) => state.setQuizState);
  const setUser = useStore((state: Store) => state.setUser);
  const [showVideoSequence, setShowVideoSequence] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [hasError, setHasError] = useState(false);
  const setVideoSequence = useVideoStore((state: VideoSequenceState) => state.setVideoSequence);

  // Ensure language is set to English for story mode
  useEffect(() => {
    if (user && user.isStoryMode && user.language !== 'English') {
      console.log('Story mode only supports English - switching language');
      setUser({
        ...user,
        language: 'English'
      });
    }
  }, [user, setUser]);

  // Early return with a more user-friendly message
  if (!user || !user.isStoryMode) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="text-center p-8 max-w-md">
          <ShieldIcon width={80} height={80} className="mx-auto mb-6 text-blue-400" />
          <h2 className="text-2xl font-bold mb-4">Story Mode Not Activated</h2>
          <p className="mb-6">Please select Story Mode from the training options to access this feature.</p>
          <button 
            onClick={() => setQuizState('MODE_SELECT')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Go to Training Options
          </button>
        </div>
      </div>
    );
  }

  if (!user.currentStoryId) {
    // If no story ID, set a default one and continue
    console.warn("No story ID found, setting default story ID");
    setUser({
      ...user,
      currentStoryId: 'harassment-story-1',
      currentSceneIndex: 0,
      currentDialogueIndex: 0
    });
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="animate-pulse text-white text-xl">Loading story...</div>
      </div>
    );
  }

  // Instead of using storyLessons, we'll directly use our testStory
  console.log("Story ID:", user.currentStoryId);
  console.log("Using testStory directly");

  const handleContinue = () => {
    // Move to the question view
    setQuizState('QUIZ');
  };

  const handleBack = () => {
    setQuizState('LANGUAGE');
  };

  const handleStartStory = () => {
    try {
      // Ensure we're using English for Story Mode
      if (user && user.language !== 'English') {
        setUser({
          ...user,
          language: 'English'
        });
      }
      
      // Get the base URL for the application
      const baseUrl = window.location.origin;
      const netlifyDomain = baseUrl.includes('netlify.app') ? baseUrl : null;
      const isDevelopment = baseUrl.includes('webcontainer-api.io') || baseUrl.includes('localhost');
      
      console.log(`Environment: ${isDevelopment ? 'Development' : 'Production'}`);
      console.log("Base URL detected:", baseUrl);
      
      // Configure and show video sequence with proper path
      const videos = isDevelopment
        ? [
            // For development - only use local paths to avoid CORS errors
            'videos/WelcomeUpdate.mp4',
            'videos/welcome.mp4',
            // Fallback only as last resort
            'https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4'
          ]
        : [
            // For Netlify production environment
            'videos/WelcomeUpdate.mp4',
            'videos/welcome.mp4',
            // If we detected Netlify, add absolute URL as well (only in production)
            ...(netlifyDomain ? [`${netlifyDomain}/videos/WelcomeUpdate.mp4`] : []),
            // Fallback only as last resort
            'https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4'
          ];
      
      console.log('Setting up video sequence with paths:', videos);
      const overlays = {
        [videos[0]]: {
          text: [],
          buttons: [
            {
              text: "Begin Training",
              timing: { start: 8 },
              action: "COMPLETE"
            }
          ]
        }
      };
      
      // Apply the same overlay configuration to all video paths
      videos.forEach(videoPath => {
        if (!overlays[videoPath]) {
          overlays[videoPath] = overlays[videos[0]];
        }
      });
      
      console.log("Starting video sequence with paths:", videos);
      setVideoSequence(videos, overlays);
      setShowVideoSequence(true);
    } catch (error) {
      console.error("Error starting story:", error);
      // Fallback in case of setup issues
      if (user) {
        setUser({
          ...user,
          currentNodeId: 'experience'
        });
        setQuizState('DIALOGUE');
      }
    }
  };

  // If showing video sequence, render the VideoSceneSequence component
  if (showVideoSequence) {
    return (
      <StoryErrorBoundary 
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
            <div className="text-center p-8 max-w-md">
              <h2 className="text-2xl font-bold mb-4">Unable to play introduction video</h2>
              <p className="mb-6">We encountered an issue with the training video. You can continue with the training without it.</p>
              <button 
                onClick={() => {
                  setShowVideoSequence(false);
                  setUser({
                    ...user,
                    currentNodeId: 'experience'
                  });
                  setQuizState('DIALOGUE');
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Continue to Training
              </button>
            </div>
          </div>
        }
      >
        <VideoSceneSequence
          onComplete={() => {
            setShowVideoSequence(false);
            // Go directly to dialogue without showing the welcome node again
            setUser({
              ...user,
              currentNodeId: 'experience' // Skip welcome node and go directly to experience
            });
            setQuizState('DIALOGUE');
          }}
          onError={() => {
            console.error("Video loading error - skipping to dialogue");
            setShowVideoSequence(false);
            setUser({
              ...user,
              currentNodeId: 'experience' // Skip welcome node and go directly to experience
            });
            setQuizState('DIALOGUE');
          }}
        />
      </StoryErrorBoundary>
    );
  }

  // Course features data
  const courseFeatures = [
    { 
      icon: ShieldIcon, 
      title: "Safety First", 
      description: "Learn how to create and maintain a safe work environment for all employees" 
    },
    { 
      icon: UsersIcon, 
      title: "Real Scenarios", 
      description: "Practice with realistic workplace situations and decision-making challenges" 
    },
    { 
      icon: AwardIcon, 
      title: "Certification", 
      description: "Earn a recognized certificate upon successful completion" 
    },
    { 
      icon: BookIcon, 
      title: "Expert Content", 
      description: "Curriculum developed by workplace ethics and legal professionals" 
    }
  ];

  // Course modules data
  const courseModules = [
    { title: "Understanding Workplace Harassment", duration: "20 mins", complete: false },
    { title: "Recognizing Inappropriate Behavior", duration: "25 mins", complete: false },
    { title: "Bystander Intervention Strategies", duration: "30 mins", complete: false },
    { title: "Reporting Procedures & Resources", duration: "15 mins", complete: false },
    { title: "Creating a Respectful Workplace", duration: "20 mins", complete: false }
  ];

  // Testimonials data
  const testimonials = [
    { 
      name: "Michael Chen", 
      role: "Team Lead", 
      text: "This training transformed how our team communicates. Highly recommended for all professionals.",
      avatar: "/avatars/testimonial1.png" 
    },
    { 
      name: "Sarah Johnson", 
      role: "HR Director", 
      text: "The most engaging ethics training we've implemented. Our employees actually enjoyed completing it!",
      avatar: "/avatars/testimonial2.png" 
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
    >
      <div className="min-h-screen flex flex-col items-center p-4 md:p-8">
        {/* Navigation Bar */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full flex justify-between items-center mb-6"
        >
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeftIcon width={20} height={20} />
            <span>Back to Languages</span>
          </button>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-6xl bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden mb-10 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row">
            {/* Left side with text */}
            <div className="p-8 md:p-12 md:w-3/5">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm font-medium mb-4">
                  Interactive Training
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Sexual Harassment <span className="text-blue-400">Prevention</span>
                </h1>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  An immersive learning experience that builds the skills needed to identify, 
                  prevent, and respond to sexual harassment in the workplace.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <ClockIcon width={16} height={16} className="text-blue-400" />
                  <span className="text-white/90 text-sm">25 minutes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <CheckCircleIcon width={16} height={16} className="text-blue-400" />
                  <span className="text-white/90 text-sm">5 Modules</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <CheckIcon width={16} height={16} className="text-blue-400" />
                  <span className="text-white/90 text-sm">Certificate Included</span>
                </div>
              </motion.div>
              
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleStartStory}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg"
              >
                <span className="font-medium">Begin Your Training</span>
                <ArrowRightIcon width={20} height={20} />
              </motion.button>
            </div>
            
            {/* Right side with image/illustration */}
            <div className="hidden md:block md:w-2/5 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-pattern"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Use ShieldIcon as fallback if image doesn't exist */}
                <ShieldIcon width={80} height={80} className="mx-auto mb-4 opacity-50 text-white" />
                <div className="text-white text-center">
                  <h3 className="text-xl font-semibold">Build a Respectful Workplace</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="w-full max-w-6xl mb-6"
        >
          <div className="flex space-x-1 bg-white/5 backdrop-blur-sm p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-3 px-4 rounded-lg transition-colors ${
                activeTab === 'overview' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Course Overview
            </button>
            <button
              onClick={() => setActiveTab('modules')}
              className={`flex-1 py-3 px-4 rounded-lg transition-colors ${
                activeTab === 'modules' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Modules
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`flex-1 py-3 px-4 rounded-lg transition-colors ${
                activeTab === 'testimonials' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Testimonials
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full max-w-6xl mb-8"
        >
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courseFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4 hover:bg-white/15 transition-colors"
                  >
                    <div className="rounded-full bg-blue-600/20 p-3 flex-shrink-0">
                      <Icon width={24} height={24} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Modules Tab */}
          {activeTab === 'modules' && (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
              {courseModules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className={`p-6 flex justify-between items-center ${
                    index !== courseModules.length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      module.complete ? 'bg-green-600/20' : 'bg-white/10'
                    }`}>
                      {module.complete ? (
                        <CheckCircleIcon width={16} height={16} className="text-green-400" />
                      ) : (
                        <span className="text-white/80">{index + 1}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{module.title}</h3>
                      <p className="text-white/60 text-sm">{module.duration}</p>
                    </div>
                  </div>
                  <div>
                    {module.complete ? (
                      <span className="text-green-400 text-sm">Completed</span>
                    ) : (
                      <span className="text-white/60 text-sm">Upcoming</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Testimonials Tab */}
          {activeTab === 'testimonials' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{testimonial.name}</h3>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/80 italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="w-full max-w-6xl text-center"
        >
          <button
            onClick={handleStartStory}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Start Your Training Journey
          </button>
          <p className="text-white/60 mt-4">
            Join the 10,000+ professionals who have completed this training
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StoryQuiz;