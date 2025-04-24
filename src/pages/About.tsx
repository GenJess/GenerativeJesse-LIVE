import { NavBarDemo } from "@/components/code.demo";
import Spline from '@splinetool/react-spline';

const About = () => {
  return (
    <>
      <NavBarDemo style={{ position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 1100 }} />
      {/* Spline scene fills viewport with zoom and hidden overflow */}
      <div
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
        }}
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
          <Spline scene="https://prod.spline.design/zQQIvq4DY2lHfzP1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Gradient fade overlay to mask any remaining bits */}
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '60px',
          background: 'linear-gradient(to top, black 60%, transparent)',
          zIndex: 1000,
          pointerEvents: 'none',
        }} />
      </div>
    </>
  );
};

export default About;
