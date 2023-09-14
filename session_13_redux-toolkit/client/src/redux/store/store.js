import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../useSlices/countSlice";
import randomSlice from "../useSlices/randomSlice";
import productSlice from "./../useSlices/productSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    count: countSlice,
    randomNumber: randomSlice,
    product: productSlice,
  },
  middleware:[thunk]
});
