import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_decrease, act_increase } from "../redux/actions/actionType";
import { increase, decrease } from "../redux/useSlices/countSlice";

export default function Count() {
  const dispatch = useDispatch();
  const count = useSelector((c) => c.count.value);
  console.log(count);
  console.log("count", count);
  const handleIncrese = () => {
    dispatch(increase());
  };

  const handleDecrese = () => {
    dispatch(decrease());
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrese}>Increse</button>
      <button onClick={handleDecrese}>Decrese</button>
    </div>
  );
}
