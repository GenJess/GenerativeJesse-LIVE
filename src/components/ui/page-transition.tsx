"use client"
import { motion } from "framer-motion";
import { Spotlight } from "./spotlight";

interface PageTransitionProps {
  children: React.ReactNode;
  startPosition?: { x: number; y: number };
}

export const PageTransition = ({ children, startPosition }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="min-h-screen w-full relative bg-transparent overflow-hidden"
    >
      <motion.div
        initial={{ 
          scale: 1,
          x: startPosition?.x ?? window.innerWidth / 2,
          y: startPosition?.y ?? window.innerHeight / 2,
        }}
        animate={{ 
          scale: 50,
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        }}
        transition={{ 
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="fixed -translate-x-1/2 -translate-y-1/2"
      >
        <Spotlight
          className="pointer-events-none"
          fill="white"
          size={400}
        />
      </motion.div>
      {children}
    </motion.div>
  );
};
