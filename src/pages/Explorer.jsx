import { useState } from 'react';
import datos from '../data/datos.json';

export default function Explorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [generoFilter, setGeneroFilter] = useState('Todos');

  // Lógica de filtrado combinado en tiempo real
  const filteredData = datos.filter((peli) => {
    const coincideTexto = peli.titulo.toLowerCase().includes(searchTerm.toLowerCase());
    const coincideGenero = generoFilter === 'Todos' || peli.genero === generoFilter;
    
    return coincideTexto && coincideGenero;
  });

  return (
    <section className="explorer-section fade-in">
      <header className="explorer-header">
        <h1>Explorador Cinematográfico</h1>
        <p>Base de datos local (JSON). Buscá y filtrá el Top 20 histórico de IMDb.</p>
      </header>

      {/* Controles de Filtrado */}
      <div className="filters-container">
        <input 
          type="text" 
          placeholder="Buscar película por título..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select 
          value={generoFilter} 
          onChange={(e) => setGeneroFilter(e.target.value)}
          className="role-select"
        >
          <option value="Todos">Todos los géneros</option>
          <option value="Drama">Drama</option>
          <option value="Crimen">Crimen</option>
          <option value="Acción">Acción</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Western">Western</option>
          <option value="Biografía">Biografía</option>
        </select>
      </div>

      {/* Grilla de Resultados */}
      <div className="results-grid">
        {filteredData.length > 0 ? (
          filteredData.map((peli) => (
            <article key={peli.id} className="data-card">
              <h3>{peli.titulo}</h3>
              <span className="badge">{peli.genero}</span>
              <div className="data-stats">
                <p><strong>Director:</strong> {peli.director}</p>
                <p><strong>Año:</strong> {peli.año}</p>
                <p><strong>IMDb Rating:</strong> ⭐ {peli.rating}</p>
              </div>
      
            </article>
          ))
        ) : (
          <div className="no-results">
            <p>No se encontraron películas con esos filtros.</p>
          </div>
        )}
      </div>
    </section>
  );
}
