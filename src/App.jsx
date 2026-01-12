import { useState } from 'react'

import './App.css'
import Navbar from './component/Header'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'
// import { mobileContext } from './context/context'

function App() {

  ;

  return (
    <>
      {/* <mobileContext.Provider value={{isMobile, setIsMobile}}> */}
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Project />
          <Contact />
        </main>

        <Footer />
      {/* </mobileContext.Provider> */}
    </>
  )
}

export default App
