
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5521998822692?text=Olá! Vi o site da Condor e gostaria de mais informações sobre embalagens personalizadas."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Fale conosco no WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppFloat;
