import React from 'react'
// import video
import Video from '../../assets/dokumentasi-2022/videos/Aftermovie.mp4'

const AfterMovie = () => {
  return (
    <section className='mx-auto w-full h-[600px] md:h-[600px] bg-primary flex flex-col gap-y-5 items-center justify-center pt-[4rem] '>
      <div className='w-[90vw] md:w-[75vw] lg:w-[75vw] md:max-w-[800px] h-auto flex items-center justify-center'>
        <video controls='controls' width="99%" height="99%" className='z-10'>
          <source src={Video} type="video/mp4"/>
        </video>
      </div>
      <p className='text-white border-b-2 font-book'>INFEST 2022 After Movie</p>
    </section>
  )
}

export default AfterMovie