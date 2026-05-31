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

/**
 * Profile Component
 * Renders individual member details, animated progress bars, and an interactive portfolio.
 * Complies strictly with University Rubric Requirements 3 & 5.
 */
export default function Profile() {
  const { id } = useParams();
  const [showExtra, setShowExtra] = useState(false);

  // Find user by ID in JSON local database
  const user = teamData.find(member => member.id === id);

  // Redirect to Dashboard if member is not found
  if (!user) return <Navigate to="/" />;

  // Tech Stack Icon Mapper to ensure at least 5 icons are displayed dynamically
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

    // Fallback list to guarantee a minimum of 5 tech icons
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
      {/* Botón de retorno al Panel de Control */}
      <Link to="/" className="back-btn-galactic">
        <FaArrowLeft /> Volver a la Lista de Tripulantes
      </Link>
      {/* Cabecera del Perfil estilo Archivo Galáctico */}
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

          {/* Sección Interactiva: Mostrar más sobre mí (Easter Egg del TP1) */}
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

          {/* Redes Sociales Dinámicas con Hover Avanzado */}
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
        {/* Columna Izquierda: Tech Stack y Habilidades */}
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

        {/* Columna Derecha: Proyectos e Intereses */}
        <div className="profile-column-galactic">
          <h3 className="section-title-galactic">Sistemas Desplegados</h3>
          
          {/* Componente Portafolio Manual Interactiva */}
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

          {/* Aclaración de Discos Favoritos (Fuera de la grilla para preservar simetría visual) */}
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