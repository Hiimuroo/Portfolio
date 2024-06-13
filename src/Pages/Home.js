import React, { useState, useEffect } from 'react';
import '../assets/style/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const [showPseudo, setShowPseudo] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className={`home ${loaded ? 'loaded' : ''}`}aria-labelledby="home-title">
      <h1 id="home-title">Matthieu Labille</h1>
      <h2>Intégrateur/Developpeur Web</h2>
      <div className="separator"></div>
      <div className="social-links" role="navigation" aria-label="Liens sociaux">
        <a
          href="https://github.com/Hiimuroo"
          target="_blank"
          rel="noreferrer"
          aria-label="Lien vers le profil Github de Hiimuroo"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/matthieulabille/"
          target="_blank"
          rel="noreferrer"
          aria-label="Lien vers le profil LinkedIn de Matthieu Labille"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <button onClick={() => setShowPseudo(!showPseudo)}
          aria-label="Afficher le pseudo Discord"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </button>
        {showPseudo && (
          <span className="discord-pseudo">himuroo</span>
        )}
      </div>
    </section>
  );
}

export default Home;
