import React from 'react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content fade-in">
          <span className="hero-pill">Portafolio personal</span>

          <h1 className="hero-title">
            Víctor San Martín · Ingeniero en Informática
          </h1>
          <p className="hero-description">
            Este espacio recoge lo que he estudiado y las tecnologías que practico:
            backend con FastAPI y Python junto a OpenWebUI, interfaces en React y
            ejercicios con Java y .NET
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              Ver portafolio
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
            >
              Contacto directo
            </button>
          </div>
        </div>

        <a
          href="#about"
          className="scroll-down animate-pulse"
          aria-label="Ir a la sección Sobre mí"
        >
          <svg
            width="30"
            height="30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;