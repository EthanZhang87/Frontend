import { useEffect } from 'react';
import Navbar from './Navbar';
import ParticlesComponent from './Particles';
import styled from 'styled-components';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Styled component defined outside of the Lander function
const StyledText = styled.h1`
  font-family: 'Outfit';
`;

AOS.init();

function Lander() {
  // // have AOS only runs once (when the component mounts)
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <>
      <ParticlesComponent />
      <Navbar />
      {/* Main */}
      <section className='h-[675px] md:h-[350px]' data-aos="fade-up" data-aos-duration="3000">

        {/* Text */}
        <div className='px-10 md:px-60'>
          <div className='flex flex-col items-center justify-center '>
            {/* Hero Statement */}
            <div className=' text-5xl font-semibold text-center text-[#3d4561] mt-36 md:mt-14 md:text-6xl bg-gradient-to-r from-[#8ba0eb] via-[#4f63a0] to-[#5f80f5] inline-block text-transparent bg-clip-text animate-gradient-animation '>
              <StyledText>Affordable and Advanced Soccer Analytics</StyledText>
            </div>

            {/* Subtext */}
            <div className='flex mt-6 text-lg text-center text-[#7c99b7] text-balance'>
              Elevating Soccer Intelligence | Where Data Meets Performance
            </div>

            {/* Buttons */}
            <div className='flex flex-row mt-8 space-x-6'>
              <a href='#Features'>
                <button className="hover:brightness-110 hover:animate-pulse font-light py-2 px-5 rounded-full border-[#3d4561] bg-[#4f63a0] border-[0.5px] shadow-sm shadow-[#4f63a0] text-white">
                  Features 
                </button>
              </a>
              <button className="hover:brightness-110 hover:animate-pulse font-light py-2 px-5 rounded-full border-[#3d4561] bg-[#4f63a0] border-[0.5px] shadow-sm shadow-[#4f63a0] text-white">
                Sign up now!
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Lander;