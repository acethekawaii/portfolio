import React from 'react'

import SectionHeader from '../section-header'

import skillHero from '../../assets/svg/skills-hero.svg'
import skills from '../../data/skills.js'
import SkillContainer from "../skill-components/index.jsx";

function Skills() {
  return (
    <div className='content-width'>
      <SectionHeader>Skills</ SectionHeader>
      
      <div className='md:flex gap-12 mt-4 justify-between'>
        <div className="w-full mb-4 md:mb-0 md:w-1/3">
          <img src={skillHero} className="w-full"/>
        </div>

        <div className='mt-8 sm:mt-0 sm:w-2/3 grid gap-4 grid-cols-2 sm:grid-cols-3'>
          {skills.map((skill, index) => (
            <SkillContainer key={index} category={skill.category} list={skill.list}/>
          ))}
        </div>
      </div>
      <span className="text-xs opacity-50 cursor-pointer hover:text-primary hover:opacity-100">Last updated. June 2025</span>
    </div>
  )
}

export default Skills