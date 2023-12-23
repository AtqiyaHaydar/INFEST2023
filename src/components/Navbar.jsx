import React, { useState, useEffect } from 'react'
// import link
import { Link, NavLink } from 'react-router-dom'
// import logo
import Logo from '../assets/logo/LogoPersegi.png'
// import components
import MobileNav from '../components/MobileNav'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY > 550);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`top-0 w-full z-20 fixed h-[90px] bg-primary text-white transition-all mx-auto
    ${isScrolled ? 'before:content-[""] before:absolute before:top-[2px] before:left-0 before:h-[100%] before:w-[100%] before:bg-gradient before:-z-1 before:rounded after:rounded after:content-[""] after:absolute after:top-[2px] after:left-0 after:h-[100%] after:w-[100%] after:bg-gradient after:blur-[10px] after:-z-1' : ''}`}>
      {/* nav */}
      <div className='h-full flex justify-between items-center relative z-10 bg-primary px-10'>
        <div>
          <Link to='/'><img  className='h-[40px]' src={Logo} /></Link>
        </div>
        <div className='hidden md:flex lg:justify-center md:justify-end gap-x-[3rem] min-w-[500px] font-bold'>
          <NavLink className={({isActive}) => isActive ? 'active' : ''} onClick={() => window.scrollTo(0, 0)} to='/'>HOME</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active' : ''} onClick={() => window.scrollTo(0, 0)} to='/main-event'>MAIN EVENT</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active' : ''} onClick={() => window.scrollTo(0, 0)} to='/equity-research-competition'>ERC</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active' : ''} onClick={() => window.scrollTo(0, 0)} to='/business-case-competition'>BCC</NavLink>
        </div>
        <div className='hidden lg:block btn'>
          <Link to='https://docs.google.com/forms/d/e/1FAIpQLScYMmlSAYdj8eOREUDeF9pr0zo36WByYnIr5KjHgk1PrfwCmA/viewform?usp=sf_link' target='__blank'>Feedback</Link>
        </div>
        {/* mobile nav */}
        <div className='md:hidden'>
          <MobileNav />
        </div>
      </div>
    </section>
  )
}

export default Navbar