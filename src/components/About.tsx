
import React from 'react';
import { Target, Shield, Zap, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Foco no Cliente',
      description: 'Entendemos as necessidades específicas de cada negócio e oferecemos soluções personalizadas.'
    },
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Materiais de alta resistência, próprios para contato com alimentos e certificados.'
    },
    {
      icon: Zap,
      title: 'Agilidade na Entrega',
      description: 'Processos otimizados para atender prazos apertados sem comprometer a qualidade.'
    },
    {
      icon: Globe,
      title: 'Alcance Nacional',
      description: 'Atendimento em todo território nacional com logística especializada.'
    }
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-accent/30">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4 md:mb-6">
            Sobre a <span className="text-secondary">Condor</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Com mais de três décadas de atuação no mercado brasileiro de embalagens, 
            somos o parceiro confiável das grandes lojas. Nossa trajetória é marcada 
            pela visão atemporal: unimos profundo conhecimento do mercado, flexibilidade 
            às transformações do setor e um compromisso constante com a excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center animate-slide-up px-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary rounded-2xl mb-4 md:mb-6">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg animate-slide-up">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">
                Nossa Missão
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                Fornecer embalagens inovadoras e sustentáveis que atendam às 
                necessidades específicas de cada cliente, mantendo sempre o 
                mais alto padrão de qualidade e excelência no atendimento.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                  <div className="text-sm md:text-base">
                    <strong className="text-primary">Inovação:</strong> 
                    <span className="text-muted-foreground ml-2">
                      Sempre buscando novas tecnologias e materiais
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                  <div className="text-sm md:text-base">
                    <strong className="text-primary">Sustentabilidade:</strong> 
                    <span className="text-muted-foreground ml-2">
                      Compromisso com o meio ambiente
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                  <div className="text-sm md:text-base">
                    <strong className="text-primary">Excelência:</strong> 
                    <span className="text-muted-foreground ml-2">
                      Padrão superior em todos os processos
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative order-first lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
              <img 
                src="/lovable-uploads/533f2f65-91bb-4532-9271-1dd4d8665ecd.png" 
                alt="Condor - Tradição e inovação em embalagens"
                className="relative z-10 w-48 md:w-56 lg:w-64 h-auto mx-auto opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
