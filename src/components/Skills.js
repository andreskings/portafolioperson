import React, { useEffect, useRef } from 'react';

const Skills = () => {
  // Referencia para observar las animaciones de las barras de progreso
  const skillsRef = useRef(null);

  // Datos de habilidades organizados por categorías
  const skillCategories = [
    {
      category: "Lenguajes de Programación",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 60 },
        { name: "Java", level: 65 }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "HTML/CSS", level: 85 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 }
      ]
    },
    {
      category: "Bases de Datos",
      skills: [
        { name: "MongoDB", level: 20 },
        { name: "PostgreSQL", level: 0 },
        { name: "MySQL", level: 80 },
        { name: "Firebase", level: 100 }
      ]
    }
  ];

  // useEffect para configurar la animación de las barras de progreso
  useEffect(() => {
    // Configuración del Intersection Observer
    const options = {
      root: null, // Observar respecto al viewport
      rootMargin: '0px', // Sin margen adicional
      threshold: 0.1 // Activar cuando el 10% del elemento sea visible
    };

    // Función que se ejecuta cuando un elemento entra en vista
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animar las barras de progreso cuando son visibles
          const skillBars = entry.target.querySelectorAll('.skill-progress');
          skillBars.forEach(bar => {
            // Obtener el porcentaje de la barra desde el atributo data-width
            const width = bar.getAttribute('data-width');
            // Aplicar la animación con un pequeño delay
            setTimeout(() => {
              bar.style.width = `${width}%`;
            }, 200);
          });
          
          // Dejar de observar después de animar para optimizar performance
          observer.unobserve(entry.target);
        }
      });
    };

    // Crear el observer con la configuración y callback
    const observer = new IntersectionObserver(handleIntersect, options);
    
    // Observar cada categoría de habilidad
    if (skillsRef.current) {
      const skillCategories = skillsRef.current.querySelectorAll('.skill-category');
      skillCategories.forEach(category => {
        observer.observe(category);
      });
    }

    // Cleanup: desconectar el observer cuando el componente se desmonte
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []); // Array de dependencias vacío - solo ejecutar una vez

  // Componente oculto - no renderiza nada
  return null;

  // CÓDIGO ORIGINAL COMENTADO PARA FUTURA REFERENCIA:
  /*
  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--gray-light)' }}>
      <div className="container">
        <h2 className="section-title">Mis Habilidades</h2>
        
        <div className="skills-grid" ref={skillsRef}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category animate-on-scroll">
              <h3 className="skill-category-title">{category.category}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        data-width={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  */
};

export default Skills;