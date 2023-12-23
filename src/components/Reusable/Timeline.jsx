import React from 'react'

const Timeline = (props) => {
  return (
    <section className='mx-auto w-full h-[1900px] md:h-[1300px] bg-primary flex flex-col items-center'>
      <p className='font-extrabold-italic font-gradient text-5xl mb-[2.5rem]'>TIMELINE</p>
      <div className='mt-[5rem] h-[1800px] md:h-[1100px] absolute left-50% w-[5px] bg-white rounded z-5' data-aos='zoom-in'/>
      {props.array.map((item, index) => {
        return <div className={`${index % 2 === 0 ? 'ml-[200px] md:ml-[350px]' : 'md:mr-[350px] mr-[200px]'} w-[150px] h-[140px] md:w-[300px] md:h-[80px] mt-[14px] rounded bg-primary relative flex items-center justify-center
          before:content-[""] before:absolute before:top-0 before:left-0 before:h-[100%] before:w-[100%] before:bg-gradient before:-z-1 before:rounded
          after:content-[""] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[100%] after:bg-gradient after:blur-[10px] after:-z-1 after:rounded
        `} key={index}  data-aos='zoom-in'>
          <div className='w-[97.5%] h-[97%] rounded bg-primary text-white text-center p-3 z-10 flex flex-col justify-center md:justify-none'>
            <p>{item.date}</p>
            <p className='font-medium-italic font-gradient'>{item.title}</p>
          </div>
        </div>
      })}
    </section>
  )
}

export default Timeline