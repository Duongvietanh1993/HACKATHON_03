import { createSlice } from "@reduxjs/toolkit";

export const randomSlice = createSlice({
  name: "random",
  initialState: [],
  reducers: {
    random: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { random } = randomSlice.actions;
export default randomSlice.reducer;
