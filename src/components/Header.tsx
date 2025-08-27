
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="section-container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img 
              src="/lovable-uploads/533f2f65-91bb-4532-9271-1dd4d8665ecd.png" 
              alt="Condor Embalagens - Logo"
              className="h-10 w-auto"
            />
            <div className="text-white">
              <div className="font-bold text-xl">Condor</div>
              <div className="text-sm opacity-90">Embalagens</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="nav-link">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              Sobre
            </button>
            <button onClick={() => scrollToSection('products')} className="nav-link">
              Produtos
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contato
            </button>
            <a 
              href="https://wa.me/5521998822692" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-sm border-t border-white/10">
            <div className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="block w-full text-left nav-link px-4 py-2"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left nav-link px-4 py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('products')} 
                className="block w-full text-left nav-link px-4 py-2"
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left nav-link px-4 py-2"
              >
                Contato
              </button>
              <div className="px-4 pt-2">
                <a 
                  href="https://wa.me/5521998822692" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-hero inline-block"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
