import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import JsonExplorer from './pages/JsonExplorer';
import ApiExplorer from './pages/ApiExplorer';
import Gallery from './pages/Gallery';
import Logbook from './pages/Logbook';

// Este es el componente principal que arranca toda la aplicación.
// Acá armamos el layout general de la página y metemos las rutas de React Router para que sea una SPA.
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* El menú lateral que queda fijo (o arriba si estamos en celu/tablet) */}
        <Sidebar />
        
        {/* Acá adentro se renderiza la vista que elijamos en el menú */}
        <main className="main-content">
          <Routes>
            {/* Pantalla de inicio: panel principal con las tarjetitas del grupo */}
            <Route path="/" element={<Dashboard />} />
            
            {/* Rutas dinámicas para ver el perfil de cada integrante por su ID de team.json */}
            <Route path="/perfil/:id" element={<Profile />} />
            
            {/* El buscador de naves espaciales usando el JSON local con los 20 objetos */}
            <Route path="/explorador" element={<JsonExplorer />} />
            
            {/* El explorador de planetas consumiendo la API externa de Star Wars (SWAPI) */}
            <Route path="/api-explorer" element={<ApiExplorer />} />
            
            {/* Galería de fotos del equipo con efecto lightbox interactivo */}
            <Route path="/galeria" element={<Gallery />} />
            
            {/* Bitácora de desarrollo y el árbol visual de renderizado hecho con HTML y CSS */}
            <Route path="/bitacora" element={<Logbook />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;