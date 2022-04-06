import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "Ui Slice",
  initialState: { sideBar: true, currentTab: "today" },
  reducers: {
    toggleSideBar(state) {
      state.sideBar = !state.sideBar;
    },
    switchCurrentTab(state, action) {
      state.currentTab = action.payload;
    },
  },
});
