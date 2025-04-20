# Project Folder Structure & File Purpose

This document explains the structure of your project and the purpose of each file/folder, helping you understand and prepare for deployment to Git.

---

## Root Directory

- `.git/` — Git version control metadata.
- `.gitignore` — Specifies files/folders to ignore in Git.
- `.windsurfrules` — Deployment configuration or rules (possibly for Netlify/Vercel/etc).
- `README.md` — Project overview and instructions.
- `archives/` — Old files, media, or previous project versions (not needed for deployment).
- `bun.lockb` — Bun package manager lockfile (if using Bun; otherwise, can be removed if using npm/yarn).
- `components.json` — Component registry/configuration (framework-specific, e.g., Vite, Next.js, etc).
- `dist/` — Build output (should be gitignored).
- `eslint.config.js` — Linting configuration.
- `index.html` — Main HTML entry point (for Vite or static sites).
- `memory-bank/` — Project context, documentation, and planning markdown files.
- `node_modules/` — Installed dependencies (should be gitignored).
- `package-lock.json` — NPM dependency lockfile.
- `package.json` — Project manifest: scripts, dependencies, metadata.
- `pickbackup.md` — (Custom) Possibly backup or notes file.
- `postcss.config.js` — PostCSS configuration for CSS processing.
- `project-overview.md` — Additional project documentation.
- `public/` — Static assets (images, favicon, etc) served as-is.
- `src/` — All source code for the webapp (see below).
- `tailwind.config.ts` — Tailwind CSS configuration.
- `tsconfig.app.json`, `tsconfig.json`, `tsconfig.node.json` — TypeScript configuration files.
- `vite.config.ts` — Vite build tool configuration.

---

## Key Subdirectories

### `src/` — Application Source Code
- `App.tsx`, `App.css` — Main React app component and styles.
- `main.tsx` — Entry point for React/Vite.
- `index.css` — Global styles.
- `vite-env.d.ts` — Vite/TypeScript environment types.
- `components/` — Reusable UI and functional components.
  - `ui/` — Atomic UI components (button, card, modal, etc).
  - Other files — Custom or demo components.
- `context/` — React context providers for state management.
- `hooks/` — Custom React hooks.
- `lib/` — Utility libraries/helpers.
- `pages/` — Top-level pages/routes for the webapp (About, Projects, Resume, etc).

### `public/` — Static Assets
- `favicon.ico`, `og-image.png`, `placeholder.svg` — Icons and images for branding/social sharing.

### `memory-bank/` — Project Documentation
- Markdown files for context, system patterns, progress, tech notes, etc.

### `archives/` — Old/Unused Content
- Markdown and media files from previous projects or drafts.

---

## Recommendations for Cleanup
- Remove `dist/` and `node_modules/` from Git (add to `.gitignore`).
- Move old or unused files (like `archives/`, `pickbackup.md`) out of the main project if not needed.
- Remove `bun.lockb` if you are not using Bun as your package manager.
- Ensure only necessary documentation and code are in the repo before deployment.

---

## How Everything Ties Together
- The `src/` directory is the heart of your webapp, containing all the code.
- `public/` provides static assets referenced by your code or HTML.
- Config files (`package.json`, `vite.config.ts`, etc.) define how the app is built, run, and deployed.
- Documentation (`README.md`, `memory-bank/`, etc.) helps you and others understand and maintain the project.

---

Feel free to edit this file as you further refine your project or add/remove files!

---

# Minimal Landing Page & Navbar Code (Single File Copy)

main.tsx
```tsx
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
```

App.tsx
```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  </BrowserRouter>
);

export default App;
```

pages/Index.tsx
```tsx
import { SplineSceneBasic, NavBarDemo } from "@/components/code.demo";

const Index = () => {
  return (
    <>
      <NavBarDemo />
      <div className="min-h-screen w-full bg-black">
        <SplineSceneBasic />
      </div>
    </>
  );
};

export default Index;
```

components/code.demo.tsx
```tsx
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Home, User, Briefcase, FileText, Clock } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { useEffect } from "react";
import { renderCanvas } from "./ui/canvas-cursor";
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
```

components/ui/tubelight-navbar.tsx
```tsx
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon } from "lucide-react"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = items.find((item) => item.url === currentPath);
    if (activeItem) {
      setActiveTab(activeItem.name);
    }
  }, [location, items]);

  return (
    <nav
      className={
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-[100] mb-6 sm:pt-6 h-fit " +
        (className || "")
      }
    >
      <div className="flex items-center gap-3 bg-black/50 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => {
                setActiveTab(item.name);
              }}
              className={
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors " +
                "text-gray-300 hover:text-white " +
                (isActive ? "bg-white/10 text-white" : "")
              }
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-sky-400 rounded-t-full">
                    <div className="absolute w-8 h-4 bg-sky-400/10 rounded-full blur-md -top-2 -left-1" />
                    <div className="absolute w-6 h-3 bg-sky-400/10 rounded-full blur-sm -top-1" />
                    <div className="absolute w-2 h-2 bg-sky-400/10 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
```

components/ui/splite.tsx
```tsx
'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}
```

components/ui/card.tsx
```tsx
import * as React from "react"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={
      "rounded-lg border bg-card text-card-foreground shadow-sm " +
      (className || "")
    }
    {...props}
  />
))
Card.displayName = "Card"

export { Card }
```

components/ui/canvas-cursor.tsx
```tsx
export class NoiseGenerator {
    phase: number;
    offset: number;
    frequency: number;
    amplitude: number;
  
    constructor(options: { phase?: number; offset?: number; frequency?: number; amplitude?: number } = {}) {
      this.phase = options.phase || 0;
      this.offset = options.offset || 0;
      this.frequency = options.frequency || 0.001;
      this.amplitude = options.amplitude || 1;
    }
  
    update(): number {
      this.phase += this.frequency;
      return this.offset + Math.sin(this.phase) * this.amplitude;
    }
  }
  
  class Node {
    x: number = 0;
    y: number = 0;
    vx: number = 0;
    vy: number = 0;
  }
  
  class Line {
    spring: number;
    friction: number;
    nodes: Node[];
  
    constructor(options: { spring: number }) {
      this.spring = options.spring + 0.1 * Math.random() - 0.05;
      this.friction = 0.5 + 0.01 * Math.random() - 0.005;
      this.nodes = Array(40).fill(null).map(() => {
        const node = new Node();
        node.x = mousePos.x;
        node.y = mousePos.y;
        return node;
      });
    }
  
    update() {
      let spring = this.spring;
      let node = this.nodes[0];
  
      node.vx += (mousePos.x - node.x) * spring;
      node.vy += (mousePos.y - node.y) * spring;
  
      for (let i = 0; i < this.nodes.length; i++) {
        node = this.nodes[i];
  
        if (i > 0) {
          const prev = this.nodes[i - 1];
          node.vx += (prev.x - node.x) * spring;
          node.vy += (prev.y - node.y) * spring;
          node.vx += prev.vx * 0.025;
          node.vy += prev.vy * 0.025;
        }
  
        node.vx *= this.friction;
        node.vy *= this.friction;
        node.x += node.vx;
        node.y += node.vy;
  
        spring *= 0.99;
      }
    }
  
    draw(ctx: CanvasRenderingContext2D) {
      let x = this.nodes[0].x, 
          y = this.nodes[0].y;
  
      ctx.beginPath();
      ctx.moveTo(x, y);
  
      for (let i = 1, n = this.nodes.length - 2; i < n; i++) {
        const a = this.nodes[i];
        const b = this.nodes[i + 1];
        x = (a.x + b.x) * 0.5;
        y = (a.y + b.y) * 0.5;
        ctx.quadraticCurveTo(a.x, a.y, x, y);
      }
  
      const a = this.nodes[this.nodes.length - 2];
      const b = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
      ctx.stroke();
      ctx.closePath();
    }
  }
  
  const mousePos = { x: 0, y: 0 };
  let lines: Line[] = [];
  let noise: NoiseGenerator;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let isRunning = false;
  let frameCount = 1;
  
  function initLines() {
    lines = [];
    for (let i = 0; i < 60; i++) {
      lines.push(new Line({ spring: 0.45 + (i / 60) * 0.025 }));
    }
  }
  
  function onMouseMove(e: MouseEvent | TouchEvent) {
    if ('touches' in e) {
      mousePos.x = e.touches[0].pageX;
      mousePos.y = e.touches[0].pageY;
    } else {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    }
    
    e.preventDefault();
  }
  
  function resizeCanvas() {
    if (canvas) {
      canvas.width = window.innerWidth - 20;
      canvas.height = window.innerHeight;
    }
  }
  
  function render() {
    if (!isRunning || !ctx) return;
  
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = `hsla(${Math.round(noise.update())},90%,50%,0.4)`;
    ctx.lineWidth = 2;
  
    for (const line of lines) {
      line.update();
      line.draw(ctx);
    }
  
    frameCount++;
    requestAnimationFrame(render);
  }
  
  export function renderCanvas() {
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (!canvas) return;
  
    ctx = canvas.getContext('2d')!;
    isRunning = true;
    frameCount = 1;
  
    noise = new NoiseGenerator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });
  
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchstart', onMouseMove);
    window.addEventListener('resize', resizeCanvas);
    
    initLines();
    resizeCanvas();
    render();
  }
```
