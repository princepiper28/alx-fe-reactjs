// src/TodoItem.js
import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li
      onClick={() => toggleTodo(todo.id)}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      {todo.text}
      <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>❌</button>
    </li>
  );
};

export default TodoItem;

