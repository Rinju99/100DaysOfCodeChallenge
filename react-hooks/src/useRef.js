import React, { useRef } from "react";

export default function App() {
  const inputEl = useRef();
  const click = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={click}>Focus the textfield</button>
    </>
  );
}
