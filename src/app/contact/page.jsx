'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function ContactPage() {
  const text = "Say Hello"
  const [success , setSuccess] = useState(false);
  const [error , setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then((result) => { 
        setSuccess(true);
        form.current.reset();
      
      } ,
        (error) => {
          setError(true)
        },
      );
  };


  return (
    <motion.div 
      className="h-full"
      initial={{ opacity: 0, y: "-200vh" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        <div className='h-1/8 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl sm:text-6xl p-4'>
          <div className='flex flex-wrap justify-center'>
            {text.split("").map((letter, index) => {
              return (
                <motion.span 
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                  key={index}
                >
                  {letter}
                </motion.span>
              )
            })}
          </div>
        </div>
        <form onSubmit={sendEmail} ref={form} className='h-7/8 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-lg sm:text-xl flex flex-col gap-4 sm:gap-8 justify-center p-4 sm:p-8 md:p-8 overflow-auto'>
          <span>Hi, Sajal Namdeo</span>
          <textarea placeholder='Write your message here' rows={6} className='bg-transparent border-b-2 border-b-black outline-none resize-none' name='user_message'></textarea>
          <span>My email address is:</span>
          <input placeholder='email' type='text' className='bg-transparent border-b-2 border-b-black outline-none'
          name='user_email' />
          <span>Regards</span>
          <button className='bg-purple-300 rounded font-semibold text-gray-600 p-4'>Send</button>

          { success && <span className='text-green-600 font-semibold'>Your message has been sent successfully!</span>}
          { error && <span className='text-red-600 font-semibold'>Something Went Wrong</span>}


        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage
