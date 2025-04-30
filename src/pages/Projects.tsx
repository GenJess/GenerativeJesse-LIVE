"use client"

import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout"

const projectFrames = [
  {
    id: 1,
    title: "AI-Powered Business Enhancement Service",
    video: "placeholder_video_url_1", // Replace with actual video URL
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner: "https://www.pngmart.com/image/647566", // Replace with actual image URL
    edgeHorizontal: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    edgeVertical: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 2,
    title: "Actionable TikTok Content Tool",
    video: "placeholder_video_url_2", // Replace with actual video URL
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner: "https://www.pngmart.com/image/647566", // Replace with actual image URL
    edgeHorizontal: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    edgeVertical: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 3,
    title: "LLM-Based Options Contract Filter",
    video: "placeholder_video_url_3", // Replace with actual video URL
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    corner: "https://www.pngmart.com/image/647566", // Replace with actual image URL
    edgeHorizontal: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    edgeVertical: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 4,
    title: "Crypto Raffle Timing Predictor",
    video: "placeholder_video_url_4", // Replace with actual video URL
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner: "https://www.pngmart.com/image/647566", // Replace with actual image URL
    edgeHorizontal: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    edgeVertical: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 5,
    title: "WhatsApp Chat Analyzer",
    video: "placeholder_video_url_5", // Replace with actual video URL
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner: "https://www.pngmart.com/image/647566", // Replace with actual image URL
    edgeHorizontal: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    edgeVertical: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 6,
    title: "Raspberry Pi Vision/Produce Checkout",
    video: "placeholder_video_url_6", // Replace with actual video URL
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    corner: "https://www.pngmart.com/image/647566", // Replace with actual image URL
    edgeHorizontal: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    edgeVertical: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 7,
    title: "Drone AI Experiments",
    video: "placeholder_video_url_7", // Replace with actual video URL
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    corner: "https://www.pngmart.com/image/647566", // Replace with actual image URL
    edgeHorizontal: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    edgeVertical: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 8,
    title: "PitchLucy Scraping / DeFi AI",
    video: "placeholder_video_url_8", // Replace with actual video URL
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    corner: "https://www.pngmart.com/image/647566", // Replace with actual image URL
    edgeHorizontal: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    edgeVertical: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 9,
    title: "Zillow Scraping + 3D Home Tours",
    video: "placeholder_video_url_9", // Replace with actual video URL
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    corner: "https://www.pngmart.com/image/647566", // Replace with actual image URL
    edgeHorizontal: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    edgeVertical: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 100,
    isHovered: false,
  },
  {
    id: 10,
    title: "Vision/Lidar/AR AI Project",
    video: "placeholder_video_url_10", // Replace with actual video URL
    defaultPos: { x: 2, y: 12, w: 4, h: 4 }, // Centered left in the last row
    corner: "https://www.pngmart.com/image/647566", // Replace with actual image URL
    edgeHorizontal: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    edgeVertical: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 100,
    isHovered: false,
  },
    {
    id: 11,
    title: "Mini Jarvis for Digital Presence",
    video: "placeholder_video_url_11", // Replace with actual video URL
    defaultPos: { x: 6, y: 12, w: 4, h: 4 }, // Centered right in the last row
    corner: "https://www.pngmart.com/image/647566", // Replace with actual image URL
    edgeHorizontal: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    edgeVertical: "https://static.vecteezy.com/system/resources/previews/025/314/100/original/gold-border-frame-png.png", // Replace with actual image URL
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 100,
    isHovered: false,
  },
];

import { useRef } from 'react'; // Import useRef
import { NavBarDemo } from "@/components/code.demo";
import { SplineScene } from "@/components/ui/splite"; // Import SplineScene

export default function Projects() {
  const spline = useRef(); // Ref for Spline application instance

  // Function to handle Spline scene load
  function onSplineLoad(splineApp: any) {
    spline.current = splineApp;
    // You can add event listeners here if needed, e.g., for object clicks
    // splineApp.addEventListener('mouseDown', onSplineMouseDown);
  }

  // Function to handle Spline object click (example)
  function onSplineMouseDown(e: any) {
    if (e.target.name === 'YourRobotObjectName') { // Replace with the actual name of your clickable Spline object
      console.log('Spline object clicked!');
      // The Eleven Labs widget will handle the conversation
      // You might need to interact with the widget's API here if it provides one
      // to trigger the conversation or get its state for Spline synchronization.
    }
  }

  return (
    <>
      <NavBarDemo />
      {/* Spline scene fills viewport with zoom and hidden overflow */}
      <div
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
        }}
        className="bg-black" // Add a background color in case Spline fails
      >
        {/* Zoomed-in container to push watermark outside of view */}
        <div style={{
          transform: 'scale(1.2) translateY(-60px)',
          transformOrigin: 'center top',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}>
          {/* Spline Component */}
          <SplineScene
            scene="https://prod.spline.design/szQ-6HaVTX6qOcXB/scene.splinecode"
            className="absolute inset-0 w-full h-full" // Position absolutely and cover the container
            onLoad={onSplineLoad} // Attach onLoad event listener
            onSplineMouseDown={onSplineMouseDown} // Attach onSplineMouseDown event listener
          />
        </div>
        {/* Eleven Labs Conversational AI Widget */}
        <elevenlabs-convai agent-id="NxXtmZAjquCq17lMPv5F"></elevenlabs-convai>
        {/* The script tag for the widget will be added in index.html or a higher-level component */}
        {/* Captions will likely be handled by the widget itself or its API */}
        {/* You can add other content here if needed, positioned above the Spline scene with a higher z-index */}
      </div>
    </>
  );
}
