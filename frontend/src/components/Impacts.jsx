import React from 'react'

const Impacts = () => {
  return (
    <div className='flex flex-col h-auto sm:h-[400px] bg-[#F7F9F7]'>
        <div className='py-10 px-10'>
            <h1 className='text-6xl playfair font-semibold'>Our impacts</h1>
        </div>


        <div className='flex  flex-col sm:flex-row gap-10 py-10 px:5 sm:px-10 items-center justify-center playfair'>
            <div>


                <p className="text-7xl font-bold text-emerald-700">50,000+</p>
        <p className="text-gray-600 mt-2 font-semibold">
          Asian elephants remain in the wild
        </p>
            </div>
            <div>
                <p className="text-7xl font-bold text-emerald-700">60%</p>
        <p className="text-gray-600 mt-2 font-semibold">
          Live outside protected areas
        </p>
            </div>
            <div>
                <p className="text-7xl font-bold text-emerald-700">90%</p>
        <p className="text-gray-600 mt-2 font-semibold">
          Habitat loss caused by human activity
        </p>
            </div>
            <div>
                <p className="text-7xl font-bold text-emerald-700">100+</p>
<p className="text-gray-600 mt-2 font-semibold">
  Years of elephant knowledge lost with each death
</p>

            </div>
        </div>
    </div>
  )
}

export default Impacts
