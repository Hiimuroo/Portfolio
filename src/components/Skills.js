import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSass, faJs, faReact, faNodeJs, faGithub, faBootstrap, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {  faDatabase } from '@fortawesome/free-solid-svg-icons';
import reduxLogo from '../assets/images/redux.svg';
import JestLogo from '../assets/images/jest.png';
import MongoLogo from '../assets/images/Mongo.png';
import '../assets/style/Skills.css';

const Skills = () => {
  const [loaded, setLoaded] = useState(false);
  const [showColumn1, setShowColumn1] = useState(false);
  const [showColumn2, setShowColumn2] = useState(false);
  const [showColumn3, setShowColumn3] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaded) {
      const columnTimer1 = setTimeout(() => {
        setShowColumn1(true);
      }, 300);
      const columnTimer2 = setTimeout(() => {
        setShowColumn2(true);
      }, 400);
      const columnTimer3 = setTimeout(() => {
        setShowColumn3(true);
      }, 500);
      return () => {
        clearTimeout(columnTimer1);
        clearTimeout(columnTimer2);
        clearTimeout(columnTimer3);
      }
    }
  }, [loaded]);

  return (
    <div className='sections'>
      <h1>Mes Compétences</h1>
      <hr />
      <div className={`skills-container ${loaded ? 'loaded' : ''}`}>
        <div className="skills-columns">
          <div className={`column ${showColumn1 ? 'show' : ''}`}>
            <h3>FRONT-END</h3>
            <div className="icons">
              <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
              <span>HTML5</span>
              <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
              <span>CSS3</span>
              <FontAwesomeIcon icon={faSass} className="skill-icon" />
              <span>Sass</span>
              <FontAwesomeIcon icon={faJs} className="skill-icon" />
              <span>JavaScript</span>
              <FontAwesomeIcon icon={faBootstrap} className="skill-icon" />
              <span>Bootstrap</span>
              <FontAwesomeIcon icon={faReact} className="skill-icon" />
              <span>React</span>
            </div>
          </div>
          <div className={`column ${showColumn2 ? 'show' : ''}`}>
            <h3>BACK-END</h3>
            <div className="icons">
            <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
              <span>Node.js</span>
              <img src={MongoLogo} alt="MongoDB" className="skill-icon" />
              <span>MongoDB</span>
              <img src={JestLogo} alt="Jest" className="skill-icon" />
              <span>Jest</span>
              <img src={reduxLogo} alt="Redux" className="skill-icon" />
              <span>Redux</span>
            </div>
          </div>
          <div className={`column ${showColumn3 ? 'show' : ''}`}>
            <h3>Outils & Logiciels</h3>
            <div className="icons">
              <FontAwesomeIcon icon={faGithub} className="skill-icon" />
              <span>GitHub</span>
              <FontAwesomeIcon icon={faGoogle} className="skill-icon" />
              <span>Lighthouse</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
