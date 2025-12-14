import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom' // Import Navigate
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './page/Home'
import About from './page/About'
import Projects from './page/Projects'
import Contact from './page/Contact'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>      
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App