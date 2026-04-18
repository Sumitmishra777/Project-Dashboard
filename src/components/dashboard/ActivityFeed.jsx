import { useSelector } from "react-redux";

function ActivityFeed() {
  const tasks = useSelector((state) => state.tasks.list);

  return (
    <div className="card p-3 mt-4">
      <h5>Recent Activity</h5>

      {tasks.slice(0, 5).map((task) => (
        <div key={task.id} className="border-bottom py-2">
          {task.title}
        </div>
      ))}
    </div>
  );
}

export default ActivityFeed;
