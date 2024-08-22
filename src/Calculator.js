import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleAddition = () => setResult(parseFloat(num1) + parseFloat(num2));
  const handleSubtraction = () =>
    setResult(parseFloat(num1) - parseFloat(num2));
  const handleMultiplication = () =>
    setResult(parseFloat(num1) * parseFloat(num2));
  const handleDivision = () => setResult(parseFloat(num1) / parseFloat(num2));

  return (
    <div className="calculator">
      <h1 style={{ color: "blue" }}>Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <div className="buttons">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default Calculator;
