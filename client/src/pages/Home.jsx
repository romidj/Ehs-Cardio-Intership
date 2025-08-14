import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Maps from '../components/Maps'
import Contact from '../components/contact'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact></Contact>
      <Maps></Maps>
    </>
  )
}

export default Home
