import React from 'react';
import '../assets/style/Informations.css';

const AboutMe = () => {
  return (
    <div className="informations">
      <h1>À propos de moi</h1>
      <hr />

      <section>
        <h2>Introduction</h2>
        <p>Bonjour, je m'appelle <strong>[Ton Nom]</strong> et je suis <strong>[Ton Titre/Profession]</strong>. Passionné par [ton domaine], je m'efforce de [ce que tu fais ou pourquoi tu le fais].</p>
        <img src="lien_vers_ta_photo.jpg" alt="Photo de Profil" className="profile-photo" />
      </section>

      <section>
        <h2>Biographie</h2>
        <p>Je suis diplômé en [ton domaine] de [ton école/université]. Au cours des [x] dernières années, j'ai acquis une solide expérience en travaillant sur divers projets pour [tes employeurs/clients].</p>
      </section>

      <section>
        <h2>Compétences</h2>
        <div className="skills">
          <div className="skills-category">
            <h3>Soft Skills</h3>
            <ul>
              <li>Communication</li>
              <li>Gestion de projet</li>
              <li>Résolution de problèmes</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Certifications</h3>
            <ul>
              <li>Certified Scrum Master</li>
              <li>AWS Certified Solutions Architect</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Valeurs et Philosophie de Travail</h2>
        <p>Je crois fermement en [tes valeurs]. Pour moi, un travail bien fait est celui qui [ta philosophie de travail].</p>
      </section>

      <section>
        <h2>Loisirs et Centres d’Intérêt</h2>
        <p>En dehors du travail, j'aime [tes hobbies], ce qui me permet de [ce que tes hobbies t'apportent].</p>
      </section>

    </div>
  );
}

export default AboutMe;
