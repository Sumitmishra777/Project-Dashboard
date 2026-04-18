function ProjectCard({ project }) {
  return (
    <div className="card p-3 shadow-sm">
      <h5>{project.name}</h5>

      <p className="text-muted">{project.desc}</p>

      <p>
        <strong>Tasks:</strong> {project.tasks}
      </p>

      <span
        className={`badge ${
          project.status === "Completed" ? "bg-success" : "bg-primary"
        }`}>
        {project.status}
      </span>
    </div>
  );
}

export default ProjectCard;
