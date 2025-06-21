
import React from 'react';

interface AnimatedGridProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedGrid = ({ children, className = "" }: AnimatedGridProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        {/* Grid principal com movimento diagonal */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridFlow 30s linear infinite'
          }}
        />
        {/* Grid secundário com movimento contrário */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(0, 0, 0, 0.15) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(0, 0, 0, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridFlowReverse 25s linear infinite'
          }}
        />
        {/* Pontos de intersecção animados */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 60px 60px, rgba(0, 0, 0, 0.3) 2px, transparent 2px)`,
            backgroundSize: '60px 60px',
            animation: 'pulseGrid 8s ease-in-out infinite'
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
