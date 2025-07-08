import React from 'react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">Victor San Martin</h1>
          <h2 className="hero-subtitle">Ingeniero en Informática</h2>
          <p className="hero-description">
            Especializado en desarrollo web y aplicaciones modernas.
            Apasionado por crear soluciones tecnológicas innovadoras.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              Ver Proyectos
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
            >
              Contacto
            </button>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="scroll-down animate-pulse" 
          aria-label="Scroll to About section"
        >
          <svg width="30" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;