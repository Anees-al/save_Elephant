import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Threats from '../components/Threats'
import Impacts from '../components/Impacts'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col'>
     
     <Hero/>
     <About/>
     <Threats/>
     <Impacts/>
     <Cta/>
     <Footer/>
    </div>
  )
}

export default Home
