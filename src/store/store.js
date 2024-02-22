import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./createSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
