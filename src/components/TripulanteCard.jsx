import { Link } from 'react-router-dom';

export default function TripulanteCard({ id, nombre, rol, avatar }) {
  // Función para resolver la ruta de la imagen sin que Vite se confunda
  const getAvatarUrl = () => {
    // Si no hay avatar, devuelve uno genérico 
    if (avatar.startsWith('http')) return avatar;
    
    return new URL(`../assets/${avatar}`, import.meta.url).href;
  };

  return (
    <article className="card fade-in">
      <div className="card-image-container">
        <img 
          src={getAvatarUrl()} 
          alt={`Avatar de ${nombre}`} 
          className="card-avatar"
        />
      </div>
      <div className="card-content">
        <h3>{nombre}</h3>
        <p className="rol">{rol}</p>
        
        {/* Este botón nos llevará dinámicamente a /perfil/enzo o /perfil/pablo */}
        <Link to={`/perfil/${id}`} className="btn-ver-perfil">
          Ver perfil
        </Link>
      </div>
    </article>
  );
}