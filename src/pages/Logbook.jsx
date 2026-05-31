import React from 'react';

// Este componente dibuja la Bitácora de la materia.
// Explica por qué pasamos el TP1 a React SPA, documenta los roles del grupo, la metodología Kanban,
// el flujo de Git con ramas, y arma un árbol visual interactivo con todos los componentes del proyecto.
export default function Logbook() {
  return (
    <section className="logbook-section fade-in">
      <header className="explorer-header">
        <h1>Bitácora de Misión</h1>
        <p>Registros de ingeniería sobre la reestructuración arquitectónica, organización y flujo del sistema.</p>
      </header>

      <div className="logbook-layout">
        {/* Bloque 1: Por qué migramos la web a una SPA con React y Vite */}
        <article className="logbook-card-galactic">
          <h2 className="logbook-card-title">💾 Justificación de Migración (HTML a React SPA)</h2>
          <div className="logbook-text-content">
            <p>
              La transición desde una estructura estática multi-página basada en archivos <code>.html</code> tradicionales
              (desarrollada en el TP1) hacia una Single Page Application (SPA) modular bajo <strong>React y Vite</strong>
              responde a pilares clave de ingeniería de software modernos:
            </p>
            <ul>
              <li>
                <strong>Eficiencia de Cómputo e Interfaz (Virtual DOM):</strong> React optimiza las actualizaciones visuales
                calculando diferencias en memoria antes de mutar el DOM real del navegador. Esto elimina los parpadeos de carga
                entre vistas y da una fluidez instantánea imperativa para interfaces avanzadas.
              </li>
              <li>
                <strong>Componentización Reutilizable y Mantenibilidad:</strong> Elementos redundantes del TP1 (tales como la barra
                de navegación, las tarjetas de perfil y los botones) fueron encapsulados en componentes funcionales. Esto reduce
                la duplicación de código en más de un 70%, simplifica la detección de errores y asegura la modularidad del código.
              </li>
              <li>
                <strong>Estado Reactivo Centralizado (React Hooks):</strong> El uso de <code>useState</code> y <code>useEffect</code>
                permite sincronizar estados complejos de forma inmediata, posibilitando búsquedas fluidas en tiempo real,
                carruseles infinitos, animaciones sincronizadas al montaje, y el consumo asíncrono y paginado de APIs externas.
              </li>
              <li>
                <strong>Enrutamiento del Lado del Cliente (React Router DOM):</strong> Sustituir los enlaces estáticos físicos por un
                enrutador virtual nos permite conservar estados globales (como la sesión, temas o música de fondo) sin interrupciones
                al cambiar de panel, imitando la experiencia fluida de una aplicación de escritorio nativa.
              </li>
            </ul>
          </div>
        </article>

        {/* Bloque 2: Cómo nos organizamos, roles del grupo, Trello y GitFlow */}
        <article className="logbook-card-galactic">
          <h2 className="logbook-card-title">👥 Organización Técnica, Roles y Flujo de Trabajo (GitFlow y Kanban)</h2>
          <div className="logbook-text-content">
            <p>
              Durante la evolución de esta SPA, el equipo <strong>PixelSquad</strong> aplicó una metodología de trabajo colaborativo
              simulando un entorno ágil profesional. Dividimos las tareas y responsabilidades según las fortalezas técnicas de cada uno
              para optimizar el desarrollo, coordinando los entregas mediante tableros ágiles y controlando las versiones de forma rigurosa.
              Esto nos permitió integrar los cambios mediante ramas independientes y automatizar el despliegue continuo mediante Vercel sin interrupciones:
            </p>

            <h3 className="logbook-inner-subtitle">Roles del Escuadrón</h3>
            <ul>
              <li>
                <strong>Enzo Giangreco (Frontend & UI/UX):</strong> Responsable principal de la maquetación responsiva, tipografías Sci-Fi,
                paleta de variables CSS, componentes estructurales de navegación (<code>Sidebar</code>) y la unificación estética en <code>index.css</code>.
              </li>
              <li>
                <strong>Pablo Off (Backend & Database Developer):</strong> Coordinador técnico de la gestión e integridad de los datos locales
                (diseño de <code>team.json</code> y <code>starships.json</code>), modelado de estados complejos en React y la integración asíncrona de la API externa (SWAPI).
              </li>
              <li>
                <strong>Alejandro Ramos (Java Developer Trainee):</strong> Encargado de la validación lógica, auditoría de código, aseguramiento de la
                consistencia sintáctica en componentes, y diseño del flujo de datos en el enrutador virtual de <code>App.jsx</code>.
              </li>
              <li>
                <strong>Ivan Faigenbom (UX/UI & Python Developer):</strong> Responsable del prototipado interactivo de componentes visuales (como el Lightbox de la
                Galería y la lógica cíclica de proyectos en el portafolio) y el diseño de la arquitectura jerárquica del Árbol de Renderizado.
              </li>
            </ul>

            <h3 className="logbook-inner-subtitle mt-3">Gestión Ágil con Trello (Kanban)</h3>
            <p>
              Establecimos un tablero <strong>Trello</strong> basado en la metodología Kanban con columnas de: <em>Backlog</em> (Requerimientos de la Rúbrica),
              <em>En Progreso</em> (Hojas de ruta activas), <em>En Revisión / QA</em> (Auditoría de código) e <em>Hecho (Done)</em>. Dividimos las tareas en tarjetas
              con etiquetas temáticas de prioridad y asignaciones claras, realizando reuniones de sincronización semanales virtuales de 15 minutos para resolver bloqueos técnicos.
            </p>

            <h3 className="logbook-inner-subtitle mt-3">Modelo de Ramificación GitFlow</h3>
            <p>
              Para garantizar la estabilidad operativa del servidor local durante el trabajo paralelo, implementamos un flujo de trabajo simplificado de <strong>GitFlow</strong>:
            </p>
            <ul>
              <li>
                <strong>Rama <code>main</code>:</strong> Aloja únicamente las versiones estables consolidadas, listas para su despliegue en Vercel.
              </li>
              <li>
                <strong>Rama <code>develop</code>:</strong> Funciona como el tronco de integración del equipo, donde se fusionan y prueban todas las nuevas características operativas.
              </li>
              <li>
                <strong>Ramas <code>feature/</code>:</strong> Ramificaciones independientes y de corta duración creadas para programar tareas específicas aisladas (ej. <code>feature/progressbar-anims</code>, <code>feature/swapi-explorer</code>). Al terminar, se levantaba un <em>Pull Request (PR)</em> hacia <code>develop</code> que requería la aprobación y revisión de al menos un colega antes de integrarse.
              </li>
            </ul>
          </div>
        </article>

        {/* Bloque 3: Estructura jerárquica de componentes */}
        <article className="logbook-card-galactic">
          <h2 className="logbook-card-title">🌳 Estructura Jerárquica del Sistema</h2>
          <p className="logbook-subtitle">
            Representación esquemática de la jerarquía y flujo de datos de los componentes React en nuestra SPA:
          </p>

          <div className="tree-diagram-container">
            {/* El componente raíz App.jsx */}
            <div className="tree-node root-node">
              <span className="node-type">Raíz</span>
              <h4>App.jsx</h4>
              <p className="node-details">Enrutador y Contenedor Layout</p>
            </div>

            {/* Línea conectora de la estructura */}
            <div className="tree-connector-vertical"></div>

            {/* Nivel 1: Menú lateral fijo y el ruteador principal */}
            <div className="tree-row">
              <div className="tree-node sidebar-node">
                <span className="node-type">Componente</span>
                <h4>Sidebar.jsx</h4>
                <p className="node-details">Menú Navegación Estático</p>
              </div>

              <div className="tree-node routes-node">
                <span className="node-type">Estructura</span>
                <h4>Routes & Route</h4>
                <p className="node-details">Distribuidor de Vistas Virtuales</p>
              </div>
            </div>

            {/* Conectores hacia las distintas páginas */}
            <div className="tree-connector-hub"></div>

            {/* Nivel 2: Todas las páginas enlazadas de la SPA */}
            <div className="tree-row flex-wrap">

              {/* Página de Inicio (Dashboard) y su componente hijo */}
              <div className="tree-node page-node">
                <span className="node-type">Página (/)</span>
                <h4>Dashboard.jsx</h4>
                <p className="node-details">Panel General</p>
                <div className="tree-connector-sub"></div>
                <div className="tree-node child-node">
                  <h4>TripulanteCard.jsx</h4>
                  <p className="node-details">Mapea team.json (x4)</p>
                </div>
              </div>

              {/* Página de Perfil y sus componentes hijos para habilidades y proyectos */}
              <div className="tree-node page-node">
                <span className="node-type">Página (/perfil/:id)</span>
                <h4>Profile.jsx</h4>
                <p className="node-details">Fichas Individuales</p>
                <div className="tree-connector-sub"></div>
                <div className="tree-row sub-row">
                  <div className="tree-node child-node">
                    <h4>ProgressBar.jsx</h4>
                    <p className="node-details">Animación Montaje</p>
                  </div>
                  <div className="tree-node child-node">
                    <h4>ProjectCarousel.jsx</h4>
                    <p className="node-details">Galería Manual Cíclica</p>
                  </div>
                </div>
              </div>

              {/* Buscador de naves con el JSON local */}
              <div className="tree-node page-node">
                <span className="node-type">Página (/explorador)</span>
                <h4>JsonExplorer.jsx</h4>
                <p className="node-details">Buscador Local 20 Naves</p>
                <div className="tree-connector-sub"></div>
                <div className="tree-node child-node">
                  <h4>starships.json</h4>
                  <p className="node-details">Filtro de Texto</p>
                </div>
              </div>

              {/* Buscador de planetas con la API externa */}
              <div className="tree-node page-node">
                <span className="node-type">Página (/api-explorer)</span>
                <h4>ApiExplorer.jsx</h4>
                <p className="node-details">SWAPI Externo</p>
                <div className="tree-connector-sub"></div>
                <div className="tree-node child-node">
                  <h4>Fetch + Page State</h4>
                  <p className="node-details">Asíncrono y Paginado</p>
                </div>
              </div>

              {/* Galería de fotos y su efecto Lightbox */}
              <div className="tree-node page-node">
                <span className="node-type">Página (/galeria)</span>
                <h4>Gallery.jsx</h4>
                <p className="node-details">Muestrario Visual</p>
                <div className="tree-connector-sub"></div>
                <div className="tree-node child-node">
                  <h4>Visor modal + ESC</h4>
                  <p className="node-details">Escuchador del teclado</p>
                </div>
              </div>

              {/* Esta misma página de Bitácora */}
              <div className="tree-node page-node active-node">
                <span className="node-type">Página (/bitacora)</span>
                <h4>Logbook.jsx</h4>
                <p className="node-details">Ficha Técnica Actual</p>
              </div>

            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
