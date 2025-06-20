
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
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
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center bg-minimal-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
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
    </section>
  );
};

export default HeroSection;
