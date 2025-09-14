import React from 'react'

import daiben from '../../assets/img/daiben.png'
import quote from '../../assets/svg/quote.svg'

function TestimonialBox() {
  return (
    <div className='border-1 border-gray px-6 pt-2 pb-5 text-justify flex flex-col'>
      <img src={quote} className='relative -top-5 w-8' />

      <p>Ace was one of the top-performing students to graduate from my bootcamp on a technical level. Despite being the youngest in his batch, he served as a team leader and fearlessly implemented advanced concepts and technologies in his projects, all the while providing top-notch code quality among his peers.</p> 

      <div className="flex justify-between mt-5">
        <div>
          <p>Daiben Angelo Sanchez</p>
          <p className="text-primary">Instructor of Kodego</p>
        </div>

        <img src={daiben} className='w-12 h-12 rounded-full'/>
      </div>
    </div>
  )
}

export default TestimonialBox