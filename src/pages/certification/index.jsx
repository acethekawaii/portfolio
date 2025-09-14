import React from 'react'
import { ScrollRestoration } from "react-router-dom";

import CertificationContainer from '../../components/certification/CertificationContainer.jsx'
import Layout from '../../components/layout/index.jsx'
import Socials from '../../components/socials/index.jsx'

import certificate from '../../data/certificate.js'

function Index() {
  return (
    <Layout>
      <Socials />
      <div className='mt-10 w-11/12 xl:w-9/12 mx-auto'>
        <h1 className='text-3xl mb-3'><span className='text-primary'>/</span>certification</h1>
        <p className='mt-4'>List of my certificate</p>

        <h1 className="text-3xl mt-16 "><span className='text-primary'>#</span>completed courses</h1>

        <div className='grid my-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4'>
          {certificate.map(certificates => (
            <CertificationContainer
              key={certificates.id}
              title={certificates.title}
              institution={certificates.institution}
              issueDate={certificates.issueDate}
              credentialLink={certificates.credentialLink}
              certImg={certificates.certImg}
            />
          ))}
        </div>
      </div>
      <ScrollRestoration />
    </Layout>
  )
}

export default Index