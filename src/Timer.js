import React, { useState, useEffect } from "react";
import "./App.css";

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <>
      <h1>Timer</h1>
      <h2>Count : {count}</h2>
    </>
  );
}
export default Timer;
