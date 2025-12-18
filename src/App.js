import React, { useEffect } from 'react';

// Importar componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Importar estilos
import './App.css';

function App() {
  useEffect(() => {
    // Función para animar elementos cuando son visibles
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            
            // Animar barras de progreso si el elemento contiene habilidades
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
              const width = bar.getAttribute('data-width');
              setTimeout(() => {
                bar.style.width = `${width}%`;
              }, 200);
            });

            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      
      elements.forEach(element => {
        observer.observe(element);
      });
      
      return observer;
    };
    
    const observer = animateOnScroll();
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
  
  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;