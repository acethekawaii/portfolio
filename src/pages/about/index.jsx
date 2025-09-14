import React from 'react'
import { ScrollRestoration } from "react-router-dom";

import Layout from '../../components/layout/index.jsx'
import SectionHeader from '../../components/section-header/index.jsx'
import Socials from '../../components/socials/index.jsx'
import SkillContainer from '../../components/skill-components/index.jsx'

import AboutHero from '../../assets/svg/about-hero.svg'
import ProcrastinateMeme from '../../assets/img/meme/procrastinate.jpeg'
import skills from '../../data/skills.js'

const funFacts = [
  {
    facts: "INTP-T",
  },
  {
    facts: "Suits is my favorite series that I watched",
  },
  {
    facts: "Dad joke enjoyer",
  },
  {
    facts: "I read books",
  },
  {
    facts: "I enjoy teaching",
  },
  {
    facts: "I Play Chess",
  },
]

function Index() {
  return (
    <Layout>
      <Socials />
      <div className='mt-10 w-11/12 xl:w-9/12 mx-auto'>
        <h1 className='text-3xl mb-3'><span className='text-primary'>/</span>About me</h1>
        <p className='mt-4'>Who am i?</p>

        <div className='lg:flex lg:justify-between mb-8'>
          <div className='lg:w-1/2 text-lg text-gray mt-4 text-justify'>
            <p className='mb-4'>Hello, i'm Ace!</p>
            <p className='mb-4'>My journey as a self-taught developer began in 9th grade with HTML and CSS, and although my learning wasn't consistent at first, my passion for coding was reignited in August 2022 and since then, I have continued to expand my skills in both front-end and back-end development, and I also gained 1 year of professional experience working as a System Developer, which helped me apply my knowledge in real-world projects.</p>
          </div>

          <img src={AboutHero} className='w-9/12 lg:w-1/3 mx-auto lg:mx-0'/>
        </div>

        <SectionHeader>Skills</SectionHeader>
        <div className='grid gap-4 grid-cols-2 sm:grid-cols-4 my-4'>
          {skills.map(skill => (
            <SkillContainer category={skill.category} list={skill.list}/>
          ))}
        </div>

        <SectionHeader>My fun facts</SectionHeader>
        <div className="flex gap-3 flex-wrap my-4">
          {funFacts.map(facts => (
            <p className='border-1 p-2'>{facts.facts}</p>
          ))}
        </div>

        {/*<SectionHeader>Memes I relate to</SectionHeader>*/}
        {/*<div className="grid grid-cols-3 gap-4 mt-4">*/}
        {/*  <img src={ProcrastinateMeme} />*/}
        {/*</div>*/}
      </div>
      <ScrollRestoration />
    </Layout>
  )
}

export default Index