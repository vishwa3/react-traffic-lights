import React, { useState, useEffect /* useRef */ } from "react";
import "./App.css";

const config = {
  red: {
    duration: 4000,
    next: "green",
  },
  yellow: {
    duration: 500,
    next: "red",
  },
  green: {
    duration: 3000,
    next: "yellow",
  },
};

export default function App() {
  // const intervalRef = useRef(null);
  const [signalState, setSignalState] = useState("red");

  useEffect(() => {
    const { duration, next } = config[signalState];
    const id = setTimeout(() => {
      /* if (signalState < 3) {
        console.log("if");
        setSignalState(signalState + 1);
      } else {
        console.log("else");
        setSignalState(1);
      } */
      /* setSignalState((prevSignalState) => {
        if (prevSignalState === "red") return "green";
        if (prevSignalState === "green") return "yellow";
        return "red";
      }); */
      setSignalState(next);
    }, duration);

    return () => clearInterval(id);
  }, [signalState]);
  return (
    <div className="app_container">
      <div className="signal_container">
        <div className={`signal ${signalState === "red" ? "red" : ""}`}></div>
        <div
          className={`signal ${signalState === "yellow" ? "yellow" : ""}`}
        ></div>
        <div
          className={`signal ${signalState === "green" ? "green" : ""}`}
        ></div>
      </div>
    </div>
  );
}
