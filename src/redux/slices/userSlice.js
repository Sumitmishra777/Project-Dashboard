import { createSlice } from "@reduxjs/toolkit";

// Load user from localStorage
const savedUser = JSON.parse(localStorage.getItem("user"));

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: savedUser || null,
    isAuthenticated: !!savedUser,
  },

  reducers: {
    // ✅ LOGIN
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    // ✅ LOGOUT
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;

      localStorage.removeItem("user");
    },
  },
});

// ✅ IMPORTANT EXPORT
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
