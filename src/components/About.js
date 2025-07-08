import React from 'react';

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--gray-light)' }}>
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        
        <div className="about-container">
          <div className="about-image animate-on-scroll">
            {/* Reemplaza con tu foto */}
            <img src="Screenshot_20250610_175343_Gallery.jpg" alt="Tu foto" />
          </div>
          
          <div className="about-content animate-on-scroll">
            <h3 className="about-subtitle">¡Hola! Soy Victor</h3>
            
            <div className="about-text">
              <p>
                Soy un Ingeniero en Informática con pasión por la creación de aplicaciones
                web y móviles. Me especializo en el desarrollo fullstack utilizando tecnologías
                modernas como React, bases de datos SQL.
              </p>
              
              <p>
                Mi enfoque se centra en crear soluciones eficientes, escalables y de alta calidad,
                siguiendo las mejores prácticas y metodologías ágiles de desarrollo. Disfruto
                resolviendo problemas complejos y optimizando el rendimiento de aplicaciones.
              </p>
              
              <p>
                Me apasiona el aprendizaje continuo y mantenerme actualizado con las últimas tendencias
                y tecnologías en el campo del desarrollo de software. Mi objetivo es crear experiencias
                digitales que sean tanto funcionales como atractivas para los usuarios.
              </p>
            </div>
            
            <div className="about-buttons" style={{ marginTop: '1.5rem' }}>
              <a 
                href="#contact" 
                className="btn btn-primary" 
                style={{ 
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  marginRight: '1rem'
                }}
              >
                Contáctame
              </a>
              
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;