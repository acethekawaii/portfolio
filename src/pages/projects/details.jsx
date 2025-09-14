import React from 'react'
import { ScrollRestoration } from "react-router-dom";

import Layout from '../../components/layout/index.jsx'
import Socials from '../../components/socials/index.jsx'

import AttendifyEarlyVersion from "../../assets/img/attendify/early-version.jpg";
import AttendancePageV1 from "../../assets/img/attendify/v1-attendance-page.png"
import WBS from "../../assets/img/attendify/v2-wbs-ss.png";
import LTHMIPlanning from '../../assets/img/attendify/LTHMI_Sprint_2_Planning.jpg'


function Index() {
    return (
        <Layout>
            <Socials />
            <div className='mt-10 w-11/12 xl:w-9/12 mx-auto'>
                <div className="flex items-end md:items-center gap-2 ">
                    <span className='text-3xl text-primary'>#</span>
                    <h1 className='text-2xl sm:text-3xl'>Attendify </h1>
                    <span className='text-3xl text-primary hidden sm:inline'>--------------</span>
                    <span className="text-xs md:text-sm opacity-50">v1.0, October 24, 2024</span>
                </div>
                <p className='my-4'>When Attendify first started, it was called Usher Registration and was used by one church.</p>

                <div className='w-5/5 grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <img src={AttendancePageV1} className="h-full"/>
                    <img src={AttendifyEarlyVersion} className=""/>
                </div>
                <span className="text-sm opacity-50">Attendify Early Working Version</span>

                <div className="flex items-end md:items-center gap-2 mt-8">
                    <span className='text-3xl text-primary'>#</span>
                    <h1 className='text-2xl sm:text-3xl'>Attendify </h1>
                    <span className='text-3xl text-primary hidden sm:inline'>--------------</span>
                    <span className="text-xs md:text-sm opacity-50">v2.0, August 21, 2025</span>
                </div>
                <p className='my-4'>Attendify continues to evolve as an improved platform and has become my practice ground for Agile methodologies. What started as a solo project has grown into a 6-member team collaboration, now serving 2 churches.</p>

                <div className='w-5/5 grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <img src={WBS} className="h-full"/>
                    <img src={LTHMIPlanning} className=""/>
                </div>
                <span className="text-sm opacity-50">Overview of our Sprint Planning sessions</span>
            </div>
            <ScrollRestoration />
        </Layout>
    )
}

export default Index