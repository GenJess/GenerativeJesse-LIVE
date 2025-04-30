import { NavBarDemo } from "@/components/code.demo";
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 1100 }}>
        <NavBarDemo />
      </div>
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
          opacity: 0.7, // Slightly dim the background spline
        }}>
          <Spline scene="https://prod.spline.design/zQQIvq4DY2lHfzP1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white p-8 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/60 backdrop-blur-md p-8 rounded-lg shadow-xl max-w-3xl text-center pointer-events-auto" // Enable pointer events for text interaction
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-lg md:text-xl text-neutral-200 mb-6">
              Experienced product manager with a passion for cutting-edge technologies. Recently completed an intensive
              six-month self-directed learning journey focused on generative AI, prompt engineering, machine learning, and
              blockchain. Proven ability to learn quickly, collaborate effectively, and drive results in dynamic
              environments.
            </p>
            <div className="text-left text-neutral-300 space-y-2">
              <p><strong className="text-sky-400">Key Skills:</strong> Product Strategy, Agile/Scrum, Data Analysis, Python, AI/ML (TensorFlow, LLMs), Blockchain Fundamentals, AR/VR Concepts, Web Development (React, TS).</p>
              <p><strong className="text-sky-400">Experience Highlights:</strong> Product Manager @ Capital One (Credit Risk), Internships @ Schlumberger & 7Senses Lab (Robotics), Independent AI/ML & Web3 Projects.</p>
              <p><strong className="text-sky-400">Recent Focus (2023-2025):</strong> Strategic Upskilling in AI/ML, AR/VR, and building innovative independent applications.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
