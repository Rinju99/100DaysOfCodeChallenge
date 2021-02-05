import React, { useState, useMemo } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [fibLength, setFibLength] = useState(10);

  const counter = () => {
    setCount(count + 1);
  };

  const fib = useMemo(() => {
    const t1 = performance.now();
    const result = [1, 1];
    for (let i = 2; i < fibLength; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    const t2 = performance.now();
    console.log(`calculation time ${t2 - t1}ms`);
    return result;
  }, [fibLength]);

  return (
    <>
      <button onClick={counter}>{count}</button>
      <hr />
      <input
        value={fibLength}
        onChange={(i) => setFibLength(Number(i.target.value))}
      />
      <p>Number of Sequence: {fibLength}</p>
      <p>{fib.join(" --> ")}</p>
    </>
  );
}
