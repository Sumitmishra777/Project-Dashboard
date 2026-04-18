import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { toggleTask, deleteTask } from "../redux/slices/taskSlice";

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const task = useAppSelector((state) =>
    state.tasks.list.find((t) => t.id === Number(id)),
  );

  // ❌ If task not found
  if (!task) {
    return <h4 className="text-center mt-5">Task not found</h4>;
  }

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="card p-4 shadow">
        <h3>{task.title}</h3>

        <p className="text-muted mt-2">
          <strong>User:</strong> {task.user || "N/A"}
        </p>

        <p>
          <strong>Date:</strong> {task.date || "N/A"}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          <span
            className={`badge ${task.completed ? "bg-success" : "bg-warning"}`}>
            {task.completed ? "Completed" : "Pending"}
          </span>
        </p>

        <div className="mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch(toggleTask(task.id))}>
            Toggle Status
          </button>

          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(deleteTask(task.id));
              navigate("/tasks");
            }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
