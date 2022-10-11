import React from 'react';
import './Header.css';
import CTA from './CTA';
import Me from '../../Assets/PIC.JPG';
import HeaderSocial from './HeaderSocials.jsx';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Stephanie</h1>
        <h5 className="text-light">
          Aspiring Developer
        </h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me"> 
          <img src={Me} alt="me" /> 
        </div> 
        <a href="#Contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header