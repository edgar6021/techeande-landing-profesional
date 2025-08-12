import React from 'react';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/18293808296?text=Hola%20Techeande,%20estoy%20interesado%20en%20desarrollar%20una%20página%20web%20para%20mi%20negocio."
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp
    </a>
  );
}

export default WhatsAppButton;
