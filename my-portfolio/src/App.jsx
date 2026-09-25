import React from 'react'
import Background from './component/Background'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './page/Home'
import About from './page/About'
import Experience from './page/Experience'
import Projects from './page/Projects'
import Contact from './page/Contact'

const App = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Background />
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
