import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(4);
  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }
  function add() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <>
      <button onClick={subtract}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
    </>
  );
}

export default App;
