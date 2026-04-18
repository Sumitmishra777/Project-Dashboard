import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    list: [
      {
        id: 1,
        name: "Website",
        desc: "Build company website",
        tasks: 5,
        status: "Active",
      },
      {
        id: 2,
        name: "Mobile App",
        desc: "Create mobile application",
        tasks: 8,
        status: "Completed",
      },
      {
        id: 3,
        name: "Dashboard",
        desc: "Admin dashboard",
        tasks: 3,
        status: "Active",
      },
    ],
  },
});

export default projectSlice.reducer;
