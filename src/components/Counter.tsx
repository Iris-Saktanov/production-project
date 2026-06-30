import { useState } from "react";
import classes from "./Counter.module.scss";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={increment}>
        +
      </button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
