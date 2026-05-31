import React, { useState, useEffect } from 'react';

// Este componente dibuja la barra de progreso animada para las habilidades del perfil.
// Empieza en 0% y con un timer sube hasta el porcentaje real para que se vea el efecto de carga.
export default function ProgressBar({ nombre, nivel }) {
  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    // Le metemos un delay re cortito (150ms) al renderizarse para que se note la animación de llenado de la barra.
    const timer = setTimeout(() => {
      setCurrentWidth(nivel);
    }, 150);

    return () => clearTimeout(timer);
  }, [nivel]);

  return (
    <div className="skill-item-galactic">
      <div className="skill-info-galactic">
        <span className="skill-name">{nombre}</span>
        <span className="skill-percentage">{nivel}%</span>
      </div>
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill animate-progress"
          style={{ 
            width: `${currentWidth}%`,
            '--target-width': `${nivel}%`
          }}
        >
          {/* Un destello de luz con animación barrido para que quede más fachero */}
          <div className="progress-bar-scan"></div>
        </div>
      </div>
    </div>
  );
}
