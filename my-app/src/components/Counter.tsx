
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { decrement, increment , incrementByAmont , incrementAsyn} from "../state/counter/counterSlice.ts";

const Counter = () => {
  const count = useSelector((state : RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>();

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

            <button onClick={() => dispatch(incrementAsyn(20))}>
                Increment Async
            </button>
        </div>
    </div>
  )
};
export default Counter