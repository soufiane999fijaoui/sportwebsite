import video from '../assets/video.mp4';
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import t1 from '../assets/t1.jpg'
import t2 from '../assets/t2.jpg'
import about from '../assets/about.jpg'
import Working from './Working';
import Contact from './Contact';
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
          <main className='py-20'>
              <div>
              <h1 className='text-3xl text-center tracking-widest  uppercase text-[#A1F75E]'>
              Contact us
            </h1>
            <h1 className='text-xl uppercase py-10 text-center'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam suscipit consectetur accusamus recusandae, aut hic, ex illum modi asperiores magni minus iure eius odio dolorem quos neque nostrum harum libero.

            </h1>
              </div>

              <Contact />
          </main>
      </section>

      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">                    <div className="">
                        <svg width="206" height="47" viewBox="0 0 206 47" fill="#FFFF" xmlns="http://www.w3.org/2000/svg">
                            <path d="M70.4446 19.223C70.3736 18.4418 70.0575 17.8345 69.4964 17.4013C68.9425 16.9609 68.1506 16.7408 67.1207 16.7408C66.4389 16.7408 65.8707 16.8295 65.4162 17.0071C64.9616 17.1847 64.6207 17.4297 64.3935 17.7422C64.1662 18.0476 64.049 18.3991 64.0419 18.7969C64.0277 19.1236 64.0916 19.4112 64.2337 19.6598C64.3828 19.9084 64.5959 20.1286 64.8729 20.3203C65.157 20.505 65.4979 20.6683 65.8956 20.8104C66.2933 20.9524 66.7408 21.0767 67.2379 21.1832L69.1129 21.6094C70.1925 21.8438 71.1442 22.1562 71.968 22.5469C72.799 22.9375 73.495 23.4027 74.0561 23.9425C74.6243 24.4822 75.054 25.1037 75.3452 25.8068C75.6364 26.5099 75.7855 27.2983 75.7926 28.1719C75.7855 29.5497 75.4375 30.7322 74.7486 31.7195C74.0597 32.7067 73.0689 33.4631 71.7763 33.9886C70.4908 34.5142 68.9389 34.777 67.1207 34.777C65.2955 34.777 63.7045 34.5036 62.348 33.9567C60.9915 33.4098 59.9368 32.5788 59.1839 31.4638C58.4311 30.3487 58.044 28.9389 58.0227 27.2344H63.0724C63.1151 27.9375 63.3033 28.5234 63.6371 28.9922C63.9709 29.4609 64.429 29.8161 65.0114 30.0575C65.6009 30.299 66.2827 30.4197 67.0568 30.4197C67.767 30.4197 68.3707 30.3239 68.8679 30.1321C69.3722 29.9403 69.7592 29.674 70.0291 29.3331C70.299 28.9922 70.4375 28.6016 70.4446 28.1612C70.4375 27.7493 70.3097 27.3977 70.0611 27.1065C69.8125 26.8082 69.429 26.5526 68.9105 26.3395C68.3991 26.1193 67.7457 25.9169 66.9503 25.7322L64.6705 25.1996C62.7812 24.7663 61.2933 24.0668 60.2067 23.1009C59.12 22.1278 58.5803 20.8139 58.5874 19.1591C58.5803 17.8097 58.9425 16.6271 59.674 15.6115C60.4055 14.5959 61.4176 13.804 62.7102 13.2358C64.0028 12.6676 65.4766 12.3835 67.1314 12.3835C68.8217 12.3835 70.2884 12.6712 71.5312 13.2464C72.7812 13.8146 73.7507 14.6136 74.4396 15.6435C75.1286 16.6733 75.4801 17.8665 75.4943 19.223H70.4446ZM87.6925 18.1364V21.9716H77.3693V18.1364H87.6925ZM79.532 14.2159H84.7415V29.3544C84.7415 29.674 84.7912 29.9332 84.8906 30.1321C84.9972 30.3239 85.1499 30.4624 85.3487 30.5476C85.5476 30.6257 85.7855 30.6648 86.0625 30.6648C86.2614 30.6648 86.4709 30.647 86.6911 30.6115C86.9183 30.5689 87.0888 30.5334 87.2024 30.505L87.9908 34.2656C87.7422 34.3366 87.3906 34.4254 86.9361 34.532C86.4886 34.6385 85.9524 34.706 85.3274 34.7344C84.1058 34.7912 83.0582 34.6491 82.1847 34.3082C81.3182 33.9602 80.6541 33.4205 80.1925 32.6889C79.7379 31.9574 79.5178 31.0376 79.532 29.9297V14.2159ZM90.3505 34.5V18.1364H95.4109V21.1193H95.5813C95.8796 20.0398 96.3661 19.2372 97.0408 18.7116C97.7156 18.179 98.5004 17.9126 99.3952 17.9126C99.6367 17.9126 99.8853 17.9304 100.141 17.9659C100.397 17.9943 100.635 18.0405 100.855 18.1044V22.6321C100.606 22.5469 100.279 22.4794 99.8746 22.4297C99.4769 22.38 99.1218 22.3551 98.8093 22.3551C98.1914 22.3551 97.6339 22.4936 97.1367 22.7706C96.6467 23.0405 96.2596 23.4205 95.9755 23.9105C95.6985 24.3935 95.56 24.9616 95.56 25.6151V34.5H90.3505ZM109.777 34.8089C108.065 34.8089 106.588 34.4716 105.345 33.7969C104.109 33.1151 103.158 32.1456 102.49 30.8885C101.83 29.6243 101.499 28.1222 101.499 26.3821C101.499 24.6918 101.833 23.2145 102.501 21.9503C103.168 20.679 104.109 19.6918 105.324 18.9886C106.538 18.2784 107.969 17.9233 109.617 17.9233C110.782 17.9233 111.847 18.1044 112.813 18.4666C113.779 18.8288 114.614 19.3651 115.317 20.0753C116.02 20.7855 116.567 21.6626 116.957 22.7067C117.348 23.7436 117.543 24.9332 117.543 26.2756V27.5753H103.321V24.5497H112.696C112.689 23.9957 112.558 23.5021 112.302 23.0689C112.046 22.6357 111.695 22.2983 111.247 22.0568C110.807 21.8082 110.299 21.6839 109.724 21.6839C109.141 21.6839 108.619 21.8153 108.158 22.0781C107.696 22.3338 107.33 22.6854 107.06 23.1328C106.79 23.5732 106.648 24.0739 106.634 24.6349V27.7138C106.634 28.3814 106.766 28.9673 107.028 29.4716C107.291 29.9687 107.664 30.3558 108.147 30.6328C108.63 30.9098 109.205 31.0483 109.873 31.0483C110.335 31.0483 110.754 30.9844 111.13 30.8565C111.506 30.7287 111.83 30.5405 112.099 30.2919C112.369 30.0433 112.572 29.7379 112.707 29.3757L117.49 29.5142C117.291 30.5866 116.854 31.5206 116.18 32.3161C115.512 33.1044 114.635 33.7187 113.548 34.1591C112.462 34.5923 111.205 34.8089 109.777 34.8089ZM125.414 25.1676V34.5H120.204V18.1364H125.158V21.1406H125.339C125.701 20.1392 126.319 19.3544 127.193 18.7862C128.066 18.2109 129.107 17.9233 130.314 17.9233C131.465 17.9233 132.463 18.1825 133.308 18.701C134.16 19.2124 134.82 19.9297 135.289 20.853C135.765 21.7692 135.999 22.8416 135.992 24.0703V34.5H130.783V25.093C130.79 24.1839 130.559 23.4737 130.09 22.9624C129.629 22.451 128.986 22.1953 128.162 22.1953C127.615 22.1953 127.132 22.3161 126.713 22.5575C126.301 22.7919 125.982 23.1293 125.754 23.5696C125.534 24.0099 125.421 24.5426 125.414 25.1676ZM146.846 40.9773C145.29 40.9773 143.958 40.7607 142.85 40.3274C141.743 39.8942 140.873 39.3011 140.24 38.5483C139.608 37.7955 139.228 36.9432 139.1 35.9915L144.033 35.7145C144.125 36.0483 144.296 36.3395 144.544 36.5881C144.8 36.8366 145.13 37.0284 145.535 37.1634C145.947 37.2983 146.43 37.3658 146.984 37.3658C147.858 37.3658 148.578 37.1527 149.147 36.7266C149.722 36.3075 150.01 35.5724 150.01 34.5213V31.6449H149.828C149.623 32.1491 149.31 32.6001 148.891 32.9979C148.472 33.3956 147.95 33.7081 147.325 33.9354C146.707 34.1626 145.997 34.2763 145.194 34.2763C144.001 34.2763 142.907 33.9993 141.913 33.4453C140.926 32.8842 140.134 32.0178 139.537 30.8459C138.948 29.6669 138.653 28.1506 138.653 26.2969C138.653 24.3864 138.958 22.8132 139.569 21.5774C140.18 20.3345 140.979 19.4148 141.966 18.8182C142.961 18.2216 144.029 17.9233 145.173 17.9233C146.032 17.9233 146.767 18.0724 147.378 18.3707C147.996 18.6619 148.504 19.0384 148.902 19.5C149.299 19.9616 149.601 20.4411 149.807 20.9382H149.956V18.1364H155.145V34.5639C155.145 35.9489 154.797 37.1172 154.1 38.0689C153.404 39.0206 152.431 39.7415 151.181 40.2315C149.931 40.7287 148.486 40.9773 146.846 40.9773ZM147.005 30.4837C147.637 30.4837 148.177 30.3168 148.625 29.983C149.072 29.6491 149.417 29.1697 149.658 28.5447C149.9 27.9197 150.02 27.1705 150.02 26.2969C150.02 25.4091 149.9 24.6456 149.658 24.0064C149.424 23.3601 149.079 22.8629 148.625 22.5149C148.177 22.1669 147.637 21.9929 147.005 21.9929C146.359 21.9929 145.812 22.1705 145.365 22.5256C144.917 22.8807 144.576 23.3814 144.342 24.0277C144.115 24.6669 144.001 25.4233 144.001 26.2969C144.001 27.1705 144.118 27.9197 144.353 28.5447C144.587 29.1697 144.924 29.6491 145.365 29.983C145.812 30.3168 146.359 30.4837 147.005 30.4837ZM167.702 18.1364V21.9716H157.379V18.1364H167.702ZM159.542 14.2159H164.751V29.3544C164.751 29.674 164.801 29.9332 164.9 30.1321C165.007 30.3239 165.16 30.4624 165.358 30.5476C165.557 30.6257 165.795 30.6648 166.072 30.6648C166.271 30.6648 166.481 30.647 166.701 30.6115C166.928 30.5689 167.099 30.5334 167.212 30.505L168.001 34.2656C167.752 34.3366 167.4 34.4254 166.946 34.532C166.498 34.6385 165.962 34.706 165.337 34.7344C164.116 34.7912 163.068 34.6491 162.194 34.3082C161.328 33.9602 160.664 33.4205 160.202 32.6889C159.748 31.9574 159.528 31.0376 159.542 29.9297V14.2159ZM175.921 25.1676V34.5H170.712V12.6818H175.751V21.1406H175.932C176.301 20.1321 176.905 19.3437 177.743 18.7756C178.588 18.2074 179.622 17.9233 180.843 17.9233C181.994 17.9233 182.995 18.179 183.847 18.6903C184.7 19.1946 185.36 19.9084 185.829 20.8317C186.305 21.755 186.539 22.8345 186.532 24.0703V34.5H181.323V25.093C181.33 24.1839 181.102 23.4737 180.641 22.9624C180.179 22.451 179.529 22.1953 178.691 22.1953C178.144 22.1953 177.661 22.3161 177.242 22.5575C176.83 22.7919 176.507 23.1293 176.273 23.5696C176.046 24.0099 175.928 24.5426 175.921 25.1676ZM192.384 40.6364C191.759 40.6364 191.169 40.5866 190.615 40.4872C190.061 40.3949 189.585 40.2706 189.188 40.1143L190.338 36.3324C190.849 36.5028 191.311 36.6023 191.723 36.6307C192.142 36.6591 192.501 36.5916 192.799 36.4283C193.104 36.272 193.339 35.9915 193.502 35.5866L193.705 35.0966L187.888 18.1364H193.342L196.357 29.8125H196.528L199.585 18.1364H205.072L198.903 36.0661C198.605 36.9609 198.183 37.7493 197.636 38.4311C197.096 39.12 196.396 39.6598 195.537 40.0504C194.685 40.4411 193.634 40.6364 192.384 40.6364Z" fill="#ffff" />
                            <circle cx="23.5" cy="23.5" r="23.5" fill="#A1F75E" />
                            <path d="M15.5693 14.2148C14.4205 14.2148 13.4868 15.1486 13.4868 16.2973V18.1587C13.4868 17.0099 12.5592 16.0823 11.4104 16.0823C10.2617 16.0823 9.32794 17.0099 9.32794 18.1587V28.8476C9.32794 29.9964 10.2617 30.924 11.4104 30.924C12.5592 30.924 13.4868 29.9902 13.4868 28.8476V30.7089C13.4868 31.8577 14.4205 32.7853 15.5693 32.7853C16.718 32.7853 17.6456 31.8577 17.6456 30.7089V16.2973C17.6518 15.1486 16.718 14.2148 15.5693 14.2148ZM10.5136 18.945C10.575 22.9687 10.4644 23.2144 10.0958 23.2144C9.77024 23.2144 9.77024 21.9858 9.77024 18.945C9.77024 17.2495 10.3968 16.9608 10.5688 17.0652C10.7777 17.2004 10.489 17.2495 10.5136 18.945ZM14.783 17.0406C14.8444 21.0644 14.74 21.3101 14.3652 21.3101C14.0397 21.3101 14.0397 20.0815 14.0397 17.0406C14.0397 15.3452 14.6663 15.0564 14.8383 15.1609C15.041 15.2899 14.7584 15.339 14.783 17.0406Z" fill="#1D2229" />
                            <path d="M18.1985 21.6111V25.3829H28.8014V21.6111H18.1985Z" fill="#1D2229" />
                            <path d="M8.78121 21.6111H6.625V25.3829H8.78121V21.6111Z" fill="#1D2229" />
                            <path d="M40.3749 21.6111H38.2187V25.3829H40.3749V21.6111Z" fill="#1D2229" />
                            <path d="M35.5895 16.0762C34.4408 16.0762 33.5132 17.0038 33.5132 18.1525V16.2973C33.5132 15.1486 32.5794 14.2148 31.4307 14.2148C30.2819 14.2148 29.3543 15.1486 29.3543 16.2973V30.7089C29.3543 31.8577 30.2819 32.7853 31.4307 32.7853C32.5794 32.7853 33.5132 31.8577 33.5132 30.7089V28.8476C33.5132 29.9964 34.4469 30.924 35.5895 30.924C36.7383 30.924 37.6659 29.9902 37.6659 28.8476V18.1525C37.672 17.0038 36.7383 16.0762 35.5895 16.0762ZM30.6013 17.0406C30.6628 21.0644 30.5522 21.3101 30.1836 21.3101C29.858 21.3101 29.858 20.0815 29.858 17.0406C29.858 15.3452 30.4846 15.0564 30.6566 15.1609C30.8655 15.2899 30.5768 15.339 30.6013 17.0406ZM34.6496 18.945C34.711 22.9687 34.6005 23.2144 34.2319 23.2144C33.9063 23.2144 33.9063 21.9858 33.9063 18.945C33.9063 17.2495 34.5329 16.9608 34.7049 17.0652C34.9076 17.2004 34.625 17.2495 34.6496 18.945Z" fill="#1D2229" />
                        </svg>

                    </div></span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">Strengthy</a>. All Rights Reserved.</span>
      </div>
    </footer>
    </>
  );
}

export default Hero;
