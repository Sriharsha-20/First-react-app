import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [results, setResults] = useState([]);

  const handleCalculate = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (isNaN(n1) || isNaN(n2)) return;

    let result;
    let symbol;

    if (operation === "add") {
      result = n1 + n2;
      symbol = "+";
    } else if (operation === "subtract") {
      result = n1 - n2;
      symbol = "-";
    } else if (operation === "multiply") {
      result = n1 * n2;
      symbol = "×";
    }

    const output = `${n1} ${symbol} ${n2} = ${result}`;
    setResults((prev) => [...prev, output]);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
      }}
    >
      <div
        style={{
          width: "360px",
          padding: "25px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h2>Basic Calculator</h2>

        {/* Inputs in same line */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "12px",
          }}
        >
          <input
            type="number"
            value={num1}
            placeholder="First number"
            onChange={(e) => setNum1(e.target.value)}
            style={{
              width: "50%",
              padding: "8px",
            }}
          />

          <input
            type="number"
            value={num2}
            placeholder="Second number"
            onChange={(e) => setNum2(e.target.value)}
            style={{
              width: "50%",
              padding: "8px",
            }}
          />
        </div>

        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "12px",
          }}
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
        </select>

        <button
          onClick={handleCalculate}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Perform Action
        </button>

        <div style={{ marginTop: "15px", textAlign: "left" }}>
          <h4>Results:</h4>
          {results.map((item, index) => (
            <p key={index} style={{ margin: "4px 0" }}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
