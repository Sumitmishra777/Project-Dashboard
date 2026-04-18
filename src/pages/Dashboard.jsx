import { useSelector } from "react-redux";
import StatsCard from "../components/dashboard/StatsCard";
import Charts from "../components/dashboard/Charts";
import ActivityFeed from "../components/dashboard/ActivityFeed";

function Dashboard() {
  const tasks = useSelector((state) => state.tasks.list);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>

      {/* Stats */}
      <div className="row g-3">
        <div className="col-md-4">
          <StatsCard title="Total Tasks" value={total} color="#007bff" />
        </div>

        <div className="col-md-4">
          <StatsCard title="Completed" value={completed} color="#28a745" />
        </div>

        <div className="col-md-4">
          <StatsCard title="Pending" value={pending} color="#ffc107" />
        </div>
      </div>

      {/* Charts + Activity */}
      <div className="row">
        <div className="col-md-6">
          <Charts />
        </div>

        <div className="col-md-6">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;