import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Techeande. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer