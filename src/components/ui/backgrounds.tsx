
import React from 'react';

export const MinimalBackground = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-minimal-gradient" />
    <div className="relative z-10">{children}</div>
  </div>
);

export const SubtleGridBackground = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-subtle-grid" />
    <div className="relative z-10">{children}</div>
  </div>
);

export const BeamsBackground = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-minimal-gradient" />
    <div className="relative z-10">{children}</div>
  </div>
);

export const AnimatedGrid = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 opacity-20">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}
      />
    </div>
    <div className="relative z-10">{children}</div>
  </div>
);

export const FlickeringGrid = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
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
    <div className="relative z-10">{children}</div>
  </div>
);
