import React from 'react'
import Navbar from './components/Navbar'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <section >
        <Navbar/>
      </section>
      <section id='home'>
        <Hero/>
      </section>
      <section id='About_US'>
        <About/>
      </section>
      <section id='Services'>
        <Services/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default App