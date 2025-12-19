import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`);
    }
  }, [count]); 
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h2>Counter Application</h2>
      <h1>{count}</h1>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Increase Count
      </button>
    </div>
  );
}

export default Counter;
