import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GlareCard } from '@/components/ui/glare-card';
import { AnimatedBeam, FlowNode } from '@/components/ui/animated-beam';
import { 
  SiReact, 
  SiSupabase, 
  SiTailwindcss, 
  SiVite, 
  SiNodedotjs, 
  SiPostgresql 
} from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { User, Brain, Database, Search } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechnologiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    { 
      name: "React", 
      category: "Frontend",
      logo: <SiReact className="w-8 h-8 text-[#61dafb]" />,
      color: "#61dafb"
    },
    { 
      name: "TypeScript", 
      category: "Language",
      logo: <BiLogoTypescript className="w-8 h-8 text-[#3178c6]" />,
      color: "#3178c6"
    },
    { 
      name: "Supabase", 
      category: "Backend",
      logo: <SiSupabase className="w-8 h-8 text-[#3ecf8e]" />,
      color: "#3ecf8e"
    },
    { 
      name: "GSAP", 
      category: "Animation",
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 82 30">
          <path fill="#0ae448" d="M23.81 14.013v.013l-1.075 4.665c-.058.264-.322.458-.626.458H20.81a.218.218 0 0 0-.208.155c-1.198 4.064-2.82 6.858-4.962 8.535-1.822 1.428-4.068 2.093-7.069 2.093-2.696 0-4.514-.867-6.056-2.578C.478 25.09-.364 21.388.146 16.926 1.065 8.549 5.41.096 13.776.096c2.545-.023 4.543.762 5.933 2.33 1.47 1.657 2.216 4.154 2.22 7.421a.55.55 0 0 1-.549.536h-6.13a.42.42 0 0 1-.407-.41c-.05-2.259-.72-3.36-2.052-3.36-2.35 0-3.736 3.19-4.471 4.959-1.027 2.47-1.55 5.152-1.447 7.824.049 1.244.249 2.994 1.43 3.718 1.047.643 2.541.217 3.446-.495.904-.711 1.632-1.942 1.938-3.065.043-.156.046-.277.005-.332-.043-.055-.162-.068-.253-.068h-1.574a.572.572 0 0 1-.438-.202.42.42 0 0 1-.087-.362l1.076-4.674c.053-.24.27-.42.537-.453v-.011h10.33c.024 0 .049 0 .072.005.268.034.457.284.452.556h.002Z"/>
          <path fill="#0ae448" d="M41.594 8.65a.548.548 0 0 1-.548.531H35.4c-.37 0-.679-.3-.679-.665 0-1.648-.57-2.45-1.736-2.45s-1.918.717-1.94 1.968c-.025 1.395.764 2.662 3.01 4.84 2.957 2.774 4.142 5.232 4.085 8.48C38.047 26.605 34.476 30 29.042 30c-2.775 0-4.895-.743-6.305-2.207-1.431-1.486-2.087-3.668-1.95-6.485a.548.548 0 0 1 .549-.53h5.84a.55.55 0 0 1 .422.209.48.48 0 0 1 .106.384c-.065 1.016.112 1.775.512 2.195.256.272.613.41 1.058.41 1.079 0 1.711-.763 1.735-2.09.02-1.148-.343-2.155-2.321-4.19-2.555-2.496-4.846-5.075-4.775-9.13.042-2.351.976-4.502 2.631-6.056C28.294.868 30.687 0 33.465 0c2.783.02 4.892.813 6.269 2.359 1.304 1.466 1.932 3.582 1.862 6.29h-.002Z"/>
          <path fill="#0ae448" d="m59.096 29.012.037-27.932a.525.525 0 0 0-.529-.533h-8.738c-.294 0-.423.252-.507.42L36.707 28.842v.005l-.005.006c-.14.343.126.71.497.71h6.108c.33 0 .548-.1.656-.308l1.213-2.915c.149-.388.177-.424.601-.424h5.836c.406 0 .415.008.408.405l-.131 2.71a.525.525 0 0 0 .529.532h6.17a.522.522 0 0 0 .403-.182.458.458 0 0 0 .104-.369Zm-10.81-9.326c-.057 0-.102-.001-.138-.005a.146.146 0 0 1-.13-.183c.012-.041.029-.095.053-.163l4.377-10.827c.038-.107.086-.212.136-.314.071-.145.157-.155.184-.047.023.09-.502 11.118-.502 11.118-.041.413-.06.43-.467.464l-3.509-.041h-.008l.003-.002Z"/>
          <path fill="#0ae448" d="M71.545.547h-4.639c-.245 0-.52.13-.585.422l-6.455 28.029a.423.423 0 0 0 .088.364.572.572 0 0 0 .437.202h5.798c.311 0 .525-.153.583-.418 0 0 .703-3.168.704-3.178.05-.247-.036-.439-.258-.555-.105-.054-.209-.108-.312-.163l-1.005-.522-1-.522-.387-.201a.186.186 0 0 1-.102-.17.199.199 0 0 1 .198-.194l3.178.014c.95.005 1.901-.062 2.836-.234 6.58-1.215 10.95-6.485 11.076-13.656.107-6.12-3.309-9.221-10.15-9.221l-.005.003Zm-1.579 16.68h-.124c-.278 0-.328-.03-.337-.04-.004-.007 1.833-8.073 1.834-8.084.047-.233.045-.367-.099-.446-.184-.102-2.866-1.516-2.866-1.516a.188.188 0 0 1-.101-.172.197.197 0 0 1 .197-.192h4.241c1.32.04 2.056 1.221 2.021 3.237-.061 3.492-1.721 7.09-4.766 7.214Z"/>
        </svg>
      ),
      color: "#0ae448"
    },
    { 
      name: "Tailwind CSS", 
      category: "Styling",
      logo: <SiTailwindcss className="w-8 h-8 text-[#06b6d4]" />,
      color: "#06b6d4"
    },
    { 
      name: "Vite", 
      category: "Build Tool",
      logo: <SiVite className="w-8 h-8 text-[#646cff]" />,
      color: "#646cff"
    },
    { 
      name: "Node.js", 
      category: "Runtime",
      logo: <SiNodedotjs className="w-8 h-8 text-[#339933]" />,
      color: "#339933"
    },
    { 
      name: "PostgreSQL", 
      category: "Database",
      logo: <SiPostgresql className="w-8 h-8 text-[#336791]" />,
      color: "#336791"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação molecular para o título
      gsap.fromTo(titleRef.current,
        { opacity: 0, scale: 0.8, filter: "blur(5px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          }
        }
      );

      // Animação de partículas para os cards
      if (gridRef.current) {
        const cards = gridRef.current.children;
        
        gsap.fromTo(cards,
          { 
            opacity: 0,
            y: 40,
            scale: 0.7,
            filter: "blur(10px)"
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: {
              each: 0.1,
              from: "random",
              grid: "auto"
            },
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 90%",
            }
          }
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Gerador de partículas flutuantes
  const Particle = ({ color }: { color: string }) => {
    const size = Math.random() * 4 + 1;
    return (
      <div 
        className="absolute rounded-full animate-float"
        style={{
          background: color,
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.6 + 0.2,
          animationDuration: `${Math.random() * 6 + 4}s`,
          animationDelay: `${Math.random() * 2}s`
        }}
      />
    );
  };

  return (
    <section 
      id="tech" 
      ref={sectionRef} 
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Partículas de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <Particle key={i} color="#d1d5db" />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-michroma font-light mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600"
          >
            <span className="inline-block mr-2">Tecnologias & Ferramentas</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Stack moderno para soluções de alta performance
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {technologies.map((tech) => (
            <div 
              key={tech.name}
              className="relative"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Efeito de partículas ativas */}
              {hoveredTech === tech.name && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <Particle key={i} color={tech.color} />
                  ))}
                </div>
              )}
              
              <GlareCard className="h-full">
                <Card className="relative overflow-hidden border border-gray-200 bg-white/90 backdrop-blur-md transition-all duration-500 hover:shadow-xl hover:scale-[1.02] py-10 h-full">
                  {/* Efeito de brilho sutil */}
                  <div 
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${tech.color}20, transparent 70%)`,
                      opacity: hoveredTech === tech.name ? 1 : 0
                    }}
                  />
                  
                  <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                    <div 
                      className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl bg-white transition-all duration-500"
                      style={{
                        boxShadow: hoveredTech === tech.name 
                          ? `0 0 0 4px white, 0 0 0 6px ${tech.color}40` 
                          : '0 4px 12px rgba(0,0,0,0.05)',
                        transform: hoveredTech === tech.name ? 'rotate(5deg) scale(1.1)' : 'rotate(0)'
                      }}
                    >
                      {tech.logo}
                    </div>
                    <h3 className="font-michroma font-medium text-sm mb-1 text-gray-800">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {tech.category}
                    </p>
                    
                    {/* Linha de conexão animada */}
                    <div 
                      className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-transparent to-transparent transition-all duration-500"
                      style={{
                        width: hoveredTech === tech.name ? '80%' : '0%',
                        left: hoveredTech === tech.name ? '10%' : '50%',
                        background: `linear-gradient(to right, transparent, ${tech.color}, transparent)`
                      }}
                    />
                  </CardContent>
                </Card>
              </GlareCard>
            </div>
          ))}
        </div>

        {/* Seção de Automação de Processos com Animated Beam */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-michroma font-light mb-4 text-gray-800">
              Fluxo de <span className="text-blue-600">Automação</span>
            </h3>
            <p className="text-gray-600">
              Como nossa IA processa e automatiza seus dados
            </p>
          </div>

          <div className="relative h-64 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 p-8">
            {/* Nós do fluxo */}
            <FlowNode 
              className="absolute top-1/2 left-8 transform -translate-y-1/2 w-12 h-12 bg-blue-100 rounded-full border-2 border-blue-300"
              style={{ zIndex: 10 }}
            >
              <User className="w-6 h-6 text-blue-700" />
            </FlowNode>

            <FlowNode 
              className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-purple-100 rounded-full border-2 border-purple-300"
              style={{ zIndex: 10 }}
            >
              <Brain className="w-6 h-6 text-purple-700" />
            </FlowNode>

            <FlowNode 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-green-100 rounded-full border-2 border-green-300"
              style={{ zIndex: 10 }}
            >
              <Database className="w-6 h-6 text-green-700" />
            </FlowNode>

            <FlowNode 
              className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-orange-100 rounded-full border-2 border-orange-300"
              style={{ zIndex: 10 }}
            >
              <Search className="w-6 h-6 text-orange-700" />
            </FlowNode>

            <FlowNode 
              className="absolute top-1/2 right-8 transform -translate-y-1/2 w-12 h-12 bg-blue-100 rounded-full border-2 border-blue-300"
              style={{ zIndex: 10 }}
            >
              <User className="w-6 h-6 text-blue-700" />
            </FlowNode>

            {/* Beams animados */}
            <AnimatedBeam fromX={32} fromY={128} toX={150} toY={64} delay={0} color="#3b82f6" />
            <AnimatedBeam fromX={150} fromY={64} toX={150} toY={128} delay={0.5} color="#8b5cf6" />
            <AnimatedBeam fromX={150} fromY={128} toX={150} toY={170} delay={1} color="#10b981" />
            <AnimatedBeam fromX={150} fromY={170} toX={150} toY={64} delay={1.5} color="#f97316" />
            <AnimatedBeam fromX={150} fromY={64} toX={268} toY={128} delay={2} color="#3b82f6" />

            {/* Labels */}
            <div className="absolute bottom-2 left-4 text-xs text-gray-600 font-medium">Usuário</div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 font-medium">OpenAI</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8 text-xs text-gray-600 font-medium">Supabase</div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 font-medium">Busca</div>
            <div className="absolute bottom-2 right-4 text-xs text-gray-600 font-medium">Resultado</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;