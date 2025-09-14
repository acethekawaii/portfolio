import React from 'react'
import { ScrollRestoration } from "react-router-dom";

import ProjectComponents from '../../components/projects/ProjectContainer.jsx'
import Layout from '../../components/layout/index.jsx'
import Socials from '../../components/socials/index.jsx'

import project from '../../data/projects.js'

function Index() {
  return (  
    <Layout>
      <Socials />
      <div className='mt-10 w-11/12 xl:w-9/12 mx-auto'>

        <h1 className='text-3xl mb-3'><span className='text-primary'>/</span>projects</h1>
        <p className='mt-4'>List of my projects</p>

        <h1 className="text-3xl mt-16 "><span className='text-primary'>#</span>completed websites</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.map(p => (
            <ProjectComponents key={p.id} languages={p.languages} title={p.title} desc={p.desc} live={p.live} repo={p.repo} details={p.details} cover={p.cover}/>
          ))}
        </div>

      </div>
      <ScrollRestoration />
    </Layout>
  )
}

export default Index