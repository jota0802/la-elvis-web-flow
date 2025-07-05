import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBeamProps {
  className?: string;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  duration?: number;
  delay?: number;
  color?: string;
  thickness?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  fromX,
  fromY,
  toX,
  toY,
  duration = 2,
  delay = 0,
  color = '#3b82f6',
  thickness = 2
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const animationRef = useRef<SVGAnimateElement>(null);

  const pathData = `M ${fromX} ${fromY} Q ${(fromX + toX) / 2} ${Math.min(fromY, toY) - 20} ${toX} ${toY}`;
  const pathLength = pathRef.current?.getTotalLength() || 100;

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.beginElement();
    }
  }, []);

  return (
    <svg 
      className={cn("absolute inset-0 pointer-events-none", className)}
      viewBox="0 0 300 200"
      fill="none"
    >
      <defs>
        <linearGradient id={`beam-gradient-${delay}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      
      <path
        ref={pathRef}
        d={pathData}
        stroke={`url(#beam-gradient-${delay})`}
        strokeWidth={thickness}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={pathLength}
        strokeDashoffset={pathLength}
      >
        <animate
          ref={animationRef}
          attributeName="stroke-dashoffset"
          values={`${pathLength};0;${pathLength}`}
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

interface FlowNodeProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const FlowNode: React.FC<FlowNodeProps> = ({ children, className, style }) => {
  return (
    <div 
      className={cn("relative flex items-center justify-center", className)}
      style={style}
    >
      {children}
    </div>
  );
};