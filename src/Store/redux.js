import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./uiSlice";

const store = configureStore({
  reducer: {
    uiSlice: uiSlice.reducer,
  },
});

export default store;
