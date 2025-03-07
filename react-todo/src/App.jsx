// src/App.jsx
import React from "react";
import TodoList from "./TodoList";  // ✅ Ensure correct import
import TodoList from "./components/TodoList"; // ✅ Correct import path

function App() {
  return (
    <div className="App">
      <h1>My Todo App</h1>
      <TodoList />  {/* ✅ Make sure TodoList is used here */}
    </div>
  );
}

export default App;
