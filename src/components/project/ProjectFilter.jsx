import { useState, useEffect } from "react";

function ProjectFilter({ onFilterChange }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    onFilterChange({ search, status, sort });
  }, [search, status, sort]);

  return (
    <div className="card p-3 mb-3 d-flex gap-2 flex-row flex-wrap">
      <input
        className="form-control"
        placeholder="Search project..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="form-select w-auto"
        onChange={(e) => setStatus(e.target.value)}>
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        className="form-select w-auto"
        onChange={(e) => setSort(e.target.value)}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
}

export default ProjectFilter;
