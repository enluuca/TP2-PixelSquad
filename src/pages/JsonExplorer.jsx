import React, { useState } from 'react';
import starships from '../data/starships.json';

// Este componente arma el buscador de naves usando el JSON local con las 20 naves.
// Permite buscar por texto (nombre, modelo o fabricante) y filtrar por la clase de nave en tiempo real.
export default function JsonExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [classFilter, setClassFilter] = useState('Todos');

  // Filtramos las naves combinando la barra de búsqueda y el dropdown de clases al mismo tiempo
  const filteredStarships = starships.filter((ship) => {
    const matchesSearch = 
      ship.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ship.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ship.fabricante.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesClass = classFilter === 'Todos' || ship.clase === classFilter;
    
    return matchesSearch && matchesClass;
  });

  // Generamos la lista de clases únicas para cargarlas en el select de filtros dinámicamente
  const uniqueClasses = ['Todos', ...new Set(starships.map(ship => ship.clase))];

  return (
    <section className="explorer-section fade-in">
      <header className="explorer-header">
        <h1>Computadora de Navegación</h1>
        <p>Registros imperiales encriptados (Base de Datos Local JSON - 20 Objetos).</p>
      </header>

      {/* Los controles para filtrar: el input de texto y el select de clases */}
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

      {/* Contador de resultados encontrados en la búsqueda */}
      <div className="results-count-galactic">
        Se encontraron <span className="neon-text">{filteredStarships.length}</span> naves en los sensores.
      </div>

      {/* La grilla donde mostramos las naves filtradas o el aviso de vacío */}
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
