import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Featureslist } from '../utils/FeaturesList';

gsap.registerPlugin(ScrollTrigger);

function Features() {
  const articleRef = useRef();
  const headingRef = useRef();
  const cardRefs = useRef([]);

  useEffect(() => {
    const heading = headingRef.current;
    const cards = cardRefs.current;

    gsap.set(heading, { opacity: 0, y: -50 }); // Set initial state to hidden and above the viewport
    gsap.set(cards, { opacity: 0, rotationX: -1880 }); // Set initial state to hidden and rotated

    gsap.to(heading, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: heading,
        start: 'top 80%',
        toggleActions: 'play reverse restart reset',
      },
    });

    gsap.to(cards, {
      opacity: 1,
      rotationX: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: articleRef.current,
        start: 'top 80%',
        toggleActions: 'play reverse restart reset',
      },
    });
  }, []);

  return (
    <article className='space-y-10 h-[100vh] md:pt-0 pt-20 flex flex-col items-center justify-center' id='Features' ref={articleRef}>

      {/* Heading */}
      <span className="relative flex justify-center ">
        <div className="absolute inset-x-0 h-px -translate-y-1/2 bg-transparent opacity-75 top-1/2 bg-gradient-to-r from-transparent via-[#3d4561] to-transparent"></div>
        <span className="relative z-10 items-center px-6 text-4xl text-[#3d4561] font-semibold bg-white rounded-2xl" ref={headingRef}>
          Features
        </span>
      </span>

      {/* Cards */}
      <section className='px-10 md:px-28 w-full'>
        <div className="grid grid-cols-1 gap-4 space-y-4 md:space-y-0 lg:grid-cols-3 lg:gap-8">
          {Featureslist.map((info, index) => (
            <div
              className="flex items-center justify-center w-full h-48 text-[#3d4561] transition ease-in-out delay-75 border border-[#4f63a0] rounded-lg hover:-translate-y-1 hover:scale-105"
              ref={el => (cardRefs.current[index] = el)}
              key={index}
            >
              {/* Info */}
              <div className='flex flex-col items-center space-y-2'>
                {/* Topic */}
                <div className='text-2xl'>
                  {info.Topic}
                </div>
                {/* Subtopic */}
                <div className='px-5 text-center text-gray-400'>
                  {info.Info}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

export default Features;
