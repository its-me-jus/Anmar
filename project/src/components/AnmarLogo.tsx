import React, { useEffect, useRef } from 'react';
import { motion, useTransform, MotionValue, useAnimation } from 'framer-motion';
import * as THREE from 'three';

interface AnmarLogoProps {
  scrollYProgress: MotionValue<number>;
  solarSystemRef?: React.RefObject<{
    highlightSegment: (color: string, intensity: number) => void;
  }>;
}

export const AnmarLogo: React.FC<AnmarLogoProps> = ({ scrollYProgress, solarSystemRef }) => {
  // Logo colors
  const blue = '#0066cc';
  const green = '#7ac142';
  const red = '#e30613';

  // Make the logo more visible by positioning it higher and making it larger
  const logoY = useTransform(scrollYProgress, [0, 0.3], [50, 40]);
  const logoScale = useTransform(scrollYProgress, [0, 0.3], [1.2, 1.1]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.6, 0.7], [1, 1, 0]);
  
  const controls = useAnimation();
  const charactersRef = useRef<(HTMLSpanElement | null)[]>([]);
  
  // ANMAR Group lettering, each character will be animated separately
  const letterData = [
    { char: 'A', color: blue, solarElement: 'blue' },  // Blue
    { char: 'N', color: blue, solarElement: 'blue' },  // Blue
    { char: 'M', color: green, solarElement: 'green' }, // Green
    { char: 'A', color: green, solarElement: 'green' }, // Green
    { char: 'R', color: red, solarElement: 'red' },   // Red
    { char: ' ', color: '#ffffff', solarElement: null },
    { char: 'G', color: red, solarElement: 'red' },   // Red
    { char: 'r', color: blue, solarElement: 'blue' },  // Blue
    { char: 'o', color: green, solarElement: 'green' }, // Green
    { char: 'u', color: red, solarElement: 'red' },   // Red
    { char: 'p', color: blue, solarElement: 'blue' },  // Blue
  ];
  
  // Add intro animation to make letters more noticeable
  useEffect(() => {
    // Start with an intro animation to draw attention to the logo
    controls.start("visible").then(() => {
      // After the intro animation, start a subtle pulse on all letters
      setTimeout(() => {
        controls.start("attention");
      }, 1000);
    });
  }, [controls]);
  
  const letterVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      y: Math.random() * 50 - 25,
      x: Math.random() * 50 - 25, 
      rotate: Math.random() * 30 - 15,
      scale: 0.5 + Math.random() * 0.5
    }),
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }),
    attention: (i: number) => ({
      scale: [1, 1.1, 1],
      filter: [
        'brightness(1) drop-shadow(0 0 5px rgba(255,255,255,0.5))',
        'brightness(1.3) drop-shadow(0 0 20px rgba(255,255,255,0.8))',
        'brightness(1) drop-shadow(0 0 5px rgba(255,255,255,0.5))'
      ],
      transition: {
        duration: 1.5,
        delay: i * 0.06,
        repeat: 2,
        repeatType: "reverse"
      }
    }),
    pulse: (i: number) => ({
      scale: [1, 1.2, 1],
      filter: [
        'brightness(1) drop-shadow(0 0 5px rgba(255,255,255,0.5))',
        'brightness(1.5) drop-shadow(0 0 20px rgba(255,255,255,0.8))',
        'brightness(1) drop-shadow(0 0 5px rgba(255,255,255,0.5))'
      ],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }
    })
  };

  // Handle hover interaction with solar system
  const handleLetterHover = (index: number) => {
    const letterInfo = letterData[index];
    if (!letterInfo.solarElement || !solarSystemRef?.current) return;
    
    // Highlight the corresponding solar system segment
    const intensity = 2.5; // Brightness increase
    solarSystemRef.current.highlightSegment(letterInfo.color, intensity);
    
    // Animate the hovered letter
    controls.start((i) => i === index ? 'pulse' : 'visible');
  };
  
  const handleLetterLeave = () => {
    // Reset all solar system segments
    if (solarSystemRef?.current) {
      solarSystemRef.current.highlightSegment('', 1);
    }
    
    // Reset all letter animations
    controls.start('attention');
  };

  return (
    <motion.div
      className="fixed z-30 top-8 left-8 select-none backdrop-blur-sm p-4 rounded-lg"
      style={{
        y: logoY,
        scale: logoScale,
        opacity: logoOpacity,
      }}
    >
      <div className="flex items-center">
        <div className="text-white font-bold tracking-tight">
          <div className="flex">
            {letterData.map((item, i) => (
              <motion.span
                key={`char-${i}`}
                custom={i}
                initial="hidden"
                animate={controls}
                variants={letterVariants}
                ref={el => charactersRef.current[i] = el}
                onMouseEnter={() => handleLetterHover(i)}
                onMouseLeave={handleLetterLeave}
                className={`inline-block ${item.char === ' ' ? 'w-3' : 'cursor-pointer'}`}
                style={{
                  color: item.color,
                  textShadow: `0 0 15px ${item.color}80, 0 0 25px ${item.color}60, 0 0 40px ${item.color}40`,
                  fontSize: item.char === ' ' ? 0 : i < 5 ? '4rem' : '2.5rem',
                  fontWeight: i < 5 ? 800 : 600,
                  lineHeight: 1,
                  display: 'inline-block',
                  letterSpacing: i < 5 ? '-0.05em' : '0.01em',
                  filter: `drop-shadow(0 0 8px ${item.color}90)`,
                  margin: '0 2px',
                }}
              >
                {item.char}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 