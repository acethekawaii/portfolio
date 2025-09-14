import React from 'react'
import { Link } from 'react-router-dom'
import * as Bs from "react-icons/bs";

import SectionHeader from '../section-header'
import CertificationContainer from './CertificationContainer.jsx'

import certificate from '../../data/certificate.js'

function Certification() {
  return (
    <div className='content-width'>
      <div className='flex items-center justify-between'>
        <SectionHeader>Certification</ SectionHeader>

        <Link to="/certification"><p className=' justify-self-end flex items-center gap-2'>View all <Bs.BsArrowRight size={22}/></p></Link>
      </div>

      <div className='grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4'>
        {certificate.slice(0, 6).map(certificates => (
          <CertificationContainer
            key={certificates.id}
            institution={certificates.institution}
            title={certificates.title}
            issueDate={certificates.issueDate}
            credentialLink={certificates.credentialLink}
            certImg={certificates.certImg}
          />
        ))}
      </div>
      <span className="text-xs opacity-50 cursor-pointer hover:text-primary hover:opacity-100">Last updated. June 2025</span>
    </div>
  )
}

export default Certification