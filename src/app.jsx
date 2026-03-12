import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import Resume from './pages/resume'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/projects">Proyectos</Link>
          </li>
          <li>
            <Link to="/resume">Currículum</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App