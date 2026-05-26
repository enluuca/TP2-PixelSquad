import { NavLink } from 'react-router-dom';
import isoTipo from '../assets/iso-tipo.png'; // Asegurate de tener estas imágenes en src/assets
import logoTipo from '../assets/logo-tipo.png';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logos */}
      <div className="sidebar-logo-container">
        <picture className="navbar-section-picture">
          <img src={isoTipo} alt="Marca PixelSquad" className="iso-tipo" />
        </picture>
        <picture className="navbar-section-picture">
          <img src={logoTipo} alt="Logotipo PixelSquad" className="logo-tipo" />
        </picture>
      </div>

      {/* Menú Principal */}
      <nav className="menu-principal">
        <ul>
          <li>
            {/* NavLink permite saber si la ruta está activa para pintarla de otro color */}
            <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/bitacora" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Bitácora
            </NavLink>
          </li>
          <li>
            <NavLink to="/explorador" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Explorador
            </NavLink>
          </li>
          <li>
            <NavLink to="/galeria" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Galería
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}