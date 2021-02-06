import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { rabbit: state.rabbit + 1 };
    case "REMOVE":
      return { rabbit: state.rabbit - 1 };
    case "RESET":
      return { rabbit: 1 };
    default:
      return state;
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, {
    rabbit: 1,
  });
  return (
    <>
      <h1>{"🐇".repeat(state.rabbit)}</h1>
      <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
      <button onClick={() => dispatch({ type: "REMOVE" })}>REMOVE</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </>
  );
}
