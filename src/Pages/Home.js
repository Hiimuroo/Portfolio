// Home.js
import React from 'react';
import '../assets/style/Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faFacebook, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  return (
    <div className="home">
      <h1>Matthieu Labille</h1>
      <h2>Intégrateur/Developpeur Web</h2>
      <hr />
      <div className="social-links">
      <a href="https://github.com/Hiimuroo" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/matthieulabille/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/Hiimuroo"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://github.com/Hiimuroo"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://github.com/Hiimuroo"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://github.com/Hiimuroo"><FontAwesomeIcon icon={faDiscord} /></a>
      </div>
    </div>
  );
}

export default Home;