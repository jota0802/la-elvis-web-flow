
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
      opacity: 0,
      y: 30
    });
    
    gsap.set(iconRefs.current, {
      opacity: 0,
      scale: 0,
      rotation: 180
    });

    // Animate hero elements
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .to(iconRefs.current, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "back.out(1.7)"
    }, "-=0.6");

    // Floating animation for icons
    gsap.to(iconRefs.current, {
      y: "random(-10, 10)",
      duration: "random(2, 3)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 1,
        from: "random"
      }
    });

  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-silk">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      
      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          ref={el => iconRefs.current[0] = el}
          className="absolute top-20 left-10 text-primary/20"
        >
          <Code size={40} />
        </div>
        <div 
          ref={el => iconRefs.current[1] = el}
          className="absolute top-32 right-16 text-primary/30"
        >
          <Zap size={32} />
        </div>
        <div 
          ref={el => iconRefs.current[2] = el}
          className="absolute bottom-40 left-20 text-primary/25"
        >
          <Globe size={36} />
        </div>
      </div>

      <div ref={heroRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-michroma font-bold mb-6 leading-tight"
          >
            <span className="shiny-text">Soluções Web</span>
            <br />
            <span className="text-primary">Modernas</span>
            <br />
            para Empresas
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-satoshi"
          >
            Desenvolvemos aplicações web de alta qualidade, dashboards interativos e soluções 
            tecnológicas que impulsionam o crescimento do seu negócio.
          </p>
          
          <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToServices}
              size="lg"
              className="spotlight-card bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 group"
            >
              Conheça nossos serviços
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              onClick={() => {
                const element = document.querySelector('#about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              Sobre nós
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
