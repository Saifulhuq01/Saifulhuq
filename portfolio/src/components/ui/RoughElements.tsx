'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RoughNotation } from 'react-rough-notation';

export const HandDrawnButton = ({ children, href }: { children: React.ReactNode, href: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center px-10 py-5 font-bold text-accent uppercase tracking-[0.2em] font-mono group overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 transition-colors duration-200 group-hover:text-base">
        {children}
      </span>

      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <motion.rect
          x="2" y="2" style={{ width: "calc(100% - 4px)", height: "calc(100% - 4px)" }}
          fill="var(--color-accent)"
          stroke="var(--color-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="10 10 20 8 15"
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ 
            pathLength: 1,
            fillOpacity: isHovered ? 1 : 0, 
            strokeDashoffset: isHovered ? [0, -20, 0] : 0 
          }}
          transition={{ 
            pathLength: { duration: 0.8, ease: "easeOut" },
            fillOpacity: { duration: 0.2 },
            strokeDashoffset: { duration: 0.3, repeat: Infinity, repeatType: "reverse" }
          }}
          className="rough-rect"
        />
      </svg>
    </motion.a>
  );
};

export const RoughHighlight = ({ 
  children, color, type = 'highlight', ...props 
}: { 
  children: React.ReactNode, 
  color: string, 
  type?: "highlight" | "underline" | "box" | "circle" | "strike-through" | "crossed-off",
  [x: string]: any 
}) => {
  return (
    // @ts-ignore
    <RoughNotation type={type} show={true} color={color} strokeWidth={2} animationDuration={800} {...props}>
      <span className="text-white relative z-10 font-bold">{children}</span>
    </RoughNotation>
  );
};

export const SVGDrawPath = ({ stroke = "#FF4500" }: { stroke?: string }) => {
  return (
    <svg className="absolute -left-[5px] top-0 h-full w-[10px] pointer-events-none">
      <motion.line
        x1="5" y1="0" x2="5" y2="100%"
        stroke={stroke}
        strokeWidth="3"
        strokeDasharray="4 8"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
};
