import React from 'react'
import NewsLetter from './components/NewsLetter'
import Analytics from './components/Analytics'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Footer from './components/Footer'


function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Analytics/>
        <NewsLetter/>
        <Cards/>
        <Footer/>



    </div>
  )
}

export default App