import React from 'react';

const Certificates = () => {
  return (
    <section id="certificates" className="section section-muted">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Formación & certificaciones</p>
          <h2 className="section-title">En proceso</h2>
          <p className="section-description">
            Estoy trabajando en nuevas certificaciones relacionadas a Python, FastAPI, React y herramientas de automatización.
            Iré actualizando esta sección a medida que complete cada programa.
          </p>
        </div>

        <div className="empty-state">
          <div className="empty-state-content">
            <div className="empty-state-icon">
              <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="empty-state-title">Certificados en progreso</h3>
            <p className="empty-state-description">
              Están en camino cursos y workshops para reforzar mi base. Pronto compartiré los diplomas y enlaces correspondientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
