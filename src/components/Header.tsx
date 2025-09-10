import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'}`}>
      <div className="section-container">
        <nav className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer relative" onClick={() => scrollToSection('hero')}>
            <div className="relative overflow-visible">
              <img src="/lovable-uploads/533f2f65-91bb-4532-9271-1dd4d8665ecd.png" alt="Condor Embalagens - Logo" className="h-24 w-auto transform scale-125 md:scale-150 lg:scale-175 xl:scale-200 origin-left" />
            </div>
            <div className="text-condor-navy">
              <div className="font-bold text-base md:text-lg lg:text-xl mx-[25px]">Condor</div>
              <div className="text-xs md:text-sm opacity-90 mx-[23px]">Embalagens</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-condor-navy hover:text-accent transition-colors text-sm xl:text-base">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="text-condor-navy hover:text-accent transition-colors text-sm xl:text-base">
              Sobre
            </button>
            <button onClick={() => scrollToSection('products')} className="text-condor-navy hover:text-accent transition-colors text-sm xl:text-base">
              Produtos
            </button>
            <Link to="/catalogo" className="text-condor-navy hover:text-accent transition-colors text-sm xl:text-base">
              Catálogo
            </Link>
            <button onClick={() => scrollToSection('contact')} className="text-condor-navy hover:text-accent transition-colors text-sm xl:text-base">
              Contato
            </button>
            <a href="https://wa.me/5521998822692" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-4 xl:px-6 py-2 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-medium text-sm xl:text-base shadow-lg">
              Fale Conosco
            </a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-condor-navy p-2" aria-label="Menu">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <div className="py-4 space-y-2">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-condor-navy hover:text-accent transition-colors px-4 py-3 text-base">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-condor-navy hover:text-accent transition-colors px-4 py-3 text-base">
                Sobre
              </button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-left text-condor-navy hover:text-accent transition-colors px-4 py-3 text-base">
                Produtos
              </button>
              <Link to="/catalogo" className="block w-full text-left text-condor-navy hover:text-accent transition-colors px-4 py-3 text-base">
                Catálogo
              </Link>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-condor-navy hover:text-accent transition-colors px-4 py-3 text-base">
                Contato
              </button>
              <div className="px-4 pt-2">
                <a href="https://wa.me/5521998822692" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-medium inline-block w-full text-center shadow-lg">
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;