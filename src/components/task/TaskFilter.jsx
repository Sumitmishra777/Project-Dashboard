import { useState, useEffect } from "react";

function TaskFilter({ onFilterChange }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  useEffect(() => {
    onFilterChange({ search, status });
  }, [search, status]);

  return (
    <div className="card p-3 mb-3 d-flex gap-2 flex-row">
      <input
        className="form-control"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="form-select w-auto"
        onChange={(e) => setStatus(e.target.value)}>
        <option>All</option>
        <option>Completed</option>
        <option>Pending</option>
      </select>
    </div>
  );
}

export default TaskFilter;
