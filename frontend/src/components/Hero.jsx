import React from 'react'
import Nav from './Nav'
import bg from '../assets/elephant.jpg'

const Hero = () => {
  return (
    <div className='flex flex-col min-h-screen'   style={{backgroundImage:`url(${bg})`,backgroundSize:'cover',backgroundPosition:'center'}}>
      <Nav/> 

      <div className='flex flex-col items-center justify-center h-[450px] p-5'>
       <p className='playfair text-5xl sm:text-7xl font-bold text-white w-[350px]  sm:w-[860px]'> Protecting the gentle giants <span className='text-emerald-400'>before they disappear forever.</span> </p>

       

      </div>
      <button className='bg-white/10 ml-10 sm:ml-[300px] backdrop-blur text-lg font-semibold text-white px-4 py-2 border border-white w-[300px] sm:w-[400px]   rounded-full cursor-pointer hover:bg-white hover:text-emerald-800 font-inter'>Be their Voice</button>
    </div>
  )
}

export default Hero
