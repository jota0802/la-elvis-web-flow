
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Content animation
    gsap.fromTo(contentRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Image animation
    gsap.fromTo(imageRef.current,
      { opacity: 0, x: 50, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Values animation
    gsap.fromTo(valuesRef.current?.children || [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Transformar ideias em soluções digitais inovadoras que impulsionam o sucesso dos nossos clientes."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência em desenvolvimento web moderno, criando experiências digitais excepcionais."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Excelência técnica, inovação constante, transparência e foco na satisfação do cliente."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div ref={contentRef}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-michroma font-bold mb-6">
              Sobre a <span className="text-primary">La Elvis Tech</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Somos uma empresa especializada em desenvolvimento de soluções web modernas, 
                focada em criar experiências digitais excepcionais que atendem às necessidades 
                específicas de cada cliente.
              </p>
              <p>
                Com expertise em tecnologias de ponta como React, TypeScript, Supabase e GSAP, 
                desenvolvemos desde dashboards corporativos até aplicações web completas, 
                sempre priorizando performance, usabilidade e design.
              </p>
              <p>
                Nossa abordagem combina conhecimento técnico sólido com visão estratégica, 
                garantindo que cada projeto não apenas funcione perfeitamente, mas também 
                contribua efetivamente para o crescimento do seu negócio.
              </p>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Card className="relative bg-card/80 backdrop-blur-sm border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 via-purple-500/10 to-primary/5 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-primary rounded-full animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-michroma font-bold text-primary">
                        La Elvis Tech
                      </h3>
                      <p className="text-muted-foreground px-8">
                        Inovação e excelência em desenvolvimento web
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Values */}
        <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="spotlight-card bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-michroma font-semibold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
