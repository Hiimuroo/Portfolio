import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo, faListCheck, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../assets/style/Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const currentPath = window.location.pathname;

  return (
    <div className="navbar sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul>
        <li className={currentPath === '/home' ? 'active' : ''}>
          <a href="/home"><FontAwesomeIcon icon={faHouse} /><span>Home</span></a>
        </li>
        <hr />
        <li className={currentPath === '/informations' ? 'active' : ''}>
          <a href="/informations"><FontAwesomeIcon icon={faCircleInfo} /><span>Informations</span></a>
        </li>
        <hr />
        <li className={currentPath === '/projets' ? 'active' : ''}>
          <a href="/projets"><FontAwesomeIcon icon={faCode} /><span>Mes projets</span></a>
        </li>
        <hr />
        <li className={currentPath === '/competences' ? 'active' : ''}>
          <a href="/competences"><FontAwesomeIcon icon={faListCheck} /><span>Mes compétences</span></a>
        </li>
        <hr />
        <li className={currentPath === '/contact' ? 'active' : ''}>
          <a href="/contact"><FontAwesomeIcon icon={faEnvelope} /><span>Me contacter</span></a>
        </li>
        <hr />
      </ul>
      <div className="Footer">
        <h5>Copyright © {new Date().getFullYear()} Matthieu Labille</h5>
      </div>
    </div>
  );
}

export default Navbar;
