import React, { useState, useEffect } from "react";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return <div>{windowWidth}</div>;
}
