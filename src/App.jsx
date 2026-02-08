import './App.css'
import Navbar from './component/Header'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {


  return (
    <>
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
