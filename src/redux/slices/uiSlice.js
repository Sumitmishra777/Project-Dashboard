import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
    error: null,
    modalOpen: false,
    modalType: null,
    selectedTask: null,
  },

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },

    openModal: (state, action) => {
      state.modalOpen = true;
      state.modalType = action.payload?.type;
      state.selectedTask = action.payload?.task || null;
    },

    closeModal: (state) => {
      state.modalOpen = false;
      state.modalType = null;
      state.selectedTask = null;
    },
  },
});

// ✅ EXPORTS (IMPORTANT)
export const { setLoading, setError, clearError, openModal, closeModal } =
  uiSlice.actions;

export default uiSlice.reducer;
