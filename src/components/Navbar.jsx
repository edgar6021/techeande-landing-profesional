import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-red-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Techeande</h1>
        <ul className="flex gap-4">
          <li><a href="#services" className="hover:underline">Servicios</a></li>
          <li><a href="#contact" className="hover:underline">Contacto</a></li>
          <li><a href="#contact" className="hover:underline">Home</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar