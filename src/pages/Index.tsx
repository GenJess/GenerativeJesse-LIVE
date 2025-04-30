import Spline from '@splinetool/react-spline';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming react-router-dom is used for navigation

export default function Index() {
  const [redirected, setRedirected] = useState(false);
  const splineRef = useRef();
  const navigate = useNavigate(); // Hook for navigation

  const handleScroll = (e) => {
    console.log('Spline Scroll Event:', e);
    // The event object 'e' from onSplineScroll should contain information
    // about the scroll progress or the current state of the Spline animation
    // driven by scroll.
    // You need to inspect the 'e' object logged to the console when you scroll
    // to understand its structure and determine how to check if State 5 is reached.

    // Example logic (replace with actual check based on console output):
    // Assuming 'e.scrollProgress' is a property in 'e' that goes from 0 to 1
    // as the scene scrolls through states, and 1 corresponds to State 5.
    // This is an assumption and needs verification by inspecting the console output of 'e'.
    if (e && e.scrollProgress >= 0.95 && !redirected) { // Use >= 0.95 to account for potential floating point inaccuracies
      setRedirected(true); // Prevent multiple redirects
      console.log('Redirecting to /home');
      navigate('/home'); // Use navigate from react-router-dom for redirection
    }
  };

  function onSplineLoad(splineApp) {
    splineRef.current = splineApp;
    console.log('Spline Application Loaded:', splineApp);

    // You might also be able to listen for state change events directly from the Spline application instance
    // if the onSplineScroll event doesn't provide enough detail or a clear indicator for State 5.
    // Consult Spline documentation or inspect the splineApp object for available methods/events.
    // Example: (This is hypothetical and depends on Spline's API)
    // splineApp.subscribeToStateChange((currentState) => {
    //   console.log('Spline State Changed:', currentState);
    //   if (currentState === 'State 5' && !redirected) {
    //     setRedirected(true);
    //     navigate('/home');
    //   }
    // });

    // Alternative check using animation progress if available and relevant
    // if (splineApp.animation && splineApp.animation.progress >= 0.95 && !redirected) {
    //   setRedirected(true);
    //   console.log('Redirecting to /home based on animation progress');
    //   navigate('/home');
    // }
  }

  // Optional: Add a useEffect to clean up event listeners if necessary
  return (
    <Spline
      scene="https://prod.spline.design/wPA3LRYxI9Gxx53V/scene.splinecode"
      style={{
        width: '100vw',
        height: '100vh'
      }}
    />
  );
}