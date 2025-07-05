import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Inicializa GSAP context para limpeza automática
    const ctx = gsap.context(() => {
      if (isMobileMenuOpen && mobileMenuRef.current) {
        // Animação de entrada
        gsap.fromTo(mobileMenuRef.current,
          { opacity: 0, y: -20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.4,
            ease: "power2.out"
          }
        );
        
        // Animação dos itens com stagger
        gsap.fromTo(navItemsRef.current,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.3,
            delay: 0.2,
            ease: "back.out(1.5)"
          }
        );
      }
    }, mobileMenuRef);

    return () => ctx.revert();
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Tecnologias', href: '#tech' },
    { name: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  const closeMobileMenu = () => {
    // Animação de saída
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setIsMobileMenuOpen(false)
      });
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img 
              src="/logolaelvis.svg" 
              alt="La Elvis Tech" 
              className="h-8 w-8 lg:h-8 lg:w-8 filter brightness-0 transition-transform duration-300 hover:scale-110"
            />
            <h1 className="text-xl lg:text-2xl font-michroma font-bold text-primary">
              La Elvis Tech
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="spotlight-card bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? (
                <X size={24} className="transition-transform duration-300 rotate-180" />
              ) : (
                <Menu size={24} className="transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-xl"
            style={{ opacity: 0 }} // Inicia invisível para a animação
          >
            <nav className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  ref={el => navItemsRef.current[index] = el}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-accent/50"
                  style={{ opacity: 0, transform: 'translateY(10px)' }} // Estado inicial para animação
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full mt-4 py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
              >
                Fale Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;