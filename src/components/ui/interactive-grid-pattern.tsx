
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
  width = 60,
  height = 60,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  numSquares = 50,
  maxOpacity = 0.4,
  duration = 3,
  ...props
}: InteractiveGridPatternProps) {
  const patternRef = useRef<SVGSVGElement>(null);
  const squareRefs = useRef<(SVGRectElement | null)[]>([]);

  useEffect(() => {
    const squares = squareRefs.current;
    
    // Add CSS animation for Z-axis effect
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gridDepthPulse {
        0%, 100% { 
          opacity: 0.1; 
          transform: scale(1) translateZ(0px);
        }
        50% { 
          opacity: ${maxOpacity}; 
          transform: scale(1.1) translateZ(10px);
        }
      }
    `;
    document.head.appendChild(style);

    // Apply staggered animation to squares
    squares.forEach((square, index) => {
      if (square) {
        const delay = (index % numSquares) * (duration / numSquares);
        square.style.animation = `gridDepthPulse ${duration}s ease-in-out ${delay}s infinite`;
      }
    });

    return () => {
      document.head.removeChild(style);
    };
  }, [numSquares, duration, maxOpacity]);

  return (
    <svg
      ref={patternRef}
      aria-hidden="true"
      className={cn(
        "absolute inset-0 h-full w-full fill-gray-400/20 stroke-gray-400/30",
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
      
      {/* Grid squares with Z-axis animation */}
      {Array.from({ length: numSquares }).map((_, i) => {
        // Position squares within the grid pattern bounds
        const gridX = (i % Math.floor(Math.sqrt(numSquares))) * (100 / Math.floor(Math.sqrt(numSquares)));
        const gridY = Math.floor(i / Math.floor(Math.sqrt(numSquares))) * (100 / Math.floor(Math.sqrt(numSquares)));
        
        return (
          <rect
            key={i}
            ref={(el) => (squareRefs.current[i] = el)}
            width={width * 0.6}
            height={height * 0.6}
            x={`${gridX}%`}
            y={`${gridY}%`}
            fill="currentColor"
            strokeWidth="0"
            className="transition-all duration-300"
          />
        );
      })}
    </svg>
  );
}
