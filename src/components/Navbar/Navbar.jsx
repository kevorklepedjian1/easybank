import React, { useState } from 'react';
import './Navbar.css';
import logo from '../design/logo.svg'
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
  <><header>
    <div className='logo'>
    <img src={logo} alt='easybank' />
    </div>
    <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
    <ul className={click ? 'navigation active' : 'navigation'}>
    
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
            <li><a>Blog</a></li>
            <li><a>Careers</a></li>
           
          </ul>
          <button className='request_init_btn'>Resquest Invite</button>
          
  </header>
  </>
  )
}

export default Navbar;
