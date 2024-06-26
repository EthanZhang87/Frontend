import React from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

function Video() {
  
  const StyledText = styled.h1`
  font-family: 'Outfit'
`
  return (
    <section>
  <div className="px-4 mx-auto text-white sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="absolute inset-0 flex items-center justify-center object-cover w-full px-10 mt-20 shadow-sm md:pr-28"
          data-aos='fade-up'
          data-aos-duration="500"
        />
      </div>

      <div className="flex flex-col justify-center px-10 text-center md:px-28 lg:py-24 " >
        <h2 className="text-3xl font-bold text-[#3d4561] sm:text-4xl bg-gradient-to-r from-[#3d4561] via-[#4f63a0] to-[#3d4561] inline-block text-transparent bg-clip-text " data-aos='fade-up' data-aos-duration="500">
          <StyledText>Our Mission</StyledText>
        </h2>

        <p className="mt-4 text-gray-500" data-aos='fade-up' data-aos-duration="500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>

        <a href="#" className="inline-block px-12 py-3 mt-8 text-sm font-semibold text-[#3d4561] transition border shadow-md  border-[#3d4561] rounded-xl focus:outline-none focus:ring focus:ring-yellow-400" data-aos='fade-up' data-aos-duration="500">
          Get Started Today
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Video