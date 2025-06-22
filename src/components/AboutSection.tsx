
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(statsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(projectRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const stats = [
    { label: "Projetos", value: "15+" },
    { label: "Clientes", value: "12+" },
    { label: "Anos", value: "2+" }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header minimalista */}
        <div ref={contentRef} className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-michroma font-light mb-8">
            Sobre a <span className="minimal-accent">La Elvis Tech</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              Especialistas em desenvolvimento web moderno, criamos soluções digitais 
              que atendem às necessidades específicas de cada cliente.
            </p>
            <p>
              Nossa abordagem combina design minimalista com funcionalidade robusta, 
              utilizando tecnologias de ponta para desenvolver desde dashboards 
              corporativos até aplicações web completas.
            </p>
          </div>
        </div>

        {/* Stats minimalistas */}
        <div ref={statsRef} className="flex justify-center mb-20">
          <div className="flex space-x-16">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-michroma font-light text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Projeto em destaque - layout mais limpo */}
        <div ref={projectRef} className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-michroma font-light mb-4">
              Projeto em <span className="minimal-accent">Destaque</span>
            </h3>
          </div>

          <Card className="minimal-card border-0 shadow-sm">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h4 className="text-xl font-michroma font-medium mb-4 text-foreground">
                  Lab Dash Animates
                </h4>
                <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
                  Dashboard interativo com animações avançadas e visualizações de dados em tempo real. 
                  Criado com React, TypeScript e GSAP.
                </p>
              </div>
              
              <div className="flex justify-center space-x-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="minimal-hover"
                >
                  <a 
                    href="https://github.com/La-Elvis-Tech/lab-dash-animates" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                
                <Button
                  asChild
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                >
                  <a 
                    href="https://laelvistech.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ver Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
