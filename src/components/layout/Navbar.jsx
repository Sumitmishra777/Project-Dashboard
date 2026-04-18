import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {
  return (
    <div
      className={`bg-dark text-white p-3 position-fixed top-0 start-0 h-100`}
      style={{
        width: "220px",
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "0.3s",
        zIndex: 1000,
      }}>
      <h5 className="mb-4">🚀 Menu</h5>

      <Link className="d-block text-white mb-2" to="/">
        Dashboard
      </Link>
      <Link className="d-block text-white mb-2" to="/tasks">
        Tasks
      </Link>
      <Link className="d-block text-white" to="/projects">
        Projects
      </Link>
    </div>
  );
}

export default Sidebar;
