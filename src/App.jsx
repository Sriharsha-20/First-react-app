import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <button
        onClick={() => setShowTodos(false)}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        Unmount Todos
      </button>

      {showTodos && <TodoList />}
    </div>
  );
}

export default App;
