import React from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {GiBrain} from 'react-icons/gi';
import {AiOutlineFolderOpen} from 'react-icons/ai';
import {MdOutlineMailOutline} from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick= {() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#About" onClick= {() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#Experience" onClick= {() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><GiBrain/></a>
      <a href="#Portfolio" onClick= {() => setActiveNav('#Portfolio')} className={activeNav === '#Portfolio' ? 'active' : ''}><AiOutlineFolderOpen/></a>
      <a href="#Contact" onClick= {() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><MdOutlineMailOutline/></a>
    </nav>
  )
}

export default Nav