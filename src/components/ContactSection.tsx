
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, ArrowLeft, Mail, Phone, MapPin, Send, User, Building, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { BeamsBackground } from '@/components/ui/backgrounds';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

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

    gsap.fromTo([formRef.current, contactInfoRef.current],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const steps = [
    { number: 1, title: "Informações Pessoais", fields: ['name', 'email'], icon: User },
    { number: 2, title: "Empresa", fields: ['company'], icon: Building },
    { number: 3, title: "Mensagem", fields: ['message'], icon: MessageSquare },
    { number: 4, title: "Confirmação", fields: [], icon: CheckCircle }
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    const stepFields = steps[step - 1].fields;
    return stepFields.every(field => formData[field as keyof FormData].trim() !== '');
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    } else {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos antes de continuar.",
        variant: "destructive"
      });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    setIsSubmitting(false);
    setCurrentStep(1);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Nome completo *</label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Seu nome completo"
                className="h-12 bg-muted/30 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">E-mail *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="seu@email.com"
                className="h-12 bg-muted/30 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all duration-200"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Empresa *</label>
              <Input
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Nome da sua empresa"
                className="h-12 bg-muted/30 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all duration-200"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Mensagem *</label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                rows={6}
                className="bg-muted/30 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all duration-200 resize-none"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-michroma font-semibold mb-2">Confirme seus dados</h3>
              <p className="text-muted-foreground">Revise as informações antes de enviar</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-border/50">
              <div className="flex justify-between py-2 border-b border-border/30">
                <span className="text-muted-foreground">Nome:</span>
                <span className="font-medium">{formData.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border/30">
                <span className="text-muted-foreground">E-mail:</span>
                <span className="font-medium">{formData.email}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border/30">
                <span className="text-muted-foreground">Empresa:</span>
                <span className="font-medium">{formData.company}</span>
              </div>
              <div className="py-2">
                <span className="text-muted-foreground">Mensagem:</span>
                <p className="font-medium mt-1 text-sm leading-relaxed">{formData.message}</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@laelvistech.com",
      description: "Resposta em até 24h"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 99999-9999",
      description: "Seg a Sex, 9h às 18h"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP",
      description: "Brasil"
    }
  ];

  return (
    <BeamsBackground>
      <section id="contact" ref={sectionRef} className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-michroma font-bold mb-6"
            >
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforme sua ideia em realidade digital
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card ref={formRef} className="bg-card/40 backdrop-blur-xl border-border/50 shadow-2xl">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    {React.createElement(steps[currentStep - 1].icon, { className: "h-5 w-5 text-primary" })}
                  </div>
                  <CardTitle className="font-michroma text-xl">
                    {steps[currentStep - 1].title}
                  </CardTitle>
                </div>
                
                <div className="flex items-center justify-between">
                  {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center">
                      <div
                        className={`relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                          currentStep >= step.number
                            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                            : 'bg-muted/50 text-muted-foreground'
                        }`}
                      >
                        {currentStep > step.number ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          step.number
                        )}
                        {currentStep === step.number && (
                          <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse" />
                        )}
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`w-full h-0.5 mx-2 transition-all duration-300 ${
                            currentStep > step.number ? 'bg-primary' : 'bg-muted/30'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {renderStepContent()}
                
                <div className="flex justify-between pt-6">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="bg-transparent border-border/50 hover:bg-muted/50 hover:border-border transition-all duration-200"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Anterior
                  </Button>
                  
                  {currentStep < steps.length ? (
                    <Button
                      onClick={nextStep}
                      className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/25 transition-all duration-200"
                    >
                      Próximo
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/25 transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <div ref={contactInfoRef} className="space-y-8">
              <div>
                <h3 className="text-2xl font-michroma font-semibold mb-4">
                  Informações de Contato
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Entre em contato e vamos transformar sua visão em realidade digital.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 group hover:scale-[1.02]">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <p className="text-foreground font-medium">{info.content}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <h4 className="font-michroma font-semibold mb-2 text-primary">Resposta Garantida</h4>
                  <p className="text-sm text-muted-foreground">
                    Todas as mensagens são respondidas em até 24 horas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </BeamsBackground>
  );
};

export default ContactSection;
