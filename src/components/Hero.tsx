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
  return <section id="hero" className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/30 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-white/40 rounded-full"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Content */}
            <div className="animate-fade-in">
              <div className="mb-6">
                <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  Tradição desde 1990
                </span>
              </div>
              
              <h1 className="hero-title mb-6">
                Embalagens que <br />
                <span className="text-accent">Incorporam</span> <br />
                Tradição & Futuro
              </h1>
              
              <p className="hero-subtitle mb-8 max-w-lg">
                Há mais de 30 anos entregando embalagens de alta qualidade para grandes redes, 
                franquias e estabelecimentos em todo o Brasil.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button onClick={scrollToProducts} className="btn-hero group">
                  Ver Produtos
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <a href="https://wa.me/5521998822692" target="_blank" rel="noopener noreferrer" className="btn-outline bg-white/5 text-white border-white/60 hover:bg-white hover:text-primary">
                  Solicitar Orçamento
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-white">30+</div>
                  <div className="text-white/80 text-sm">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="text-accent" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-white/80 text-sm">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="text-accent" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-white/80 text-sm">Personalização</div>
                </div>
              </div>
            </div>

            {/* Logo/Image */}
            <div className="animate-float lg:justify-self-end">
              <div className="relative">
                {/* White opaque circle background */}
                <div className="absolute inset-0 rounded-full blur-sm scale-125 bg-white/[0.53]"></div>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-110"></div>
                <img src="/lovable-uploads/533f2f65-91bb-4532-9271-1dd4d8665ecd.png" alt="Condor - Símbolo de força e tradição em embalagens" className="relative z-10 w-80 h-auto mx-auto drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;