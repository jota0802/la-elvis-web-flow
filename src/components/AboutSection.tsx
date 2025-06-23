
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Linkedin, Instagram } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(statsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(projectRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(teamRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const stats = [
    { label: "Projeto", value: "1500H" },
    { label: "IA´s", value: "12+" },
    { label: "Devs", value: "5+1 Inidano" }
  ];

  const teamMembers = [
    {
      name: "Jota",
      photo: "https://i.pinimg.com/736x/84/64/87/8464870bd9deadaebf1e0d7a82546b4f.jpg",
      cargo: "Dev Front-end",
      github: "#",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Leo Linux", 
      photo: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=face",
      cargo: "Dev Back-end",
      github: "#",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Morais",
      photo: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=face", 
      cargo: "Dev Back-end",
      github: "#",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Murilo",
      photo: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=400&fit=crop&crop=face",
      cargo: "Dev DB",
      github: "#",
      linkedin: "#", 
      instagram: "#"
    },
    {
      name: "Leozika",
      photo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=400&fit=crop&crop=face",
      cargo: "Dev DB",
      github: "#",
      linkedin: "#",
      instagram: "#"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-10 lg:py-30 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header minimalista */}
        <div ref={contentRef} className=" mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-michroma font-light mb-8">
            Sobre a <span className="minimal-accent">La Elvis Tech</span>
          </h2>
          <div className="max-w-3xl space-y-6 text-md md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            <p>
              Um grupo de 5 desenvolvedores, apaixonados por tecnologia, inovação e memes que formam a equipe La Elvis Tech hoje.
            </p>
            <p>
              Neste trabalho em equipe, cada membro trouxe suas habilidades únicas para criar soluções digitais que fazem a diferença.
            </p>
          </div>
        </div>

         {/* Seção da Equipe */}
        <div ref={teamRef} className="mb-20">
          <div className=" mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-end font-michroma font-light mb-4">
              Equipe <span className="minimal-accent">La Elvis Tech</span>
            </h3>
            <p className="text-md md:text-lg lg:text-xl text-end text-muted-foreground mx-auto">
              Conheça os desenvolvedores por trás do projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="minimal-card border-0 shadow-sm group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-21 h-auto mx-auto rounded-full overflow-hidden bg-muted">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  
                  <h4 className="font-michroma font-medium text-sm mb-2 text-foreground">
                    {member.name}
                  </h4>
                  <p className="font-light text-sm mb-4 text-foreground">
                    {member.cargo}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a 
                      href={member.github} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a 
                      href={member.linkedin} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a 
                      href={member.instagram} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats minimalistas */}
        <div ref={statsRef} className="flex justify-center mb-14 md:mb-20">
          <div className="flex flex-col md:flex-row  space-x-0 space-y-4 md:space-x-16 md:space-y-0">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-michroma font-light text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Projeto em destaque - layout mais limpo */}
        <div ref={projectRef} className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-michroma font-light mb-4">
              Projeto em <span className="minimal-accent">Destaque</span>
            </h3>
          </div>

          <Card className="minimal-card border-0 shadow-sm">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h4 className="text-xl font-michroma font-medium mb-4 text-foreground">
                  Lab Dash Animates
                </h4>
                <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
                  Sistema Web, Abaixo Repositório do Github e Link para o Site <br /> 
                  - React com Vite e TypeScript.
                </p>
              </div>
              
              <div className="flex justify-center space-x-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="minimal-hover"
                >
                  <a 
                    href="https://github.com/La-Elvis-Tech/lab-dash-animates" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                  <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                
                <Button
                  asChild
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                >
                  <a 
                    href="https://laelvistech.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ver Site
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
