import React, { createContext, useContext, useState } from 'react';

type SpotlightPosition = { x: number; y: number } | null;

interface SpotlightContextType {
  position: SpotlightPosition;
  setPosition: (position: SpotlightPosition) => void;
}

const SpotlightContext = createContext<SpotlightContextType | undefined>(undefined);

export function SpotlightProvider({ children }: { children: React.ReactNode }) {
  const [position, setPosition] = useState<SpotlightPosition>(null);

  return (
    <SpotlightContext.Provider value={{ position, setPosition }}>
      {children}
    </SpotlightContext.Provider>
  );
}

export function useSpotlight() {
  const context = useContext(SpotlightContext);
  if (context === undefined) {
    throw new Error('useSpotlight must be used within a SpotlightProvider');
  }
  return context;
}
