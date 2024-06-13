import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo, faListCheck, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../assets/style/Navbar.css';
import logoLight from '../assets/images/logo1.svg';
import logoDark from '../assets/images/logo2.svg';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const currentPath = window.location.pathname;

  useEffect(() => {
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');
    matchDark.addListener(handleChange);
    setTheme(matchDark.matches ? 'dark' : 'light');

    return () => matchDark.removeListener(handleChange);
  }, []);

  const logo = theme === 'dark' ? logoDark : logoLight;

  return (
    <main className="navbar sidebar">
      <div className="logo-container">
        <img src={logo} alt="PortFolio Matthieu Labille - Développeur Intégrateur" className="logo" />
      </div>
      <nav>
      <ul>
        <li className={currentPath === '/home' ? 'active' : ''}>
          <a href="/home"><FontAwesomeIcon icon={faHouse} /><span>Home</span></a>
        </li>
        <li className={currentPath === '/informations' ? 'active' : ''}>
          <a href="/informations"><FontAwesomeIcon icon={faCircleInfo} /><span>Informations</span></a>
        </li>
        <li className={currentPath === '/projets' ? 'active' : ''}>
          <a href="/projets"><FontAwesomeIcon icon={faCode} /><span>Mes projets</span></a>
        </li>
        <li className={currentPath === '/competences' ? 'active' : ''}>
          <a href="/competences"><FontAwesomeIcon icon={faListCheck} /><span>Mes compétences</span></a>
        </li>
        <li className={currentPath === '/contact' ? 'active' : ''}>
          <a href="/contact"><FontAwesomeIcon icon={faEnvelope} /><span>Me contacter</span></a>
        </li>
      </ul>
    </nav>
      <div className="Footer">
        <p>Copyright © {new Date().getFullYear()} Matthieu Labille</p>
      </div>
    </main>
  );
}

export default Navbar;
