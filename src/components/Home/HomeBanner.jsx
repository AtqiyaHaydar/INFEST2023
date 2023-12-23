import React from 'react'
// import banner image
import BannerImg from '../../assets/background/Frame 89.png'
// import link
import { Link } from 'react-router-dom'

const HomeBanner = () => {
  return (
    <section className='mx-auto mt-[5.65rem] min-h-[575px] flex items-center w-full relative
    before:content-[""] before:absolute before:top-[2px] before:left-0 before:h-[100%] before:w-[100%] before:bg-gradient before:-z-1
    after:content-[""] after:absolute after:top-[2px] after:left-0 after:h-[100%] after:w-[100%] after:bg-gradient after:blur-[10px] after:-z-1
    '>
      <img src={BannerImg} className='w-full h-[575px] brightness-50 z-10'/>
      <div className='absolute text-white max-w-[700px] p-5 md:ml-[3rem] flex flex-col gap-y-10 z-10 items-center md:items-start' data-aos='fade-up'>
        <p className='text-5xl font-bold text-center md:text-left text-shadow-lg'><span className='font-gradient font-extrabold-italic text-shadow-none'>The Biggest</span> Investment Festival Held by <br /> <span className='text-4xl font-ksep text-shadow-none font-extrabold-italic'>KSEP ITB</span></p>
        <Link to='https://docs.google.com/forms/d/e/1FAIpQLScYMmlSAYdj8eOREUDeF9pr0zo36WByYnIr5KjHgk1PrfwCmA/viewform?usp=sf_link'  target='__blank'><button className='btn w-[150px] text-center lg:text-none py-3'>Feedback</button></Link>
      </div>
    </section>
  )
}

export default HomeBanner