
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
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  numSquares = 50,
  maxOpacity = 0.5,
  duration = 4,
  ...props
}: InteractiveGridPatternProps) {
  const patternRef = useRef<SVGSVGElement>(null);
  const squareRefs = useRef<(SVGRectElement | null)[]>([]);

  useEffect(() => {
    const squares = squareRefs.current;
    
    const animateSquares = () => {
      squares.forEach((square, index) => {
        if (square) {
          const delay = (index % numSquares) * (duration / numSquares);
          square.style.animation = `gridPulse ${duration}s ease-in-out ${delay}s infinite`;
        }
      });
    };

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: ${maxOpacity}; }
      }
    `;
    document.head.appendChild(style);

    animateSquares();

    return () => {
      document.head.removeChild(style);
    };
  }, [numSquares, duration, maxOpacity]);

  return (
    <svg
      ref={patternRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
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
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#interactive-grid-pattern)" />
      {Array.from({ length: numSquares }).map((_, i) => (
        <rect
          key={i}
          ref={(el) => (squareRefs.current[i] = el)}
          width={width}
          height={height}
          x={Math.random() * 100 + "%"}
          y={Math.random() * 100 + "%"}
          fill="currentColor"
          strokeWidth="0"
          className="animate-pulse"
        />
      ))}
    </svg>
  );
}
