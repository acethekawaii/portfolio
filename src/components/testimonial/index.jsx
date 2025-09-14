import React from 'react'

import SectionHeader from '../section-header'
import TestimonialBox from './TestimonialBox.jsx'

function Testimonial() {
  return (
    <div className='content-width'>
      <SectionHeader>Testimonial</ SectionHeader>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <TestimonialBox />
      </div>
      <span className="text-xs opacity-50 cursor-pointer hover:text-primary hover:opacity-100">Last updated. April 2023</span>
    </div>
  )
}

export default Testimonial