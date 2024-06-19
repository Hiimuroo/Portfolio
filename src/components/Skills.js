// Skills.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSass, faJs, faReact, faNodeJs, faBootstrap, faPython } from '@fortawesome/free-brands-svg-icons';
import reduxLogo from '../assets/images/redux.svg';
import JestLogo from '../assets/images/jest.png';
import MongoLogo from '../assets/images/Mongo.png';
import '../assets/style/Skills.css';

const skillsData = [
  { icon: faHtml5, name: 'HTML5', level: 90 },
  { icon: faCss3Alt, name: 'CSS3', level: 90 },
  { icon: faSass, name: 'Sass', level: 80 },
  { icon: faJs, name: 'JavaScript', level: 80 },
  { icon: faBootstrap, name: 'Bootstrap', level: 60 },
  { icon: faReact, name: 'React', level: 80 },
  { src: reduxLogo, name: 'Redux', level: 70 },
  { icon: faNodeJs, name: 'Node.js', level: 60 },
  { src: MongoLogo, name: 'MongoDB', level: 50 },
  { src: JestLogo, name: 'Jest', level: 50 },
  { icon: faPython, name: 'Python', level: 30 },
];

const Skills = () => {
  const [loaded, setLoaded] = useState(false);
  const [showColumn1, setShowColumn1] = useState(false);
  const [showColumn2, setShowColumn2] = useState(false);

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
      return () => {
        clearTimeout(columnTimer1);
        clearTimeout(columnTimer2);
      }
    }
  }, [loaded]);

  return (
    <div className='Skills' role='main'>
      <h1>Mes Compétences</h1>
      <div className="separator"></div>
      <div className={`skills-container ${loaded ? 'loaded' : ''}`}>
        <div className="skills-columns">
          <div className={`column ${showColumn1 ? 'show' : ''}`}>
            <h3>FRONT-END</h3>
            <div className="icons">
              {skillsData.slice(0, 6).map((skill, index) => (
                <div className="skill" key={index}>
                  {skill.icon ? (
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                  ) : (
                    <img src={skill.src} alt={skill.name} className="image-icon" />
                  )}
                  <span>{skill.name}</span>
                  <div className="progression-bar">
                    <div className="progression" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`column ${showColumn2 ? 'show' : ''}`}>
            <h3>BACK-END</h3>
            <div className="icons">
              {skillsData.slice(6).map((skill, index) => (
                <div className="skill" key={index}>
                  {skill.icon ? (
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                  ) : (
                    <img src={skill.src} alt={skill.name} className="image-icon" />
                  )}
                  <span>{skill.name}</span>
                  <div className="progression-bar">
                    <div className="progression" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
