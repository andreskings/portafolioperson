import React, { useState } from 'react';

const certificates = [
  {
    title: 'Fundamentos de Python I',
    track: 'Python',
    organization: 'Programa Python',
    date: '2025',
    image: `${process.env.PUBLIC_URL}/certificado_python.png`,
  },
  {
    title: 'Fundamentos de Python II',
    track: 'Python',
    organization: 'Programa Python',
    date: '2025',
    image: `${process.env.PUBLIC_URL}/certificado_py2.png`,
  },
  {
    title: 'Fundamentos de JavaScript I',
    track: 'JavaScript',
    organization: 'Programa JavaScript',
    date: '2025',
    image: `${process.env.PUBLIC_URL}/certificado_java1.png`,
  },
  {
    title: 'Fundamentos de JavaScript II',
    track: 'JavaScript',
    organization: 'Programa JavaScript',
    date: '2025',
    image: `${process.env.PUBLIC_URL}/certificado_js2.png`,
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (certificate) => setSelectedCertificate(certificate);
  const closeModal = () => setSelectedCertificate(null);

  const handleKeyDown = (event, certificate) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openModal(certificate);
    }
  };

  return (
    <section id="certificates" className="section section-muted">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Formación & certificaciones</p>
          <h2 className="section-title">Certificados destacados</h2>
          <p className="section-description">
            Cuatro diplomas recientes que sostienen mi práctica en Python y JavaScript.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((item) => (
            <article
              key={item.title}
              className="certificate-card animate-on-scroll"
              role="button"
              tabIndex={0}
              onClick={() => openModal(item)}
              onKeyDown={(event) => handleKeyDown(event, item)}
            >
              <div className="certificate-image">
                <img src={item.image} alt={item.title} />
                <span className="certificate-date">{item.date}</span>
                <span className="certificate-track">{item.track}</span>
              </div>

              <div className="certificate-content">
                <h3 className="certificate-title">{item.title}</h3>
                <p className="certificate-organization">{item.organization}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div className="certificate-modal" onClick={closeModal}>
          <div className="certificate-modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="certificate-modal-close" onClick={closeModal} aria-label="Cerrar certificado">
              &times;
            </button>
            <img src={selectedCertificate.image} alt={selectedCertificate.title} />
            <h4>{selectedCertificate.title}</h4>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
