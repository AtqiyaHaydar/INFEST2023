import React from 'react'

const Biaya = (props) => {
  return (
    <section className='mx-auto py-[5rem] md:pt-[2rem] flex flex-col items-center bg-primary'>
      <p className='text-5xl font-medium text-white font-gradient text-center'  data-aos='zoom-in'>{props.title}</p>
      <div className='mt-[32px] text-center font-book text-white'  data-aos='zoom-in'>
        {props.list.map((item, index) => {
          return <p>{item.title}</p>
        })}
      </div>
    </section>
  )
}

export default Biaya