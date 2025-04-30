import React from "react";
import { SplineSceneBasic, NavBarDemo } from "@/components/code.demo";

const Home = () => {
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
          <SplineSceneBasic />
        </div>

      </div>
    </>
  );
};

export default Home;
