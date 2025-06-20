
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedGrid } from '@/components/ui/animated-grid';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Logo animation
      tl.fromTo(logoRef.current, 
        { opacity: 0, scale: 0.5, rotation: -180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" }
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
      );

      // Logo floating animation
      gsap.to(logoRef.current, {
        y: -10,
        duration: 2,
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
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center">
      <AnimatedGrid className="absolute inset-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                ref={logoRef}
                src="/logolaelvis.svg" 
                alt="La Elvis Tech" 
                className="h-24 w-24 md:h-32 md:w-32 mx-auto filter brightness-0 mb-6"
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
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
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
        </div>
      </AnimatedGrid>
    </section>
  );
};

export default HeroSection;
