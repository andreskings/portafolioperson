import React from 'react';

const Skills = () => {
  const highlights = [
    {
      title: 'Python + FastAPI',
      description: 'APIs REST sencillas, conexión con servicios externos y despliegues básicos.',
    },
    {
      title: 'React',
      description: 'Componentes funcionales, hooks y diseño responsivo para portafolios y dashboards simples.',
    },
    {
      title: 'OpenWebUI + Twilio',
      description: 'Pruebas de flujos conversacionales y automatización de mensajes.',
    },
    {
      title: 'Java ·  .NET',
      description: 'Ejercicios para reforzar estructuras, patrones y despliegues iniciales.',
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header align-left">
          <p className="eyebrow">Habilidades</p>
          <h2 className="section-title">Lo que practico</h2>
          <p className="section-description">
            Tecnologías y herramientas que reviso constantemente para mejorar mi base técnica.
          </p>
        </div>

        <div className="skills-collection">
          {highlights.map((item) => (
            <article key={item.title} className="skill-card animate-on-scroll">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;