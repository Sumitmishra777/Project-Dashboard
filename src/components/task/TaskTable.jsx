function TaskTable({ tasks, onToggle, onDelete }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>

            <td>
              <span
                className={`badge ${
                  task.completed ? "bg-success" : "bg-warning"
                }`}>
                {task.completed ? "Completed" : "Pending"}
              </span>
            </td>

            <td>
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskTable;
