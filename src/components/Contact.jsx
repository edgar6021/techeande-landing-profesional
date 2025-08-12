import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Contáctanos</h2>
        <p className="text-gray-600">Estamos listos para ayudarte</p>
      </div>
      <div className="flex justify-center">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdS0gV4S_fFGI0_twQapNxqUNya_JQvlBdPfnhASAiNXRWtUg/viewform?usp=header" width="640" height="800" frameBorder="0" marginHeight="0" marginWidth="0">Cargando…</iframe>
      </div>
    </section>
  );
}

export default Contact;
