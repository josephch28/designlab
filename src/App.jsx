import { useState, useEffect } from 'react'
import './styles/variables.css'
import './styles/global.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

import ModuloTipografia from './modules/ModuloTipografia'
import ModuloColor from './modules/ModuloColor'
import IconografiaModule from './modules/IconografiaModule'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <>
      <Header darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} />
      <main style={{ paddingTop: 'var(--header-height)' }}>
        <Hero />
        <ModuloTipografia />
        <ModuloColor />
        {/* Pandy — ModuloIconografia */}
        <IconografiaModule />
        {/* Pandy — ModuloEstados */}
        {/* Jota — ModuloConsistencia */}
        {/* Jota — ModuloInteraccion */}
      </main>
      <Footer />
    </>
  )
}
