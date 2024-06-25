import React from 'react'
import Lander from './components/Lander'
import Video from './components/Video'
import Features from './components/Features'

function App() {
  return (
    <div className='bg-black md:min-h-screen md:flex md:justify-center'>
      <div className='md:max-w-[1263px] md:w-full md:flex md:flex-col'>
        <Lander />
        <div className='space-y-20 '>
          <Video />
          <Features />
        </div>
      </div>
    </div>
  )
}

export default App
