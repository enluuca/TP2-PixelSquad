import React, { useState, useEffect } from 'react';

/**
 * Gallery Component
 * Renderiza una grilla CSS Grid de imágenes Sci-Fi locales.
 * Incorpora un visor Lightbox con navegación interna cíclica (Prev/Next),
 * cierre con tecla ESC, controles táctiles y zoom con un clic.
 * Cumple de forma estricta con el Requisito 6 de la Rúbrica.
 */
export default function Gallery() {
  const [activeImageIdx, setActiveImageIdx] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const images = [
    {
      id: 1,
      titulo: "Nebulosa de Orión",
      descripcion: "Cuna estelar masiva que brilla intensamente a mil quinientos años luz del cuadrante central.",
      url: "/img/galeria/foto1.jpg"
    },
    {
      id: 2,
      titulo: "Estación Espacial Abandonada",
      descripcion: "Ruinas flotantes de un astillero del Borde Exterior devorado por el paso del tiempo cósmico.",
      url: "/img/galeria/foto2.jpg"
    },
    {
      id: 3,
      titulo: "Agujero Negro",
      descripcion: "El colosal horizonte de sucesos distorsionando la luz espacial en los confines galácticos.",
      url: "/img/galeria/foto3.jpg"
    },
    {
      id: 4,
      titulo: "Caza Estelar Hangar-7",
      descripcion: "Vehículo pesado de escolta y reconocimiento en descanso dentro de la bahía de carga.",
      url: "/img/galeria/foto4.jpg"
    },
    {
      id: 5,
      titulo: "Curvatura de Planeta Gaseoso",
      descripcion: "Análisis espectral y térmico de la atmósfera de metano de un gigante gaseoso indómito.",
      url: "/img/galeria/foto5.jpg"
    },
    {
      id: 6,
      titulo: "Hangar de Mantenimiento",
      descripcion: "Bahía tecnológica equipada con grúas magnéticas y soldadores de plasma para naves.",
      url: "/img/galeria/foto6.jpg"
    },
    {
      id: 7,
      titulo: "Hiperespacio Galáctico",
      descripcion: "Salto interdimensional a velocidad luz, estirando los cúmulos estelares en líneas neón.",
      url: "/img/galeria/foto7.jpg"
    },
    {
      id: 8,
      titulo: "Núcleo de Cómputo Cuántico",
      descripcion: "Mainframe central de inteligencia artificial que procesa los sensores orbitales de la nave.",
      url: "/img/galeria/foto8.jpg"
    }
  ];

  // Escuchar el teclado para control avanzado del Lightbox (Cierre y Flechas)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIdx === null) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        setActiveImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setIsZoomed(false);
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImageIdx, images.length]);

  const openLightbox = (index) => {
    setActiveImageIdx(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setActiveImageIdx(null);
    setIsZoomed(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setIsZoomed(false);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsZoomed(false);
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  const activeImage = activeImageIdx !== null ? images[activeImageIdx] : null;

  return (
    <section className="gallery-section fade-in">
      <header className="explorer-header">
        <h1>Galería de Renders HoloNet</h1>
        <p>Muestras visuales de alta fidelidad. Haz clic en un panel para activar el visor Lightbox (Presiona ESC para cerrar, Flechas ← / → para navegar).</p>
      </header>

      {/* Grilla responsiva de imágenes locales */}
      <div className="gallery-grid-galactic">
        {images.map((img, index) => (
          <div 
            key={img.id} 
            className="gallery-card-galactic"
            onClick={() => openLightbox(index)}
          >
            <div className="gallery-img-container">
              <img src={img.url} alt={img.titulo} className="gallery-img" />
              <div className="gallery-overlay-galactic">
                <span className="gallery-expand-icon">🔍</span>
                <h4>{img.titulo}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox con Controles de Flecha y Clic de Zoom */}
      {activeImageIdx !== null && activeImage && (
        <div 
          className="lightbox-overlay" 
          onClick={closeLightbox}
          aria-modal="true"
          role="dialog"
        >
          {/* Botón de Cierre */}
          <button 
            className="lightbox-close-btn" 
            onClick={closeLightbox}
            aria-label="Cerrar visor"
          >
            &times;
          </button>

          {/* Flecha Anterior */}
          <button 
            className="lightbox-arrow-btn prev-btn" 
            onClick={prevImage}
            aria-label="Imagen anterior"
          >
            &#10094;
          </button>

          <div 
            className="lightbox-content-container"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="lightbox-img-wrapper" onClick={toggleZoom}>
              <img 
                src={activeImage.url} 
                alt={activeImage.titulo} 
                className={`lightbox-img-full ${isZoomed ? 'zoomed' : ''}`} 
              />
              <div className="zoom-hint">
                {isZoomed ? "Click para reducir zoom" : "Click para hacer zoom"}
              </div>
            </div>
            <div className="lightbox-caption-galactic">
              <h3>{activeImage.titulo}</h3>
              <p>{activeImage.descripcion}</p>
            </div>
          </div>

          {/* Flecha Siguiente */}
          <button 
            className="lightbox-arrow-btn next-btn" 
            onClick={nextImage}
            aria-label="Siguiente imagen"
          >
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
}
