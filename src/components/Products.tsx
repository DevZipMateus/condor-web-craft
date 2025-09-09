
import React from 'react';
import { Package, Coffee, Utensils, Cookie, Box, ShoppingBag, FileText, Container } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Coffee,
      title: 'Embalagens para Pipoca',
      description: 'Linha completa de embalagens para pipoca com impressão personalizada.',
      features: [
        'Impressão em até 6 cores',
        'Diversos tamanhos disponíveis', 
        'Material resistente à gordura',
        'Personalização completa'
      ]
    },
    {
      icon: Box,
      title: 'Baldes de papel/cartão com impressão personalizada',
      description: 'Baldes resistentes e personalizados para pipoca e outros alimentos.',
      features: [
        'Material de alta qualidade',
        'Impressão personalizada',
        'Diversos tamanhos',
        'Resistente e durável'
      ]
    },
    {
      icon: Coffee,
      title: 'Copos e saquinhos práticos para cinema, festas e eventos',
      description: 'Soluções práticas e elegantes para eventos e estabelecimentos.',
      features: [
        'Design atrativo',
        'Fácil manuseio',
        'Ideal para eventos',
        'Material de qualidade'
      ]
    },
    {
      icon: Package,
      title: 'Embalagens para Hambúrguer',
      description: 'Soluções completas para embalar hambúrgueres com qualidade.',
      features: [
        'Diversos modelos',
        'Kraft personalizado',
        'Resistente à umidade',
        'Personalização completa'
      ]
    },
    {
      icon: Box,
      title: 'Caixas tipo clamshell (abre e fecha)',
      description: 'Caixas práticas com sistema de abertura e fechamento seguro.',
      features: [
        'Sistema abre e fecha',
        'Fechamento seguro',
        'Material resistente',
        'Design funcional'
      ]
    },
    {
      icon: FileText,
      title: 'Papéis personalizados para embrulhar hambúrgueres',
      description: 'Papéis especiais com impressão personalizada para hambúrgueres.',
      features: [
        'Impressão personalizada',
        'Material alimentício',
        'Resistente à gordura',
        'Visual atrativo'
      ]
    },
    {
      icon: Utensils,
      title: 'Embalagens para Hot Dog',
      description: 'Embalagens especializadas para hot dogs e lanches similares.',
      features: [
        'Formato ergonômico',
        'Fácil manuseio',
        'Material alimentício',
        'Personalização disponível'
      ]
    },
    {
      icon: Container,
      title: 'Caixas e barquetas de papel cartonado',
      description: 'Caixas e barquetas resistentes em papel cartonado de qualidade.',
      features: [
        'Material resistente',
        'Formato prático',
        'Ideal para hot dogs',
        'Qualidade superior'
      ]
    },
    {
      icon: ShoppingBag,
      title: 'Saquinhos descartáveis personalizados',
      description: 'Saquinhos práticos e descartáveis com personalização completa.',
      features: [
        'Personalização total',
        'Material descartável',
        'Prático e funcional',
        'Diversos tamanhos'
      ]
    },
    {
      icon: Cookie,
      title: 'Caixas e Embalagens para Nuggets, Batata Frita e Porções',
      description: 'Embalagens especializadas para nuggets, batata frita e outras porções.',
      features: [
        'Material reforçado',
        'Ideal para delivery',
        'Ventilação adequada',
        'Compartimentos internos'
      ]
    }
  ];

  const advantages = [
    'Alta resistência: materiais reforçados, próprios para contato com alimentos',
    'Personalização total: impressão em cores vivas, logotipo e identidade da marca',
    'Versatilidade: produtos pensados tanto para delivery quanto para consumo local',
    'Atendimento Nacional: fornecimento em escala para grandes redes e franquias'
  ];

  return (
    <section id="products" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4 md:mb-6">
            Nossos <span className="text-secondary">Produtos</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground px-4">
            Soluções completas em embalagens personalizadas para o seu negócio
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 mb-4 md:mb-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <product.icon className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-4">{product.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              </div>
              
              <ul className="space-y-2 md:space-y-3">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12 md:mb-16">
          <a 
            href="https://wa.me/5521998822692" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-hero flex items-center justify-center mx-auto w-fit text-sm md:text-base px-8 md:px-10 py-3 md:py-4 animate-scale-in"
          >
            Solicitar Orçamento para Todos os Produtos
            <img 
              src="/lovable-uploads/dae22125-e996-407c-8b6e-017686c6788c.png" 
              alt="WhatsApp"
              className="w-4 h-4 md:w-5 md:h-5 ml-2"
            />
          </a>
        </div>

        {/* Advantages Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 md:p-8 lg:p-12 animate-slide-up">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
              Por que escolher a Condor?
            </h3>
            <p className="text-white/90 text-base md:text-lg px-4">
              Diferenciais que fazem da Condor a escolha certa para o seu negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 md:space-x-4 bg-white/10 rounded-xl p-4 md:p-6 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-white rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                <p className="text-white leading-relaxed text-sm md:text-base">{advantage}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="https://wa.me/5521998822692" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero flex items-center justify-center mx-auto w-fit text-sm md:text-base px-6 md:px-8 py-3 md:py-4"
            >
              Fale com Especialista
              <img 
                src="/lovable-uploads/dae22125-e996-407c-8b6e-017686c6788c.png" 
                alt="WhatsApp"
                className="w-4 h-4 md:w-5 md:h-5 ml-2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
