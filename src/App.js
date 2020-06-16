import React from "react";
import "./styles.css";
import Select from "./Select";

export default function App() {
  const toTest = (val) => {
    console.log("Test worked");
    console.log(val);
  };

  return (
    <div className="App">
      <Select test={toTest} />
    </div>
  );
}
