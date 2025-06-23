
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

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
  numSquares = 80,
  maxOpacity = 0.8,
  duration = 3,
  ...props
}: InteractiveGridPatternProps) {
  const patternRef = useRef<SVGSVGElement>(null);
  const squareRefs = useRef<(SVGRectElement | null)[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (patternRef.current) {
      const rect = patternRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

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
        0%, 100% { opacity: 0.2; transform: scale(1); }
        50% { opacity: ${maxOpacity}; transform: scale(1.1); }
      }
      @keyframes gridHover {
        0%, 100% { opacity: 0.1; transform: scale(1) rotate(0deg); }
        50% { opacity: 0.9; transform: scale(1.3) rotate(180deg); }
      }
    `;
    document.head.appendChild(style);

    animateSquares();

    // Add mouse event listeners
    const svgElement = patternRef.current;
    if (svgElement) {
      svgElement.addEventListener('mousemove', handleMouseMove);
      svgElement.addEventListener('mouseenter', handleMouseEnter);
      svgElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.head.removeChild(style);
      if (svgElement) {
        svgElement.removeEventListener('mousemove', handleMouseMove);
        svgElement.removeEventListener('mouseenter', handleMouseEnter);
        svgElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [numSquares, duration, maxOpacity]);

  return (
    <svg
      ref={patternRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-auto absolute inset-0 h-full w-full fill-gray-400/20 stroke-gray-400/30 transition-all duration-300",
        isHovered && "fill-gray-400/40 stroke-gray-400/50",
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
        <radialGradient id="mouse-gradient" cx="50%" cy="50%" r="25%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
          <stop offset="50%" stopColor="rgba(139, 92, 246, 0.4)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#interactive-grid-pattern)" />
      
      {/* Mouse follow effect */}
      {isHovered && (
        <circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r="100"
          fill="url(#mouse-gradient)"
          className="pointer-events-none transition-all duration-200"
        />
      )}
      
      {/* Interactive squares */}
      {Array.from({ length: numSquares }).map((_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const distance = isHovered 
          ? Math.sqrt(
              Math.pow((mousePosition.x / window.innerWidth * 100) - x, 2) + 
              Math.pow((mousePosition.y / window.innerHeight * 100) - y, 2)
            )
          : 100;
        
        return (
          <rect
            key={i}
            ref={(el) => (squareRefs.current[i] = el)}
            width={width * 0.8}
            height={height * 0.8}
            x={x + "%"}
            y={y + "%"}
            fill="currentColor"
            strokeWidth="0"
            className={cn(
              "transition-all duration-300",
              distance < 15 && isHovered ? "opacity-90 animate-pulse" : ""
            )}
            style={{
              opacity: isHovered && distance < 20 ? Math.max(0.3, 1 - distance / 20) : undefined,
              transform: isHovered && distance < 15 ? `scale(${1 + (15 - distance) / 15})` : undefined,
            }}
          />
        );
      })}
    </svg>
  );
}
