import React from 'react';
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage';
import Marqee from './components/Marqee';
import About from './components/About';
import Eyes from './components/Eyes';
import Cards from './components/Cards';
import Feature from './components/Feature';
import Footer from './components/Footer';

import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' w-full min-h-screen text-zinc-100 bg-zinc-900' >
      <Navbar/>
      <Landingpage/>
      <Marqee/>
      <About/>
      <Eyes/>
      <Feature/>
      <Cards/>
      <Footer/>
      </div>
  )
}

export default App