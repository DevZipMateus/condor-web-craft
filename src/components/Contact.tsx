
import React from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 contact-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Entre em <span className="text-accent">Contato</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Pronto para transformar suas embalagens? Nossa equipe está à disposição 
            para criar soluções personalizadas para o seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefone</h4>
                    <a 
                      href="tel:+5521998822692" 
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      (21) 99882-2692
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">E-mail</h4>
                    <a 
                      href="mailto:eliezio.mello@yahoo.com.br" 
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      eliezio.mello@yahoo.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Horário de Funcionamento</h4>
                    <p className="text-white/80">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Atendimento</h4>
                    <p className="text-white/80">Nacional - Todo o Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://wa.me/5521998822692" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 group"
              >
                <img 
                  src="/lovable-uploads/dae22125-e996-407c-8b6e-017686c6788c.png" 
                  alt="WhatsApp"
                  className="w-7 h-7 mx-auto mb-3 group-hover:scale-110 transition-transform"
                />
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm opacity-90">Resposta rápida</div>
              </a>
              
              <a 
                href="mailto:eliezio.mello@yahoo.com.br" 
                className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 group"
              >
                <Send className="mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
                <div className="font-semibold">E-mail</div>
                <div className="text-sm opacity-90">Orçamentos detalhados</div>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="animate-slide-up lg:animate-delay-200">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img 
                    src="/lovable-uploads/533f2f65-91bb-4532-9271-1dd4d8665ecd.png" 
                    alt="Condor"
                    className="w-12 h-12 object-contain opacity-80"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Solicite um Orçamento
                </h3>
                <p className="text-white/80 mb-6">
                  Conte-nos sobre seu projeto e receba uma proposta personalizada 
                  em até 24 horas.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-2">📦 Informações necessárias:</h4>
                  <ul className="text-white/80 text-sm space-y-1">
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
                  className="btn-hero w-full text-center group flex items-center justify-center"
                >
                  Solicitar Orçamento Agora
                  <img 
                    src="/lovable-uploads/dae22125-e996-407c-8b6e-017686c6788c.png" 
                    alt="WhatsApp"
                    className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform"
                  />
                </a>

                <p className="text-white/60 text-sm text-center">
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
