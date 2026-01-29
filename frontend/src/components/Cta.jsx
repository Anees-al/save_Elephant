import React from 'react'

const Cta = () => {
  return (
    <div className='flex flex-col bg-white h-[350px] text-center items-center py-10 px-5'>
       <h2 className="text-5xl font-bold mb-4 text-gray-700 playfair">
    You Can Make  <span className='text-emerald-500'>a Difference</span> 
  </h2>

    <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg font-semibold">
    Small actions today can help protect elephants and preserve the balance of nature.
  </p>

    <button className="px-8 py-3 bg-emerald-700 w-[300px]  sm:w-[600px] text-white rounded-full hover:bg-emerald-800 transition cursor-pointer">
    Learn How to Help
  </button>
    </div>
  )
}

export default Cta
