// src/animations.js
// Este archivo contiene las funciones de animación que se utilizan en la aplicación

/**
 * Anima elementos cuando entran en el viewport
 * Para usarlo, agrega la clase 'animate-on-scroll' a los elementos que quieras animar
 */
export const setupScrollAnimations = () => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animateElements.length === 0) return null;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          
          // Si el elemento contiene barras de progreso (para sección de habilidades)
          const skillBars = entry.target.querySelectorAll('.skill-progress');
          if (skillBars.length > 0) {
            skillBars.forEach(bar => {
              const width = bar.getAttribute('data-width') || '0';
              setTimeout(() => {
                bar.style.width = `${width}%`;
              }, 200);
            });
          }
          
          // Opcional: dejar de observar después de animar
          // observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1,  // Elemento visible al menos 10%
      rootMargin: '0px 0px -50px 0px'  // Margen para activar un poco antes
    });
    
    animateElements.forEach(element => {
      observer.observe(element);
    });
    
    return observer;
  };
  
  /**
   * Maneja el cambio de estilo del navbar al hacer scroll
   */
  export const setupNavbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return null;
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Ejecutar una vez para establecer el estado inicial
    handleScroll();
    
    // Función para limpiar el event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };
  
  /**
   * Inicializa todas las animaciones de la página
   */
  export const initAnimations = () => {
    const scrollAnimations = setupScrollAnimations();
    const navbarScroll = setupNavbarScroll();
    
    // Devuelve función para limpiar
    return () => {
      if (scrollAnimations) scrollAnimations.disconnect();
      if (navbarScroll) navbarScroll();
    };
  };