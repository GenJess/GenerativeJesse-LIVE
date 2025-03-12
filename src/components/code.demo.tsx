'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Home, User, Briefcase, FileText, Clock } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { TextScramble } from "@/components/ui/text-scramble";
import { useState, useEffect } from "react";
import { renderCanvas } from "./ui/canvas-cursor";
import { YourSplineComponent } from './your-spline-export';
import { motion } from "framer-motion";

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Creations', url: '/creations', icon: FileText },
    { name: 'History', url: '/history', icon: Clock }
  ]

  return <NavBar items={navItems} />;
}

export function SplineSceneBasic() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <Card className="w-full h-screen bg-black relative overflow-hidden border-0 rounded-none">
      {/* Background Robot */}
      <SplineScene 
        scene="https://prod.spline.design/A6r9GOTlwGdONZl7/scene.splinecode"
        className="absolute inset-0 w-full h-full z-10"
      />
      
      {/* Cursor trails */}
      <canvas
        id="canvas"
        className="absolute inset-0 pointer-events-none z-20"
      />

      {/* Foreground JESSE text with fade animation */}
      <motion.div
        className="absolute inset-0 z-30"
        animate={{
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <SplineScene 
          scene="https://prod.spline.design/kFeQovtLf7EeINUd/scene.splinecode"
          className="w-full h-full"
        />
      </motion.div>
    </Card>
  );
}
