import React from 'react'

import * as Ai from "react-icons/ai";
import { truncate } from '../../utils/truncate.js';

function CertificationContainer({id, institution, title, issueDate, credentialLink, certImg}) {
  return (
    <div className='border-1 cert' key={id}>
      <img src={certImg} alt="intro to front-end cert" className='border-b-1'/>

      <div className='p-3 flex flex-col h-36'>
        <h1 className='text-xl font-bold'><span className="opacity-55 text-primary">{institution}</span> | {truncate(title, 37)}</h1>
        <p className='text-md font-thin text-gray'>{issueDate}</p>
        <a href={credentialLink} className='mt-auto'><button className='mt-auto border-1 border-primary py-1 px-4 mr-4 flex items-center gap-2 hover:bg-primary hover:bg-opacity-20'><span>Show credential</span><Ai.AiOutlineLink /> </button></a>
      </div>
    </div>
  )
}

export default CertificationContainer