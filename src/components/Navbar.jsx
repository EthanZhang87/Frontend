import React from 'react';


const Navbar = () => {

  return (

      <div className='px-8 py-8 bg-black md:px-36'>
        <div className='flex items-center justify-between py-4 border-green-500 shadow-sm border-spacing-1 rounded-2xl shadow-green-300 px-7 '>
          
          {/* Name */}
          <div className='flex space-x-2 items-center z-[2]'>
            <div className='text-white font-thibn md:text-2xl '>
              StatOracle
            </div>
          </div>
          
          {/* Button */}
          <button class="hover:brightness-110 hover:animate-pulse font-thin py-2 px-5 rounded-full border-green-500 border-[0.5px] shadow-sm shadow-green-500/50 text-white">
            Join the waitlist!
          </button>
        </div>
      </div>
  )
};

export default Navbar;