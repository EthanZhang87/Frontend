import React from 'react'
import Lander from './components/Lander'
import Video from './components/Video'
import Features from './components/Features'
import Waitlist from './components/Waitlist'

function App() {
  return (
    <div className=' bg-gradient-to-b from-blue-300/15 to-white md:min-h-screen md:flex md:justify-center'>
      <div className='md:max-w-[1263px] md:w-full md:flex md:flex-col'>
        <Lander />
        <div className='space-y-20 '>
          <Video />
          <Features />
          <Waitlist />
        </div>
      </div>
    </div>
  )
}

export default App
