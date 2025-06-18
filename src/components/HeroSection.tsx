
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { SilkBackground } from '@/components/ui/backgrounds';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );

    gsap.to(animationRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SilkBackground>
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <h1 
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-michroma font-bold leading-tight"
              >
                Soluções Web{' '}
                <span className="shiny-text text-primary">Modernas</span>
              </h1>
              
              <p 
                ref={subtitleRef}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
              >
                Transformamos ideias em experiências digitais excepcionais
              </p>

              <div ref={ctaRef}>
                <Button
                  onClick={scrollToServices}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
                >
                  Conheça nossos serviços
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div ref={animationRef} className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary/20 via-purple-500/20 to-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute inset-0 w-80 h-80 bg-gradient-to-tl from-blue-500/10 via-cyan-500/10 to-primary/20 rounded-full blur-2xl animate-pulse delay-1000" />
                <div className="absolute inset-4 w-72 h-72 border border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-8 w-64 h-64 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SilkBackground>
  );
};

export default HeroSection;
