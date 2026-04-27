'use client';
import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const rafRef = useRef<number>(0);
  const mousePos = useRef({ x: -100, y: -100 });
  const needsUpdate = useRef(false);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const ringSpringConfig = { damping: 18, stiffness: 120, mass: 0.8 };

  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  const springRingX = useSpring(ringX, ringSpringConfig);
  const springRingY = useSpring(ringY, ringSpringConfig);

  // RAF-gated cursor update — only sets motion values once per frame
  const updateCursor = useCallback(() => {
    if (needsUpdate.current) {
      const { x, y } = mousePos.current;
      cursorX.set(x);
      cursorY.set(y);
      ringX.set(x);
      ringY.set(y);
      needsUpdate.current = false;
    }
    rafRef.current = requestAnimationFrame(updateCursor);
  }, [cursorX, cursorY, ringX, ringY]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const moveCursor = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      needsUpdate.current = true;
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('cursor-crosshair')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Start RAF loop
    rafRef.current = requestAnimationFrame(updateCursor);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', checkMobile);
    };
  }, [updateCursor]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: isClicking ? 6 : isHovering ? 40 : 8,
            height: isClicking ? 6 : isHovering ? 40 : 8,
            opacity: isHovering ? 0.5 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: springRingX,
          y: springRingY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full border border-accent/40"
          animate={{
            width: isHovering ? 60 : 36,
            height: isHovering ? 60 : 36,
            borderColor: isHovering ? 'var(--color-accent)' : 'rgba(255, 69, 0, 0.3)',
            opacity: isClicking ? 0.2 : 0.6,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
}
