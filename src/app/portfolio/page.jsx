'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';

function PortfolioPage() {

  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85.5%"])

  const items = [
    
    {
      color: "from-blue-300 to-violet-300",
      title: "FinanceMate",
      desc: "FinanceMate is a financial management tool developed with the MERN stack. It helps users track budgets, expenses, and overall financial health through an intuitive dashboard featuring interactive charts and tables. Users can manage budgets, categorize expenses, and view detailed spending reports. With secure authentication and a user-friendly interface, FinanceMate simplifies financial planning and promotes better money management",
      img: "/FinanceMate.png",
      link: "https://financemate.vercel.app"
    },

    {
      color: "from-violet-300 to-blue-300",
      title: "Tomato",
      desc: "Tomato is a food delivery app developed with the MERN stack, offering a wide range of food options and integrated payment for a seamless checkout experience. Users can view order history in the 'Orders' section, while admins manage and track all orders through a comprehensive admin panel. With a user-friendly interface and secure payments, Tomato ensures a convenient and efficient food ordering experience.",
      img: "/Tomato.png",
      link: "https://food-delivery-frontend-no0l.onrender.com/"
    },

    {
      color: "from-blue-300 to-violet-300",
      title: "Crypto-Tracker",
      desc: "I have developed a comprehensive website for tracking cryptocurrency trends. This platform provides detailed information on all bitcoins available in the market, featuring interactive graphs that display price movements, total trading volume, and market capitalization. Users can monitor market changes over various timeframes,enabling them to make informed investment decisions based on historical data and trends.",
      img: "/crypto.png",
      link: "https://cryptotracker-lovat.vercel.app/"
    },

    {
      color: "from-violet-300 to-blue-300",
      title: "Movie Stream Web",
      desc: "Created a comprehensive movie streaming website featuring an extensive database of movies and TV shows, both recent and classic, complete with popularity rankings and ratings. The site also provides detailed information on actors and actresses, enhancing the user experience with rich content and seamless navigation.",
      img: "/movieStream.png",
      link: "https://movieestream.netlify.app/"
    },

    

    {
      color: "from-violet-300 to-blue-300",
      title: "EyeSpy",
      desc: "Our project empowers the visually impaired by utilizing ML models to analyze real-time environmental data from a camera attached to their attire. Simultaneously, caregivers can remotely monitor the live feed on a website.",
      img: "/eyespy-project.png",
      link: "https://sajal072004.github.io/eyesspy/"
    },

    {
      color: "from-blue-300 to-violet-300",
      title: "Weather App",
      desc: "I have developed a fully responsive weather app that provides weather updates and a 5-day forecast. It also includes a feature that uses your current location, similar to Google Maps, to provide accurate weather information for your exact location.",
      img: "/weather.png",
      link: "https://sajal072004.github.io/Weather-App/"
    },


  ]

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: "-200vh" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 1 }}
    >

      <div className='h-[600vh] relative  ' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
          My Works
        </div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>

          <motion.div style={{ x }} className='flex'>
            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r from-violet-300 to-blue-300`}></div>

            {items.map((item, index) => {
              return (
                <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={index}>
                  <div className='flex flex-col gap-8 text-white'>
                    <h1 className='text-3xl font-bold md:text-3xl lg:text-4xl xl:text-5xl mr-2'>{item.title}</h1>
                    <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[250px] xl:w-[500px] xl:h-[300px]'>
                      <Image src={item.img} alt='' fill />
                    </div>
                    <p className='w-[370px] md:w-[700px] lg:w-[900px] lg:text-lg xl:w-[1200px]'>{item.desc}</p>
                    <Link href={item.link} target='_blank' className='flex justify-start'>
                      <button className='p-2 text-sm md:p-2 md:text-md lg:p-2 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'>
                        See Demo
                      </button>
                    </Link>
                  </div>
                </div>
              )
            })}

          </motion.div>

        </div>

      </div>

      <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center '>
        <h1 className='text-8xl -mt-1'>Do you have a Project ? </h1>
        <div className='relative'>
          <motion.svg animate={{ rotate: -360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox='0 0 300 300'
            className='w-64 h-64 md:w-[500px] md:h-[500px]'

          >
            <defs>
              <path
                id='circlePath'
                d="M 150, 150 m -60, 0 a 60, 60 0 0 , 1 120, 0 a 60, 60 0 0, 1 -120 , 0"
              />
            </defs>
            <text fill='#000'>
              <textPath xlinkHref='#circlePath' className='text-xl'> Full Stack Developer and UI Designer</textPath>
            </text>

          </motion.svg>

          <Link href="/contact" className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'>Hire Me</Link>

        </div>

      </div>

    </motion.div>
  )
}

export default PortfolioPage