import React from 'react'
import { Link } from 'react-router-dom'
// import icon
import { BsInstagram, BsLinkedin, BsLine, BsWhatsapp } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
// import logo
import LogoPersegi from '../assets/logo/LogoPersegi.png'
import LogoKSEP from '../assets/logo/LogoKSEP.png'

const Footer = () => {
  return (
    <section className='w-full  bg-primary text-white relative 
    
    before:content-[""] before:absolute before:-top-1 before:left-0 before:h-[90%] before:w-[100%] before:bg-gradient before:-z-1
    after:content-[""] after:absolute after:-top-1 after:left-0 after:h-[90%] after:w-[100%] after:bg-gradient after:blur-[10px] after:-z-1'>

      <div className='justify-between w-full py-10 px-10 bg-primary relative z-10 flex flex-col lg:flex-row gap-y-[5rem] lg:gap-y-0 lg:justify-center lg:gap-x-10'>
        <div className='flex lg:w-[300px] flex-col md:flex-row lg:flex-col md:justify-between lg:justify-start w-full'>
          <div>
            <div>
              <p className='text-3xl font-bold font-gradient'>INFEST 2023</p>
              <p className='font-book-italic'>By KSEP ITB</p>
            </div>
            <div className='mt-[14px]'>
              <p>The biggest Investment Festival Held by KSEP ITB</p>
            </div>
          </div>
          <div className='flex gap-x-5 mt-[28px]'>
            <img className='h-[40px]' src={LogoPersegi} />
            <img className='h-[40px] 'src={LogoKSEP} />
          </div>
        </div>

        <div className='flex flex-col gap-y-2 w-full lg:w-[300px]'>
          <p className='text-3xl font-bold font-gradient'>Social Media</p>
          <div className='md:flex md:flex-row md:justify-between lg:flex-col md:w-full'>
            <p className='mt-[28px] md:w-[300px]'><span className='font-gradient font-bold'>Follow us</span> on social media to find out the latest updates on our event</p>
            <div className='flex gap-x-5 text-2xl mt-[28px]'>
              <Link to='https://www.instagram.com/infest.bdg/' target='__blank'><BsInstagram /></Link>
              <Link to='https://www.linkedin.com/company/ksepitb/mycompany/' target='__blank'><BsLinkedin /></Link>
              <Link to='https://www.tiktok.com/@ksep_itb' target='__blank'><FaTiktok /></Link>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-y-2 lg:w-[300px] w-full'>
          <p className='text-3xl font-bold font-gradient'>Contact Information</p>
          <div className='flex flex-col gap-y-1 mt-[28px]'>
            <p className='font-medium'>Main Event</p>
            <div className='flex flex-col gap-y-2'>
              <div className='flex justify-between'>
                <p>Angelica Clara</p>
                <div className='flex flex-col items-end gap-y-1'>
                  <Link to='https://wa.me/+6281382518798' className='flex items-center gap-x-2' target="__blank">+62 81382518798<BsWhatsapp/></Link>
                  <p className='flex items-center gap-x-2'>Angelicaclarr<BsLine/></p>
                </div>
              </div>
              <div className='flex justify-between'>
                <p>Audie Quisha</p>
                <div className='flex flex-col items-end gap-y-1'>
                  <Link to='https://wa.me/+62895366452252' className='flex items-center gap-x-2' target="__blank">+62 895366452252<BsWhatsapp/></Link>
                  <p className='flex items-center gap-x-2'>audiejee<BsLine/></p>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-[14px] flex flex-col gap-y-1'>
            <p className='font-medium'>Competition</p>
            <div className='flex flex-col gap-y-2'>
              <div className='flex justify-between'>
                <p>Ardy Setia</p>
                <div className='flex flex-col items-end gap-y-1'>
                  <Link to='https://wa.me/+6285256103205' className='flex items-center gap-x-2' target="__blank">+62 85256103205<BsWhatsapp/></Link>
                  <p className='flex items-center gap-x-2'>rlazure1527<BsLine/></p>
                </div>
              </div>
              <div className='flex justify-between'>
                <p>FILBERT</p>
                <div className='flex flex-col items-end gap-y-1'>
                  <Link to='https://wa.me/+6281360245435' className='flex items-center gap-x-2' target="__blank">+62 81360245435<BsWhatsapp/></Link>
                  <p className='flex items-center gap-x-2'>fuyoucheng<BsLine/></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer