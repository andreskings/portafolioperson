import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para hacer scroll suave a las secciones
  const scrollToSection = (sectionId) => {
    // Si es 'home', ir al inicio de la página
    if (sectionId === 'home') {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    // Cerrar el menú móvil después de hacer clic
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">Victor San Martin</div>
        
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        <ul className="navbar-menu">
          <li>
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }} 
              className="nav-link"
            >
              Inicio
            </a>
          </li>
          <li>
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }} 
              className="nav-link"
            >
              Sobre Mí
            </a>
          </li>
          <li>
            <a 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }} 
              className="nav-link"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a 
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }} 
              className="nav-link"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a 
              href="#certificates"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('certificates');
              }} 
              className="nav-link"
            >
              Certificados
            </a>
          </li>
          <li>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }} 
              className="nav-link"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
      
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Inicio</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Sobre Mí</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Proyectos</a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Habilidades</a>
        <a href="#certificates" onClick={(e) => { e.preventDefault(); scrollToSection('certificates'); }}>Certificados</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;