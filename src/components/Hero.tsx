
import React from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 md:top-20 md:left-20 w-16 h-16 md:w-32 md:h-32 border border-white/30 rounded-full"></div>
        <div className="absolute top-20 right-16 md:top-40 md:right-32 w-12 h-12 md:w-24 md:h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 md:w-16 md:h-16 border border-white/40 rounded-full"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="min-h-screen flex items-center py-20 md:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Content */}
            <div className="animate-fade-in text-center lg:text-left">
              <div className="mb-4 md:mb-6">
                <span className="inline-block bg-white/10 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-white/20">
                  Tradição desde 1990
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6">
                Embalagens que <br />
                <span className="text-accent">Incorporam</span> <br />
                Tradição & Futuro
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-medium mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
                Há mais de 30 anos entregando embalagens de alta qualidade para grandes redes, 
                franquias e estabelecimentos em todo o Brasil.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 justify-center lg:justify-start">
                <button onClick={scrollToProducts} className="btn-hero group text-sm md:text-base px-6 md:px-8 py-3 md:py-4">
                  Ver Produtos
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
                <a 
                  href="https://wa.me/5521998822692" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline bg-white/5 text-white border-white/60 hover:bg-white hover:text-primary flex items-center justify-center text-sm md:text-base px-6 md:px-8 py-3 md:py-4"
                >
                  Solicitar Orçamento
                  <img 
                    src="/lovable-uploads/dae22125-e996-407c-8b6e-017686c6788c.png" 
                    alt="WhatsApp"
                    className="w-3 h-3 md:w-4 md:h-4 ml-2"
                  />
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="flex justify-center mb-1 md:mb-2">
                    <Clock className="text-accent" size={20} />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white">30+</div>
                  <div className="text-white/80 text-xs md:text-sm">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-1 md:mb-2">
                    <Users className="text-accent" size={20} />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white">1000+</div>
                  <div className="text-white/80 text-xs md:text-sm">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-1 md:mb-2">
                    <Award className="text-accent" size={20} />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white">100%</div>
                  <div className="text-white/80 text-xs md:text-sm">Personalização</div>
                </div>
              </div>
            </div>

            {/* Logo/Image */}
            <div className="animate-float lg:justify-self-end order-first lg:order-last">
              <div className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
                <img 
                  src="/lovable-uploads/0a63552f-8205-4979-bcdd-fba7ced78044.png" 
                  alt="Condor - Símbolo de força e tradição em embalagens" 
                  className="w-full h-auto mx-auto drop-shadow-2xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
