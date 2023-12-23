import React from 'react'
// import link
import { Link } from 'react-router-dom';

const Promotion = () => {
  return (
    <section className='mx-auto min-h-[300px] w-full bg-black flex justify-center items-center relative
    before:content-[""] before:absolute before:top-0 before:left-0 before:h-[100%] before:w-[100%] before:bg-gradient before:-z-1
    after:content-[""] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[100%] after:bg-gradient after:blur-[10px] after:-z-1
    '>
      <div className='w-full py-[70px] bg-primary text-white flex flex-col gap-y-2 z-10 items-center'>
        <p className='font-book-italic opacity-[50%]' data-aos='fade-down'>Where to start?</p>
        <p className='font-bold text-center text-3xl md:text-2xl mt-[28px] ' data-aos='fade-up'>Investing With Us Is A <span className='font-extrabold-italic font-gradient mx-1'>Smart Move</span> For Your Future</p>
        <Link to='/main-event' onClick={() => window.scrollTo(0, 0)}><p className='flex-1 mt-[28px] font-book underline' data-aos='fade-up'>Learn more about INFEST </p></Link>
      </div>
    </section>
  )
}

export default Promotion