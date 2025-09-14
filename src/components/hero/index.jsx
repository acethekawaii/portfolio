import React from 'react'

import HeroImg from '../../assets/img/avatar.gif'

import Button from '../button'
import Quote from './Quote.jsx'

function Hero() {
  return (
    <div className='mt-4'>
      <div className='lg:flex gap-8 xl:gap-0 lg:w-11/12 xl:w-9/12 mx-auto mb-4 xl:mt-0 '>
        
        <div className='md:w-10/12 lg:auto w-11/12 m-auto'>
          <h2 className='lg:text-4xl text-3xl font-semibold'>Ace is a <span className='text-primary'>back-end developer</span> who waste time, so others wont have to.</h2>
          <p className='lg:text-2xl text-xl font-thin my-4'>He values clean architecture and writes clean, maintainable code.</p>
          <a href="#contacts">
            <Button>Contact me</Button>
          </a>
        </div>

        <div className='mx-auto mt-8 w-11/12 '>
          <div className='flex justify-end w'>
            <img src={HeroImg} className='md:w-8/12 w-full self-end'/>
          </div>
          <div className="flex justify-end">
            <div className='w-76 text-lg font-thin h-8 flex items-center border-1 border-gray'> 
              <div className='w-4 h-4 bg-primary mx-1'></div>
              <p className='text-gray text-sm '>Currently working on <span className='text-white'>Portfolio</span> </p>
            </div>
          </div>
        </div>
      </div>
      <Quote />
    </div>
  )
}

export default Hero