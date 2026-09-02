import React from 'react';

/**
 * Reusable Ambient Background Animation Wrapper
 * Injects soothing, slow-moving floating ambient lights & grid mesh animations into all slides
 */
export default function AmbientBackground({ primaryColor = 'bg-[#05A872]', secondaryColor = 'bg-[#C5A059]', children }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Soothing Floating Ambient Orbs */}
      <div className={`ambient-glow-orb-1 ${primaryColor}`}></div>
      <div className={`ambient-glow-orb-2 ${secondaryColor}`}></div>

      {/* Slow Shimmering Grid Pattern */}
      <div className="soothing-grid-pattern"></div>

      {/* Slide Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
