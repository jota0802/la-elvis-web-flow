
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
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
    // Animations
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
    { number: 1, title: "Informações Pessoais", fields: ['name', 'email'] },
    { number: 2, title: "Informações da Empresa", fields: ['company'] },
    { number: 3, title: "Mensagem", fields: ['message'] },
    { number: 4, title: "Confirmação", fields: [] }
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
    
    // Simulate API call
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
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nome completo *</label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Seu nome completo"
                className="bg-muted/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">E-mail *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="seu@email.com"
                className="bg-muted/50"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Empresa *</label>
              <Input
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Nome da sua empresa"
                className="bg-muted/50"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Mensagem *</label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                rows={6}
                className="bg-muted/50"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-michroma font-semibold mb-2">Confirme seus dados</h3>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 space-y-2">
              <p><strong>Nome:</strong> {formData.name}</p>
              <p><strong>E-mail:</strong> {formData.email}</p>
              <p><strong>Empresa:</strong> {formData.company}</p>
              <p><strong>Mensagem:</strong> {formData.message.substring(0, 100)}...</p>
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
      content: "contato@laelvistech.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 99999-9999"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP - Brasil"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-michroma font-bold mb-6"
          >
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar sua ideia em realidade? Vamos conversar sobre seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card ref={formRef} className="spotlight-card bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="font-michroma">
                {steps[currentStep - 1].title}
              </CardTitle>
              
              {/* Stepper */}
              <div className="flex items-center space-x-2 mt-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                        currentStep >= step.number
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {currentStep > step.number ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        step.number
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-12 h-0.5 transition-all duration-300 ${
                          currentStep > step.number ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {renderStepContent()}
              
              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Anterior</span>
                </Button>
                
                {currentStep < steps.length ? (
                  <Button
                    onClick={nextStep}
                    className="bg-primary hover:bg-primary/90 flex items-center space-x-2"
                  >
                    <span>Próximo</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div ref={contactInfoRef} className="space-y-8">
            <div>
              <h3 className="text-2xl font-michroma font-semibold mb-6">
                Informações de Contato
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Estamos sempre prontos para discutir novos projetos e oportunidades. 
                Entre em contato conosco através de qualquer um dos canais abaixo.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-michroma font-semibold mb-2">Resposta Rápida</h4>
                <p className="text-sm text-muted-foreground">
                  Respondemos todas as mensagens em até 24 horas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
