import React from 'react'
import Nav from './Compontes/Nav'
import LandingPage from './Compontes/LandingPage'
import Page2 from './Compontes/Page2'
import About from './Compontes/About'
import Eyes from './Compontes/Eyes'
import Featured from './Compontes/Featured'
import Card from './Compontes/Card'
import Footer from './Compontes/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from 'framer-motion'
import Ready from './Compontes/Ready'
import Clientriview from './Compontes/Clientriview'



const App = () => {
  

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-scree rounded-2xl'>
      <Nav/> 
      <LandingPage/>
      <Page2/>
      <About/>
      <Eyes/>
      <Featured/>
      <Clientriview/>
      <Card/>
      <Ready/>
      <Footer/>
      
    </div>
  )
}

export default App