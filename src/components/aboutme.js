// Informations.js
import React from 'react';
import '../assets/style/Informations.css';
import personalInfo from '../Data/aboutme.json';

const Informations = () => {
  const { introduction, diplomas, career, passions, photo } = personalInfo;

  return (
    <div className="informations" role='main'>
      <h1>A propos de moi</h1>
      <div className="separator"></div>
      <div className="intro-photo-section">
        <div className="section photo">
          <img src={photo} alt="Matthieu Labille" />
        </div>
        <div className="section introduction">
          <h2>Présentation</h2>
          <p>{introduction}</p>
        </div>
      </div>
      <div className="section">
        <h2>Diplômes</h2>
        <ul>
          {diplomas.map((diploma, index) => (
            <li key={index}>{diploma}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Parcours Professionnel</h2>
        <ul>
          {career.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Passions</h2>
        <ul>
          {passions.map((passion, index) => (
            <li key={index}>
              <p>{passion.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Informations;
