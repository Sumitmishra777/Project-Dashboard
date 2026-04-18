import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { path: "/", name: "Dashboard" },
    { path: "/tasks", name: "Tasks" },
    { path: "/projects", name: "Projects" },
  ];

  return (
    <div
      className="bg-dark text-white p-3"
      style={{ width: "220px", minHeight: "100vh" }}
    >
      <h4 className="mb-4">🚀 Dashboard</h4>

      {menu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`d-block mb-2 p-2 rounded text-white text-decoration-none ${
            location.pathname === item.path
              ? "bg-primary"
              : "bg-dark"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;