import Lander from '../components/Lander';
import Video from '../components/Video';
import Features from '../components/Features';
import VideoUpload from '../components/VideoUpload';
import '../index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()


function Home() {
  return (
    <div className=' bg-gradient-to-b from-blue-300/15 to-white md:min-h-screen md:flex md:justify-center'>
      <div className='md:max-w-[1263px] md:w-full md:flex md:flex-col'>
        <Lander />
        {/* Design Suggestion: Add arrow suggesting scroll down or demo */}
        <div className='space-y-20 '>
          <Video />
          <Features />
        </div>
        <VideoUpload/>
      </div>
    </div>
  )
}

export default Home;
