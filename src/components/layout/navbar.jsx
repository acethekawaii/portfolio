import React, { useState } from 'react'

import * as Hi from "react-icons/hi2";
import * as Fa from "react-icons/fa";

import { Link } from "react-router-dom";

import Logo from '../../assets/svg/logo.svg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='w-full sticky top-0 bg-background border-b border-red-gray py-8 z-10'>
      <div className="w-11/12 xl:w-9/12 mx-auto">
        <nav className='justify-between hidden sm:flex'>
          <Link to="/">
            <div className='flex gap-2'>
                <img src={Logo} alt="brand logo" className="self-center w-6" />
                <h1 className='text-xl font-semibold'>Ace</h1>
            </div>
          </Link> 
          
          <ul className='flex gap-10'>
            <li className='text-lg font-light text-gray'><Link to='/'><span className='text-primary font-bold'>#</span>home</Link></li>
            <li className='text-lg font-light text-gray'><a href='#works'><span className='text-primary font-bold'>#</span>works</a></li>
            <li className='text-lg font-light text-gray'><a href='#qualification'><span className='text-primary font-bold'>#</span>qualification</a></li>
            <li className='text-lg font-light text-gray'><a href='#contacts'><span className='text-primary font-bold'>#</span>contacts</a></li>
          </ul>
        </nav>

        <nav className='flex sm:hidden justify-between'>
          <div className='flex gap-2'>
            <img src={Logo} alt="brand logo" className="self-center w-6" />
            <h1 className='text-xl font-semibold'>Ace</h1>
          </div>

          <button>
            <Hi.HiBars3BottomRight size={30} onClick={toggleMenu} />
          </button>

          <ul className={`absolute top-20 left-0 w-full h-screen bg-background ${isMenuOpen ? 'block' : 'hidden'}`}>
            <li className='ml-4'><Link to="/" onClick={toggleMenu} className='font-light text-gray text-2xl'><span className='text-primary font-bold'>#</span>home</Link></li>
            <li className='mt-2 ml-4'><a href='#works' onClick={toggleMenu} className='font-light text-gray text-2xl'><span className='text-primary font-bold'>#</span>works</a></li>
            <li className='mt-2 ml-4'><a href='#qualification' onClick={toggleMenu} className='font-light text-gray text-2xl'><span className='text-primary font-bold'>#</span>qualification</a></li>
            <li className='mt-2 ml-4'><a href='#contacts' onClick={toggleMenu} className='font-light text-gray text-2xl'><span className='text-primary font-bold'>#</span>contacts</a></li>
          
            <div className='flex justify-center'>
              <Fa.FaGithubSquare size={36} className="mt-4 text-gray cursor-pointer"/>
              <Fa.FaLinkedin size={36} className="mt-4 text-gray cursor-pointer"/>
            </div>
          </ul>

        </nav>
      </div>
    </div>
  )
}

export default Navbar
