import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButto'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton/>
    </div>
  )
}

export default App