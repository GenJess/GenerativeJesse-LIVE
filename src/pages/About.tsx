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


      </div>
    </>
  );
};

export default About;
