import React from 'react'
// import image
import Image from '../../assets/background/unsplash_fiXLQXAhCfk.png'

const InfestTheme = () => {
  return (
    <section className='mx-auto w-full h-[1100px] lg:h-[600px] bg-primary flex items-center md:justify-center px-10 gap-x-10 pt-[5rem] flex-col lg:flex-row md:h-[1000px] md:items-center md:gap-y-12'>
      <div data-aos='fade-up' className='relative bg-primary flex justify-center items-center h-[405px] w-[405px]
        before:content-[""] before:absolute before:top-0 before:left-0 before:h-[405x] before:w-[405px] before:bg-gradient before:-z-1 before:rounded after:rouned
        after:content-[""] after:absolute after:top-0 after:left-0 after:h-[405px] after:w-[405px] after:bg-gradient after:blur-[10px] after:-z-1'>
        <img src={Image} className='min-h-[400px] min-w-[400px] max-w-[400px] rounded relative z-10'/>
      </div>
      <div className='w-[500px] text-center mt-[28px] lg:mt-[0] lg:text-left p-5 lg:p-0 md:w-[700px]' data-aos='fade-up'>
        <p className='font-extrabold font-gradient text-4xl'>INFEST 2023</p>
        <p className='font-bold text-white text-2xl md:text-3xl mt-[28px]'>Investing in Indonesia's Future: <br />A New Era of <span className='font-gradient'>Opportunities</span></p>
        <p className='text-white font-book mt-[14px] md:mt-[28px] text-justify lg:text-left p-5 md:p-0'>
          <span className='font-extrabold font-gradient'>Perekonomian Indonesia</span> secara mayoritas disusun oleh sektor perbankan. Namun, beberapa bank - bank besar di dunia sedang <span className='font-medium font-gradient'>mengalami permasalahan besar dan collapse</span>. Walaupun mungkin tidak memberikan dampak langsung kepada Indonesia, tapi peristiwa ini memberikan peringatan kepada masyarakat Indonesia bahwa sektor perbankan tidak seaman itu dan tetap memiliki risiko untuk collapse. <span className='font-medium font-gradient'>Kejadian itu memicu sebuah pertanyaan</span>, apakah sudah saatnya investor Indonesia memberikan dana kepada sektor lain selain perbankan dan apa sektor yang masih berpotensi di masa depan?
        </p>
      </div>
    </section>
  )
}

export default InfestTheme