import { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    onAdd({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-3">
      <div className="d-flex gap-2">
        <input
          className="form-control"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
}

export default TaskForm;
