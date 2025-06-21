
import React from 'react';

interface AnimatedGridProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedGrid = ({ children, className = "" }: AnimatedGridProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        {/* Grid principal com gradiente colorido */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'gridFlowBlue 25s linear infinite'
          }}
        />
        {/* Grid secundário com cor complementar */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridFlowPurple 20s linear infinite reverse'
          }}
        />
        {/* Pontos brilhantes animados */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 80px 80px, rgba(34, 197, 94, 0.6) 3px, transparent 3px)`,
            backgroundSize: '80px 80px',
            animation: 'pulseGridGreen 6s ease-in-out infinite'
          }}
        />
        {/* Efeito de ondas */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)
            `,
            animation: 'waveEffect 8s ease-in-out infinite alternate'
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
