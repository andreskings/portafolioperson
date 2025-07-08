import React, { useState, useEffect } from 'react';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  github, 
  link, 
  onProjectClick,
  ProjectImage,
  isPreview = false
}) => {
  const [imageAspectRatio, setImageAspectRatio] = useState('');

  // Función para detectar el tipo de imagen
  const getImageAspectRatio = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const ratio = img.width / img.height;
        if (ratio > 1.5) resolve('landscape');
        else if (ratio < 0.8) resolve('portrait');
        else resolve('square');
      };
      img.onerror = () => resolve('square');
      img.src = src;
    });
  };

  useEffect(() => {
    if (image) {
      getImageAspectRatio(image).then(setImageAspectRatio);
    }
  }, [image]);

  const handleCardClick = (e) => {
    // Evitar que el click en los enlaces active el click del card
    if (e.target.closest('.project-card-links')) {
      return;
    }
    onProjectClick();
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="project-card" onClick={handleCardClick}>
      {ProjectImage ? (
        <ProjectImage
          src={image}
          alt={`Vista previa del proyecto ${title}`}
          className={imageAspectRatio}
          isPreview={isPreview}
        />
      ) : (
        <div className={`project-card-image ${imageAspectRatio}`}>
          <img 
            src={image} 
            alt={`Vista previa del proyecto ${title}`}
            loading="lazy"
          />
        </div>
      )}
      
      <div className="project-card-overlay">
        <div className="project-card-description">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="project-card-actions">
            <span className="view-details">Ver detalles</span>
          </div>
        </div>
      </div>

      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        
        <div className="project-card-tech">
          {technologies && technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card-links" onClick={handleLinkClick}>
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link secondary"
              aria-label={`Ver código de ${title} en GitHub`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 