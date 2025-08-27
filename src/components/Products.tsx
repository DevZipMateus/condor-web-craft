
import React from 'react';
import { Package, Coffee, Utensils, Cookie } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Coffee,
      title: 'Embalagens para Pipoca',
      description: 'Baldes de papel/cartão com impressão personalizada. Copos e saquinhos práticos para cinema, festas e eventos.',
      features: [
        'Impressão em até 6 cores',
        'Diversos tamanhos disponíveis',
        'Material resistente à gordura',
        'Personalização completa'
      ]
    },
    {
      icon: Package,
      title: 'Embalagens para Hambúrguer',
      description: 'Caixas tipo clamshell (abre e fecha). Papéis personalizados para embrulhar hambúrgueres.',
      features: [
        'Sistema abre e fecha prático',
        'Isolamento térmico',
        'Resistente à umidade',
        'Design atrativo personalizado'
      ]
    },
    {
      icon: Utensils,
      title: 'Embalagens para Hot Dog',
      description: 'Caixas e barquetas de papel cartonado. Saquinhos descartáveis personalizados.',
      features: [
        'Formato ergonômico',
        'Fácil manuseio',
        'Material alimentício',
        'Impressão de alta qualidade'
      ]
    },
    {
      icon: Cookie,
      title: 'Caixas para Nuggets e Porções',
      description: 'Embalagens para nuggets, batata frita e porções diversas com alta resistência.',
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
    <section id="products" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Nossos <span className="text-secondary">Produtos</span>
          </h2>
          <p className="section-subtitle">
            Soluções completas em embalagens personalizadas para o seu negócio
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={index}
              className="product-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <product.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-border">
                <a 
                  href="https://wa.me/5521998822692" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-center flex items-center justify-center"
                >
                  Solicitar Orçamento
                  <img 
                    src="/lovable-uploads/dae22125-e996-407c-8b6e-017686c6788c.png" 
                    alt="WhatsApp"
                    className="w-4 h-4 ml-2"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Por que escolher a Condor?
            </h3>
            <p className="text-white/90 text-lg">
              Diferenciais que fazem da Condor a escolha certa para o seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 bg-white/10 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white leading-relaxed">{advantage}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://wa.me/5521998822692" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero flex items-center justify-center mx-auto w-fit"
            >
              Fale com Especialista
              <img 
                src="/lovable-uploads/dae22125-e996-407c-8b6e-017686c6788c.png" 
                alt="WhatsApp"
                className="w-5 h-5 ml-2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
