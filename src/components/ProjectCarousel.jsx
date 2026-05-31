import React, { useState } from 'react';

// Este componente dibuja el carrusel de proyectos de cada integrante.
// Maneja el índice de la diapositiva activa en el estado y nos permite pasar de forma manual y cíclica.
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
        {/* Botón de flecha izquierda para retroceder de proyecto */}
        <button 
          className="carousel-arrow-btn prev" 
          onClick={prevSlide}
          aria-label="Proyecto anterior"
        >
          &#10094;
        </button>

        {/* Tarjeta del proyecto con su imagen y descripción */}
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

        {/* Botón de flecha derecha para avanzar de proyecto */}
        <button 
          className="carousel-arrow-btn next" 
          onClick={nextSlide}
          aria-label="Siguiente proyecto"
        >
          &#10095;
        </button>
      </div>

      {/* Los puntitos de abajo para ver cuántas diapositivas hay y poder hacer clic para saltar a una */}
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
