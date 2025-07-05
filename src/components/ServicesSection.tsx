import { useEffect, useRef, forwardRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Palette, Settings, Cpu, User } from 'lucide-react';
import { AnimatedBeam } from '@/components/ui/animated-beam-magicui';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

// Componente Circle para os nós do Animated Beam
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-8 items-center justify-center rounded-full border-2 bg-white p-1.5 shadow-[0_0_10px_-5px_rgba(0,0,0,0.3)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frontendSquareRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const chartData = [45, 75, 90, 60, 85, 70];

  // Componente visual para automação
  const AutomationVisual = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const gearRef = useRef<HTMLDivElement>(null);
    const cpuRef = useRef<HTMLDivElement>(null);

    return (
      <div 
        ref={containerRef} 
        className="h-24 w-full relative flex items-center justify-center"
      >
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <Circle ref={gearRef} className="border-gray-200">
            <User className="size-5 text-gray-600" />
          </Circle>
          <Circle ref={cpuRef} className="border-gray-200">
            <img src="/elvinho.png" className="size-4" />
          </Circle>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={gearRef}
          toRef={cpuRef}
          startYOffset={0}
          endYOffset={0}
          curvature={45}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={gearRef}
          toRef={cpuRef}
          startYOffset={0}
          endYOffset={0}
          curvature={-45}
          reverse
          duration={3}
        />
      </div>
    );
  };

  const services = [
    {
      icon: Code,
      title: "Dashboards Interativos",
      description: "Painéis modernos que transformam dados em insights visuais.",
      visual: (
        <div className="h-24 w-full flex items-end justify-center space-x-2 px-6">
          {chartData.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-3 bg-gradient-to-t from-blue-600 to-blue-400 rounded-full transition-all duration-300"
                style={{ 
                  height: `${(value / 100) * 60}px`,
                  animation: `chartPulse 2s ease-in-out infinite ${index * 0.2}s`
                }}
              />
            </div>
          ))}
        </div>
      )
    },
    {
      icon: Database,
      title: "Integração com APIs",
      description: "Conexões robustas e seguras com sistemas externos.",
      visual: (
        <div className="h-24 w-full flex items-center justify-center relative overflow-hidden">
          <div className="flex items-center space-x-4 relative">
            <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" />
            <div className="w-8 h-px bg-gradient-to-r from-green-300 to-emerald-300 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-[shimmer_2s_ease-in-out_infinite]" />
            </div>
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-8 h-px bg-gradient-to-r from-blue-300 to-cyan-300 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-[shimmer_2s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      )
    },
    {
      icon: Palette,
      title: "Desenvolvimento Front-end",
      description: "Interfaces responsivas com tecnologias modernas.",
      visual: (
        <div className="h-24 w-full flex items-center justify-center">
          <div className="grid grid-cols-3 gap-2 relative">
            {[
              'from-red-500 to-orange-500',
              'from-blue-500 to-purple-500', 
              'from-green-500 to-teal-500',
              'from-yellow-500 to-orange-500',
              'from-pink-500 to-rose-500',
              'from-indigo-500 to-blue-500'
            ].map((gradient, index) => (
              <div 
                key={index}
                ref={el => frontendSquareRefs.current[index] = el}
                className={`w-6 h-6 bg-gradient-to-br ${gradient} rounded shadow-sm`}
              />
            ))}
          </div>
        </div>
      )
    },
    {
      icon: Settings,
      title: "Automação de Processos",
      description: "Soluções que otimizam fluxos de trabalho empresariais.",
      visual: <AutomationVisual />
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

      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              }
            }
          );
        }
      });

      // Animação corrigida dos quadradinhos do front-end
      if (frontendSquareRefs.current.length > 0) {
        const squares = frontendSquareRefs.current.filter(Boolean);
        
        // Animar troca de posições de forma contínua
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        
        squares.forEach((square, index) => {
          if (square) {
            // Primeira fase: mover para posições intermediárias
            tl.to(square, {
              x: gsap.utils.random(-15, 15),
              y: gsap.utils.random(-15, 15),
              rotation: gsap.utils.random(-10, 10),
              duration: 1,
              ease: "power2.inOut"
            }, index * 0.1);
          }
        });
        
        // Segunda fase: voltar ao centro com nova rotação
        squares.forEach((square, index) => {
          if (square) {
            tl.to(square, {
              x: 0,
              y: 0,
              rotation: 0,
              duration: 1,
              ease: "power2.inOut"
            }, "reset");
          }
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-0 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-michroma font-light mb-6"
          >
            Resultados em Forma de Tecnologia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia aplicada com propósito para resolver desafio pedido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={service.title} ref={el => cardRefs.current[index] = el}>
              <Card className="minimal-card h-full group hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-lg font-michroma font-medium mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted/20 rounded-lg border">
                    {service.visual}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
