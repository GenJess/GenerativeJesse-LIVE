import React, { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  className?: string;
}

const VideoBackground = ({ className }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src="robot2cartoon.mp4"
      className={`absolute inset-0 object-cover w-full h-full ${className}`}
      muted
      loop
      style={{ zIndex: 100 }}
    />
  );
};

export default VideoBackground;
