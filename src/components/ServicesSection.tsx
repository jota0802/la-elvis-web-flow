
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Database, Palette, Code } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Fev', value: 600 },
    { name: 'Mar', value: 800 },
    { name: 'Abr', value: 700 },
    { name: 'Mai', value: 900 },
    { name: 'Jun', value: 750 },
  ];

  const services = [
    {
      icon: Monitor,
      title: "Dashboards Interativos",
      description: "Painéis modernos que transformam dados em insights visuais.",
      visual: (
        <div className="h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis 
                dataKey="name" 
                stroke="#6B7280" 
                fontSize={11}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <Bar 
                dataKey="value" 
                fill="hsl(var(--primary))"
                radius={[2, 2, 0, 0]}
                opacity={0.8}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )
    },
    {
      icon: Database,
      title: "Integração com APIs",
      description: "Conexões robustas e seguras com sistemas externos.",
      visual: (
        <div className="h-32 w-full flex items-center justify-center">
          <div className="flex items-center space-x-6">
            <div className="w-8 h-8 bg-primary/10 rounded border flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full" />
            </div>
            <div className="w-12 h-0.5 bg-primary/30" />
            <div className="w-8 h-8 bg-primary/10 rounded border flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full" />
            </div>
            <div className="w-12 h-0.5 bg-primary/30" />
            <div className="w-8 h-8 bg-primary/10 rounded border flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full" />
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
          <div className="grid grid-cols-4 gap-3">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="w-6 h-6 border border-primary/20 rounded bg-primary/5"
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
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <div className="w-16 h-1 bg-primary/30 rounded" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <div className="w-20 h-1 bg-primary/30 rounded" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <div className="w-12 h-1 bg-primary/30 rounded" />
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
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 bg-subtle-grid">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-michroma font-light mb-6 text-foreground"
          >
            Nossos <span className="minimal-accent">Serviços</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar suas ideias em realidade digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={el => cardRefs.current[index] = el}
            >
              <Card className="minimal-card minimal-hover h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-primary/5 rounded border border-primary/10">
                        <service.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-michroma font-medium mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded border border-border/50">
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
