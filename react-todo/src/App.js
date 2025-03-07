// src/App.js
import React from "react";
import TodoList from "./TodoList"; // ✅ Ensure this is properly imported

function App() {
  return (
    <div>
      <h1>My Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
