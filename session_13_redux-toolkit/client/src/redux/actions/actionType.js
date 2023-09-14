import { ACT_DECREASE, ACT_INCREASE, ACT_RANDOM } from "../constrains";

export const act_increase = () => {
  return {
    type: ACT_INCREASE,
  };
};

export const act_decrease = () => {
  return {
    type: ACT_DECREASE,
  };
};

export const act_random = (number) => {
    return{
        type: ACT_RANDOM,
        payload: number
    }
}