
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechnologiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const technologies = [
    { 
      name: "React", 
      category: "Frontend",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#61dafb">
          <circle cx="12" cy="12" r="2"/>
          <path d="M12 1c-4.2 0-7.9 1.1-7.9 4.5s3.7 4.5 7.9 4.5 7.9-1.1 7.9-4.5S16.2 1 12 1z" fill="none" stroke="#61dafb" strokeWidth="1"/>
          <path d="M12 14c-4.2 0-7.9 1.1-7.9 4.5S7.8 23 12 23s7.9-1.1 7.9-4.5S16.2 14 12 14z" fill="none" stroke="#61dafb" strokeWidth="1"/>
          <path d="M7.5 8.5c-2.1 3.6-3.2 7.4-2.5 8.5s3.2.4 5.3-3.2 3.2-7.4 2.5-8.5S9.6 4.9 7.5 8.5z" fill="none" stroke="#61dafb" strokeWidth="1"/>
          <path d="M16.5 8.5c2.1 3.6 3.2 7.4 2.5 8.5s-3.2.4-5.3-3.2-3.2-7.4-2.5-8.5S14.4 4.9 16.5 8.5z" fill="none" stroke="#61dafb" strokeWidth="1"/>
        </svg>
      )
    },
    { 
      name: "TypeScript", 
      category: "Language",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="22" height="22" x="1" y="1" fill="#3178c6" rx="2"/>
          <path d="M7.5 8v8M4 12h7" stroke="white" strokeWidth="1.5" fill="none"/>
          <path d="M14 8v1.5h2.5V16h1.5V9.5H20V8h-6z" fill="white"/>
        </svg>
      )
    },
    { 
      name: "Supabase", 
      category: "Backend",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M12.5 2.5L2 12h8v9l10.5-9.5H12V2.5z" fill="#3ecf8e"/>
          <path d="M11.5 21.5L22 12h-8V3L3.5 12.5H12v9z" fill="#3ecf8e" opacity="0.7"/>
        </svg>
      )
    },
    { 
      name: "GSAP", 
      category: "Animation",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="22" height="22" x="1" y="1" fill="#88ce02" rx="3"/>
          <text x="12" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">GS</text>
        </svg>
      )
    },
    { 
      name: "Tailwind CSS", 
      category: "Styling",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#06b6d4">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z"/>
        </svg>
      )
    },
    { 
      name: "Vite", 
      category: "Build Tool",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <defs>
            <linearGradient id="viteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#41d1ff"/>
              <stop offset="100%" stopColor="#bd34fe"/>
            </linearGradient>
          </defs>
          <path d="M8.286 10.578.072 1.5.828.072 9.514 8.828a.3.3 0 0 1-.265.451H6.036a.3.3 0 0 0-.265.451L9.785 17a.3.3 0 0 0 .531 0l4.014-7.27a.3.3 0 0 0-.265-.451h-3.213a.3.3 0 0 1-.265-.451L16.828.072a.3.3 0 0 1 .756.428l-8.7 15.5a.3.3 0 0 1-.531 0L.214 1.928a.3.3 0 0 1 .756-.428z" fill="url(#viteGrad)"/>
        </svg>
      )
    },
    { 
      name: "Node.js", 
      category: "Runtime",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#339933">
          <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.48.28 1.08.28 1.56 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z"/>
        </svg>
      )
    },
    { 
      name: "PostgreSQL", 
      category: "Database",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#336791">
          <path d="M17.128 0C15.624 0 14.624.896 14.624 2.4c0 .896.448 1.664 1.12 2.192-.224.32-.448.736-.448 1.216 0 1.504 1.12 2.4 2.624 2.4s2.624-.896 2.624-2.4c0-.48-.224-.896-.448-1.216.672-.528 1.12-1.296 1.12-2.192C21.216.896 20.216 0 18.712 0h-1.584zM12 3.6c-4.64 0-8.4 3.76-8.4 8.4s3.76 8.4 8.4 8.4 8.4-3.76 8.4-8.4S16.64 3.6 12 3.6z"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      if (gridRef.current) {
        const cards = gridRef.current.children;
        gsap.fromTo(cards,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
            }
          }
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="tech" ref={sectionRef} className="py-20 lg:py-32 bg-minimal-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-michroma font-light mb-6"
          >
            Tecnologias & <span className="minimal-accent">Ferramentas</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Stack moderno e confiável para soluções robustas
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech) => (
            <Card 
              key={tech.name} 
              className="minimal-card minimal-hover cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  {tech.logo}
                </div>
                <h3 className="font-michroma font-medium text-sm mb-2 text-foreground">
                  {tech.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {tech.category}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
