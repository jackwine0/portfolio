import React from 'react';
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="content">
        <Hero/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
