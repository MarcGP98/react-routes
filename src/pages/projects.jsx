import projects from '../data/projects'

function Projects() {
  return (
    <div>
      <h1>Mis proyectos</h1>

      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <img src={project.image} alt={project.name} width="200" />
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noreferrer">
            Ver proyecto
          </a>
        </div>
      ))}
    </div>
  )
}

export default Projects