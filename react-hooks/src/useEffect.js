// Getting started with react hooks..
import React, { useState, useEffect } from "react";

function WindowSizeList({ url }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [items, setItems] = useState([]);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <>
      <div>Window Width: {windowWidth}</div>
      {items.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </>
  );
}
export default WindowSizeList;
