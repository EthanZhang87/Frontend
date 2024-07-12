import { Featureslist } from '../utils/FeaturesList'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Features() {
  return (
    <article className='space-y-10 h-[100vh] md:pt-0 pt-20' id='Features'>

      {/* Heading */}
      <span className="relative flex justify-center ">
        <div className="absolute inset-x-0 h-px -translate-y-1/2 bg-transparent opacity-75 top-1/2 bg-gradient-to-r from-transparent via-[#3d4561] to-transparent"></div>
        <span className="relative z-10 items-center px-6 text-4xl text-[#3d4561] font-semibold bg-white rounded-2xl " data-aos='fade-down' data-aos-duration="500">Features</span>
      </span>

      {/* Cards */}
      <section className='px-10 md:px-28'>

        <div className="grid grid-cols-1 gap-4 space-y-4 md:space-y-0 lg:grid-cols-3 lg:gap-8">

          {Featureslist.map((info, index) => (
        <div className="flex items-center justify-center w-full h-48 text-[#3d4561]  transition ease-in-out delay-75 border border-[#4f63a0] rounded-lg hover:-translate-y-1 hover:scale-105 " data-aos="flip-up" key={index}>
          {/* Info */}
          <div className='flex flex-col items-center space-y-2 '>

            {/* Topic */}
            <div className='text-2xl'>
              {info.Topic}
            </div>

            {/* Subtopic */}
            <div className='px-5 text-center text-gray-400 '>
              {info.Info}
            </div>
           </div>
         </div>
          ))}
      

        </div>
      </section>
    </article>
  )
}

export default Features;