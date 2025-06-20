
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
