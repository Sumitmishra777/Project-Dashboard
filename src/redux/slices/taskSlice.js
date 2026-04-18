import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 👉 Load from localStorage safely
const loadTasks = () => {
  try {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveTasks = (tasks) => {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch {}
};

// 👉 API fetch (only if empty)
export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return res.data.slice(0, 20);
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: loadTasks(),
    loading: false,
    error: null,
  },

  reducers: {
    // ➕ Add Task
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        user: action.payload.user || "User",
        date: action.payload.date || new Date().toLocaleDateString(),
      };

      state.list.unshift(newTask);
      saveTasks(state.list);
    },

    // 🔁 Toggle Status
    toggleTask: (state, action) => {
      const task = state.list.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasks(state.list);
      }
    },

    // ✏️ Edit Task
    editTask: (state, action) => {
      const { id, title, user, date } = action.payload;

      const task = state.list.find((t) => t.id === id);
      if (task) {
        task.title = title;
        if (user !== undefined) task.user = user;
        if (date !== undefined) task.date = date;
        saveTasks(state.list);
      }
    },

    // ❌ Delete Task
    deleteTask: (state, action) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
      saveTasks(state.list);
    },

    // 🧹 Clear All
    clearTasks: (state) => {
      state.list = [];
      saveTasks([]);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;

        // 👉 Only load API if localStorage is empty
        if (state.list.length === 0) {
          state.list = action.payload;
          saveTasks(state.list);
        }
      })

      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch tasks";
      });
  },
});

// 👉 Exports
export const { addTask, toggleTask, editTask, deleteTask, clearTasks } =
  taskSlice.actions;

export default taskSlice.reducer;
