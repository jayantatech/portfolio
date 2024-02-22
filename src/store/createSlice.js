import { createSlice } from "@reduxjs/toolkit";
import home from "../assets/content";

const homeSlice = createSlice({
  name: home,
  initialState: {
    scroll: 0,
  },
  reducers: {
    setHome: (state, action) => {
      state.scroll = action.payload;
    },
  },
});

export const { setHome } = homeSlice.actions;
export default homeSlice.reducer;
