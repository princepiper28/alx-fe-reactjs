import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

test("renders the initial todo list", () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a project/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText(/add new todo/i);
  const addButton = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "Write Tests" } });
  fireEvent.click(addButton);

  expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
});

test("toggles a todo item", () => {
  render(<TodoList />);

  const todoItem = screen.getByText(/Learn React/i);
  fireEvent.click(todoItem);

  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo item", async () => {
  render(<TodoList />);
  
  const deleteButton = screen.getAllByText(/❌/i); // Get all delete buttons
  fireEvent.click(deleteButton[0]);  // Click the first delete button

  await waitFor(() =>
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument()
  );
  await waitFor(() => {
    const deletedItem = screen.queryByText(/Learn React/i);
    expect(deletedItem).toHaveStyle("text-decoration: line-through");
  });
});
