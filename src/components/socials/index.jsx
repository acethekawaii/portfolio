import React from 'react'

import * as Fa from "react-icons/fa";

function Socials() {
  return (
    <div className='hidden xl:block fixed top-0 -z-10'>
      <div className='w-0.1 h-40 bg-gray ml-11'></div>
      <div className='absolute top-40 left-7.5 mt-1'>
        <a href="https://github.com/lugh-tuatha"><Fa.FaGithubSquare size={36} className="text-gray cursor-pointer"/></a>
        <a href="https://www.linkedin.com/in/ace-gabriel-p-pasiliao-74594b250/"><Fa.FaLinkedin size={36} className="text-gray cursor-pointer mt-1"/></a>
      </div>
    </div>
  )
}

export default Socials