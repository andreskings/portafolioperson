import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importación de estilos CSS
import './index.css';  // Para estilos de Tailwind si los estás usando
import './App.css';    // Estilos personalizados

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);