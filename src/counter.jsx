import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3>{count}</h3>
      <button 
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;