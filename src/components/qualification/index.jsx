import { React, useState } from 'react'
import * as Fa from "react-icons/fa";

import SectionHeader from '../section-header'
import educations from "../../data/educations.js";
import works from "../../data/works.js"

import hackerHeroBadge from "../../assets/badges/proficient-in-web-fundamentals.png";

function Qualification() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div id="qualification" className='mt-10 w-11/12 xl:w-9/12 mx-auto'>
      <SectionHeader>Qualification</SectionHeader>

      <div className='mt-4 lg:mt-0'>
        <div className='mt-4 mb-8 hidden md:flex flex-center gap-4 cursor-pointer text-xl'>
          <h1
            className={toggleState === 1 ?  "text-primary flex-center gap-2" : "flex-center gap-2"}
            onClick={() => toggleTab(1)}>
            <Fa.FaCode size={28} />
            Professional Experience
          </h1>
          <h1
            className={toggleState === 2 ?  "text-primary flex-center gap-2" : "flex-center gap-2"}
            onClick={() => toggleTab(2)}>
            <Fa.FaGraduationCap size={28}/>
            Education & Bootcamp
          </h1>
        </div>

        <div className="hidden md:block">
          {(toggleState === 1 ? works : educations).map((education, index) => (
            <div key={index} className='mx-auto w-4/5 flex-center items-start'>
              <div className="active-content -mt-1 w-1/2">
                <h1 className="font-bold text-lg">{education.institution}</h1>
                <p className="font-thin text-md text-gray mt-1.5 flex items-center gap-1 ">
                  {education.start_date} - {education.end_date}
                </p>
              </div>

              <div className='flex flex-col items-center mx-2'>
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="w-0.5 bg-primary h-32"></div>
              </div>

              <div className="ml-2 active-content -mt-1 w-1/2">
                <h1 className="text-lg font-bold ">{education.program}</h1>
                <p className="font-thin text-md text-gray mt-1.5">
                  {education.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <h1
            className="text-primary flex items-center gap-2" >
            <Fa.FaCode size={28} />
            Professional Experience
          </h1>

          <div>
            {works.map((work, index) => (
              <div key={index}>
                <h1 className="text-lg font-bold ">{work.program}</h1>
                <p className="font-thin text-md text-gray mt-2">
                  {index.description}
                </p>
                <p className="font-thin text-md text-gray mt-1.5 pb-4 border-b-1 border-primary">
                  {work.description}
                </p>
              </div>
            ))}
          </div>

          <h1
            className="mt-4     text-primary flex items-center gap-2" >
            <Fa.FaCode size={28} />
            Education & Bootcamp
          </h1>

          <div className="space-y-6">
            {educations.map((education, index) => (
              <div key={index}>
                <h1 className="text-lg font-bold ">{education.program}</h1>
                <p className="font-thin text-md text-gray mt-2">
                    {education.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h1 className='text-xl'>Badges <span className='opacity-50 inline'>--------------</span></h1>

          <div className="sm:mt-2 grid grid-cols-2 sm:grid-cols-5 gap-4">
            <img src={hackerHeroBadge} />
          </div>
        </div>
      </div>
      <span className="text-xs opacity-50 cursor-pointer hover:text-primary hover:opacity-100">Last updated. June 2025</span>
    </div>
  )
}

export default Qualification