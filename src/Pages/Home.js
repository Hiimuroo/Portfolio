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
    <div className={`home ${loaded ? 'loaded' : ''}`}>
      <h1>Matthieu Labille</h1>
      <h2>Intégrateur/Developpeur Web</h2>
        <hr />
      <div className="social-links">
        
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
    </div>
  );
}

export default Home;
