
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { AnimatedGrid } from '@/components/ui/backgrounds';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(logoRef.current, 
        { opacity: 0, scale: 0.8, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(titleRef.current, 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      );

      // Logo floating sutil
      gsap.to(logoRef.current, {
        y: -8,
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
    <AnimatedGrid className="min-h-screen flex items-center justify-center">
      <section id="home" ref={sectionRef} className="relative w-full min-h-screen flex items-center justify-center">
        <div ref={heroRef} className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center max-w-4xl mx-auto">
          
          {/* Logo */}
          <div className="mb-8">
            <img 
              ref={logoRef}
              src="/logolaelvis.svg" 
              alt="La Elvis Tech" 
              className="h-14 w-14 md:h-16 md:w-16 mx-auto filter brightness-0"
            />
          </div>
          
          {/* Título principal minimalista */}
          <h1 
            ref={titleRef}
            className="text-2xl md:text-3xl lg:text-4xl font-michroma font-light leading-tight mb-4 text-neutral-900"
          >
            Como criamos{' '}
            <span className="text-neutral-600">
              nosso Projeto
            </span>
            <br />
            <span className="text-xl md:text-2xl lg:text-3xl text-neutral-500">
              La Elvis Tech
            </span>
          </h1>
          
          {/* Subtítulo simplificado */}
          <p 
            ref={subtitleRef}
            className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            passo a passo da nossa {' '}
            <span className="text-neutral-800 font-medium">solução web</span>
            {' '} desenvolvida diretamente para DASA
          </p>

          {/* CTA minimalista */}
          <div ref={ctaRef} className="flex flex-col items-center justify-center gap-6">
            <Button
              onClick={scrollToServices}
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg rounded-md"
            >
              Ver Trabalho
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-6 text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-neutral-400 rounded-full" />
                <span>1500 Horas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-neutral-400 rounded-full" />
                <span>5 Integrantes</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </AnimatedGrid>
  );
};

export default HeroSection;
