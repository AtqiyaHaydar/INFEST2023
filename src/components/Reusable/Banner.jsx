import React from 'react'
// import link
import { Link } from 'react-router-dom'

const Banner = (props) => {
  return (
    <section className='mt-[5.65rem] mx-auto min-h-[575px] flex flex-col justify-center items-center
    relative
    before:content-[""] before:absolute before:top-[2px] before:left-0 before:h-[100%] before:w-[100%] before:bg-gradient before:-z-1
    after:content-[""] after:absolute after:top-[2px] after:left-0 after:h-[100%] after:w-[100%] after:bg-gradient after:blur-[10px] after:-z-1
    '>
      <img className='w-full h-[575px] brightness-50 z-10' src={props.image} />
      <div className='absolute text-white max-w-[700px] flex flex-col gap-y-10  items-center justify-center z-10' data-aos='fade-up'>
        <p className='text-5xl font-bold text-center text-shadow-lg'>{props.title}</p>
        <Link to='https://forms.gle/vhGgY8nYfCXiimP87' target='__blank'><button className='btn w-[150px] text-center py-3'>Daftar</button></Link>
      </div>
    </section>
  )
}

export default Banner