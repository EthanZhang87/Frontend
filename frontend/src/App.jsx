import React from 'react'
import Lander from './components/Lander'
import Video from './components/Video'
import Features from './components/Features'

function App() {
  return (
    <div className=' bg-gradient-to-b from-blue-300/15 to-white md:min-h-screen md:flex md:justify-center'>
      <div className='md:max-w-[1263px] md:w-full md:flex md:flex-col'>
        <Lander />
        {/* Design Suggestion: Add arrow suggesting scroll down or demo */}
        <div className='space-y-20 '>
          <Video />
          <Features />
        </div>
      </div>
    </div>
  )
}

export default App
