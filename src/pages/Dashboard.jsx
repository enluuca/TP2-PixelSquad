import TripulanteCard from '../components/TripulanteCard';
// Acá traemos los datos de todos los integrantes del grupo desde el team.json
import teamData from '../data/team.json'; 

export default function Dashboard() {
  return (
    <section className="dashboard-section">
      <header className="dashboard-header fade-in">
        <h1>Panel de Control</h1>
        <p>Seleccioná un perfil para ver el progreso y stack tecnológico.</p>
      </header>

      {/* Mapeamos el JSON para renderizar una tarjetita por cada compañero de PixelSquad */}
      <div className="dashboard-grid">
        {teamData.map((tripulante) => (
          <TripulanteCard 
            key={tripulante.id}
            id={tripulante.id}
            nombre={tripulante.nombre}
            rol={tripulante.rol}
            avatar={tripulante.avatar}
          />
        ))}
      </div>
    </section>
  );
}