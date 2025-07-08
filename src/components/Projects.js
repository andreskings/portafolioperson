import React, { useState, useEffect, useCallback } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

// Hook personalizado para manejar la carga de imágenes
const useImageLoader = (src) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) return;
    
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setError(true);
    img.src = src;
  }, [src]);

  return { loaded, error };
};

// Componente para manejar las imágenes con mejor UX
const ProjectImage = ({ src, alt, className = "", onLoad, style, isPreview = false, ...props }) => {
  // Si src es un objeto, extraer la información
  const imageSrc = typeof src === 'object' ? src.src : src;
  
  // Lógica para los estilos
  let imageStyle = style || {};
  
  // Si NO es preview y src es un objeto con estilos, aplicar esos estilos
  if (!isPreview && typeof src === 'object' && src.style) {
    imageStyle = { ...imageStyle, ...src.style };
  }
  
  // Si ES preview, forzar estilos básicos
  if (isPreview) {
    imageStyle = {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    };
  }
  
  const imageClassName = typeof src === 'object' ? 
    `${className} ${src.className || ''}` : className;
  
  const { loaded, error } = useImageLoader(imageSrc);

  useEffect(() => {
    if (loaded && onLoad) {
      onLoad();
    }
  }, [loaded, onLoad]);

  // Clase del contenedor
  const containerClass = `project-card-image ${!loaded ? 'loading' : ''} ${imageClassName} ${isPreview ? 'preview-mode' : ''}`;

  return (
    <div className={containerClass}>
      <img
        src={imageSrc}
        alt={alt}
        className={`${loaded ? 'loaded' : ''} ${error ? 'error' : ''}`}
        style={imageStyle}
        {...props}
      />
      {error && (
        <div className="image-error-placeholder">
          <div className="error-icon">📷</div>
          <div className="error-text">Imagen no disponible</div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Datos de proyectos - RUTAS DE IMÁGENES ARREGLADAS
  const projects = [
    {
      id: 1,
      title: "Aplicación de Gestión de Mantenimiento",
      description: "Una aplicación completa de gestión de mantenimiento enfocado en transportes.",
      image: `${process.env.PUBLIC_URL}/mantencionpro.jpeg`,
      technologies: ["React", "Node.js", "Firebase", "Cloudinary"],
      github: "https://github.com/mantencionpro/mantencionpro",
      link: "https://mantencionpro.web.app",
      gallery: [
        `${process.env.PUBLIC_URL}/mantencionpro.jpeg`,
        {
          src: `${process.env.PUBLIC_URL}/iniciopro.png`,
          style: { 
            width: "50%", 
            height: "300px",
            objectFit: "cover"
          },
          className: "custom-size-image"
        },
        `${process.env.PUBLIC_URL}/mantencionpro-mobile.jpeg`
      ],
      fullDescription: "Esta aplicación permite gestionar el mantenimiento de vehículos de transporte de manera eficiente. Incluye seguimiento de servicios, recordatorios automáticos, historial de mantenimiento y generación de reportes. La interfaz es intuitiva y responsive, adaptándose a diferentes dispositivos.",
      features: [
        "Gestión completa de vehículos",
        "Recordatorios automáticos de mantenimiento",
        "Historial detallado de servicios",
        "Generación de reportes PDF",
        "Interfaz responsive",
        "Integración con servicios en la nube"
      ]
    }
  ];

  // Función para manejar la selección de proyecto
  const handleProjectClick = useCallback((project) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setSelectedProject(project);
      setIsVisible(false);
      setIsTransitioning(false);
    }, 150);
  }, []);

  // Función para volver a la lista de proyectos
  const handleBackToProjects = useCallback(() => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setSelectedProject(null);
      setIsVisible(true);
      setIsTransitioning(false);
      
      // Asegurar que el scroll va a la sección de proyectos
      setTimeout(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
    }, 150);
  }, []);

  // Loading durante transiciones
  if (isTransitioning) {
    return (
      <section id="projects" className="section">
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px',
            flexDirection: 'column',
            color: '#666'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔄</div>
            <div style={{ fontSize: '1.1rem' }}>
              {selectedProject ? 'Cargando proyecto...' : 'Cargando proyectos...'}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Vista de detalles del proyecto
  if (selectedProject && !isVisible) {
    return (
      <ProjectDetails 
        project={selectedProject} 
        onBack={handleBackToProjects}
        ProjectImage={ProjectImage}
      />
    );
  }

  // Vista de lista de proyectos
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Mis Proyectos</h2>
        
        <div className="projects-grid" style={{ display: isVisible ? 'grid' : 'none' }}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-on-scroll animated" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard 
                {...project} 
                onProjectClick={() => handleProjectClick(project)}
                ProjectImage={ProjectImage}
                isPreview={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;