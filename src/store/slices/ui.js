import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
  name: "ui",
  initialState: { isLoading: false },
  reducers: {
    updateUI(state, action) {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const uiActions = ui.actions;

export default ui.reducer;
