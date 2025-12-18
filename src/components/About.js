import React from 'react';

const knowledge = [
  'Python + FastAPI para servicios y APIs REST sencillas.',
  'React para construir interfaces limpias y responsivas.',
  'OpenWebUI para probar flujos conversacionales.',
  'Integraciones básicas con Twilio y servicios externos.',
  'Java y .NET para ejercitar estructuras y despliegues.'
];

const About = () => {
  return (
    <section id="about" className="section section-muted">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Perfil personal</p>
          <h2 className="section-title">Sobre mí</h2>
          <p className="section-description">
            Este portafolio reúne mis aprendizajes actuales. Estoy consolidando conocimientos en
            backend con Python, FastAPI y servicios externos, además de interfaces en React.
          </p>
        </div>

        <div className="about-layout">
          <div className="about-image card-floating animate-on-scroll">
            <img src={`${process.env.PUBLIC_URL}/yo.png`} alt="Retrato de Victor San Martin" />

            <div className="photo-label">
              <span>Victor San Martin</span>
              <p>Portafolio personal</p>
            </div>
          </div>

          <div className="about-content animate-on-scroll">
            <p>
              Me gusta documentar cada ejercicio para mostrar cómo organizo el código y las pruebas.
              Actualmente practico APIs, integraciones y diseños simples que pueda desplegar rápidamente.
            </p>

            <div className="about-focus">
              <h3>Conocimientos en práctica</h3>
              <ul>
                {knowledge.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <p>
              Si quieres compartir feedback o conversar sobre oportunidades, puedes escribirme en la sección de contacto.
            </p>

            <div className="about-cta">
              <a href="#contact" className="btn btn-primary">
                Coordinar una llamada
              </a>
              <a
                href="https://github.com/andreskings"
                className="btn btn-outline subtle"
                target="_blank"
                rel="noopener noreferrer"
              >
                Revisar GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;