import { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
} from 'framer-motion';
import styled from 'styled-components';
import WaitlistButton from './WaitlistButton';

const StyledText = styled.h1`
  font-family: 'Outfit';
`;

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollY < viewportHeight * 0.35) {
      setVisible(true);
    } else {
      setVisible(scrollY < viewportHeight * 0.35 || scrollY - window.prevScrollY < 0);
    }

    window.prevScrollY = scrollY;
  };

  useEffect(() => {
    window.prevScrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className='px-8 py-10 md:px-36 fixed top-0 inset-x-0 mx-auto bg-transparent z-50'
      >
        <motion.div
          initial='hidden'
          animate='visible'
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 0.1,
                staggerChildren: 0.08,
              },
            },
          }}
          className='flex items-center justify-between py-4 border-[#3d4561] shadow-md border-spacing-1 rounded-2xl shadow-[#3d4561] bg-blue-100/1 px-7 bg-gradient-to-r from-blue-100 to-purple-100 backdrop:blur-md'
        >
          {/* Name */}
          <motion.div
            className='flex space-x-2 items-center z-[2]'
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src='../assets/statoracle_logo.jpg'
              className='rounded-2xl size-8 shadow-lg'
              alt='StatOracle Logo'
            />
            <div className='font-semibold text-[#3d4561] md:text-2xl'>
              <StyledText>StatOracle</StyledText>
            </div>
          </motion.div>

          {/* Waitlist Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <WaitlistButton />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
