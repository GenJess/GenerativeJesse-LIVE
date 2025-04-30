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

import { NavBarDemo } from "@/components/code.demo";

export default function Projects() {
  return (
    <>
      <NavBarDemo />
      <div className="min-h-screen w-full bg-zinc-900 text-white pt-20 pb-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        {/* TODO: Add tiles or fallback content here if needed */}
        <div className="text-neutral-300">Project showcase coming soon.</div>
      </div>
    </>
  );
}
