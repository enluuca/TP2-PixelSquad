import React, { useState } from 'react';

/**
 * ProjectCarousel Component
 * Manages slide index via state and allows cyclical manual navigation.
 * Complies strictly with University Rubric Requirement 3 (Manual project gallery).
 */
export default function ProjectCarousel({ proyectos }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!proyectos || proyectos.length === 0) {
    return (
      <div className="no-projects-galactic">
        <p>No se registran sistemas desplegados para este tripulante.</p>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === proyectos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? proyectos.length - 1 : prev - 1));
  };

  const currentProject = proyectos[currentSlide];

  return (
    <div className="carousel-wrapper-galactic">
      <div className="carousel-container-galactic">
        {/* Flecha Izquierda */}
        <button 
          className="carousel-arrow-btn prev" 
          onClick={prevSlide}
          aria-label="Proyecto anterior"
        >
          &#10094;
        </button>

        {/* Contenido Diapositiva */}
        <div className="carousel-slide-galactic">
          <img 
            src={currentProject.imagen || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop"} 
            alt={currentProject.titulo} 
            className="carousel-img-galactic" 
          />
          <div className="carousel-caption-galactic">
            <h4>{currentProject.titulo}</h4>
            <p>{currentProject.descripcion}</p>
          </div>
        </div>

        {/* Flecha Derecha */}
        <button 
          className="carousel-arrow-btn next" 
          onClick={nextSlide}
          aria-label="Siguiente proyecto"
        >
          &#10095;
        </button>
      </div>

      {/* Indicadores de Posición */}
      <div className="carousel-dots-galactic">
        {proyectos.map((_, index) => (
          <span
            key={index}
            className={`dot-galactic ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            title={`Ver proyecto ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
