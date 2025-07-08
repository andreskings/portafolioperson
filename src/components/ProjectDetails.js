import React, { useState } from 'react';

const ProjectDetails = ({ project, onBack, ProjectImage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    title,
    fullDescription,
    technologies,
    github,
    link,
    gallery,
    features
  } = project;

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (e.key === 'ArrowRight' && currentImageIndex < gallery.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // Helper function para obtener la URL de la imagen
  const getImageSrc = (item) => {
    return typeof item === 'object' ? item.src : item;
  };

  // Helper function para obtener el estilo de la imagen
  const getImageStyle = (item) => {
    return typeof item === 'object' ? item.style : {};
  };

  // Función mejorada para manejar el botón de volver
  const handleBackClick = () => {
    console.log('Botón volver presionado'); // Debug
    if (onBack && typeof onBack === 'function') {
      onBack();
    } else {
      console.error('onBack no está definida o no es una función');
    }
  };

  return (
    <div className="project-details">
      <div className="container">
        <button 
          className="back-button" 
          onClick={handleBackClick}
          aria-label="Volver a proyectos"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
          Volver a Proyectos
        </button>

        <div className="project-details-content">
          <div className="project-details-header">
            <h1 className="project-details-title">{title}</h1>
            <div className="project-details-links">
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
                  Ver Código
                </a>
              )}
              
            </div>
          </div>

          <div className="project-details-body">
            <div className="project-gallery">
              <div className="gallery-main" onKeyDown={handleKeyDown} tabIndex="0">
                {ProjectImage ? (
                  <ProjectImage
                    src={gallery[currentImageIndex]}
                    alt={`${title} - Imagen ${currentImageIndex + 1}`}
                    className="gallery-main-image"
                  />
                ) : (
                  <img 
                    src={getImageSrc(gallery[currentImageIndex])} 
                    alt={`${title} - Imagen ${currentImageIndex + 1}`}
                    className="gallery-main-image"
                    style={getImageStyle(gallery[currentImageIndex])}
                  />
                )}
              </div>

              <div className="gallery-thumbnails">
                {gallery.map((image, index) => (
                  <img
                    key={index}
                    src={getImageSrc(image)}
                    alt={`${title} - Miniatura ${index + 1}`}
                    className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                    onKeyDown={(e) => e.key === 'Enter' && handleThumbnailClick(index)}
                    tabIndex="0"
                    role="button"
                    aria-label={`Ver imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="project-info">
              <div className="project-description">
                <h3>Descripción</h3>
                <p>{fullDescription}</p>
              </div>

              <div className="project-technologies">
                <h3>Tecnologías</h3>
                <div className="tech-grid">
                  {technologies.map((tech, index) => (
                    <span key={index} className="tech-tag large">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {features && features.length > 0 && (
                <div className="project-features">
                  <h3>Características</h3>
                  <ul>
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails