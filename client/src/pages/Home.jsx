import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Maps from '../components/Maps'
import Contact from '../components/Contact'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact></Contact>
      <Maps></Maps>
      <Footer />
    </>
  )
}

export default Home
