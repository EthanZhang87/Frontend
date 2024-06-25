import React from 'react'
import Navbar from './Navbar'

function Lander() {
  return (
    <>
      <Navbar />
      {/* Main */}
      <section className='h-screen bg-black '>

        {/* Text */}
        <div className='px-10 md:px-60'>
          <div className='flex flex-col items-center justify-center '>
            
            {/* Hero Statement */}
            <div className='flex text-5xl font-bold text-center text-green-500 mt-36 md:mt-16 md:text-6xl '>
              Affordable and Advanced Soccer Analytics
            </div>

            {/* Subtext */}
            <div className='flex mt-6 text-lg text-center text-green-200 text-balance'>
              Our mission is to provide all players with professional up-to-date statistics
            </div>

            {/* Buttons */}
            <div className='flex flex-row mt-8 space-x-6'>
              <button class="hover:brightness-110 hover:animate-pulse font-thin py-2 px-5 rounded-full border-green-500 border-[0.5px] shadow-sm shadow-green-500/50 text-white">
                Early Access
              </button>
              <button class="hover:brightness-110 hover:animate-pulse font-thin py-2 px-5 rounded-full border-green-500 border-[0.5px] shadow-sm shadow-green-500/50 text-white">
                Sign up now!
              </button>
            </div>

          </div>
        </div>
        
      </section>
    </>
  )
}

export default Lander