import video from '../assets/video.mp4';
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import t1 from '../assets/t1.jpg'
import t2 from '../assets/t2.jpg'
import about from '../assets/about.jpg'
import Working from './Working';



const Hero = () => {
  return (
    <>
      <section>
        <div className='p-20 flex items-center justify-center relative'>
          <video src={video} className='object-cover h-[80vh]' autoPlay loop muted playsInline>
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-70  py-32 mt-20">
            <h1 className='text-[5rem] font-extrabold text-center'>FitnessFit It's More <br /> Than Just A Gym</h1> <br />
            <div className="flex items-center justify-center gap-2">
              <button className='border text-black opacity-100 bg-[#A1F75E] px-14 text-lg py-4'>Start Today</button>
              <button className='border  px-14 text-lg py-4'>About Us</button>
            </div>
          </div>

        </div>
      </section>

      <section>
        <main className='px-20 py-10'>
          <div className="flex items-center justify-between">
            <div>
              <h1 className='text-3xl  tracking-widest  uppercase text-[#A1F75E]'>
                our fitness training
              </h1>
              <h1 className='text-5xl uppercase py-5'>
                Upcoming Classes
              </h1>
            </div>
            <div>
              <button className=' text-black opacity-100 bg-[#A1F75E] px-14 text-lg py-4'>More Classes</button>

            </div>
          </div>


          <div className="grid grid-cols-3 px-20  gap-5 py-7">
            <div className='border border-[#A1F75E] flex-col items-center px-4 py-2 rounded-lg'>
              <img src={img1} alt="" />
              <div>
                <h1 className='text-4xl font-semibold py-3 '>
                  Pilates Training
                </h1>
                <p className='text-xl text-gray-400 mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nihil sed, excepturi ut explicabo  </p>
                <a href="" className='py-5 text-xl uppercase text-[#A1F75E] translate-x-4'>Read More</a>
              </div>

            </div>
            <div className='border border-[#A1F75E] flex-col items-center px-4 py-2 rounded-lg '>
              <img src={img2} alt="" />
              <div>
                <h1 className='text-4xl font-semibold py-3'>
                  Aerobic Training
                </h1>
                <p className='text-xl text-gray-400 mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nihil sed, excepturi ut explicabo  </p>
                <a href="" className='py-5 text-xl uppercase text-[#A1F75E]'>Read More</a>
              </div>

            </div>
            <div className='border border-[#A1F75E] flex-col items-center px-4 py-2 rounded-lg'>
              <img src={img3} alt="" />
              <div>
                <h1 className='text-4xl font-semibold py-3'>
                  CrossFit Workout
                </h1>
                <p className='text-xl text-gray-400 mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nihil sed, excepturi ut explicabo  </p>
                <a href="" className='py-5 text-xl uppercase text-[#A1F75E]'>Read More</a>
              </div>

            </div>
          </div>

        </main>
      </section>

      <section>
        <main className='flex py-20 px-20'>
          <div className='w-6/12 px-10'>
            <h1 className='text-3xl  tracking-widest  uppercase text-[#A1F75E]'>
              About us
            </h1>
            <h1 className='text-5xl uppercase py-10'>
              Respect Your Body,It’s <br /> The Only One You Get
            </h1>
            <p className='text-xl text-gray-400 mb-3'>Our coaches support you in a way no one else can with the best  fitness and holistic help inside the gym – and out.  </p>

            <div className=''>
              <span className='flex items-center gap-10  justify-between px-20 py-2 bg-gray-500 mb-3'>
                <span >
                  <h1 className='text-3xl py-2 font-bold text-[#A1F75E]'>Motivation</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla doloremque magni nostrum laborum inventore dolores corrupti, labore ipsam iste voluptate ut repellat similique, minus veniam cum non voluptates enim. Optio!</p>
                </span>
                <img src={t1} alt="" />
              </span>
              <span className='flex items-center gap-10  justify-between px-20 py-2 bg-gray-500'>
              <img src={t2} alt="" />
                <span >
                  <h1 className='text-3xl py-2 font-bold text-[#A1F75E]'>Motivation</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla doloremque magni nostrum laborum inventore dolores corrupti, labore ipsam iste voluptate ut repellat similique, minus veniam cum non voluptates enim. Optio!</p>
                </span>
                
              </span>
            </div>
          </div>
          <div className='w-6/12 px-10'>
            <img src={about} width={500} alt="" />
          </div>
        </main>
      </section>

      <section className=''>
          <main className='py-20'>
              <div>
              <h1 className='text-3xl text-center tracking-widest  uppercase text-[#A1F75E]'>
              About us
            </h1>
            <h1 className='text-5xl uppercase py-10 text-center'>
            Working Schedule

            </h1>
              </div>

              <Working />
          </main>
      </section>
      <section className=''>
          
      </section>

      
    </>
  );
}

export default Hero;
