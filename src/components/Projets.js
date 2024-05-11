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
            <h2>{selectedProject.title}</h2>
            <p><strong>Objectifs:</strong> {selectedProject.objectives}</p>
            <p><strong>Compétences utilisées:</strong> {selectedProject.skills}</p>
            <p><strong>Lien GitHub:</strong> <a href={selectedProject.github}>{selectedProject.github}</a></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projets;
