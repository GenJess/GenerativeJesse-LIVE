import Spline from '@splinetool/react-spline';
import { useEffect, useRef } from 'react';

export default function Index() {
  const splineRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        if (splineRef.current) {
          splineRef.current.emitEvent(['enter-pressed']);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Spline
        scene="https://prod.spline.design/E1qY6ORvbXHgNydr/scene.splinecode"
        onLoad={(splineApp) => {
          splineRef.current = splineApp;
        }}
      />
    </div>
  );
}
