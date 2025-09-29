import React from 'react';
import { Package, Coffee, Utensils, Cookie, Box, ShoppingBag, FileText, Container, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Catalogo = () => {
  const papelProducts = [
    {
      icon: Coffee,
      title: 'Embalagens para Pipoca - Modelo Bauducco',
      description: 'Embalagem de papel para pipoca com design personalizado, ideal para cinemas e eventos.',
      features: [
        'Impressão em até 6 cores',
        'Material resistente à gordura',
        'Design personalizado',
        'Tamanho otimizado'
      ],
      image: '/lovable-uploads/edc5bd8b-31f9-4f8b-9b80-4cb4722ae1e0.png'
    },
    {
      icon: Coffee,
      title: 'Embalagem UCI Orient - Papel',
      description: 'Embalagem de papel com design moderno e impressão de alta qualidade.',
      features: [
        'Design diferenciado',
        'Material de qualidade',
        'Impressão vibrante',
        'Formato prático'
      ],
      image: '/lovable-uploads/4faadb5f-7968-42ce-aee6-11bddded3de0.png'
    },
    {
      icon: Coffee,
      title: 'Embalagem Kinoplex Mini - Amarela',
      description: 'Embalagem de papel para pipoca pequena com design colorido e atrativo.',
      features: [
        'Tamanho mini',
        'Design colorido',
        'Material resistente',
        'Branding personalizado'
      ],
      image: '/lovable-uploads/b2f5a54a-fcaa-4216-9d6d-37f17715419e.png'
    },
    {
      icon: Coffee,
      title: 'Embalagem Kinoplex Super - Vermelha',
      description: 'Embalagem de papel para pipoca tamanho super com design diferenciado.',
      features: [
        'Tamanho super',
        'Design vermelho vibrante',
        'Alta qualidade',
        'Impressão personalizada'
      ],
      image: '/lovable-uploads/41e8b1fb-f860-4307-8273-f485ced84daa.png'
    },
    {
      icon: Coffee,
      title: 'Embalagem UCI Orient - Tamanho Grande',
      description: 'Embalagem de papel formato grande com excelente acabamento.',
      features: [
        'Formato grande',
        'Material premium',
        'Impressão de qualidade',
        'Design profissional'
      ],
      image: '/lovable-uploads/07ad3d2c-cd5e-4f8a-a28e-07642009670f.png'
    },
    {
      icon: Coffee,
      title: 'Embalagem Kinoplex Mega - Laranja',
      description: 'Embalagem de papel tamanho mega com design laranja chamativo.',
      features: [
        'Tamanho mega',
        'Cor laranja vibrante',
        'Material resistente',
        'Design inovador'
      ],
      image: '/lovable-uploads/a7c2a892-1379-41e8-9363-f29e3e19880f.png'
    },
    {
      icon: Coffee,
      title: 'Embalagem Kinoplex Giga - Rosa',
      description: 'Embalagem de papel tamanho giga com design rosa diferenciado.',
      features: [
        'Tamanho giga',
        'Design rosa atrativo',
        'Alta durabilidade',
        'Personalização completa'
      ],
      image: '/lovable-uploads/ca1c8205-3f6f-43f4-9fc1-33bbec25daf2.png'
    }
  ];

  const papelCartaoProducts = [
    {
      icon: Package,
      title: 'Bandejas de Papel Cartão',
      description: 'Bandejas brancas resistentes em papel cartão.',
      features: [
        'Material resistente',
        'Ideal para alimentos',
        'Formato prático',
        'Cor branca'
      ],
      image: '/lovable-uploads/e45ed1a5-6f49-43ca-99ab-062cd5cdb487.png'
    },
    {
      icon: Box,
      title: 'Caixa Mello Personalizada',
      description: 'Caixa personalizada da marca Mello em papel cartão.',
      features: [
        'Design personalizado',
        'Material de qualidade',
        'Impressão colorida',
        'Marca Mello'
      ],
      image: '/lovable-uploads/b6330d85-f41c-4c3e-8301-735e523cc0a6.png'
    },
    {
      icon: Box,
      title: 'Caixa Mello Modelo 2',
      description: 'Segundo modelo de caixa personalizada Mello.',
      features: [
        'Variação de design',
        'Alta qualidade',
        'Impressão premium',
        'Funcional'
      ],
      image: '/lovable-uploads/23eb9661-dc25-419f-be84-00e52640aa69.png'
    },
    {
      icon: Container,
      title: 'Caixa Kraft Personalizada',
      description: 'Caixa em papel kraft com impressão personalizada.',
      features: [
        'Material kraft',
        'Eco-friendly',
        'Impressão personalizada',
        'Design moderno'
      ],
      image: '/lovable-uploads/7c503e91-61fc-4108-bbff-5465541f7418.png'
    },
    {
      icon: Box,
      title: 'Caixa SIAM Colorida',
      description: 'Caixa colorida da marca SIAM em papel cartão.',
      features: [
        'Design colorido',
        'Marca SIAM',
        'Alta qualidade',
        'Impressão vibrante'
      ],
      image: '/lovable-uploads/01665177-f5d7-4cb0-a104-d94f873ddb1f.png'
    },
    {
      icon: ShoppingBag,
      title: 'Sacola UCI Personalizada',
      description: 'Sacola colorida com design moderno da UCI.',
      features: [
        'Design inovador',
        'Cores vibrantes',
        'Material resistente',
        'Marca UCI'
      ],
      image: '/lovable-uploads/1260d8ce-2100-4e74-a1c4-ee513b5724e0.png'
    },
    {
      icon: Coffee,
      title: 'Balde Kinoplex Platinum',
      description: 'Balde premium Kinoplex com acabamento sofisticado.',
      features: [
        'Design premium',
        'Acabamento platinum',
        'Alta qualidade',
        'Marca Kinoplex'
      ],
      image: '/lovable-uploads/6b5bbaac-d8fc-40d3-a493-1efbdb1d05dd.png'
    },
    {
      icon: Coffee,
      title: 'Balde Kinoplex Platinum Modelo 2',
      description: 'Segundo modelo do balde premium Kinoplex.',
      features: [
        'Design elegante',
        'Material premium',
        'Acabamento superior',
        'Linha Platinum'
      ],
      image: '/lovable-uploads/a8ede673-842b-4d91-99dd-ffe269b2bb92.png'
    },
    {
      icon: Coffee,
      title: 'Balde UCI Orient De Lux',
      description: 'Balde de luxo UCI Orient com design sofisticado.',
      features: [
        'Linha De Lux',
        'Design premium',
        'Acabamento especial',
        'Marca UCI Orient'
      ],
      image: '/lovable-uploads/0b2da672-f004-4745-aa9a-88952570cb91.png'
    },
    {
      icon: Coffee,
      title: 'Balde UCI De Lux Modelo 2',
      description: 'Variação do balde De Lux com design diferenciado.',
      features: [
        'Design exclusivo',
        'Acabamento de luxo',
        'Material premium',
        'UCI De Lux'
      ],
      image: '/lovable-uploads/b7366485-ba14-4e1e-a4a3-0134b676371d.png'
    },
    {
      icon: ShoppingBag,
      title: 'Sacola Kraft 01',
      description: 'Sacola em papel kraft natural eco-friendly.',
      features: [
        'Material kraft natural',
        'Eco-friendly',
        'Resistente',
        'Sustentável'
      ],
      image: '/lovable-uploads/kraft-01-bag.png'
    },
    {
      icon: ShoppingBag,
      title: 'Sacola Kraft 01 com Alça',
      description: 'Sacola kraft com alças resistentes para maior praticidade.',
      features: [
        'Com alças de papel',
        'Material kraft',
        'Prática e resistente',
        'Design funcional'
      ],
      image: '/lovable-uploads/kraft-01-bag-handle.png'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="section-container">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft size={20} />
              <span className="font-medium">Voltar ao site</span>
            </Link>
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/533f2f65-91bb-4532-9271-1dd4d8665ecd.png" alt="Condor Embalagens" className="h-12 w-auto" />
              <div className="text-condor-navy">
                <div className="font-bold text-lg">Condor</div>
                <div className="text-sm opacity-90">Embalagens</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="section-container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Catálogo de <span className="text-yellow-300">Produtos</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Conheça nossa linha completa de embalagens personalizadas
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="section-container">
          {/* Papel Category */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Categoria <span className="text-secondary">Papel</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Embalagens de papel para pipoca e outros alimentos
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {papelProducts.map((product, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border"
                >
                  <div className="aspect-square bg-gray-50 flex items-center justify-center p-4">
                    <img 
                      src={product.image} 
                      alt={`Produto ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="p-4">
                    <a 
                      href="https://wa.me/5521998822692" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium flex items-center justify-center text-sm"
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
          </div>

          {/* Papel Cartão Category */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Categoria <span className="text-secondary">Papel Cartão</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Embalagens resistentes em papel cartão para diversos alimentos
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {papelCartaoProducts.map((product, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border"
                >
                  <div className="aspect-square bg-gray-50 flex items-center justify-center p-4">
                    <img 
                      src={product.image} 
                      alt={`Produto ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="p-4">
                    <a 
                      href="https://wa.me/5521998822692" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium flex items-center justify-center text-sm"
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="section-container">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Não encontrou o que procura?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Entre em contato conosco e desenvolvemos a solução ideal para o seu negócio
            </p>
            <a 
              href="https://wa.me/5521998822692" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              Falar com Especialista
              <img 
                src="/lovable-uploads/dae22125-e996-407c-8b6e-017686c6788c.png" 
                alt="WhatsApp"
                className="w-5 h-5 ml-2"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalogo;