import React from 'react'
import {Link} from "react-router-dom";

import * as Ai from "react-icons/ai";

function ProjectContainer({languages, title, desc, live, repo, details, cover, id}) {
  return (
    <div className='border-1 border-gray mt-4' key={id}>
      <img src={cover} className='w-full h-64 border-b-1 border-gray'/>

      <div className='border-b-1 border-gray p-2 font-thin h-16'>
        {languages}
      </div>

      <div className='p-4 h-32'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2> 

        <p className='font-thin mb-2'>{desc}</p>
      </div>

      <div className="flex p-4 space-x-4">
        <a href={live} target="_blank">
            <button className='border-1 border-primary py-1 px-4 flex items-center gap-2 hover:bg-primary hover:bg-opacity-20'>
                <span>Live</span><Ai.AiOutlineLink />
            </button>
        </a>
        <a href={repo} target="_blank">
            <button className='border-1 border-gray py-1 px-4 flex items-center gap-2 hover:bg-gray hover:bg-opacity-20'>
                <span>Repo</span><Ai.AiFillGithub />
            </button>
        </a>
        {details ? (
            <Link to={details}>
                <button className='border-1 border-gray py-1 px-4 flex items-center gap-2 hover:bg-gray hover:bg-opacity-20'>
                    <span>Details</span>
                </button>
            </Link>
        ) : (
            <></>
        )}
      </div>
    </div>
  )
}

export default ProjectContainer