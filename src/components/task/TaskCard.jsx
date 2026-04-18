function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="card p-3">
      <h6>{task.title}</h6>

      <span className={`badge ${task.completed ? "bg-success" : "bg-warning"}`}>
        {task.completed ? "Completed" : "Pending"}
      </span>

      <div className="mt-2">
        <button
          className="btn btn-sm btn-primary me-2"
          onClick={() => onToggle(task.id)}>
          Toggle
        </button>

        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
