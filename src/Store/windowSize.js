import { createSlice } from "@reduxjs/toolkit";

export const windowSize = createSlice({
  name: "Window Size",
  initialState: { windowSmaller: false },
  reducers: {
    setSmaller(state) {
      state.windowSmaller = true;
    },
    setLarger(state) {
      state.windowSmaller = false;
    },
  },
});
