import React from 'react'
// import swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper';
// import swiper styles
import 'swiper/css'
// import link
import { Link } from 'react-router-dom'
// import documentation
import Img1 from '../../assets/dokumentasi-2022/Screenshot_20230516-104423__01.jpg'
import Img2 from '../../assets/dokumentasi-2022/Screenshot_20230516-104427__01.jpg'
import Img3 from '../../assets/dokumentasi-2022/Screenshot_20230516-104430__01.jpg'
import Img4 from '../../assets/dokumentasi-2022/Screenshot_20230516-104437__01.jpg'
import Img5 from '../../assets/dokumentasi-2022/Screenshot_20230516-104442__01.jpg'
import Img6 from '../../assets/dokumentasi-2022/Screenshot_20230516-104451__01.jpg'

const Carousel = () => {
  return (
    <section className={`mx-auto w-full mt-[5.65rem] min-h-[575px] flex flex-col items-center justify-center
      relative
      'before:content-[""] before:absolute before:top-[2px] before:left-0 before:h-[100%] before:w-[100%] before:bg-gradient before:-z-1 after:content-[""] after:absolute after:top-[2px] after:left-0 after:h-[100%] after:w-[100%] after:bg-gradient after:blur-[10px] after:-z-1' : 'before:none after:none'
    `}>
      <Swiper 
        className='z-1 w-full h-[575px] object-cover z-10'
        modules={[Pagination, Autoplay]}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
      >
        <SwiperSlide><img src={Img1} className='object-cover w-full object-bottom h-[700px] brightness-75' /></SwiperSlide>
        <SwiperSlide><img src={Img2} className='object-cover w-full object-bottom h-[700px] brightness-75' /></SwiperSlide>
        <SwiperSlide><img src={Img3} className='object-cover w-full object-bottom h-[700px] brightness-75' /></SwiperSlide>
        <SwiperSlide><img src={Img4} className='object-cover w-full object-bottom h-[700px] brightness-75' /></SwiperSlide>
        <SwiperSlide><img src={Img5} className='object-cover w-full object-bottom h-[700px] brightness-75' /></SwiperSlide>
        <SwiperSlide><img src={Img6} className='object-cover w-full object-bottom h-[700px] brightness-75' /></SwiperSlide>
      </Swiper>

      <div className='absolute text-white max-w-[700px] flex flex-col gap-y-10  items-center justify-center z-10' data-aos='fade-up'>
        <p className='text-5xl font-bold text-center text-shadow-lg'>Main Event</p>
        <Link to='https://docs.google.com/forms/d/e/1FAIpQLScYMmlSAYdj8eOREUDeF9pr0zo36WByYnIr5KjHgk1PrfwCmA/viewform?usp=sf_link' target='__blank'><button className='btn w-[150px] text-center py-3'>Feedback</button></Link>
      </div>
    </section>
  )
}

export default Carousel