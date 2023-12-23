import React, { useEffect, useState } from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import Img1 from '../../assets/speaker/lkh.jpg'
import Img2 from '../../assets/speaker/lukas.jpg'
import Img3 from '../../assets/speaker/nico.jpg'
import Img4 from '../../assets/speaker/roy.jpg'

const speakerData = [
  {
    id: 1,
    name: 'Lo Kheng Hong',
    title: 'Warren Buffet Wisdom, Pros of Investing in Banking Sector, and What Makes A Wonderful Company',
    image: Img1,
  },
  {
    id: 2,
    name: 'Lukas Setia Atmaja',
    title: 'Investasi 3 MAN: aMAN, nyaMAN, MANtap',
    image: Img2,
  },
  {
    id: 3,
    name: 'Fransiskus Xaverius Nicholas',
    title: 'A.I Revolution : Unraveling the Effects of Digitalization on Global Economy and Stock Market',
    image: Img3,
  },
  {
    id: 4,
    name: 'Roy Prakoso',
    title: 'The Banking Sector : Present, Prospect, and Altervative Industries',
    image: Img4,
  },
]

const Speaker = () => {
  return (
    <section className='min-h-[400px] mx-auto md:pt-[5rem] bg-primary flex flex-col items-center justify-center gap-y-12'>
      <p className='text-white font-bold text-4xl md:text-5xl text-center mt-16'>Our <span className='font-gradient'>Speakers</span></p>
      {/* <p className='text-4xl font-gradient font-extrabold-italic text-center'>To be announced..</p> */}
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {speakerData.map((item) => {
          return <div key={item.id}>
            <div className='rounded my-2 w-[300px] h-[350px] lg:h-[375px] lg:w-[275px] relative
             before:content-[""] before:absolute before:top-0 before:left-0 before:h-[100%] before:w-[100%] before:bg-gradient before:-z-1 before:rounded
             after:content-[""] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[100%] after:bg-gradient after:blur-[10px] after:-z-1 flex items-center justify-center after:rounded
            '>
              <div className='relative z-10 bg-primary rounded w-[99%] h-[99%] p-4 flex items-center flex-col'>
                <img src={item.image} className='bg-white w-[150px] h-[150px] rounded-full object-cover' />
                <p className='text-xl mt-4 text-white text-center font-extrabold font-gradient'>{item.name}</p>
                <p className='mt-4 text-white text-center'>{item.title}</p>
              </div>
            </div>
          </div>
        })}
      </div>
    </section>
  )
}

export default Speaker