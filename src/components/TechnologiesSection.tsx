
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechnologiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const technologies = [
    { 
      name: "React", 
      category: "Frontend",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#61dafb">
          <circle cx="12" cy="12" r="2"/>
          <path d="M12 1c-4.2 0-7.9 1.1-7.9 4.5s3.7 4.5 7.9 4.5 7.9-1.1 7.9-4.5S16.2 1 12 1z" fill="none" stroke="#61dafb" strokeWidth="1"/>
          <path d="M12 14c-4.2 0-7.9 1.1-7.9 4.5S7.8 23 12 23s7.9-1.1 7.9-4.5S16.2 14 12 14z" fill="none" stroke="#61dafb" strokeWidth="1"/>
          <path d="M7.5 8.5c-2.1 3.6-3.2 7.4-2.5 8.5s3.2.4 5.3-3.2 3.2-7.4 2.5-8.5S9.6 4.9 7.5 8.5z" fill="none" stroke="#61dafb" strokeWidth="1"/>
          <path d="M16.5 8.5c2.1 3.6 3.2 7.4 2.5 8.5s-3.2.4-5.3-3.2-3.2-7.4-2.5-8.5S14.4 4.9 16.5 8.5z" fill="none" stroke="#61dafb" strokeWidth="1"/>
        </svg>
      )
    },
    { 
      name: "TypeScript", 
      category: "Language",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="22" height="22" x="1" y="1" fill="#3178c6" rx="2"/>
          <path d="M7.5 8v8M4 12h7" stroke="white" strokeWidth="1.5" fill="none"/>
          <path d="M14 8v1.5h2.5V16h1.5V9.5H20V8h-6z" fill="white"/>
        </svg>
      )
    },
    { 
      name: "Supabase", 
      category: "Backend",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M12.5 2.5L2 12h8v9l10.5-9.5H12V2.5z" fill="#3ecf8e"/>
          <path d="M11.5 21.5L22 12h-8V3L3.5 12.5H12v9z" fill="#3ecf8e" opacity="0.7"/>
        </svg>
      )
    },
    { 
      name: "GSAP", 
      category: "Animation",
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="200" fill="none" viewBox="0 0 82 30">
  <path fill="#0ae448" d="M23.81 14.013v.013l-1.075 4.665c-.058.264-.322.458-.626.458H20.81a.218.218 0 0 0-.208.155c-1.198 4.064-2.82 6.858-4.962 8.535-1.822 1.428-4.068 2.093-7.069 2.093-2.696 0-4.514-.867-6.056-2.578C.478 25.09-.364 21.388.146 16.926 1.065 8.549 5.41.096 13.776.096c2.545-.023 4.543.762 5.933 2.33 1.47 1.657 2.216 4.154 2.22 7.421a.55.55 0 0 1-.549.536h-6.13a.42.42 0 0 1-.407-.41c-.05-2.259-.72-3.36-2.052-3.36-2.35 0-3.736 3.19-4.471 4.959-1.027 2.47-1.55 5.152-1.447 7.824.049 1.244.249 2.994 1.43 3.718 1.047.643 2.541.217 3.446-.495.904-.711 1.632-1.942 1.938-3.065.043-.156.046-.277.005-.332-.043-.055-.162-.068-.253-.068h-1.574a.572.572 0 0 1-.438-.202.42.42 0 0 1-.087-.362l1.076-4.674c.053-.24.27-.42.537-.453v-.011h10.33c.024 0 .049 0 .072.005.268.034.457.284.452.556h.002Z"/>
  <path fill="#0ae448" d="M41.594 8.65a.548.548 0 0 1-.548.531H35.4c-.37 0-.679-.3-.679-.665 0-1.648-.57-2.45-1.736-2.45s-1.918.717-1.94 1.968c-.025 1.395.764 2.662 3.01 4.84 2.957 2.774 4.142 5.232 4.085 8.48C38.047 26.605 34.476 30 29.042 30c-2.775 0-4.895-.743-6.305-2.207-1.431-1.486-2.087-3.668-1.95-6.485a.548.548 0 0 1 .549-.53h5.84a.55.55 0 0 1 .422.209.48.48 0 0 1 .106.384c-.065 1.016.112 1.775.512 2.195.256.272.613.41 1.058.41 1.079 0 1.711-.763 1.735-2.09.02-1.148-.343-2.155-2.321-4.19-2.555-2.496-4.846-5.075-4.775-9.13.042-2.351.976-4.502 2.631-6.056C28.294.868 30.687 0 33.465 0c2.783.02 4.892.813 6.269 2.359 1.304 1.466 1.932 3.582 1.862 6.29h-.002Z"/>
  <path fill="#0ae448" d="m59.096 29.012.037-27.932a.525.525 0 0 0-.529-.533h-8.738c-.294 0-.423.252-.507.42L36.707 28.842v.005l-.005.006c-.14.343.126.71.497.71h6.108c.33 0 .548-.1.656-.308l1.213-2.915c.149-.388.177-.424.601-.424h5.836c.406 0 .415.008.408.405l-.131 2.71a.525.525 0 0 0 .529.532h6.17a.522.522 0 0 0 .403-.182.458.458 0 0 0 .104-.369Zm-10.81-9.326c-.057 0-.102-.001-.138-.005a.146.146 0 0 1-.13-.183c.012-.041.029-.095.053-.163l4.377-10.827c.038-.107.086-.212.136-.314.071-.145.157-.155.184-.047.023.09-.502 11.118-.502 11.118-.041.413-.06.43-.467.464l-3.509-.041h-.008l.003-.002Z"/>
  <path fill="#0ae448" d="M71.545.547h-4.639c-.245 0-.52.13-.585.422l-6.455 28.029a.423.423 0 0 0 .088.364.572.572 0 0 0 .437.202h5.798c.311 0 .525-.153.583-.418 0 0 .703-3.168.704-3.178.05-.247-.036-.439-.258-.555-.105-.054-.209-.108-.312-.163l-1.005-.522-1-.522-.387-.201a.186.186 0 0 1-.102-.17.199.199 0 0 1 .198-.194l3.178.014c.95.005 1.901-.062 2.836-.234 6.58-1.215 10.95-6.485 11.076-13.656.107-6.12-3.309-9.221-10.15-9.221l-.005.003Zm-1.579 16.68h-.124c-.278 0-.328-.03-.337-.04-.004-.007 1.833-8.073 1.834-8.084.047-.233.045-.367-.099-.446-.184-.102-2.866-1.516-2.866-1.516a.188.188 0 0 1-.101-.172.197.197 0 0 1 .197-.192h4.241c1.32.04 2.056 1.221 2.021 3.237-.061 3.492-1.721 7.09-4.766 7.214Z"/>
</svg>
      )
    },
    { 
      name: "Tailwind CSS", 
      category: "Styling",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#06b6d4">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z"/>
        </svg>
      )
    },
    { 
      name: "Vite", 
      category: "Build Tool",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <defs>
            <linearGradient id="viteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#41d1ff"/>
              <stop offset="100%" stopColor="#bd34fe"/>
            </linearGradient>
          </defs>
          <path d="M8.286 10.578.072 1.5.828.072 9.514 8.828a.3.3 0 0 1-.265.451H6.036a.3.3 0 0 0-.265.451L9.785 17a.3.3 0 0 0 .531 0l4.014-7.27a.3.3 0 0 0-.265-.451h-3.213a.3.3 0 0 1-.265-.451L16.828.072a.3.3 0 0 1 .756.428l-8.7 15.5a.3.3 0 0 1-.531 0L.214 1.928a.3.3 0 0 1 .756-.428z" fill="url(#viteGrad)"/>
        </svg>
      )
    },
    { 
      name: "Node.js", 
      category: "Runtime",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#339933">
          <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.48.28 1.08.28 1.56 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z"/>
        </svg>
      )
    },
    { 
      name: "PostgreSQL", 
      category: "Database",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#336791">
          <path d="M17.128 0C15.624 0 14.624.896 14.624 2.4c0 .896.448 1.664 1.12 2.192-.224.32-.448.736-.448 1.216 0 1.504 1.12 2.4 2.624 2.4s2.624-.896 2.624-2.4c0-.48-.224-.896-.448-1.216.672-.528 1.12-1.296 1.12-2.192C21.216.896 20.216 0 18.712 0h-1.584zM12 3.6c-4.64 0-8.4 3.76-8.4 8.4s3.76 8.4 8.4 8.4 8.4-3.76 8.4-8.4S16.64 3.6 12 3.6z"/>
        </svg>
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

      if (gridRef.current) {
        const cards = gridRef.current.children;
        gsap.fromTo(cards,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
            }
          }
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="tech" ref={sectionRef} className="py-20 lg:py-32 bg-minimal-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-michroma font-light mb-6"
          >
            Tecnologias & <span className="minimal-accent">Ferramentas</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Stack moderno e confiável para soluções robustas
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech) => (
            <Card 
              key={tech.name} 
              className="minimal-card minimal-hover cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  {tech.logo}
                </div>
                <h3 className="font-michroma font-medium text-sm mb-2 text-foreground">
                  {tech.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {tech.category}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
