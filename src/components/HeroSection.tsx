
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedGrid } from '@/components/ui/animated-grid';
import { ArrowDown, Sparkles, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorativeElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animação mais dramática do logo
      tl.fromTo(logoRef.current, 
        { opacity: 0, scale: 0.5, y: 50, rotation: -45 },
        { opacity: 1, scale: 1, y: 0, rotation: 0, duration: 1.2, ease: "back.out(2)" }
      )
      .fromTo(titleRef.current, 
        { opacity: 0, y: 50, skewY: 3 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 30, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 30, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.4)" },
        "-=0.4"
      )
      .fromTo(decorativeElementsRef.current?.children || [],
        { opacity: 0, scale: 0, rotation: 180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.4)" },
        "-=0.5"
      );

      // Logo floating mais dinâmico
      gsap.to(logoRef.current, {
        y: -15,
        rotation: 8,
        scale: 1.05,
        duration: 4,
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
    <section id="home" ref={heroRef} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <AnimatedGrid className="absolute inset-0 hero-gradient">
        {/* Elementos decorativos flutuantes */}
        <div ref={decorativeElementsRef} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-16 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute bottom-32 left-20 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse delay-2000" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-500/10 rounded-full blur-lg animate-pulse delay-500" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Logo e badges */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 border border-blue-200/50 rounded-full shadow-lg backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Inovação</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 border border-purple-200/50 rounded-full shadow-lg backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">Performance</span>
                </div>
              </div>
              
              <img 
                ref={logoRef}
                src="/logolaelvis.svg" 
                alt="La Elvis Tech" 
                className="h-24 w-24 md:h-28 md:w-28 mx-auto filter brightness-0 drop-shadow-2xl"
              />
            </div>
            
            {/* Título principal mais impactante */}
            <h1 
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-michroma font-light leading-tight mb-8"
            >
              Criamos{' '}
              <span className="minimal-accent block md:inline">
                Experiências
              </span>
              <br className="hidden md:block" />
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl opacity-80">
                Digitais Únicas
              </span>
            </h1>
            
            {/* Subtítulo reformulado */}
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed font-light"
            >
              Transformamos suas ideias em{' '}
              <span className="text-blue-600 font-medium">soluções web modernas</span>
              {' '}com design excepcional e tecnologia de ponta
            </p>

            {/* CTA redesenhado */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                onClick={scrollToServices}
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl rounded-full"
              >
                Explorar Nossos Serviços
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>50+ Projetos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span>5+ Anos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedGrid>
    </section>
  );
};

export default HeroSection;
