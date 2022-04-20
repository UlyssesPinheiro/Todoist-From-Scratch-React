import { createSlice } from "@reduxjs/toolkit";

export const userTasks = createSlice({
  name: "User Tasks",
  initialState: { allTasks: [] },
  reducers: {
    addTask(state, action) {
      state.allTasks.push(action.payload);
    },
    editTask(state, action) {},
    deleteTask(state, action) {},
  },
});
