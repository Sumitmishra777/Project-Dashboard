import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  if (!projects.length) {
    return <p>No projects found</p>;
  }

  return (
    <div className="row g-3">
      {projects.map((project) => (
        <div key={project.id} className="col-md-4">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
