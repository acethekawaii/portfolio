import './App.css'
import { ScrollRestoration } from "react-router-dom";

import Layout from "./components/layout/index.jsx";
import Socials from './components/socials'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'
import About from './components/about'
import Contacts from './components/contacts'
import Qualification from './components/qualification'
import Certification from './components/certification'
import Testimonial from './components/testimonial'

function App() {
  return (
    <div className="App">
      <Layout>
        <Socials />
        <Hero />
        <About />
        <Projects/>
        <Skills />
        <Qualification />
        <Certification />
        <Testimonial />
        <Contacts />
        <ScrollRestoration />
      </Layout>
    </div>
  )
}

export default App
