import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "../redux/slices/taskSlice";
import projectReducer from "../redux/slices/projectSlice";
import uiReducer from "../redux/slices/uiSlice";
import userReducer from "../redux/slices/userSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    projects: projectReducer,
    ui: uiReducer,
    user: userReducer,
  },
});
