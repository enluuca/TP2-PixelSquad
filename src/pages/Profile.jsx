import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import teamData from '../data/team.json';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaLinkedin, FaMapMarkerAlt, FaBirthdayCake, FaCode } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';

export default function Profile() {
    const { id } = useParams();
    const [currentSlide, setCurrentSlide] = useState(0);

    const user = teamData.find(member => member.id === id);

    if (!user) return <Navigate to="/" />;

    const nextSlide = () => setCurrentSlide((prev) => (prev === user.proyectos.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? user.proyectos.length - 1 : prev - 1));

    return (
        <section className="profile-section fade-in">

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

                    <div className="social-links-galactic">
                        <a href="#" className="social-btn-galactic"><FaGithub /> GitHub</a>
                        <a href="#" className="social-btn-galactic"><FaLinkedin /> LinkedIn</a>
                    </div>
                </div>
            </header>

            <div className="profile-grid-galactic">
                {/* Columna Izquierda: Tech Stack y Habilidades */}
                <div className="profile-column-galactic">
                    <h3 className="section-title-galactic">Tech Stack</h3>
                    <div className="tech-stack-galactic">
                        <span className="tech-icon"><FaReact /></span>
                        <span className="tech-icon"><SiVite /></span>
                        <span className="tech-icon"><FaNodeJs /></span>
                        <span className="tech-icon"><FaCode /></span> {/* Ícono universal seguro */}
                        <span className="tech-icon"><FaDatabase /></span>
                    </div>

                    <h3 className="section-title-galactic mt-4">Habilidades de Piloto</h3>
                    <div className="skills-container-galactic">
                        {user.habilidades.map((hab, index) => (
                            <div key={index} className="skill-item-galactic">
                                <div className="skill-info-galactic">
                                    <span className="skill-name">{hab.nombre}</span>
                                    <span className="skill-percentage">{hab.nivel}%</span>
                                </div>
                                <div className="progress-bar-bg">
                                    <div
                                        className="progress-bar-fill"
                                        style={{ '--target-width': `${hab.nivel}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Columna Derecha: Proyectos e Intereses */}
                <div className="profile-column-galactic">
                    <h3 className="section-title-galactic">Sistemas Desplegados</h3>
                    <div className="carousel-container-galactic">
                        <button className="carousel-arrow-btn prev" onClick={prevSlide}>&#10094;</button>
                        <div className="carousel-slide-galactic">
                            <img src={user.proyectos[currentSlide].imagen} alt={user.proyectos[currentSlide].titulo} className="carousel-img-galactic" />
                            <div className="carousel-caption-galactic">
                                <h4>{user.proyectos[currentSlide].titulo}</h4>
                                <p>{user.proyectos[currentSlide].descripcion}</p>
                            </div>
                        </div>
                        <button className="carousel-arrow-btn next" onClick={nextSlide}>&#10095;</button>
                    </div>
                    <div className="carousel-dots-galactic">
                        {user.proyectos.map((_, index) => (
                            <span
                                key={index}
                                className={`dot-galactic ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></span>
                        ))}
                    </div>

                    <h3 className="section-title-galactic mt-4">Registros de Interés</h3>
                    <div className="interests-grid-galactic">
                        <div className="interest-card-galactic">
                            <h4>🎬 Películas Favoritas</h4>
                            <ul>
                                {user.intereses.peliculas.map((peli, index) => <li key={index}>{peli}</li>)}
                            </ul>
                        </div>
                        <div className="interest-card-galactic">
                            <h4>🎵 Discos Favoritos</h4>
                            <ul>
                                {user.intereses.musica.map((disco, index) => <li key={index}>{disco}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}