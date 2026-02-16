'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface TrueFocusProps {
  sentence?: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
  splitBy?: string;
  onActiveChange?: (index: number) => void;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = 'True Focus',
  separator = ' ',
  manualMode = false,
  blurAmount = 6,
  borderColor = 'white',
  glowColor = 'rgba(255, 255, 255, 0.8)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className = '',
  splitBy = '',
  onActiveChange,
}) => {
  const words = sentence.split(splitBy || separator);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [focusRect, setFocusRect] = useState<FocusRect | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    onActiveChange?.(activeIndex);
  }, [activeIndex, onActiveChange]);

  const updateFocusRect = (index: number) => {
    const wordElement = wordRefs.current[index];
    const containerElement = containerRef.current;
    
    if (wordElement && containerElement) {
      const containerRect = containerElement.getBoundingClientRect();
      const wordRect = wordElement.getBoundingClientRect();
      
      // Add some padding around the word for better bracket visibility
      const padding = 4;
      setFocusRect({
        x: wordRect.left - containerRect.left - padding,
        y: wordRect.top - containerRect.top - padding,
        width: wordRect.width + (padding * 2),
        height: wordRect.height + (padding * 2),
      });
    }
  };

  useEffect(() => {
    // Initialize first word immediately
    if (wordRefs.current[0] && containerRef.current) {
      updateFocusRect(0);
    }
  }, []);

  useEffect(() => {
    if (manualMode) {
      return;
    }

    // Don't auto-animate if hovering
    if (hoveredIndex !== null) {
      return;
    }

    let currentIndex = 0;
    
    const animate = () => {
      setActiveIndex(currentIndex);
      updateFocusRect(currentIndex);
      currentIndex = (currentIndex + 1) % words.length;
    };

    // Initial animation
    setTimeout(() => {
      animate();
    }, 100);

    // Set up interval
    const totalDelay = (animationDuration + pauseBetweenAnimations) * 1000;
    intervalRef.current = setInterval(() => {
      animate();
    }, totalDelay);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [manualMode, words.length, animationDuration, pauseBetweenAnimations, hoveredIndex]);

  useEffect(() => {
    const indexToUse = hoveredIndex !== null ? hoveredIndex : activeIndex;
    if (indexToUse !== null) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        updateFocusRect(indexToUse);
      }, 50);
    }
  }, [activeIndex, hoveredIndex]);

  useEffect(() => {
    const handleResize = () => {
      const indexToUse = hoveredIndex !== null ? hoveredIndex : activeIndex;
      if (indexToUse !== null) {
        updateFocusRect(indexToUse);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, hoveredIndex]);

  const handleWordHover = (index: number) => {
    setHoveredIndex(index);
    setActiveIndex(index);
    updateFocusRect(index);
    
    // Clear auto animation interval when hovering
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleWordLeave = () => {
    setHoveredIndex(null);
    // Auto animation will resume in useEffect
  };

  const bracketSize = 24;
  const bracketThickness = 3;

  return (
    <div
      ref={containerRef}
      className={`relative flex gap-12 items-center justify-center flex-wrap font-bold ${className}`}
      style={{ color: 'white' }}
    >
      {words.map((word, index) => {
        const isActive = hoveredIndex === index || (hoveredIndex === null && activeIndex === index);
        return (
          <span
            key={index}
            ref={(el) => {
              if (el) wordRefs.current[index] = el;
            }}
            className="inline-block cursor-pointer"
            onMouseEnter={() => handleWordHover(index)}
            onMouseLeave={handleWordLeave}
            style={{
              filter: isActive ? 'blur(0px)' : `blur(${blurAmount}px)`,
              opacity: isActive ? 1 : 0.5,
              color: 'white',
              transition: `filter ${animationDuration}s ease-in-out, opacity ${animationDuration}s ease-in-out`,
              textShadow: isActive ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none',
            }}
          >
            {word}
            {index < words.length - 1 && (
              <span 
                className="mx-2" 
                style={{ 
                  color: 'white',
                  opacity: isActive ? 1 : 0.5, 
                  filter: isActive ? 'blur(0px)' : `blur(${blurAmount}px)` 
                }}
              >
                {separator}
              </span>
            )}
          </span>
        );
      })}

      {focusRect && (hoveredIndex !== null || activeIndex !== null) && (
        <motion.div
          className="pointer-events-none absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: animationDuration }}
          style={{
            left: focusRect.x,
            top: focusRect.y,
            width: focusRect.width,
            height: focusRect.height,
          }}
        >
          {/* Top-left bracket - Horizontal */}
          <motion.div
            className="absolute"
            style={{
              left: 0,
              top: 0,
              width: bracketSize,
              height: bracketThickness,
              backgroundColor: borderColor,
              boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}, 0 0 24px ${glowColor}`,
            }}
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1 }}
            transition={{ duration: animationDuration, ease: 'easeOut' }}
          />
          {/* Top-left bracket - Vertical */}
          <motion.div
            className="absolute"
            style={{
              left: 0,
              top: 0,
              width: bracketThickness,
              height: bracketSize,
              backgroundColor: borderColor,
              boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}, 0 0 24px ${glowColor}`,
            }}
            initial={{ scaleY: 0, transformOrigin: 'top' }}
            animate={{ scaleY: 1 }}
            transition={{ duration: animationDuration, ease: 'easeOut' }}
          />

          {/* Top-right bracket - Horizontal */}
          <motion.div
            className="absolute"
            style={{
              right: 0,
              top: 0,
              width: bracketSize,
              height: bracketThickness,
              backgroundColor: borderColor,
              boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}, 0 0 24px ${glowColor}`,
            }}
            initial={{ scaleX: 0, transformOrigin: 'right' }}
            animate={{ scaleX: 1 }}
            transition={{ duration: animationDuration, ease: 'easeOut' }}
          />
          {/* Top-right bracket - Vertical */}
          <motion.div
            className="absolute"
            style={{
              right: 0,
              top: 0,
              width: bracketThickness,
              height: bracketSize,
              backgroundColor: borderColor,
              boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}, 0 0 24px ${glowColor}`,
            }}
            initial={{ scaleY: 0, transformOrigin: 'top' }}
            animate={{ scaleY: 1 }}
            transition={{ duration: animationDuration, ease: 'easeOut' }}
          />

          {/* Bottom-left bracket - Horizontal */}
          <motion.div
            className="absolute"
            style={{
              left: 0,
              bottom: 0,
              width: bracketSize,
              height: bracketThickness,
              backgroundColor: borderColor,
              boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}, 0 0 24px ${glowColor}`,
            }}
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1 }}
            transition={{ duration: animationDuration, ease: 'easeOut' }}
          />
          {/* Bottom-left bracket - Vertical */}
          <motion.div
            className="absolute"
            style={{
              left: 0,
              bottom: 0,
              width: bracketThickness,
              height: bracketSize,
              backgroundColor: borderColor,
              boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}, 0 0 24px ${glowColor}`,
            }}
            initial={{ scaleY: 0, transformOrigin: 'bottom' }}
            animate={{ scaleY: 1 }}
            transition={{ duration: animationDuration, ease: 'easeOut' }}
          />

          {/* Bottom-right bracket - Horizontal */}
          <motion.div
            className="absolute"
            style={{
              right: 0,
              bottom: 0,
              width: bracketSize,
              height: bracketThickness,
              backgroundColor: borderColor,
              boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}, 0 0 24px ${glowColor}`,
            }}
            initial={{ scaleX: 0, transformOrigin: 'right' }}
            animate={{ scaleX: 1 }}
            transition={{ duration: animationDuration, ease: 'easeOut' }}
          />
          {/* Bottom-right bracket - Vertical */}
          <motion.div
            className="absolute"
            style={{
              right: 0,
              bottom: 0,
              width: bracketThickness,
              height: bracketSize,
              backgroundColor: borderColor,
              boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}, 0 0 24px ${glowColor}`,
            }}
            initial={{ scaleY: 0, transformOrigin: 'bottom' }}
            animate={{ scaleY: 1 }}
            transition={{ duration: animationDuration, ease: 'easeOut' }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default TrueFocus;
