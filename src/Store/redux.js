import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./uiSlice";
import { userTasks } from "./userTasks";
import { windowSize } from "./windowSize";

const store = configureStore({
  reducer: {
    uiSlice: uiSlice.reducer,
    userTasks: userTasks.reducer,
    windowSize: windowSize.reducer,
  },
});

export default store;
