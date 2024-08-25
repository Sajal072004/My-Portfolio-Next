'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
]

const links1 = [
  { url: "/", title: "Home" },
  { url: "/portfolio", title: "Portfolio" },
]



function Navbar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" }
  }

  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 }
  }

  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" }
  }

  const listVariants = {
    closed: { opacity: 0 },
    opened: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  }

  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 }
  }

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      <div className='hidden md:flex gap-4 w-1/3'>
        {links.map((link, index) => (
          <Link
            key={index}
            className={`rounded p-1 z-1000 ${pathName === link.url ? "bg-black text-white" : ""}`}
            href={link.url}
          >
            {link.title}
          </Link>
        ))}
      </div>

      

      <div className='md:hidden lg:flex w-1/3 justify-center'>
        <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center w-24">
          <span className='text-white mr-1 w-16 bg-black'>Sajal</span>
          <span className='w-16 h-8 rounded bg-white text-black flex items-center justify-center'>Namdeo</span>
        </Link>
      </div>

      <div className='hidden md:flex gap-4 w-1/3'>
        <Link href="https://github.com/Sajal072004" target='_blank'>
          <Image src="/github.png" alt='' width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/sajal_namdeo07/" target='_blank'>
          <Image src="/instagram.png" alt='' width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/sajaln/" target='_blank'>
          <Image src="/linkedin.png" alt='' width={24} height={24} />
        </Link>
      </div>

      <div className='md:hidden'>
        <button className='w-10 h-8 flex flex-col justify-between relative' onClick={() => setOpen(!open)} style={{zIndex:"55"}}>
          <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
          <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-black rounded'></motion.div>
          <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
        </button>

        {open && (
          <motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 left-0 w-[100vw] h-[100vh] text-white flex flex-col items-center justify-center gap-8 text-4xl  bg-black' style={{zIndex:50}}>
            {links.map((link, index) => (
               <motion.div variants={listItemVariants} key={index}>
                 <Link
                  className={`rounded p-1 ${pathName === link.url ? "bg-black text-white" : ""}`}
                  href={link.url}
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar;
