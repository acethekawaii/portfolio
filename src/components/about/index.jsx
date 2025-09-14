import React from 'react'

import SectionHeader from '../section-header'
import Button from '../button'

import AboutHero from '../../assets/img/about-hero.jpeg'

import { Link } from "react-router-dom";

import * as Bs from "react-icons/bs";

function About() {
  return (
    <div className='content-width'>
      <SectionHeader>About me</SectionHeader>

      <div className='lg:flex lg:justify-between gap-12'>
        <div className='lg:w-3/5 text-lg text-gray mt-4 text-justify'>
          <p className='mb-8'>Hello, i'm Ace!</p>
          <p className='mb-8'>My journey as a self-taught developer began in 9th grade with HTML and CSS, and although my learning wasn't consistent at first, my passion for coding was reignited in August 2022 and since then, I have continued to expand my skills in both front-end and back-end development, and I also gained 1 year of professional experience working as a System Developer, which helped me apply my knowledge in real-world projects.</p>

          <Link to="/about"><Button>Readmore <Bs.BsArrowRight size={22} className="inline"/></Button></Link>
        </div>

        <img src={AboutHero} className='w-full lg:w-2/5 mx-auto mt-4 lg:mt-0 lg:mx-0'/>
      </div>
      <span className="text-xs opacity-50 cursor-pointer hover:text-primary hover:opacity-100">Last updated. September 2025</span>
    </div>
  )
}

export default About