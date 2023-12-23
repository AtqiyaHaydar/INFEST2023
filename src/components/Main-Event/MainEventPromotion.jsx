import React from 'react'
// import icon
import { MdLocationOn } from 'react-icons/md'
import { BsFillCalendarDateFill } from 'react-icons/bs'

const MainEventPromotion = () => {
  return (
    <section className='bg-primary min-h-[250px] flex flex-col items-center py-[5rem] md:pt-[5rem] text-center'>
      <p className='md:w-[600px] text-white px-5 md:px-0 text-xl md:text-2xl font-medium lg:w-[900px]' data-aos='fade-up'>"With a <span className='font-gradient'>good perspective on history</span>, we can have a better understanding of the past and present, and thus a <span className='font-gradient'>clear vision of the future.</span>"</p>
      <p className='mt-[28px] text-white font-book flex gap-x-2 items-center' data-aos='fade-up'><BsFillCalendarDateFill /> 2nd September</p>
      <p className='mt-[14px] text-white font-book flex gap-x-2 items-center' data-aos='fade-up'><MdLocationOn />Multipurpose Hall Aula SBM Lt. II, ITB Ganesha</p>
    </section>
  )
}

export default MainEventPromotion