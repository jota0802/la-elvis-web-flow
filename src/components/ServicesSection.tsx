
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Globe, Brush, Cog } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const chartData = [45, 75, 90, 60, 85, 70];

  const services = [
    {
      icon: BarChart3,
      title: "Dashboards Interativos",
      description: "Painéis modernos que transformam dados em insights visuais.",
      visual: (
        <div className="h-24 w-full flex items-end justify-center space-x-2 px-6">
          {chartData.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-3 bg-gradient-to-t from-blue-600 to-blue-400 rounded-full transition-all duration-300"
                style={{ height: `${(value / 100) * 60}px` }}
              />
            </div>
          ))}
        </div>
      )
    },
    {
      icon: Globe,
      title: "Integração com APIs",
      description: "Conexões robustas e seguras com sistemas externos.",
      visual: (
        <div className="h-24 w-full flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" />
            <div className="w-8 h-px bg-gradient-to-r from-green-300 to-emerald-300" />
            <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse delay-200" />
            <div className="w-8 h-px bg-gradient-to-r from-blue-300 to-cyan-300" />
            <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-400" />
          </div>
        </div>
      )
    },
    {
      icon: Brush,
      title: "Desenvolvimento Front-end",
      description: "Interfaces responsivas com tecnologias modernas.",
      visual: (
        <div className="h-24 w-full flex items-center justify-center">
          <div className="grid grid-cols-3 gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-orange-500 rounded shadow-sm" />
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded shadow-sm" />
            <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-teal-500 rounded shadow-sm" />
            <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded shadow-sm" />
            <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-500 rounded shadow-sm" />
            <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-blue-500 rounded shadow-sm" />
          </div>
        </div>
      )
    },
    {
      icon: Cog,
      title: "Automação de Processos",
      description: "Soluções que otimizam fluxos de trabalho empresariais.",
      visual: (
        <div className="h-24 w-full flex items-center justify-center">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-r from-blue-300 to-purple-300 rounded" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-teal-500 rounded-full animate-pulse delay-200" />
              <div className="w-20 h-px bg-gradient-to-r from-green-300 to-teal-300 rounded" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse delay-400" />
              <div className="w-12 h-px bg-gradient-to-r from-orange-300 to-red-300 rounded" />
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
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-michroma font-light mb-6 text-neutral-900"
          >
            Nossos <span className="minimal-accent">Serviços</span>
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
              <Card className="bg-white/80 backdrop-blur-sm border border-neutral-200/50 transition-all duration-300 hover:border-neutral-300/70 hover:shadow-xl hover:scale-105 h-full group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl border border-neutral-200/50 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                        <service.icon className="h-6 w-6 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-michroma font-medium mb-3 text-neutral-900 group-hover:text-blue-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-neutral-50 to-blue-50/50 rounded-xl border border-neutral-100/50 group-hover:from-blue-50/50 group-hover:to-purple-50/50 transition-all duration-300">
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
