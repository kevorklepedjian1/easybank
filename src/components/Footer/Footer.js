import React from 'react';
import './Footer.css';
import logo from '../design/footerlogo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faPinterest,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <div className='Footer'>
      <div className='first'>
        <img src={logo} alt='logo' />
        <div>
          <span>
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          <span>
            <FontAwesomeIcon icon={faYoutube} />
          </span>
          <span>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <span>
            <FontAwesomeIcon icon={faPinterest} />
          </span>
          <span>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </div>
      </div>
      <div className='second'>
        <div>
          <li>About us</li>
          <li>Contact</li>
          <li>Blog</li>
        </div>
        <div>
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </div>
      </div>
      <div className='third'>
        <button>Request Invite</button>
        <p>Easybank. All rights reserved.</p>
      </div>
    </div>
  );
}
