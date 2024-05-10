// Navbar.js
import React from 'react';
import '../assets/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <hr />
        <li><a href="#informations">Informations</a></li>
        <hr />
        <li><a href="#competences">Mes compétences</a></li>
        <hr />
        <li><a href="#projets">Mes projets</a></li>
        <hr />
        <li><a href="#contact">Me contacter</a></li>
        <hr />
      </ul>
      <div className="Footer">
        <h5>Copyright © Matthieu L.</h5>
      </div>
    </div>
  );
}

export default Navbar;