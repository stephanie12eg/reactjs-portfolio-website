import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';

function App() {
  return (   
  <>
      <Header/>
      <Nav/>
      <About/>
      <Footer/>
      <Contact/>
      <Portfolio/>
      <Experience/>
  </>
  );
}

export default App;
