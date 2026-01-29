import React from 'react'

const Threats = () => {
  return (
    <div className='py-20 px-6 bg-white min-h-screen'>
        <div className='flex flex-col playfair'>
              <h1 className='text-7xl font-semibold'>Threats Facing  <span className='text-emerald-400'>Asian Elephants</span> </h1>



              <div className='flex flex-col sm:flex-row justify-center gap-10 mt-20'>
                <div className="bg-offwhite p-6 rounded-2xl  h-[300px] w-[350px] shadow-lg">
        <h3 className="font-semibold text-3xl mb-2">Habitat Loss</h3>
        <p className="text-gray-700 text-lg">
          Rapid deforestation and urban expansion are destroying natural habitats, leaving elephants with limited space and food.
        </p>
      </div>



       <div className="bg-offwhite p-6 rounded-2xl  h-[300px] w-[350px] shadow-lg hover:shadow-xl">
        <h3 className="font-semibold text-3xl mb-2">Human–Elephant Conflict</h3>
        <p className="text-gray-700 text-lg">
           As elephants move closer to human settlements, conflicts increase, often resulting in injuries and loss of life.
        </p>
      </div>



       <div className="bg-offwhite p-6 rounded-2xl  h-[300px] w-[350px] shadow-lg">
        <h3 className="font-semibold text-3xl mb-2">Illegal Poaching</h3>
        <p className="text-gray-700 text-lg">
        Despite legal protection, elephants are still hunted for ivory, pushing the species closer to extinction.

        </p>
      </div>
              </div>
        </div>
      
    </div>
  )
}

export default Threats
