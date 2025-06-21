
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedGrid } from '@/components/ui/animated-grid';
import { ExternalLink, Github } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const projectCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Logo animation - ajustado para não cortar
      tl.fromTo(logoRef.current, 
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.4)" }
      )
      .fromTo(titleRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(projectCardRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.2"
      );

      // Logo floating animation mais suave
      gsap.to(logoRef.current, {
        y: -8,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative">
      <AnimatedGrid className="absolute inset-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Conteúdo principal */}
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="mb-8">
                <img 
                  ref={logoRef}
                  src="/logolaelvis.svg" 
                  alt="La Elvis Tech" 
                  className="h-20 w-20 md:h-24 md:w-24 mx-auto lg:mx-0 filter brightness-0 mb-6"
                />
              </div>
              
              <h1 
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-michroma font-light leading-tight mb-8"
              >
                Soluções Web{' '}
                <span className="minimal-accent">Modernas</span>
              </h1>
              
              <p 
                ref={subtitleRef}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
              >
                Transformamos ideias em experiências digitais excepcionais
              </p>

              <div ref={ctaRef}>
                <Button
                  onClick={scrollToServices}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-base font-normal transition-all duration-200 hover:translate-y-[-1px] shadow-sm hover:shadow-md"
                >
                  Conheça nossos serviços
                </Button>
              </div>
            </div>

            {/* Card do projeto */}
            <div className="lg:col-span-4" ref={projectCardRef}>
              <Card className="bg-white/80 backdrop-blur-sm border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-michroma font-medium mb-2 text-neutral-900">
                      Lab Dash Animates
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                      Dashboard interativo com animações avançadas e visualizações de dados em tempo real.
                    </p>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
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
                      className="flex-1"
                    >
                      <a 
                        href="https://laelvistech.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedGrid>
    </section>
  );
};

export default HeroSection;
