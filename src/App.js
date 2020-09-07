import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    { id: 1, completed: false, title: "to by bread" },
    { id: 2, completed: false, title: "to by butter" },
    { id: 3, completed: false, title: "to by milk" }
  ];
  return (
    <div className="wrapper">
      <h1>React Totorial</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
