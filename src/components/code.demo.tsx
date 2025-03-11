
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Home, User, Briefcase, FileText } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { TextScramble } from "@/components/ui/text-scramble";
import { useState } from "react";

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Resume', url: '/resume', icon: FileText }
  ]

  return <NavBar items={navItems} />;
}

export function SplineSceneBasic() {
  const titles = ["Developer", "Analyst", "Creator"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [trigger, setTrigger] = useState(false);

  const handleHover = () => {
    setTrigger(true);
    setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
  };

  return (
    <Card className="w-full h-screen bg-black/[0.96] relative overflow-hidden border-0 rounded-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <TextScramble
            as="h1"
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 cursor-pointer"
            speed={0.02}
            duration={1.2}
            trigger={trigger}
            onScrambleComplete={() => setTrigger(false)}
            onHoverStart={handleHover}
          >
            {titles[currentTitleIndex]}
          </TextScramble>
          <TextScramble
            className="mt-4 text-neutral-300 max-w-lg"
            speed={0.01}
            duration={1.5}
            characterSet=". "
          >
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your design.
          </TextScramble>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
