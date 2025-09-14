import React from 'react'

import SectionHeader from '../section-header'

import * as Bs from "react-icons/bs";
import * as Gr from "react-icons/gr";

function Contacts() {
  return (
    <div className='mt-10 w-11/12 xl:w-9/12 mx-auto' id='contacts'>
      <SectionHeader>Contact me</SectionHeader>

      <div className='mt-4 flex flex-col sm:flex-row justify-between'>
        <div className="w-full mb-8 md:mb-0 md:w-1/2">
          <p className='text-gray'>I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me.</p>
          <p className='mt-2 sm:mt-4 thin opacity-50 text-gray text-white'>Message me here:</p>
          <p className='sm:mt-2 flex items-center text-md text-gray'>
            <Gr.GrMail size={26}/>
            <span className='sm:ml-2'>acegabriel0710@gabriel0809@gmail.com</span>
          </p>
        </div>

        <a href="https://discord.com/users/971077954941620276" className="border-1 border-gray">
          <img src="https://lanyard.cnrad.dev/api/971077954941620276?bg=282c33&borderRadius=0px&idleMessage=🌿%20Afk%20in%20Real%20Life&theme=dark" className="w-full"/>
        </a>

      </div>
      <span className="text-xs opacity-50 cursor-pointer hover:text-primary hover:opacity-100">Last updated. June 2025</span>
    </div>
  )
}

export default Contacts