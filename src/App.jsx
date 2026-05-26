import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Explorer from './pages/Explorer'; // <-- 1. TIENE QUE ESTAR ESTA LÍNEA

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/perfil/:id" element={<Profile />} />
            <Route path="/explorador" element={<Explorer />} /> 

            <Route path="/bitacora" element={<h1>Bitácora de Proyecto</h1>} />
            <Route path="/galeria" element={<h1>Galería Interactiva</h1>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;