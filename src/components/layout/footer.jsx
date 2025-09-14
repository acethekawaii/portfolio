import React from 'react'

import * as Fa from "react-icons/fa";

import Logo from '../../assets/svg/logo.svg'

function Footer() {
  return (
    <div className='mt-10 border-t-2 border-gray'>
      <div className='mt-8 w-11/12 xl:w-9/12 mx-auto'>

        <div className=" sm:flex justify-between">
          <div>
            <div className="flex items-center gap-4">
              <img src={Logo} alt="brand logo" className="self-center w-6" />
              <span className='text-gray'>acegabriel0809@gmail.com</span>
            </div>
            <p className='my-2 sm:mt-6'>Backend Developer</p>
          </div>

          <div>
            <h1 className='text-xl'>Media</h1>

            <div className="flex gap-2 mt-2 sm:mt-4">
              <a href="https://github.com/lugh-tuatha"><Fa.FaGithubSquare size={36} className="text-gray cursor-pointer"/></a>
              <a href="https://www.linkedin.com/in/ace-gabriel-p-pasiliao-74594b250/"><Fa.FaLinkedin size={36} className="text-gray cursor-pointer"/></a>
              <a href="https://x.com/celerity_labs"><Fa.FaTwitterSquare size={36} className="text-gray cursor-pointer"/></a>
            </div>
          </div>
        </div>

        <p className='text-center mt-20 mb-4 text-gray'>© Copyright 2023. Made by Ace</p>
      </div>
    </div>
  )
}

export default Footer