
import React from 'react';

interface AnimatedGridProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedGrid = ({ children, className = "" }: AnimatedGridProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        {/* Grid principal minimalista */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridFlowMinimal 30s linear infinite'
          }}
        />
        {/* Grid secundário mais sutil */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            animation: 'gridFlowMinimal 20s linear infinite reverse'
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
            animation: 'flicker 4s ease-in-out infinite alternate'
          }}
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
