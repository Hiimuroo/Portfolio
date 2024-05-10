// Home.js
import React from 'react';
import '../assets/Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  return (
    <div className="home">
      <h1>Matthieu Labille</h1>
      <h2>Developpeur Web</h2>
      <hr />
      <div className="social-links">
        <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>
  );
}

export default Home;