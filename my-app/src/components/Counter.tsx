
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { decrement, increment , incrementByAmont } from "../state/counter/counterSlice.ts";

const Counter = () => {
  const count = useSelector((state : RootState) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div>
        <h2>{count}</h2>
        <div>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={()=> dispatch(decrement())}>
                Decrement
            </button>

            <button onClick={() => dispatch(incrementByAmont(10))}>
                Increment By Amount
            </button>
        </div>
    </div>
  )
};
export default Counter