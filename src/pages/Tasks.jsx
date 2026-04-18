import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import TaskForm from "../components/task/TaskForm";
import TaskFilter from "../components/task/TaskFilter";
import TaskTable from "../components/task/TaskTable";
import TaskCard from "../components/task/TaskCard";
import Pagination from "../components/common/Pagination";
import Modal from "../components/common/Modal";
import Toast from "../components/common/Toast";

import useDebounce from "../hooks/useDebounce";

import {
  addTask,
  toggleTask,
  deleteTask,
  editTask,
  fetchTasks,
} from "../redux/slices/taskSlice";

const PER_PAGE = 5;

function Tasks() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.list || []);

  // 🔍 search + debounce
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);

  // 🎯 filter
  const [status, setStatus] = useState("All");

  // 📄 pagination
  const [page, setPage] = useState(1);

  // ✏️ edit modal
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  // 🔔 toast
  const [toast, setToast] = useState({
    show: false,
    message: "",
  });

  // 🚀 fetch tasks ONCE
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // 🔍 filtering
  let filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  if (status !== "All") {
    filtered = filtered.filter((t) =>
      status === "Completed" ? t.completed : !t.completed,
    );
  }

  // 📄 pagination logic
  const start = (page - 1) * PER_PAGE;
  const paginated = filtered.slice(start, start + PER_PAGE);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);

  // ➕ Add task
  const handleAdd = (data) => {
    dispatch(addTask(data));
    showToast("Task added ✅");
  };

  // 🔁 Toggle
  const handleToggle = (id) => {
    dispatch(toggleTask(id));
    showToast("Status updated 🔄");
  };

  // ❌ Delete
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    showToast("Task deleted ❌");
  };

  // ✏️ Edit open
  const handleEdit = (task) => {
    setEditData(task);
    setShowModal(true);
  };

  // 💾 Save edit
  const handleSave = () => {
    dispatch(editTask(editData));
    setShowModal(false);
    showToast("Task updated ✏️");
  };

  // 🔔 Toast helper
  const showToast = (msg) => {
    setToast({ show: true, message: msg });
  };

  return (
    <div>
      <h3 className="mb-3">Tasks</h3>

      {/* Add */}
      <TaskForm onAdd={handleAdd} />

      {/* Filter */}
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

      {/* Desktop Table */}
      <div className="d-none d-md-block">
        <TaskTable
          tasks={paginated}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>

      {/* Mobile Cards */}
      <div className="d-md-none">
        {paginated.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination page={page} total={totalPages} setPage={setPage} />

      {/* ✏️ Edit Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Edit Task">
        <input
          className="form-control mb-3"
          value={editData?.title || ""}
          onChange={(e) => setEditData({ ...editData, title: e.target.value })}
        />

        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </Modal>

      {/* 🔔 Toast */}
      <Toast
        show={toast.show}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
}

export default Tasks;
