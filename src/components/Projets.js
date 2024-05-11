import React, { useState, useEffect, useRef } from 'react';
import projetsData from '../Data/Projets.json';
import '../assets/style/Projets.css';

const Projets = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

return (
    <div className="projets sections">
      <h2>Mes Projets</h2>
      <hr />
      <div className="project-list">
        {projetsData.map((project, index) => (
          <div className="project-item" key={index} onClick={() => openModal(project)}>
            <img src={project.image} alt={project.title} />
            <p>{project.title}</p>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>×</span>
            <h1>{selectedProject.title}</h1>
            <h3>Objectifs</h3>
            <p>{selectedProject.objectives}</p>
            <h3>Compétences utilisées</h3>
            <p>{selectedProject.skills}</p>
            <h3>Lien GitHub</h3>
            <p><a href={selectedProject.github} target="_blank" rel="noopener noreferrer">{selectedProject.github}</a></p>
            {selectedProject.website && (
              <>
                <h3>Lien du site</h3>
                <p><a href={selectedProject.website} target="_blank" rel="noopener noreferrer">{selectedProject.website}</a></p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
  
export default Projets;
