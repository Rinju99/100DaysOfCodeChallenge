// Getting started with react hooks..
import React, { useState } from "react";

function App() {
  const [currentState, counter] = useState(0);

  function subtract() {
    counter((currentVal) => --currentVal);
  }

  function add() {
    counter((currentVal) => ++currentVal);
  }

  return (
    <>
      <button onClick={subtract}>-</button>
      <span>{currentState}</span>
      <button onClick={add}>+</button>
    </>
  );
}

export default App;
