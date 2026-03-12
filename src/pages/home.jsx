import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Bienvenido a mi portfolio</h1>
      <p>Hola, soy un desarrollador web. En esta página puedes ver mis proyectos y mi currículum.</p>

      <Link to="/projects">Ver proyectos</Link>
      <br />
      <Link to="/resume">Ver currículum</Link>
    </div>
  )
}

export default Home