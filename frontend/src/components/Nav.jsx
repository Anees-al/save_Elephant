import React from 'react'

const Nav = () => {
  return (
    <div className='flex flex-row justify-between px-6 py-3 bg-transparent font-mono hover:bg-gray-200/20'>
      <div>
           <p className='text-3xl font-semibold text-white'>Save Elephants</p>
      </div>

      <div className='hidden sm:flex flex-row gap-5 text-sm text-white font-semibold '>
         <p>About</p>
         <p>Threats</p>
         <p>Act</p>
      </div>
    </div>
  )
}

export default Nav
