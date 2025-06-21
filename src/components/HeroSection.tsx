
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedGrid } from '@/components/ui/animated-grid';
import { ArrowDown } from 'lucide-react';
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
    <section id="home" ref={heroRef} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <AnimatedGrid className="absolute inset-0 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Logo */}
            <div className="mb-10">
              <img 
                ref={logoRef}
                src="/logolaelvis.svg" 
                alt="La Elvis Tech" 
                className="h-16 w-16 md:h-20 md:w-20 mx-auto filter brightness-0"
              />
            </div>
            
            {/* Título principal minimalista */}
            <h1 
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-michroma font-light leading-tight mb-6 text-neutral-900"
            >
              Criamos{' '}
              <span className="text-neutral-600">
                Experiências
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-neutral-500">
                Digitais Únicas
              </span>
            </h1>
            
            {/* Subtítulo simplificado */}
            <p 
              ref={subtitleRef}
              className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Transformamos suas ideias em{' '}
              <span className="text-neutral-800 font-medium">soluções web modernas</span>
              {' '}com design excepcional e tecnologia de ponta
            </p>

            {/* CTA minimalista */}
            <div ref={ctaRef} className="flex flex-col items-center justify-center gap-8">
              <Button
                onClick={scrollToServices}
                size="lg"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg rounded-md"
              >
                Explorar Nossos Serviços
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="flex items-center gap-6 text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                  <span>15+ Projetos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                  <span>2+ Anos</span>
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
