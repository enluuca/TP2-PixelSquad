import React from 'react';
import { NavLink } from 'react-router-dom';
import isoTipo from '../assets/iso-tipo.png';
import logoTipo from '../assets/logo-tipo.png';

/**
 * Sidebar Component
 * Fixed side navigation displaying the brand logo and links to all application routes.
 * Complies with TP2 Navigation and Branding guidelines.
 */
export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Isologotipo de PixelSquad */}
      <div className="sidebar-logo-container">
        <picture className="navbar-section-picture">
          <img src={isoTipo} alt="Marca PixelSquad" className="iso-tipo" />
        </picture>
        <picture className="navbar-section-picture">
          <img src={logoTipo} alt="Logotipo PixelSquad" className="logo-tipo" />
        </picture>
      </div>

      {/* Menú Principal de Comando */}
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