'use client'
import React, { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import Brain from '@/components/Brain'

function AboutPage() {

  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef })

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-70px" });


  return (
    <motion.div
      className="h-full overflow-x-hidden"
      initial={{ opacity: 0, y: "-200vh" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className='h-full overflow-scroll lg:flex overflow-x-hidden' ref={containerRef}>
        {/* {Text Container} */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 xl:w-1/2 lg:pr-0'>
          {/* bio container */}
          <div className='flex flex-col gap-12 justify-center'>
            <h1 className='font-bold text-2xl'>Biography</h1>
            <p className='text-lg'>Hi, I am Sajal Namdeo, a third-year student at IIIT Ranchi. I am a web developer skilled in the MERN stack, with experience in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js. Besides web development, I am passionate about competitive programming and have honed my problem-solving skills on platforms like LeetCode. My expertise in Data Structures and Algorithms complements my development skills, allowing me to tackle complex coding challenges efficiently. I am dedicated to continuous learning and staying updated with the latest tech trends.</p>

            <span className='italic'>
              You are Winning until you Quit.
            </span>

            {/* bio scroll svg */}
            <motion.img
              className='w-12 self-start'
              src="/scroll.png"
              alt=""
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />


          </div>
          {/* skills container */}
          <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
            {/* skill title */}
            <motion.h1
              className='font-bold text-2xl'
            >
              Skills
            </motion.h1>

            {/* skill list */}
            <motion.div className='flex font-semibold gap-4 flex-wrap'


            >
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                JavaScript
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Java
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                C
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                C++
              </div>

              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                HTML
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                CSS
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Node Js
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                React Js
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Express Js
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                GSAP
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Tailwind Css
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Photoshop
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Bootstrap
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Sass
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Figma
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Canva
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Numpy
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Pandas
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Matplotlib
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Python
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                NextJs
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Framer Motion
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Google Cloud
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Firebase
              </div>

            </motion.div>

            {/* skill scroll svg */}
            <motion.img
              className='w-12 self-start'
              src="/scroll.png"
              alt=""
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />

          </div>
          {/* exp container */}
          <div className='flex flex-col gap-12 justify-center pb-48'>
            {/* experience title */}
            <h1 className='font-bold text-2xl'>Experience</h1>
            {/* experience list */}
            <div>
              {/* experiece list item */}
              <div className='flex justify-between h-48'>
                {/* left */}
                <div className='w-1/3'>
                  {/* job title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Web Development Intern</div>

                  <div>

                  </div>
                  {/* job Desc */}
                  <div className='p-3 text-sm italic'>Working on some projects to enhance my web development skills</div>

                  <div>

                  </div>
                  {/* job Date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>June 2024 - July 2024</div>

                  <div>

                  </div>
                  {/* job company */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>TechnoHacks</div>

                  <div>

                  </div>
                </div>

                {/* center */}
                <div className='w-1/6'>
                  {/* Line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'>

                    </div>
                  </div>

                </div>

                {/* right */}
                <div className='w-1/3'>

                </div>


              </div>


              {/* experiece list item */}
              <div className='flex justify-between h-48'>
                {/* left */}
                <div className='w-1/3'>

                </div>

                {/* center */}
                <div className='w-1/6'>
                  {/* Line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'>

                    </div>
                  </div>

                </div>

                {/* right */}
                <div className='w-1/3'>
                  {/* job title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Member N&W S5</div>

                  <div>

                  </div>
                  {/* job Desc */}
                  <div className='p-3 text-sm italic'></div>

                  <div>Working on my project idea MindMastery

                  </div>
                  {/* job Date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>June 2024 - August 2024</div>

                  <div>

                  </div>
                  {/* job company */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>BuildSpace</div>

                  <div>

                  </div>
                </div>



              </div>






            </div>
          </div>

        </div>

        {/* svg container */}
        <div className=' hidden lg:block w-1/3 xl:1/2 sticky z-30 top-0'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>

      </div>
    </motion.div>
  )
}

export default AboutPage