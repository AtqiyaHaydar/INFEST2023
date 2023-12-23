import React, { useState } from 'react'
// import icons
import { CgMenuRight } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'
// import navlink
import { NavLink } from 'react-router-dom'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section className='overflow-hidden'>
      <CgMenuRight className='text-4xl cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>
      {/* mobile nav */}
      <div className={`${isOpen ? 'right-0' : '-right-[270px]'} h-[100vh] w-[250px] bg-primary text-white top-0 font-bold absolute z-10 transition-all overflow-x-hiddem
       before:content-[""] before:absolute before:top-0 before:-left-1 before:h-[100%] before:w-[100%] before:bg-gradient-down before:-z-1 before:rounded after:rounded
       after:content-[""] after:absolute after:top-0 after:-left-1 after:h-[100%] after:w-[100%] after:bg-gradient-down after:blur-[10px] after:-z-1
      `}> 
        <div className='flex flex-col items-center justify-center bg-primary z-20 bg-primary relative h-[99vh] w-[99%] gap-y-10'>
          <AiOutlineClose className='text-white text-4xl cursor-pointer absolute top-10' onClick={() => setIsOpen(!isOpen)}/>
          <NavLink className={({isActive}) => isActive ? 'active' : ''} onClick={() => window.scrollTo(0, 0)} to='/'>HOME</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active' : ''} onClick={() => window.scrollTo(0, 0)} to='/main-event'>MAIN EVENT</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active' : ''} onClick={() => window.scrollTo(0, 0)} to='/equity-research-competition'>ERC</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active' : ''} onClick={() => window.scrollTo(0, 0)} to='/business-case-competition'>BCC</NavLink>
        </div>
      </div>
    </section>
  )
}

export default MobileNav