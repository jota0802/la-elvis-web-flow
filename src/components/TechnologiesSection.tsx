
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
    { name: "React", category: "Frontend", color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", category: "Language", color: "from-blue-600 to-blue-800" },
    { name: "Supabase", category: "Backend", color: "from-green-500 to-emerald-600" },
    { name: "GSAP", category: "Animation", color: "from-yellow-500 to-orange-500" },
    { name: "Tailwind CSS", category: "Styling", color: "from-cyan-400 to-blue-500" },
    { name: "Vite", category: "Build Tool", color: "from-purple-500 to-pink-500" },
    { name: "Node.js", category: "Runtime", color: "from-green-600 to-green-800" },
    { name: "PostgreSQL", category: "Database", color: "from-blue-800 to-indigo-800" }
  ];

  useEffect(() => {
    // Title animation
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

    // Grid animation
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
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Utilizamos as tecnologias mais modernas e confiáveis do mercado para garantir 
            soluções robustas e escaláveis
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech) => (
            <Card 
              key={tech.name} 
              className="spotlight-card bg-card/80 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 group hover:scale-110 cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-8 h-8 bg-white/20 rounded-full" />
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

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg">
            E muitas outras tecnologias que nos permitem criar soluções sob medida para cada projeto
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
