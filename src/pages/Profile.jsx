import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import teamData from '../data/team.json';
import ProgressBar from '../components/ProgressBar';
import ProjectCarousel from '../components/ProjectCarousel';
import {
  FaReact, FaNodeJs, FaDatabase, FaGithub, FaLinkedin, FaMapMarkerAlt,
  FaBirthdayCake, FaCode, FaHtml5, FaCss3, FaJava, FaPython, FaJs, FaLaptopCode,
  FaIndustry, FaNetworkWired, FaServer, FaCodeBranch, FaArrowLeft
} from 'react-icons/fa';
import { SiVite, SiSpringboot, SiMysql, SiFigma } from 'react-icons/si';

// Este componente dibuja el perfil completo de cada integrante.
// Carga los datos dinámicos, las barritas animadas, el carrusel de proyectos y los gustos personales.
// Todo sacado del JSON de forma automática según el ID de la URL.
export default function Profile() {
  const { id } = useParams();
  const [showExtra, setShowExtra] = useState(false);

  // Buscamos al integrante por su ID dentro de nuestro archivo JSON local
  const user = teamData.find(member => member.id === id);

  // Si por alguna razón la URL tiene un ID inventado o que no existe, lo mandamos al dashboard
  if (!user) return <Navigate to="/" />;

  // Mapeador de tecnologías a iconos para mostrar los logos de las tecnologías del integrante
  const getTechIcons = (habilidades) => {
    const iconMap = {
      'react': <FaReact key="react" title="React" />,
      'node.js': <FaNodeJs key="node" title="Node.js" />,
      'node.js / express': <FaNodeJs key="node" title="Node.js / Express" />,
      'html5 / css3': [
        <FaHtml5 key="html" title="HTML5" />,
        <FaCss3 key="css" title="CSS3" />
      ],
      'c#': <FaCode key="csharp" title="C#" />,
      'c# & .net': <FaCode key="csharp" title="C# & .NET" />,
      'c# / .net': <FaCode key="csharp" title="C# / .NET" />,
      'github': <FaGithub key="github" title="GitHub" />,
      'sql server': <FaDatabase key="sql" title="SQL Server" />,
      'vfp': <FaCode key="vfp" title="Visual FoxPro" />,
      'visual foxpro (vfp)': <FaCode key="vfp" title="Visual FoxPro" />,
      'java': <FaJava key="java" title="Java" />,
      'spring boot': <SiSpringboot key="spring" title="Spring Boot" />,
      'mysql': <SiMysql key="mysql" title="MySQL" />,
      'ux/ui': <SiFigma key="figma" title="UX/UI Design" />,
      'python': <FaPython key="python" title="Python" />,
      'sql': <FaDatabase key="sql" title="SQL" />,
      'javascript': <FaJs key="js" title="JavaScript" />,
      'bases de datos (vfp / sql server)': <FaDatabase key="db" title="Bases de Datos VFP/SQL" />,
      'integración it/ot (erp & plc)': <FaNetworkWired key="itot" title="Integración IT/OT" />,
      'arquitectura mes & plc': <FaIndustry key="mes" title="Arquitectura MES" />,
      'servicios backend (c# / node.js)': <FaServer key="backend" title="Servicios Backend" />,
      'telemetría & reportes iot': <FaLaptopCode key="telemetry" title="Telemetría & Reportes IoT" />,
      'control de versiones (tortoisesvn)': <FaCodeBranch key="svn" title="TortoiseSVN Version Control" />,
      'git & github (repositorios)': <FaGithub key="github" title="Git & GitHub Repositories" />,
      'desarrollo frontend (react / js)': <FaReact key="react" title="React Frontend Core" />
    };

    const icons = [];
    habilidades.forEach(hab => {
      const name = hab.nombre.toLowerCase();
      if (iconMap[name]) {
        if (Array.isArray(iconMap[name])) {
          iconMap[name].forEach(icon => {
            if (!icons.some(i => i.key === icon.key)) icons.push(icon);
          });
        } else {
          if (!icons.some(i => i.key === iconMap[name].key)) icons.push(iconMap[name]);
        }
      }
    });

    // Iconos de relleno para que la grilla siempre tenga al menos 5 logos y no quede un hueco feo en el diseño
    const fallbacks = [
      <FaLaptopCode key="fallback-code" title="Software Development" />,
      <SiVite key="fallback-vite" title="Vite Build Tool" />,
      <FaCode key="fallback-dev" title="Algorithm Design" />,
      <FaDatabase key="fallback-db" title="Data Engineering" />,
      <FaReact key="fallback-react" title="Frontend Frameworks" />
    ];

    let index = 0;
    while (icons.length < 5 && index < fallbacks.length) {
      const currentKey = fallbacks[index].key;
      if (!icons.some(icon => icon.key === currentKey)) {
        icons.push(fallbacks[index]);
      }
      index++;
    }

    return icons;
  };

  return (
    <section key={id} className="profile-section fade-in">
      {/* Botón estilo galáctico para volver a la pantalla de inicio */}
      <Link to="/" className="back-btn-galactic">
        <FaArrowLeft /> Volver a la Lista de Tripulantes
      </Link>
      {/* Cabecera del perfil con la foto y los datos principales del integrante */}
      <header className="profile-header-galactic">
        <div className="profile-avatar-container">
          <img
            src={new URL(`../assets/${user.avatar}`, import.meta.url).href}
            alt={user.nombre}
            className="profile-avatar-img"
          />
        </div>
        <div className="profile-info-galactic">
          <h1>{user.nombre}</h1>
          <h2 className="profile-role-galactic">{user.rol}</h2>

          <div className="personal-details-galactic">
            <span><FaMapMarkerAlt /> {user.ubicacion}</span>
            <span><FaBirthdayCake /> {user.edad} años</span>
          </div>

          <p className="profile-bio-text">{user.bio}</p>

          {/* Sección interactiva: El easter egg del TP1 para ver info extra del integrante */}
          {user.infoExtra && (
            <div className="extra-info-container-galactic">
              <button 
                onClick={() => setShowExtra(!showExtra)} 
                className="boton-sable-galactic"
              >
                {showExtra ? '🔒 Encriptar Registro Secreto' : '✨ Mostrar más sobre mí'}
              </button>
              {showExtra && (
                <div className="info-extra-card-galactic fade-in">
                  <p className="info-extra-text">{user.infoExtra}</p>
                </div>
              )}
            </div>
          )}

          {/* Tarjetitas interactivas para ir a sus redes sociales (GitHub y LinkedIn) */}
          <div className="social-links-galactic">
            <a
              href={user.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn-galactic"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={user.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn-galactic"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      <div className="profile-grid-galactic">
        {/* Columna izquierda: Logos del stack y las barras de progreso animadas */}
        <div className="profile-column-galactic">
          <h3 className="section-title-galactic">Tech Stack</h3>
          <div className="tech-stack-galactic">
            {getTechIcons(user.habilidades)}
          </div>

          <h3 className="section-title-galactic mt-4">Habilidades de Piloto</h3>
          <div className="skills-container-galactic">
            {user.habilidades.map((hab, index) => (
              <ProgressBar
                key={index}
                nombre={hab.nombre}
                nivel={hab.nivel}
              />
            ))}
          </div>
        </div>

        {/* Columna derecha: Carrusel de proyectos e intereses del integrante */}
        <div className="profile-column-galactic">
          <h3 className="section-title-galactic">Sistemas Desplegados</h3>
          
          {/* El componente del carrusel interactivo para ir pasando sus proyectos */}
          <ProjectCarousel proyectos={user.proyectos} />

          <h3 className="section-title-galactic mt-4">Registros de Interés</h3>
          <div className="interests-grid-galactic">
            <div className="interest-card-galactic">
              <h4>🎬 Películas Favoritas</h4>
              <ul>
                {user.intereses.peliculas.map((peli, index) => (
                  <li key={index}>{peli}</li>
                ))}
              </ul>
            </div>
            <div className="interest-card-galactic">
              <h4>🎵 Discos Favoritos</h4>
              <ul>
                {user.intereses.musica.map((disco, index) => (
                  <li key={index}>{disco}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tarjeta destacada de anécdota musical para que ocupe todo el ancho y no rompa la simetría */}
          {user.intereses.musicaSubtitulo && (
            <div className="music-clarification-block-galactic fade-in">
              <p className="music-subtitle-galactic">
                {user.intereses.musicaSubtitulo}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}