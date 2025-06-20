
import React from 'react';

interface AnimatedGridProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedGrid = ({ children, className = "" }: AnimatedGridProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0 bg-grid-pattern animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'gridMove 25s linear infinite'
          }}
        />
        <div 
          className="absolute inset-0 bg-grid-pattern animate-grid-move-reverse"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridMoveReverse 20s linear infinite'
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
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'flicker 4s ease-in-out infinite alternate'
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            animation: 'flicker 3s ease-in-out infinite alternate-reverse'
          }}
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
