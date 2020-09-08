import React from "react";
import TodoList from "./Todo/TodoList";

export default function App() {
  const todos = [
    { id: 1, completed: false, title: "to by bread" },
    { id: 2, completed: false, title: "to by butter" },
    { id: 3, completed: false, title: "to by milk" }
  ];

  function toggleTodo(id) {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }
  return (
    <div className="wrapper">
      <h1>React Totorial</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}
