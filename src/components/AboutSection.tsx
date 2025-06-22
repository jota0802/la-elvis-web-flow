
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowRight, ExternalLink } from 'lucide-react';
import { FlickeringGrid } from '@/components/ui/animated-grid';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
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

      gsap.fromTo(principlesRef.current?.children || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: principlesRef.current,
            start: "top 80%",
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
    { label: "Projetos Entregues", value: "15+" },
    { label: "Clientes Satisfeitos", value: "12+" },
    { label: "Anos de Experiência", value: "2+" }
  ];

  const principles = [
    {
      number: "01",
      title: "Simplicidade",
      description: "Desenvolvemos soluções claras e objetivas, priorizando a experiência do usuário."
    },
    {
      number: "02", 
      title: "Qualidade",
      description: "Cada linha de código é escrita com atenção aos detalhes e melhores práticas."
    },
    {
      number: "03",
      title: "Inovação",
      description: "Utilizamos tecnologias modernas para criar soluções que fazem a diferença."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 relative bg-white">
      <FlickeringGrid className="absolute inset-0">
        <div />
      </FlickeringGrid>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div ref={contentRef}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-michroma font-light mb-8">
              Sobre a <span className="minimal-accent">La Elvis Tech</span>
            </h2>
            <div className="space-y-6 text-base text-muted-foreground leading-relaxed mb-8">
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

          <div ref={statsRef} className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="minimal-card text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-michroma font-light text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projeto em Destaque */}
        <div ref={projectRef} className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-michroma font-light mb-4">
              Projeto em <span className="minimal-accent">Destaque</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça nosso trabalho mais recente em dashboard interativo
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="minimal-card max-w-lg w-full transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h4 className="text-xl font-michroma font-medium mb-3 text-foreground">
                    Lab Dash Animates
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    Dashboard interativo com animações avançadas e visualizações de dados em tempo real. 
                    Criado com React, TypeScript e GSAP para demonstrar nossas capacidades técnicas.
                  </p>
                </div>
                
                <div className="flex space-x-4">
                  <Button
                    asChild
                    variant="outline"
                    size="default"
                    className="flex-1 minimal-hover"
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
                    size="default"
                    className="flex-1 bg-primary hover:bg-primary/90"
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

        <div ref={principlesRef} className="space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-michroma font-light mb-4">
              Nossos <span className="minimal-accent">Princípios</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os valores que norteiam nosso trabalho e garantem a excelência em cada projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={principle.number} className="relative">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl font-michroma font-light text-primary/20 leading-none">
                    {principle.number}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-lg font-michroma font-medium mb-3 text-foreground">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
