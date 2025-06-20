
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Database, Palette, Code } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const chartData = [
    { name: 'Jan', value: 30 },
    { name: 'Fev', value: 45 },
    { name: 'Mar', value: 80 },
    { name: 'Abr', value: 55 },
    { name: 'Mai', value: 90 },
    { name: 'Jun', value: 65 },
  ];

  const services = [
    {
      icon: Monitor,
      title: "Dashboards Interativos",
      description: "Painéis modernos que transformam dados em insights visuais.",
      visual: (
        <div className="h-32 w-full flex items-end justify-center space-x-1 px-4">
          {chartData.map((item, index) => (
            <div key={item.name} className="flex flex-col items-center space-y-2">
              <div 
                className="w-4 bg-neutral-800 rounded-sm transition-all duration-300"
                style={{ height: `${item.value}%` }}
              />
              <span className="text-xs text-neutral-500 font-mono">{item.name}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      icon: Database,
      title: "Integração com APIs",
      description: "Conexões robustas e seguras com sistemas externos.",
      visual: (
        <div className="h-32 w-full flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-neutral-100 border border-neutral-300 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-neutral-800 rounded-full" />
            </div>
            <div className="w-8 h-px bg-neutral-300" />
            <div className="w-6 h-6 bg-neutral-100 border border-neutral-300 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-neutral-800 rounded-full" />
            </div>
            <div className="w-8 h-px bg-neutral-300" />
            <div className="w-6 h-6 bg-neutral-100 border border-neutral-300 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-neutral-800 rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Palette,
      title: "Desenvolvimento Front-end",
      description: "Interfaces responsivas com tecnologias modernas.",
      visual: (
        <div className="h-32 w-full flex items-center justify-center">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="w-5 h-5 border border-neutral-300 rounded bg-neutral-50"
              />
            ))}
          </div>
        </div>
      )
    },
    {
      icon: Code,
      title: "Automação de Processos",
      description: "Soluções que otimizam fluxos de trabalho empresariais.",
      visual: (
        <div className="h-32 w-full flex items-center justify-center">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-neutral-800 rounded-full" />
              <div className="w-12 h-px bg-neutral-300 rounded" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-neutral-800 rounded-full" />
              <div className="w-16 h-px bg-neutral-300 rounded" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-neutral-800 rounded-full" />
              <div className="w-10 h-px bg-neutral-300 rounded" />
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-michroma font-light mb-6 text-neutral-900"
          >
            Nossos <span className="text-neutral-700">Serviços</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Soluções completas para transformar suas ideias em realidade digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={el => cardRefs.current[index] = el}
            >
              <Card className="bg-white border border-neutral-200 transition-all duration-200 hover:border-neutral-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-neutral-100 rounded border border-neutral-200">
                        <service.icon className="h-5 w-5 text-neutral-700" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-michroma font-medium mb-3 text-neutral-900">
                        {service.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-neutral-50 rounded border border-neutral-100">
                    {service.visual}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
