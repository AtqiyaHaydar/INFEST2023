import React from 'react'
// import link
import { Link } from 'react-router-dom'

const event = [
  {
    id: 1,
    title: 'Main Event',
    desc: 'INFEST 2023 memiliki main event berupa talkshow//seminar yang akan dilaksanakan selama satu hari. Dalam acara ini, akan disampaikan topik yang menarik seputar investasi dan keuangan, ekonomi, dan pasar modal pada masa sekarang.',
    link: '/main-event'
  },
  {
    id: 2,
    title: 'Equity Research Competition',
    desc: 'Acara kompetisi yang mengasah kemampuan peserta dalam menganalisis dan mengevaluasi emiten yang ditentukan oleh panitia untuk menghasilkan hasil riset yang komprehensif. ',
    link: '/equity-research-competition'
  },
  {
    id: 3,
    title: 'Business Case Competition',
    desc: 'Acara kompetisi yang melatih kemampuan para peserta (dalam bentuk kelompok) untuk dapat menganalisis dan menyelesaikan kasus bisnis yang ditentukan oleh panitia.',
    link: '/business-case-competition'
  }
]

const AcaraKami = () => {
  return (
    <section className='mx-auto w-full lg:h-[550px] h-[1200px] bg-primary flex flex-col items-center'>
      <h1 className='font-bold text-white text-3xl'>Acara Kami</h1>
      <div className='mt-[56px] lg:gap-x-10 flex flex-col lg:flex-row gap-y-10 lg:gap-y-0' data-aos='fade-up'>
        {event.map((item, index) => {
          return <Link to={item.link} onClick={() => window.scrollTo(0, 0)} 
            className='w-[300px] h-[300px] rounded bg-primary flex items-center justify-center relative
            before:content-[""] before:absolute before:top-0 before:left-0 before:h-[100%] before:w-[100%] before:bg-gradient before:-z-1 before:rounded
            after:content-[""] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[100%] after:bg-gradient after:blur-[10px] after:-z-1 after:rounded' 
            
            key={index}
          >
          <div className='w-[99%] h-[99%] bg-primary rounded flex flex-col items-center p-5 relative z-10'>
            <p className='font-extrabold-italic text-white text-xl text-center font-gradient'>{item.title}</p>
            <p className='text-justify mt-[14px] text-white'>
              {item.desc}
            </p>
          </div>
        </Link>
        })}
      </div>
    </section>
  )
}

export default AcaraKami