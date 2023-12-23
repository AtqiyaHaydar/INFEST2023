import React, { useState } from 'react'
// import icons
import { AiFillCaretDown } from 'react-icons/ai'

const FaqBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div onClick={clickHandler}  className='w-[75%] border bg-primary flex items-center justify-center rounded cursor-pointer relative
      before:content-[""] before:absolute before:top-0 before:left-0 before:h-[100%] before:w-[100%] before:bg-gradient before:-z-1
      after:content-[""] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[100%] after:bg-gradient after:blur-[5px] after:-z-1
    '>
      <div className='w-[99%] h-[99%] bg-primary rounded text-white p-4 flex items-center justify-between gap-x-10 z-10'>
        <div className='text-left min-h-[25px] flex flex-col justify-center overflow-hidden'>
          <p className='font-extrabold'>{props.title}</p>
          <p className={`${isOpen ? 'max-height-[100%] mt-[8px]' : 'max-h-[0]' }`}>{props.answer}</p>
        </div>
        <div className={`text-xl transition-all ${isOpen ? 'rotate-180' : ''}`}>
          <AiFillCaretDown />
        </div>
      </div>
    </div>
  )
}

export default FaqBox