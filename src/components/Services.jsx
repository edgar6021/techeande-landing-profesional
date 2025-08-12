import React from 'react';
import img1 from '../assets/portfolio1.jpg';
import img2 from '../assets/portfolio2.jpg';
import img3 from '../assets/portfolio3.jpg';
import img4 from '../assets/portfolio4.jpg';
import img5 from '../assets/portfolio5.png';

const services = [
  { title: "Landing Page", image: img1, description: "Una sola página de alto impacto para promocionar productos o servicios.", precio: "$150 USD" },
  { title: "Sitio Corporativo", image: img2, description: "Ideal para empresas que necesitan presencia web profesional.", precio: "$300 USD" },
  { title: "Sistema POS", image: img3, description: "Sistema de ventas con control de productos, inventario y reportes.", precio: "$500 USD" },
  { title: "Sistema de Reservas", image: img4, description: "Perfecto para restaurantes, clínicas, hoteles y salones de belleza.", precio: "$400 USD" },
  { title: "Tienda Online", image: img5, description: "E-commerce completo con carrito de compras, pagos y administración.", precio: "$600 USD" },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover rounded mb-4" 
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-lg font-bold text-blue-600">{service.precio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
