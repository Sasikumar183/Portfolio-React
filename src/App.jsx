import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './assets/components/navbar'
import { Hero } from './assets/components/hero'
import { Skill } from './assets/components/skill'
import { Project } from './assets/components/project'
import { Contact } from './assets/components/contact'
import { About } from './assets/components/about'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
function App() {
  return (
    <>
    <span id='home'></span>
    <Navbar/>  
    <Hero/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    
    </>
        )
}

export default App
