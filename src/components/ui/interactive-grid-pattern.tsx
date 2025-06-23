
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface InteractiveGridPatternProps {
  className?: string;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
}

export function InteractiveGridPattern({
  className,
  width = 80,
  height = 80,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  numSquares = 25,
  maxOpacity = 0.5,
  duration = 4,
  ...props
}: InteractiveGridPatternProps) {
  const patternRef = useRef<SVGSVGElement>(null);
  const squareRefs = useRef<(SVGRectElement | null)[]>([]);

  useEffect(() => {
    const squares = squareRefs.current;
    
    // Simple Z-axis depth animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes depthPulse {
        0%, 100% { 
          opacity: 0.1; 
          transform: scale(1);
        }
        50% { 
          opacity: ${maxOpacity}; 
          transform: scale(1.15);
        }
      }
    `;
    document.head.appendChild(style);

    // Apply staggered animation to squares
    squares.forEach((square, index) => {
      if (square) {
        const delay = (index % numSquares) * (duration / numSquares);
        square.style.animation = `depthPulse ${duration}s ease-in-out ${delay}s infinite`;
      }
    });

    return () => {
      document.head.removeChild(style);
    };
  }, [numSquares, duration, maxOpacity]);

  const gridSize = Math.ceil(Math.sqrt(numSquares));

  return (
    <svg
      ref={patternRef}
      aria-hidden="true"
      className={cn(
        "absolute inset-0 h-full w-full fill-gray-400/20 stroke-gray-400/20",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id="interactive-grid-pattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeWidth="1"
          />
        </pattern>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#interactive-grid-pattern)" />
      
      {/* Animated squares positioned in grid */}
      {Array.from({ length: numSquares }).map((_, i) => {
        const row = Math.floor(i / gridSize);
        const col = i % gridSize;
        const x = (col / gridSize) * 100;
        const y = (row / gridSize) * 100;
        
        return (
          <rect
            key={i}
            ref={(el) => (squareRefs.current[i] = el)}
            width={width * 0.4}
            height={height * 0.4}
            x={`${x}%`}
            y={`${y}%`}
            fill="currentColor"
            strokeWidth="0"
            className="opacity-20"
          />
        );
      })}
    </svg>
  );
}
