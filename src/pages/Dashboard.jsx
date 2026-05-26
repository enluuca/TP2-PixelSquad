import TripulanteCard from '../components/TripulanteCard';
// Importamos el JSON que creamos antes
import teamData from '../data/team.json'; 

export default function Dashboard() {
  return (
    <section className="dashboard-section">
      <header className="dashboard-header fade-in">
        <h1>Panel de Control</h1>
        <p>Seleccioná un perfil para ver el progreso y stack tecnológico.</p>
      </header>

      {/* Grilla dinámica de tarjetas */}
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