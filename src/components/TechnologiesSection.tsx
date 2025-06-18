
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
      color: "from-blue-500 to-cyan-500",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#61dafb">
          <circle cx="12" cy="12" r="2.5"/>
          <path d="M12 1.5c4.5 0 8.5 1.5 8.5 4.5s-4 4.5-8.5 4.5S3.5 8.5 3.5 6s4-4.5 8.5-4.5z" fill="none" stroke="#61dafb" strokeWidth="1"/>
          <path d="M12 14c4.5 0 8.5 1.5 8.5 4.5s-4 4.5-8.5 4.5S3.5 20.5 3.5 18s4-4.5 8.5-4.5z" fill="none" stroke="#61dafb" strokeWidth="1"/>
          <path d="M8.5 9.5c2.25-3.9 5.25-6 7.5-6s4.25 2.1 4.25 4.5-2 6-4.25 6-5.25-2.1-7.5-6z" fill="none" stroke="#61dafb" strokeWidth="1"/>
          <path d="M15.5 9.5c-2.25-3.9-5.25-6-7.5-6S3.75 5.6 3.75 8s2 6 4.25 6 5.25-2.1 7.5-6z" fill="none" stroke="#61dafb" strokeWidth="1"/>
        </svg>
      )
    },
    { 
      name: "TypeScript", 
      category: "Language", 
      color: "from-blue-600 to-blue-800",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#3178c6">
          <rect width="24" height="24" fill="#3178c6" rx="3"/>
          <path d="M12.5 8v8M8.5 12h8M12.5 8l-2-2M12.5 8l2-2M12.5 16l-2 2M12.5 16l2 2" stroke="white" strokeWidth="1.5" fill="none"/>
          <text x="12" y="14" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">TS</text>
        </svg>
      )
    },
    { 
      name: "Supabase", 
      category: "Backend", 
      color: "from-green-500 to-emerald-600",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#3ecf8e">
          <path d="M12 2L2 12h10v8l10-10H12V2z"/>
        </svg>
      )
    },
    { 
      name: "GSAP", 
      category: "Animation", 
      color: "from-green-600 to-green-800",
      logo: (
        <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold text-xs">
          GS
        </div>
      )
    },
    { 
      name: "Tailwind CSS", 
      category: "Styling", 
      color: "from-cyan-400 to-blue-500",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#06b6d4">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z"/>
        </svg>
      )
    },
    { 
      name: "Vite", 
      category: "Build Tool", 
      color: "from-purple-500 to-pink-500",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <defs>
            <linearGradient id="viteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#41d1ff"/>
              <stop offset="100%" stopColor="#bd34fe"/>
            </linearGradient>
          </defs>
          <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.447l-1.99 3.835a.306.306 0 0 0 .265.451h3.213a.306.306 0 0 1 .272.447l-8.272 15.183a.306.306 0 0 1-.531-.447l1.99-3.835a.306.306 0 0 0-.265-.451H8.286a.306.306 0 0 1-.272-.447l3.014-5.858a.306.306 0 0 1 .545 0l1.007 1.958a.306.306 0 0 0 .545-.272z" fill="url(#viteGrad)"/>
        </svg>
      )
    },
    { 
      name: "Node.js", 
      category: "Runtime", 
      color: "from-green-600 to-green-800",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#339933">
          <path d="M12 1.5c-.3 0-.6.1-.8.3L2.7 6.6c-.5.3-.8.8-.8 1.4v8c0 .6.3 1.1.8 1.4l8.5 4.8c.5.3 1.1.3 1.6 0l8.5-4.8c.5-.3.8-.8.8-1.4V8c0-.6-.3-1.1-.8-1.4L12.8 1.8c-.2-.2-.5-.3-.8-.3z"/>
        </svg>
      )
    },
    { 
      name: "PostgreSQL", 
      category: "Database", 
      color: "from-blue-800 to-indigo-800",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#336791">
          <path d="M17.128 0C15.624 0 14.624.896 14.624 2.4c0 .896.448 1.664 1.12 2.192-.224.32-.448.736-.448 1.216 0 1.504 1.12 2.4 2.624 2.4s2.624-.896 2.624-2.4c0-.48-.224-.896-.448-1.216.672-.528 1.12-1.296 1.12-2.192C21.216.896 20.216 0 18.712 0h-1.584zM12 3.6c-4.64 0-8.4 3.76-8.4 8.4s3.76 8.4 8.4 8.4 8.4-3.76 8.4-8.4S16.64 3.6 12 3.6z"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    if (gridRef.current) {
      const cards = gridRef.current.children;
      gsap.fromTo(cards,
        { 
          opacity: 0, 
          y: 40,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section id="tech" ref={sectionRef} className="py-20 lg:py-32 bg-iridescent relative overflow-hidden">
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-michroma font-bold mb-6"
          >
            Tecnologias & <span className="text-primary">Ferramentas</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Stack moderno e confiável para soluções robustas
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech) => (
            <Card 
              key={tech.name} 
              className="spotlight-card bg-card/80 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 group hover:scale-110 cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-card/50 border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                <h3 className="font-michroma font-semibold text-sm mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
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
