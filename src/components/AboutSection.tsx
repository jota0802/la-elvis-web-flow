import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GlareCard } from "@/components/ui/glare-card";
import { Github, ExternalLink, Linkedin, Instagram } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "@/components/ui/count-up";
import GradientText from "@/components/ui/gradient-text";
import MagnetLines from "@/components/ui/Animations/MagnetLines/MagnetLines";
import ClickSpark from "@/components/ui/Animations/ClickSpark/ClickSpark";
import Magnet from "@/components/ui/Animations/Magnet/Magnet";
import Aurora from "@/components/ui/Backgrounds/Aurora/Aurora";
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        statsRef.current,
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
          },
        }
      );

      gsap.fromTo(
        projectRef.current,
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
          },
        }
      );

      // Animação com stagger para os membros da equipe
      if (teamRef.current) {
        const teamCards = teamRef.current.querySelectorAll(".team-member-card");
        gsap.fromTo(
          teamCards,
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: teamRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const stats = [
    { label: "Horas", value: "1500H" },
    { label: "IA´s", value: "12+" },
    { label: "Devs", value: "5+1 Inidano" },
  ];

  const teamMembers = [
    {
      name: "Jota",
      photo:
        "https://i.pinimg.com/736x/84/64/87/8464870bd9deadaebf1e0d7a82546b4f.jpg",
      cargo: "Dev Front-end",
      github: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Leo Linux",
      photo: "leolinux.jpg",
      cargo: "Dev Back-end",
      github: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Morais",
      photo: "morais.jpg",
      cargo: "Dev Back-end",
      github: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Murilo",
      photo: "murilo.jpg",
      cargo: "Dev DB",
      github: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Leozika",
      photo: "leozika.jpg",
      cargo: "Dev DB",
      github: "#",
      linkedin: "#",
      instagram: "#",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-10 lg:py-30 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header minimalista */}
        <div ref={contentRef} className="mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-michroma font-light mb-8">
            Sobre a <span className="minimal-accent">La Elvis Tech</span>
          </h2>
          <div className="max-w-3xl space-y-6 text-md md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            <p>
              Um grupo de 5 desenvolvedores, apaixonados por tecnologia,
              inovação e memes que formam a equipe La Elvis Tech hoje.
            </p>
            <p>
              Neste trabalho em equipe, cada membro trouxe suas habilidades
              únicas para criar soluções digitais que fazem a diferença.
            </p>
          </div>
        </div>
        {/* Seção da Equipe */}
        <div ref={teamRef} className="mb-20 md:mb-32">
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
              <GlareCard key={index} className="group team-member-card">
                <Card className="minimal-card border-0 shadow-sm max-w-[340px] mx-auto">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className="w-21 h-21 mx-auto rounded-md overflow-hidden bg-muted group-hover:scale-102 transition-transform duration-300">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-auto max-h-[400px] aspect-square object-fill transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <h4 className="font-michroma font-medium text-sm mb-2">
                      <GradientText
                        colors={["#281ae4", "#d3d3d3", "#4b99ff"]}
                        animationSpeed={10}
                        showBorder={false}
                        className="custom-class"
                      >
                        {member.name}
                      </GradientText>
                    </h4>
                    <p className="font-light text-sm mb-4 text-foreground">
                      {member.cargo}
                    </p>
                    <div className="flex justify-center space-x-3">
                      <a
                        href={member.github}
                        className="text-muted-foreground hover:text-foreground transition-colors transform"
                        aria-label="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="text-muted-foreground hover:text-foreground transition-colors transform"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={member.instagram}
                        className="text-muted-foreground hover:text-foreground transition-colors transform"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </GlareCard>
            ))}
          </div>
        </div>
        {/* Stats minimalistas */}
        <div ref={statsRef} className="flex justify-center mb-14 md:mb-32">
          <div className="flex flex-col md:flex-row space-x-0 space-y-4 md:space-x-16 md:space-y-0">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-michroma font-light text-primary mb-2">
                  <GradientText
                    colors={["#202020", "#d3d3d3", "#202020"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="custom-class"
                  >
                    <CountUp
                      from={0}
                      to={
                        stat.value === "1500H"
                          ? 1500
                          : stat.value === "12+"
                          ? 12
                          : 5
                      }
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                  </GradientText>
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Projeto em destaque com Aurora como fundo */}
        <div
          ref={projectRef}
          className="max-w-3xl mx-auto border-hidden rounded-2xl px-4"
        >
          <div className="text-center mb-10 md:mb-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-michroma font-light mb-4">
              Projeto em <span className="minimal-accent">Destaque</span>
            </h3>
          </div>

          <Card
            className="minimal-card border-0 shadow-md relative overflow-hidden"
            style={{ width: "auto", minHeight: "470px", height: "auto" }}
          >
            <div className="absolute inset-0 z-0 blur-sm">
              <Aurora
                colorStops={["#3381ff", "#ff4dcc", "#fc1921"]}
                blend={0.4}
                amplitude={0.6}
                speed={0.5}
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8 z-10">
              <ClickSpark
                sparkColor="#2345e0"
                sparkSize={12}
                sparkRadius={20}
                sparkCount={8}
                duration={500}
                easing="linear"
                extraScale={1.3}
              >
                <div className="flex flex-col justify-center items-center backdrop-blur-lg bg-gradient-to-b from-white/20 to-black/10 border-hidden rounded-xl p-4 sm:p-6 w-full border border-border/50 min-h-[250px] sm:min-h-[400px] z-9">
                  <div className="text-center mb-4 sm:mb-8">
                    <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-michroma font-medium mb-2 sm:mb-4 text-neutral-800">
                      Lab Dash Animates
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base font-light text-neutral-200 leading-relaxed">
                      Abaixo Repositório do Github e Link para o Site Feito para
                      Dasa
                      <br className="hidden sm:block" />- React com Vite e
                      TypeScript.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 w-full max-w-xs sm:max-w-none">
                    <Magnet
                      padding={20}
                      disabled={false}
                      magnetStrength={10}
                      className="w-full sm:w-auto"
                    >
                      <Button
                        asChild
                        variant="outline"
                        className="minimal-hover bg-transparent border-2 border-primary/30 hover:border-primary rounded-xl px-4 py-3 sm:px-8 sm:py-6 transition-all duration-300 group w-full"
                      >
                        <a
                          href="https://github.com/La-Elvis-Tech/lab-dash-animates"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg font-medium"
                        >
                          <Github className="h-4 w-4 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
                          <span>GitHub</span>
                        </a>
                      </Button>
                    </Magnet>

                    <Magnet
                      padding={20}
                      disabled={false}
                      magnetStrength={10}
                      className="w-full sm:w-auto"
                    >
                      <Button
                        asChild
                        className="bg-gradient-to-r from-black/80 to-black/10 rounded-xl px-4 py-3 sm:px-8 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 group w-full"
                      >
                        <a
                          href="https://laelvistech.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg font-medium text-white"
                        >
                          <ExternalLink className="h-4 w-4 sm:h-6 sm:w-6 text-white group-hover:scale-110 transition-transform" />
                          <span>Ver Site</span>
                        </a>
                      </Button>
                    </Magnet>
                  </div>
                </div>
              </ClickSpark>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
