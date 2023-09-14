import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: { value: 0 },
  reducers: {
    increase: (state, action) => {
      console.log(action);
      state.value += 1;
    },
    decrease: (state, action) => {
      state.value -= 1;
    },
  },
});
// export actions ra ngoài
export const { increase } = countSlice.actions;
export const { decrease } = countSlice.actions;
export default countSlice.reducer;
