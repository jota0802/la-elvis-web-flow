
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Database, Palette, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      icon: Monitor,
      title: "Dashboards Interativos",
      description: "Criamos painéis de controle modernos e intuitivos que transformam dados complexos em insights visuais claros e acionáveis."
    },
    {
      icon: Database,
      title: "Integração com APIs",
      description: "Desenvolvemos integrações robustas com APIs externas e Supabase, garantindo fluxo de dados seguro e eficiente."
    },
    {
      icon: Palette,
      title: "Desenvolvimento Front-end",
      description: "Aplicações web responsivas e performáticas usando React, TypeScript e as mais modernas tecnologias do mercado."
    },
    {
      icon: Zap,
      title: "Consultoria UX/UI",
      description: "Orientação especializada em experiência do usuário e design de interface para maximizar conversões e satisfação."
    }
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

    // Cards animation
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { 
            opacity: 0, 
            y: 60,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 bg-beams relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-michroma font-bold mb-6 text-foreground"
          >
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas para transformar suas ideias em realidade digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={el => cardRefs.current[index] = el}
              className="group"
            >
              <Card className="spotlight-card bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 h-full group-hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-michroma font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
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
