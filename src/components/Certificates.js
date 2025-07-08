import React from 'react';

// Componente para mostrar tarjetas de certificados
const CertificateCard = ({ title, organization, date, image, link }) => {
  return (
    <div className="certificate-card">
      <div className="certificate-image">
        <img src={image || "/api/placeholder/400/160"} alt={title} />
        <div className="certificate-date">{date}</div>
      </div>
      <div className="certificate-content">
        <h3 className="certificate-title">{title}</h3>
        <p className="certificate-organization">{organization}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-link"
          >
            Ver certificado
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

const Certificates = () => {
  // Array vacío - sin certificados por ahora
  const certificates = [];

  // CERTIFICADOS DE EJEMPLO PARA CUANDO LOS TENGAS:
  /*
  const certificates = [
    {
      title: "React - The Complete Guide",
      organization: "Udemy",
      date: "2023",
      image: "/path/to/certificate/image.jpg",
      link: "https://www.udemy.com/certificate/xxxx"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      organization: "freeCodeCamp",
      date: "2022",
      image: "/path/to/certificate/image.jpg",
      link: "https://www.freecodecamp.org/certification/xxxx"
    },
    // Agregar más certificados aquí...
  ];
  */

  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="section-title">Mis Certificados</h2>
        
        {/* Mostrar certificados si los hay, sino mostrar mensaje */}
        {certificates.length > 0 ? (
          <div className="certificates-grid">
            {certificates.map((certificate, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <CertificateCard {...certificate} />
              </div>
            ))}
          </div>
        ) : (
          // Mensaje cuando no hay certificados
          <div className="empty-state">
            <div className="empty-state-content">
              <div className="empty-state-icon">
                <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="empty-state-title">Certificados en progreso</h3>
              <p className="empty-state-description">
                Actualmente estoy trabajando en obtener nuevas certificaciones para continuar mi desarrollo profesional.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;