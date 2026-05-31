import React, { useState, useEffect } from 'react';

// Función cortita para sacar el ID de cada planeta a partir de su URL de SWAPI
const getPlanetId = (url) => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};

// Este componente consume la API externa de Star Wars para traer info de los planetas.
// Maneja pantallas de carga, errores de conexión y paginación para ver de a 9 tarjetas.
export default function ApiExplorer() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    // Hacemos fetch a una copia estable de SWAPI para que no se caiga ni tarde tanto en responder
    fetch(`https://swapi.py4e.com/api/planets/?page=${page}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Señal del Holonet débil (Status: ${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        if (active) {
          setPlanets(data.results);
          setHasNext(data.next !== null);
          setHasPrev(data.previous !== null);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.message || 'Error de conexión en el hiperespacio.');
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [page]);

  return (
    <section className="explorer-section fade-in">
      <header className="explorer-header">
        <h1>Explorador de Planetas Galácticos</h1>
        <p>Integración API Externa (SWAPI) - Fichas Cartográficas de Mundos de la Galaxia.</p>
      </header>

      {/* Acá mostramos un spinner si está cargando o una tarjeta de error si falló el fetch */}
      {loading ? (
        <div className="loader-container">
          <div className="spinner-neon"></div>
          <p className="loading-text">Trazando cartas hiperespaciales de navegación...</p>
        </div>
      ) : error ? (
        <div className="error-card-galactic">
          <div className="error-icon">⚠️</div>
          <h3>Interrupción en la Señal</h3>
          <p>{error}</p>
          <button onClick={() => setPage(page)} className="btn-retry-galactic">
            Reintentar Transmisión
          </button>
        </div>
      ) : (
        <>
          {/* Grilla con los 9 planetas recortados de la página actual */}
          <div className="results-grid">
            {planets.slice(0, 9).map((planet, index) => {
              const planetId = getPlanetId(planet.url);
              
              return (
                <article key={index} className="data-card char-card planet-card">
                  <div className="char-img-container">
                    <img 
                      src={`/img/planetas/planeta${planetId}.jpg`} 
                      alt={planet.name} 
                      className="char-card-img"
                      onError={(e) => {
                        const idNum = parseInt(planetId, 10);
                        const currentSrc = e.target.src;
                        
                        // Como solo subimos 10 imágenes de planetas, si el ID es mayor a 10
                        // hacemos que vaya rotando usando el resto mod 10 (11 -> 1, 12 -> 2, etc.)
                        const fallbackId = ((idNum - 1) % 10) + 1;
                        
                        if (idNum > 10 && !currentSrc.includes(`/planeta${fallbackId}.jpg`)) {
                          e.target.src = `/img/planetas/planeta${fallbackId}.jpg`;
                        } else {
                          // Si falla incluso eso, le mandamos una foto genérica de internet con texto amarillo
                          e.target.onerror = null;
                          e.target.src = 'https://placehold.co/400x400/1a1a1a/ffe81f?text=Planeta+Desconocido';
                        }
                      }}
                    />
                  </div>
                  <div className="char-badge">SECTOR: #{planetId}</div>
                  <h3>{planet.name}</h3>
                  <div className="data-stats">
                    <p><strong>Clima:</strong> <span className="gender-span">{planet.climate}</span></p>
                    <p><strong>Terreno:</strong> <span className="gender-span">{planet.terrain}</span></p>
                    <p><strong>Población:</strong> <span className="orange-text">{planet.population}</span></p>
                  </div>
                  <div className="char-secondary-stats">
                    <span>Diámetro: {planet.diameter} km</span>
                    <span>Gravedad: {planet.gravity}</span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Botones de paginación para movernos entre las 7 páginas disponibles */}
          <div className="pagination-galactic">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={!hasPrev || loading}
              className="pagination-btn prev"
            >
              &#10094; Anterior
            </button>
            
            <div className="page-indicator">
              Página <span className="neon-text">{page}</span> de 7
            </div>

            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={!hasNext || loading}
              className="pagination-btn next"
            >
              Siguiente &#10095;
            </button>
          </div>
        </>
      )}
    </section>
  );
}
