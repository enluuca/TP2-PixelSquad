import React from 'react';
import { NavLink } from 'react-router-dom';
import isoTipo from '../assets/iso-tipo.png';
import logoTipo from '../assets/logo-tipo.png';

// Este componente es el menú lateral (o cabecera responsive).
// Sirve para mostrar los logos del grupo y los links para movernos por toda la app.
export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Acá cargamos las imágenes del logo e isotipo de nuestro equipo (PixelSquad) */}
      <div className="sidebar-logo-container">
        <picture className="navbar-section-picture">
          <img src={isoTipo} alt="Marca PixelSquad" className="iso-tipo" />
        </picture>
        <picture className="navbar-section-picture">
          <img src={logoTipo} alt="Logotipo PixelSquad" className="logo-tipo" />
        </picture>
      </div>

      {/* La botonera principal con los NavLinks de React Router */}
      <nav className="menu-principal">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Inicio (Tripulantes)
            </NavLink>
          </li>
          <li>
            <NavLink to="/explorador" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Naves (Local)
            </NavLink>
          </li>
          <li>
            <NavLink to="/api-explorer" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Planetas (API)
            </NavLink>
          </li>
          <li>
            <NavLink to="/galeria" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Galería
            </NavLink>
          </li>
          <li>
            <NavLink to="/bitacora" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Bitácora
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}