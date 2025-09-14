import React from 'react'
import ProjectContainer from './ProjectContainer.jsx'
import SectionHeader from '../section-header'

import { Link } from "react-router-dom";

import * as Bs from "react-icons/bs";

import project from '../../data/projects.js';

function Projects() {
  return (
    <div className='content-width' id='works'>
      <div className='flex items-center justify-between'>
        <SectionHeader>Projects</ SectionHeader>

        <Link to="/projects">
          <p className=' justify-self-end flex items-center gap-2'>View all <Bs.BsArrowRight size={22}/></p>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
        {project.map(p => (
          <ProjectContainer key={p.id} languages={p.languages} title={p.title} desc={p.desc} live={p.live} repo={p.repo} details={p.details} cover={p.cover}/>
        ))}
      </div>
      <span className="text-xs opacity-50 cursor-pointer hover:text-primary hover:opacity-100">Last updated. September 2025</span>
    </div>
  )
}

export default Projects