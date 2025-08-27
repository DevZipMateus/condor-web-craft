import React from 'react';
import { Heart, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                {/* White opaque circle background */}
                <div className="absolute inset-0 rounded-full bg-white/20 scale-125"></div>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-110"></div>
                <img 
                  src="/lovable-uploads/533f2f65-91bb-4532-9271-1dd4d8665ecd.png" 
                  alt="Condor Embalagens"
                  className="relative z-10 h-16 w-auto"
                />
              </div>
              <div className="text-white">
                <div className="font-bold text-2xl">Condor</div>
                <div className="text-sm opacity-90">Embalagens e Descartáveis</div>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Há mais de 30 anos entregando embalagens que incorporam tradição, 
              qualidade e futuro. Seu parceiro confiável para grandes lojas e 
              franquias em todo o Brasil.
            </p>
            <div className="text-white/60 text-sm">
              <p><strong>CNPJ:</strong> 46.230.345/0001-32</p>
              <p><strong>Razão Social:</strong> Condor Comercio de Embalagens e Descartaveis LTDA</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-white/60" size={18} />
                <a 
                  href="tel:+5521998822692" 
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  (21) 99882-2692
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-white/60" size={18} />
                <a 
                  href="mailto:eliezio.mello@yahoo.com.br" 
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  eliezio.mello@yahoo.com.br
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-white/60 mt-0.5" size={18} />
                <div className="text-white/80 text-sm">
                  <p>Segunda a Sexta</p>
                  <p>9h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Condor Comercio de Embalagens e Descartaveis LTDA. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <span>Feito com</span>
              <Heart className="text-red-400" size={16} />
              <span>para seu sucesso</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
