import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/Addtodo";

export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "to by bread" },
    { id: 2, completed: false, title: "to by butter" },
    { id: 3, completed: false, title: "to by milk" }
  ]);

  function toggleTodo(id) {
    console.log("todo id form App.js", id);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className="wrapper">
        <h1>React Totorial</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p> No todos !</p>
        )}
      </div>
    </Context.Provider>
  );
}
