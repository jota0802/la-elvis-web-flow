
import React from 'react';

interface AnimatedGridProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedGrid = ({ children, className = "" }: AnimatedGridProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-grid-pattern animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
        <div 
          className="absolute inset-0 bg-grid-pattern animate-grid-move-reverse"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '25px 25px',
            animation: 'gridMoveReverse 15s linear infinite'
          }}
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export const FlickeringGrid = ({ children, className = "" }: AnimatedGridProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'flicker 3s ease-in-out infinite alternate'
          }}
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
