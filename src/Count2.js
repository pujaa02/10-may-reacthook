//using hook
import React, { useState } from "react";
import "./App.css";

function Count2() {
  const [count, setCount] = useState(0);
  const incre = () => {
    setCount(count + 1);
  };
  const decre = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1 id="countdown">Current Count is : {count}</h1>
      <button class="btn" onClick={incre}>
        Increment
      </button>
      <button class="btn" onClick={decre}>
        Decrement
      </button>
   
    </>
  );
}

export default Count2;
