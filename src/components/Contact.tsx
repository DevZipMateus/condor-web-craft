
import React from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 contact-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 md:top-20 md:right-20 w-20 h-20 md:w-40 md:h-40 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-16 h-16 md:w-32 md:h-32 border border-white/20 rounded-full"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6">
            Entre em <span className="text-accent">Contato</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Pronto para transformar suas embalagens? Nossa equipe está à disposição 
            para criar soluções personalizadas para o seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Telefone</h4>
                    <a 
                      href="tel:+5521998822692" 
                      className="text-white/80 hover:text-white transition-colors text-sm md:text-base"
                    >
                      (21) 99882-2692
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1 text-sm md:text-base">E-mail</h4>
                    <a 
                      href="mailto:eliezio.mello@yahoo.com.br" 
                      className="text-white/80 hover:text-white transition-colors text-sm md:text-base break-all"
                    >
                      eliezio.mello@yahoo.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Horário de Funcionamento</h4>
                    <p className="text-white/80 text-sm md:text-base">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Atendimento</h4>
                    <p className="text-white/80 text-sm md:text-base">Nacional - Todo o Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex justify-center">
              <a 
                href="https://wa.me/5521998822692" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-4 md:p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 group w-full max-w-64"
              >
                <img 
                  src="/lovable-uploads/dae22125-e996-407c-8b6e-017686c6788c.png" 
                  alt="WhatsApp"
                  className="w-6 h-6 md:w-7 md:h-7 mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform"
                />
                <div className="font-semibold text-sm md:text-base">WhatsApp</div>
                <div className="text-xs md:text-sm opacity-90">Resposta rápida</div>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="animate-slide-up lg:animate-delay-200">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <div className="text-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <img 
                    src="/lovable-uploads/533f2f65-91bb-4532-9271-1dd4d8665ecd.png" 
                    alt="Condor"
                    className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-80"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  Solicite um Orçamento
                </h3>
                <p className="text-white/80 mb-4 md:mb-6 text-sm md:text-base px-2">
                  Conte-nos sobre seu projeto e receba uma proposta personalizada 
                  em até 24 horas.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div className="bg-white/10 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-white mb-2 text-sm md:text-base">📦 Informações necessárias:</h4>
                  <ul className="text-white/80 text-xs md:text-sm space-y-1">
                    <li>• Tipo de embalagem desejada</li>
                    <li>• Quantidade estimada</li>
                    <li>• Design ou logotipo</li>
                    <li>• Prazo de entrega</li>
                  </ul>
                </div>

                <a 
                  href="https://wa.me/5521998822692?text=Olá! Gostaria de solicitar um orçamento para embalagens personalizadas." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-hero w-full text-center group flex items-center justify-center text-sm md:text-base px-6 md:px-8 py-3 md:py-4"
                >
                  Solicitar Orçamento Agora
                  <img 
                    src="/lovable-uploads/dae22125-e996-407c-8b6e-017686c6788c.png" 
                    alt="WhatsApp"
                    className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:scale-110 transition-transform"
                  />
                </a>

                <p className="text-white/60 text-xs md:text-sm text-center">
                  Resposta garantida em até 24 horas úteis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
