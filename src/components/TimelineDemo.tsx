import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2023 – 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Independent AI/ML Development & Strategic Upskilling Journey. Focused on mastering cutting-edge AI/ML, launching independent projects, and exploring AR/VR innovation. Key projects include:
            <ul className="list-disc pl-5 mt-2">
              <li>AI-Powered Business Enhancement Service: Revamped business online presence & customer support via custom AI agent.</li>
              <li>Actionable TikTok Content Tool: Extracted key info from TikTok videos using Whisper & LLMs.</li>
              <li>LLM-Based Options Contract Filter: Simplified options trading with natural language queries.</li>
              <li>Crypto Raffle Timing Predictor: Analyzed raffle data & sent Telegram alerts for optimal entry.</li>
              <li>WhatsApp Chat Analyzer: Provided sentiment analysis on chats using AI personas.</li>
              <li>AI Vision/Lidar/AR Projects: Explored produce recognition, drone navigation, and rapid prototyping for fixes.</li>
              <li>DeFi/Web3 Initiatives: Included UI/UX consulting and PitchLucy sentiment analysis.</li>
            </ul>
          </p>
           <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-neutral-200 dark:bg-neutral-800 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center text-neutral-500 text-xs text-center p-2">Image: AI/ML concept graphic or code snippet</div>
            <div className="rounded-lg bg-neutral-200 dark:bg-neutral-800 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center text-neutral-500 text-xs text-center p-2">Image: AR/VR headset or Lidar scan graphic</div>
          </div>
        </div>
      ),
    },
    {
      title: "July 2019 – April 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Product Manager at Capital One - Credit Risk Division (McLean, VA). Led the opportunity assessment, credit reporting gap analysis, & final strategic direction recommendation of the "Buy Now Pay Later" credit reporting landscape against COF's current capabilities. Identified and delivered several process efficiencies through automation for the Credit Risk Data Analysts (DA) which lead to additional data quality enhancements and additional DA bandwidth. Delivered IP login Validation Dashboard. Generated $60 million net present value by leading scoping, ideation, and delivery of two a/b test variants. Facilitated 91 UX features to market with an estimated incremental value of over $100 million/year.
          </p>
           <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-neutral-200 dark:bg-neutral-800 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center text-neutral-500 text-xs text-center p-2">Image: Capital One logo or Credit Risk concept</div>
            <div className="rounded-lg bg-neutral-200 dark:bg-neutral-800 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center text-neutral-500 text-xs text-center p-2">Image: Dashboard screenshot or process automation graphic</div>
          </div>
        </div>
      ),
    },
    {
      title: "May 2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Graduated from The University of Texas at Austin with a Bachelor of Science in Mechanical Engineering (GPA: 3.47/4.00). Minor in Business Foundations Certificate Program.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-neutral-200 dark:bg-neutral-800 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center text-neutral-500 text-xs text-center p-2">Image: UT Austin Campus or Graduation</div>
            <div className="rounded-lg bg-neutral-200 dark:bg-neutral-800 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center text-neutral-500 text-xs text-center p-2">Image: Business Foundations Certificate or related graphic</div>
          </div>
        </div>
      ),
    },
    {
      title: "June 2018 – August 2018",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Technical Development Program Intern at Schlumberger - Surface Systems (Houston, TX). Designed, analyzed, and delivered a flow by area solution for a system experiencing field issues. Developed an updated contact stress method which tested 67% more field accurate than the current method. Modernized the internal documentation website.
          </p>
           <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-neutral-200 dark:bg-neutral-800 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center text-neutral-500 text-xs text-center p-2">Image: Schlumberger logo or Surface Systems equipment</div>
            <div className="rounded-lg bg-neutral-200 dark:bg-neutral-800 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center text-neutral-500 text-xs text-center p-2">Image: Flow analysis diagram or documentation website screenshot</div>
          </div>
        </div>
      ),
    },
    {
      title: "June 2017 – August 2017",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Hardware Engineering Intern at 7Senses Lab - Robotics (Shenzhen, China). Manufactured a custom 3D printed stand to test and optimize for camera placement on Solbit (Al Robot). Recommended a list of materials for Solbit's body to the CFO based on impact strength tests and cost.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-neutral-200 dark:bg-neutral-800 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center text-neutral-500 text-xs text-center p-2">Image: 7Senses Lab logo or Solbit Robot</div>
            <div className="rounded-lg bg-neutral-200 dark:bg-neutral-800 h-20 md:h-44 lg:h-60 w-full flex items-center justify-center text-neutral-500 text-xs text-center p-2">Image: 3D printed stand or robotics hardware</div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-white text-black">
      <div className="relative w-full px-4 py-20">
        <Timeline data={data} />
      </div>
    </div>
  );
}
