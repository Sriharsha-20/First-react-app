import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.slice(0, 15));
      });

    return () => {
      alert("cleanup worked");
    };
  }, []);

  return (
    <div style={{ width: "450px", margin: "20px auto" }}>
      <h2 style={{ textAlign: "center" }}>Todo List</h2>

      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodosList;
