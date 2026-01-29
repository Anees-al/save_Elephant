import React from 'react'
import image1 from '../assets/elephant-1.jpg'
import image2 from '../assets/elephant-2.jpg'
import image3 from '../assets/elephant-3.jpg'

const About = () => {
  return (
    <div className='flex flex-col  sm:flex-row  sm:gap-16 min-h-screen bg-[#F7F9F7] p-3'>
        <div className='flex relative w-[200px] sm:w-[400px]  h-[150px] sm:h-[300px] sm:mx-10 my-17'>
              <img src={image1} alt=""  className='absolute top-0 left-16 w-70 rounded-xl shadow-lg z-30'/>
              <img src={image2} alt="" className='absolute top-12 left-0 w-70 rounded-xl shadow-lg z-20' />
              <img src={image3} alt="" className='absolute top-12 left-42 w-70 rounded-xl shadow-lg z-10'/>
        </div>

        <div className='flex flex-col items-center justify-center gap-10 mt-[300px] ml-5 sm:ml-10  w-[400xp] sm:w-[800px] playfair'>
            <h1 className='text-7xl font-bold text-gray-600'>Protecting a Species That  <span className='text-emerald-300'>Shapes Our Forests</span> </h1>


            <p className='text-lg font-semibold leading-relaxed'>Asian elephants are among the most intelligent and emotionally complex animals on Earth.
They play a crucial role in maintaining healthy forest ecosystems by dispersing seeds and shaping the landscape.
Today, their survival is under serious threat due to habitat loss, human-elephant conflict, and illegal poaching.
Protecting Asian elephants means protecting biodiversity, forests, and future generations.
</p>
        </div>
    </div>
  )
}

export default About
