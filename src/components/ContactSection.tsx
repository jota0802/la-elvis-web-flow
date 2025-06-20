import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Mail, Phone, MapPin, Send, User, Building, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
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
    if (!validateStep(currentStep)) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }
    
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
            <div className="space-y-3">
              <label className="text-sm font-medium text-neutral-700">Nome completo</label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Seu nome completo"
                className="h-12 bg-white border-neutral-300 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all duration-200"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium text-neutral-700">E-mail</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="seu@email.com"
                className="h-12 bg-white border-neutral-300 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all duration-200"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-neutral-700">Empresa</label>
              <Input
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Nome da sua empresa"
                className="h-12 bg-white border-neutral-300 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all duration-200"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-neutral-700">Mensagem</label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                rows={6}
                className="bg-white border-neutral-300 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all duration-200 resize-none"
              />
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
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-michroma font-light mb-6 text-neutral-900"
          >
            Entre em <span className="text-neutral-700">Contato</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Transforme sua ideia em realidade digital
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <Card ref={formRef} className="bg-white border border-neutral-200 shadow-lg">
            <CardContent className="p-8">
              <div className="mb-8">
                <h3 className="font-michroma text-xl font-medium mb-6 text-neutral-900">
                  {steps[currentStep - 1].title}
                </h3>
                
                <div className="flex items-center justify-between mb-8">
                  {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center flex-1">
                      <div
                        className={`relative w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                          currentStep >= step.number
                            ? 'bg-neutral-900 text-white'
                            : 'bg-neutral-100 text-neutral-400'
                        }`}
                      >
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`flex-1 h-px mx-4 transition-all duration-300 ${
                            currentStep > step.number ? 'bg-neutral-900' : 'bg-neutral-200'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                {renderStepContent()}
              </div>
              
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 transition-colors duration-200"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Anterior
                </Button>
                
                {currentStep < steps.length ? (
                  <Button
                    onClick={nextStep}
                    className="bg-neutral-900 text-white hover:bg-neutral-800 transition-colors duration-200"
                  >
                    Próximo
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-neutral-900 text-white hover:bg-neutral-800 transition-colors duration-200"
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
              <h3 className="text-2xl font-michroma font-medium mb-4 text-neutral-900">
                Informações de Contato
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Entre em contato e vamos transformar sua visão em realidade digital.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="group bg-white border border-neutral-100 rounded-lg p-4 transition-all duration-200 hover:border-neutral-200 hover:shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center group-hover:bg-neutral-100 transition-colors duration-200">
                      <info.icon className="h-4 w-4 text-neutral-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">{info.title}</p>
                      <p className="text-sm font-medium text-neutral-900 truncate">{info.content}</p>
                      <p className="text-xs text-neutral-500">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-neutral-900 text-white rounded-lg p-6 text-center">
              <h4 className="font-michroma font-medium mb-2 text-sm">Resposta Garantida</h4>
              <p className="text-xs text-neutral-300">
                Todas as mensagens são respondidas em até 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
