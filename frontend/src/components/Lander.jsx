import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import ParticlesComponent from './Particles';
import styled from 'styled-components';
import WaitlistButton from './WaitlistButton';

const StyledText = styled.h1`
  font-family: 'Outfit';
`;

gsap.registerPlugin(ScrollTrigger);

function Lander() {
  const sectionRef = useRef();
  const elementsRef = useRef([]);

  useEffect(() => {
    const elements = elementsRef.current;

    gsap.set(elements, { opacity: 0, y: 50 }); // Set initial state to hidden

    gsap.to(elements, {
      opacity: 1,
      y: 0,
      delay: 0.15,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%', // start the animation when the top of the section hits 80% of the viewport height
        toggleActions: 'play reverse play none',
      },
    });
  }, []);

  return (
    <>
      <ParticlesComponent />
      <Navbar />
      <section
        ref={sectionRef}
        className='h-screen flex items-center justify-center'
      >
        <div className='px-10 md:px-60'>
          <div className='font-Outfit flex flex-col items-center justify-center'>
            <div
              className='text-5xl font-semibold text-center text-[#3d4561] mt-36 md:mt-14 md:text-6xl bg-gradient-to-r from-[#8ba0eb] via-[#4f63a0] to-[#5f80f5] inline-block text-transparent bg-clip-text animate-gradient-animation'
              ref={el => elementsRef.current[0] = el}
            >
              <StyledText>Affordable and Advanced Sports Analytics</StyledText>
            </div>
            <div
              className='flex mt-6 text-lg text-center text-[#7c99b7] text-balance'
              ref={el => elementsRef.current[1] = el}
            >
              Elevating Soccer Intelligence | Where Data Meets Performance
            </div>
            <div
              className='flex flex-row mt-8 space-x-6'
              ref={el => elementsRef.current[2] = el}
            >
              <a href='#Features'>
                <button className="hover:brightness-110 hover:animate-pulse font-light py-2 px-5 rounded-full border-[#3d4561] bg-[#5b72b8] border-[0.5px] shadow-sm shadow-[#5b72b8] text-white">
                  Features
                </button>
              </a>
              <WaitlistButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lander;
