import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useAnimation, MotionValue } from 'framer-motion';
import { Sparkles, ArrowRight, ChevronsDown, Hexagon } from 'lucide-react';
import { useStore } from '../store';
import * as THREE from 'three';
import { SolarSystem, SolarSystemRefHandle } from './SolarSystem';
import { AnmarLogo } from './AnmarLogo';
import type { Store } from '../store';

interface PanelProps {
  scrollYProgress: MotionValue<number>;
}

interface BackgroundProps extends PanelProps {}
interface CompanyLogoProps extends PanelProps {}
interface ScrollPromptProps extends PanelProps {}

const DarkOverlay: React.FC<{ scrollYProgress: MotionValue<number> }> = ({ scrollYProgress }) => {
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [0.7, 0.2, 0]
  );

  return (
    <motion.div
      className="fixed inset-0 bg-black pointer-events-none z-10"
      style={{ opacity: overlayOpacity }}
    />
  );
};

const ShiftingBackground: React.FC<BackgroundProps> = ({ scrollYProgress }) => {
  const particleCount = 150;
  const particles = [...Array(particleCount)].map((_, i) => {
    const colors = ['#004999', '#5a9132', '#b3050f'];
    const colorIndex = i % 3;
    
    return (
      <motion.div
        key={`particle-${i}`}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 4 + 2 + 'px',
          height: Math.random() * 4 + 2 + 'px',
          backgroundColor: colors[colorIndex],
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + 40 + '%',
          opacity: Math.random() * 0.6 + 0.2,
          boxShadow: `0 0 ${Math.random() * 8 + 4}px ${colors[colorIndex]}`,
        }}
        animate={{
          y: [0, -(Math.random() * 100 + 50)],
          x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 100],
          opacity: [Math.random() * 0.5 + 0.1, 0],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    );
  });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {particles}
    </div>
  );
};

const CircleExpansion: React.FC<PanelProps> = ({ scrollYProgress }) => {
  return <></>;
};

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ scrollYProgress }) => {
  const logoOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    [1, 0]
  );
  const logoScale = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    [1, 0.9]
  );
  
  return (
    <motion.div 
      className="fixed w-full h-full pointer-events-none"
      style={{ 
        opacity: logoOpacity,
        scale: logoScale,
      }}
    >
      <SolarSystem scrollYProgress={scrollYProgress} />
    </motion.div>
  );
};

const ScrollPrompt: React.FC<ScrollPromptProps> = ({ scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.15], [0, 20]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ opacity, scale, y }}
      transition={{ delay: 1 }}
      className="fixed bottom-12 inset-x-0 mx-auto text-center text-white z-20 w-full max-w-[200px]"
    >
      <motion.div
        animate={{ 
          y: [0, 4, 0],
          boxShadow: [
            "0 0 10px rgba(255,255,255,0.1)",
            "0 0 15px rgba(255,255,255,0.2)",
            "0 0 10px rgba(255,255,255,0.1)"
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex flex-col items-center gap-2 backdrop-blur-sm bg-black/20 rounded-xl py-2 px-4 mx-4 border border-white/5"
      >
        <ChevronsDown className="w-5 h-5 text-white/60" />
        <span className="text-sm font-medium tracking-wider text-white/60">Scroll to Begin</span>
      </motion.div>
    </motion.div>
  );
};

const RevealPanels: React.FC<PanelProps> = ({ scrollYProgress }) => {
  const leftPanelX = useTransform(scrollYProgress, [0.3, 0.7], [0, -100]);
  const rightPanelX = useTransform(scrollYProgress, [0.3, 0.7], [0, 100]);
  const panelScale = useTransform(scrollYProgress, [0.3, 0.7], [1, 0.8]);
  const panelOpacity = useTransform(scrollYProgress, [0.3, 0.7], [1, 0]);
  const panelRotateY = useTransform(scrollYProgress, [0.3, 0.7], [0, 45]);
  const panelRotateYReverse = useTransform(scrollYProgress, [0.3, 0.7], [0, -45]);
  const panelZ = useTransform(scrollYProgress, [0.3, 0.7], [0, -200]);

  return (
    <>
      <motion.div
        className="fixed inset-y-0 left-0 w-[60%] origin-left"
        style={{ 
          x: leftPanelX,
          scale: panelScale,
          opacity: panelOpacity,
          rotateY: panelRotateY,
          z: panelZ,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))',
          clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0% 100%, 0 75%, 5% 50%, 0 25%)',
          backdropFilter: 'blur(10px)',
          boxShadow: '10px 0 30px rgba(0, 0, 0, 0.3)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      />
      <motion.div
        className="fixed inset-y-0 right-0 w-[60%] origin-right"
        style={{ 
          x: rightPanelX,
          scale: panelScale,
          opacity: panelOpacity,
          rotateY: panelRotateYReverse,
          z: panelZ,
          background: 'linear-gradient(225deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))',
          clipPath: 'polygon(8% 0, 100% 0, 100% 25%, 95% 50%, 100% 75%, 100% 100%, 0% 100%)',
          backdropFilter: 'blur(10px)',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.3)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      />
    </>
  );
};

const EndPageEffect: React.FC<PanelProps> = ({ scrollYProgress }) => {
  const endOpacity = useTransform(scrollYProgress, [0.65, 0.8, 0.95], [0, 1, 1]);
  const particleCount = 40;
  const dustOpacity = useTransform(scrollYProgress, [0.65, 0.75, 0.9], [0, 1, 0.8]);
  const dustScale = useTransform(scrollYProgress, [0.65, 0.75, 0.9], [0.5, 1.2, 1]);

  return (
    <motion.div
      style={{ opacity: endOpacity }}
      className="fixed inset-0 pointer-events-none z-50"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: dustOpacity,
          scale: dustScale,
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 30%, transparent 70%)',
          filter: 'blur(16px)',
        }}
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0"
          style={{
            left: `${(i / particleCount) * 100}%`,
            width: `${3 + Math.random() * 4}px`,
            height: `${3 + Math.random() * 4}px`,
            backgroundColor: `rgba(255, 255, 255, ${0.6 + Math.random() * 0.4})`,
            borderRadius: '50%',
            filter: 'blur(2px) brightness(1.2)',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
          }}
          animate={{
            y: [0, -400 - Math.random() * 300],
            opacity: [0.9, 0],
            scale: [1.2, 0],
            x: [0, (Math.random() - 0.5) * 200],
          }}
          transition={{
            duration: 2.5 + Math.random() * 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
            ease: "easeOut"
          }}
        />
      ))}

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            filter: 'blur(1px) brightness(1.3)',
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 1.5 + Math.random() * 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 1,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
};

const TextReassembly: React.FC<{
  originalText: string;
  newText: string;
  className?: string;
  scrollYProgress: any;
}> = ({ originalText, newText, className = '', scrollYProgress }) => {
  const animationProgress = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, 1]
  );

  const originalWords = originalText.split(' ');
  
  const wordStyles = originalWords.map((_, index) => {
    const angle = (index / originalWords.length) * Math.PI * 2;
    const radius = 15;
    const xOffset = Math.cos(angle) * radius;
    const yOffset = Math.sin(angle) * radius;
    
    return {
      x: useTransform(
        animationProgress,
        [0, 0.5, 1],
        [0, xOffset * 0.2, 0]
      ),
      y: useTransform(
        animationProgress,
        [0, 0.5, 1],
        [0, yOffset * 0.2, 0]
      ),
      scale: useTransform(
        animationProgress,
        [0, 0.5, 1],
        [1, 1.02, 1]
      ),
      rotate: useTransform(
        animationProgress,
        [0, 0.5, 1],
        [0, 2, 0]
      )
    };
  });

  const wordReveal = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2 }
  };

  const getWordColor = (index: number) => {
    const hue = (index * 20) % 60;
    return `hsl(${hue}, 100%, 80%)`;
  };

  return (
    <motion.div
      className={`flex flex-wrap justify-center gap-2 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {originalWords.map((word, index) => {
        const style = wordStyles[index];
        return (
          <motion.span
            key={`word-${index}`}
            className="inline-block"
            style={{
              ...style,
              textShadow: `
                0 0 10px ${getWordColor(index)}33,
                0 0 20px ${getWordColor(index)}22,
                0 0 30px ${getWordColor(index)}11
              `,
              color: 'white'
            }}
            initial="initial"
            animate="animate"
            variants={wordReveal}
            transition={{
              delay: index * 0.05,
              duration: 0.3,
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

const BackgroundImage: React.FC<PanelProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.5, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0.4, 0.1]);
  
  return (
    <motion.div 
      className="fixed inset-0 w-full h-full z-0 overflow-hidden"
      style={{ opacity }}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          scale,
          y,
          backgroundImage: 'url(https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2000&q=80)',
          filter: 'brightness(0.5) saturate(1.2)',
        }}
      />
      
      <motion.div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
          opacity: overlayOpacity,
        }}
      />
    </motion.div>
  );
};

export default function Home() {
  const setQuizState = useStore((state: Store) => state.setQuizState);
  const { scrollYProgress } = useScroll();
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const pageProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.5],
    [0, 0, 0, 1]
  );

  const screenShakeX = useTransform(
    scrollYProgress,
    [0.45, 0.48],
    ["0px", "10px"]
  );

  const screenShakeY = useTransform(
    scrollYProgress,
    [0.45, 0.48],
    ["0px", "-5px"]
  );

  const screenShakeRotate = useTransform(
    scrollYProgress,
    [0.45, 0.48],
    ["0deg", "1deg"]
  );

  useEffect(() => {
    const unsubscribe = pageProgress.onChange((latest: number) => {
      setCurrentPage(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [pageProgress]);

  const handleContinueClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setQuizState('SIGNUP');
    }, 750);
  };

  const solarSystemRef = useRef<SolarSystemRefHandle>(null);

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      <DarkOverlay scrollYProgress={scrollYProgress} />
      
      <div className="fixed inset-0 z-10 pointer-events-none">
        <SolarSystem scrollYProgress={scrollYProgress} ref={solarSystemRef} />
      </div>
      
      <AnimatePresence>
        <AnmarLogo key="anmar-logo" scrollYProgress={scrollYProgress} solarSystemRef={solarSystemRef} />
      </AnimatePresence>
      
      <BackgroundImage scrollYProgress={scrollYProgress} />
      
      <div className="h-[150vh]">
        <ShiftingBackground scrollYProgress={scrollYProgress} />
        <CircleExpansion scrollYProgress={scrollYProgress} />
        <RevealPanels scrollYProgress={scrollYProgress} />
        <ScrollPrompt scrollYProgress={scrollYProgress} />
        <EndPageEffect scrollYProgress={scrollYProgress} />
        
        <motion.div
          style={{ 
            opacity: useTransform(pageProgress, [0, 1], [0, 1]),
            y: useTransform(pageProgress, [0, 1], [50, 0]),
            x: screenShakeX,
            rotate: screenShakeRotate,
          }}
          className="fixed top-0 left-0 right-0 z-20 min-h-screen flex items-center justify-center p-4"
        >
          <div className="max-w-4xl w-full mx-auto px-4">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-6 inline-block"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                  className="p-4 rounded-full bg-white/10 backdrop-blur-sm"
                  style={{
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    perspective: 1000,
                    transform: "translateZ(0)"
                  }}
                />
              </motion.div>

              <TextReassembly
                originalText="Begin Your Journey"
                newText="Begin Your Journey"
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                scrollYProgress={scrollYProgress}
              />

              <TextReassembly
                originalText="Take your first step into a world of discovery. Every journey begins with curiosity and a desire to learn."
                newText="Take your first step into a world of discovery. Every journey begins with curiosity and a desire to learn."
                className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto backdrop-blur-sm bg-black/20 rounded-xl p-6"
                scrollYProgress={scrollYProgress}
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContinueClick}
                className="relative bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto overflow-hidden"
              >
                <motion.span
                  className="flex items-center gap-2 relative z-10"
                  animate={isTransitioning ? { x: -200 } : {}}
                  transition={{ duration: 0.75, ease: [0.3, 0, 0.2, 1] }}
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
                
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  animate={isTransitioning ? { x: 0 } : {}}
                  transition={{ duration: 0.75, ease: [0.3, 0, 0.2, 1] }}
                />
                
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, borderRadius: '100%' }}
                  animate={isTransitioning ? { scale: 4, opacity: 1 } : { scale: 0, opacity: 0 }}
                  style={{ originX: 0.5, originY: 0.5 }}
                  transition={{ delay: 0.5, duration: 0.75, ease: [0.3, 0, 0.2, 1] }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Add this backup export if the primary one isn't working
// export default Home;