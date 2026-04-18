import { useSelector } from "react-redux";
import { useState } from "react";

import ProjectFilter from "../components/project/ProjectFilter";
import ProjectList from "../components/project/ProjectList";

function Projects() {
  const projects = useSelector((state) => state.projects.list);

  const [filters, setFilters] = useState({
    search: "",
    status: "All",
    sort: "asc",
  });

  // Filtering
  let filtered = projects.filter((p) =>
    p.name.toLowerCase().includes(filters.search.toLowerCase()),
  );

  if (filters.status !== "All") {
    filtered = filtered.filter((p) => p.status === filters.status);
  }

  // Sorting
  filtered = [...filtered].sort((a, b) =>
    filters.sort === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name),
  );

  return (
    <div>
      <h3 className="mb-3">Projects</h3>

      <ProjectFilter onFilterChange={setFilters} />

      <ProjectList projects={filtered} />
    </div>
  );
}

export default Projects;
