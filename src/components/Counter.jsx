import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counterValue = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increaseCounter = () => dispatch({ type: "INCREMENT_COUNTER" });
  const decreaseCounter = () => dispatch({ type: "DECREMENT_COUNTER" });

  return (
    <div>
      <button onClick={decreaseCounter}>Decrementar - </button>

      {counterValue}

      <button onClick={increaseCounter}> - Incrementar</button>
    </div>
  );
};

export default Counter;
