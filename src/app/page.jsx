'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return <motion.div
    className="h-full"
    initial={{ opacity: 0, y: "-200vh" }}
    animate={{ opacity: 1, y: "0%" }}
    transition={{ duration: 1 }}
  >

    <div className="flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xs:px-48 text-xl">

      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>

      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-10 justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold">Sajal Namdeo</h1>
        <h1 className="text-2xl md:text-4xl font-bold">Full Stack Developer and UI Designer</h1>
        {/* <p className="md:text-xl flex justify-start">Welcome to my portfolio website.</p> */}
        <div className="flex gap-4 w-full justify-center lg:justify-center">
          <Link href="/portfolio">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
          </Link>

          <Link href="/contact">
          <button className="p-4 rounded-lg ring-1 ring-black" >Contact Me</button>
          </Link>
          
          
        </div>
      </div>
    </div>
  </motion.div>
};

export default Homepage;
