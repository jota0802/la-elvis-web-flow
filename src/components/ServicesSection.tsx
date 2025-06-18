
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Database, Palette, Code } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Fev', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Abr', value: 800 },
    { name: 'Mai', value: 700 },
    { name: 'Jun', value: 900 },
  ];

  const services = [
    {
      icon: Monitor,
      title: "Dashboards Interativos",
      description: "Painéis modernos que transformam dados em insights visuais.",
      visual: (
        <div className="h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
              <YAxis stroke="#6B7280" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
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
          <div className="relative">
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-primary rounded-full animate-pulse" />
              </div>
              <div className="flex flex-col space-y-2 justify-center">
                <div className="w-16 h-2 bg-primary/40 rounded animate-pulse" />
                <div className="w-12 h-2 bg-primary/40 rounded animate-pulse delay-200" />
                <div className="w-20 h-2 bg-primary/40 rounded animate-pulse delay-400" />
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse delay-500" />
              </div>
            </div>
            <div className="absolute top-6 left-12 right-12 h-0.5 bg-gradient-to-r from-primary via-yellow-500 to-green-500 animate-pulse" />
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
          <div className="relative">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div 
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded border border-primary/30 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-3 h-3 bg-primary/50 rounded-full animate-pulse" />
                </div>
              ))}
            </div>
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
          <div className="relative">
            <div className="flex items-center space-x-3">
              <div className="flex flex-col space-y-1">
                <div className="w-4 h-1 bg-primary rounded animate-pulse" />
                <div className="w-6 h-1 bg-primary/70 rounded animate-pulse delay-200" />
                <div className="w-3 h-1 bg-primary/50 rounded animate-pulse delay-400" />
                <div className="w-5 h-1 bg-primary/60 rounded animate-pulse delay-600" />
              </div>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full animate-spin" />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="w-4 h-1 bg-green-500 rounded animate-pulse delay-800" />
                <div className="w-6 h-1 bg-green-500/70 rounded animate-pulse delay-1000" />
                <div className="w-3 h-1 bg-green-500/50 rounded animate-pulse delay-1200" />
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { 
            opacity: 0, 
            y: 60,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 bg-beams relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-michroma font-bold mb-6 text-foreground"
          >
            Nossos <span className="text-primary">Serviços</span>
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
              className="group"
            >
              <Card className="spotlight-card bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 h-full group-hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-michroma font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg">
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
