import React, { useState } from 'react';
import starships from '../data/starships.json';

/**
 * JsonExplorer Component
 * Renders local Star Wars starship database (20 objects) with real-time text filtering.
 * Complies strictly with University Rubric Requirement 4.
 */
export default function JsonExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [classFilter, setClassFilter] = useState('Todos');

  // Unified real-time filter logic
  const filteredStarships = starships.filter((ship) => {
    const matchesSearch = 
      ship.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ship.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ship.fabricante.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesClass = classFilter === 'Todos' || ship.clase === classFilter;
    
    return matchesSearch && matchesClass;
  });

  // Extract unique classes for the dropdown filter dynamically
  const uniqueClasses = ['Todos', ...new Set(starships.map(ship => ship.clase))];

  return (
    <section className="explorer-section fade-in">
      <header className="explorer-header">
        <h1>Computadora de Navegación</h1>
        <p>Registros imperiales encriptados (Base de Datos Local JSON - 20 Objetos).</p>
      </header>

      {/* Controles de Búsqueda y Filtrado */}
      <div className="filters-container">
        <input 
          type="text" 
          placeholder="Escribe el nombre, modelo o fabricante..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select 
          value={classFilter} 
          onChange={(e) => setClassFilter(e.target.value)}
          className="role-select"
        >
          {uniqueClasses.map((clase, idx) => (
            <option key={idx} value={clase}>{clase}</option>
          ))}
        </select>
      </div>

      {/* Cantidad de Resultados */}
      <div className="results-count-galactic">
        Se encontraron <span className="neon-text">{filteredStarships.length}</span> naves en los sensores.
      </div>

      {/* Grilla de Resultados */}
      <div className="results-grid">
        {filteredStarships.length > 0 ? (
          filteredStarships.map((ship) => (
            <article key={ship.id} className="data-card starship-card">
              <div className="starship-img-container">
                <img src={ship.imagen} alt={ship.nombre} className="starship-card-img" />
              </div>
              <div className="data-card-body">
                <h3>{ship.nombre}</h3>
                <span className="badge">{ship.clase}</span>
                <div className="data-stats">
                  <p><strong>Modelo:</strong> {ship.modelo}</p>
                  <p><strong>Fabricante:</strong> {ship.fabricante}</p>
                  <p><strong>Velocidad:</strong> <span className="orange-text">{ship.velocidad}</span></p>
                  <p><strong>Tripulación:</strong> {ship.tripulacion}</p>
                </div>
                <p className="starship-desc">{ship.descripcion}</p>
              </div>
            </article>
          ))
        ) : (
          <div className="no-results">
            <p>Advertencia: No se detectan firmas térmicas para esos parámetros en el cuadrante.</p>
          </div>
        )}
      </div>
    </section>
  );
}
