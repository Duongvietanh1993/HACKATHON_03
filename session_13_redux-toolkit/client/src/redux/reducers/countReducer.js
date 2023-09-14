import { ACT_DECREASE, ACT_INCREASE } from "../constrains";

const initialState = 0;
export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACT_INCREASE:
      return state + 1;
    case ACT_DECREASE:
      return state - 1;
    default:
      return state;
  }
};
