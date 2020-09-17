import React, {useEffect} from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/Addtodo";
import Loader from './loader'

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [ loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todos => {
      setTimeout(() => {
      setTodos(todos)
      }, 2000)
    })
  }, [])



  function toggleTodo(id) {
    //console.log("todo id form App.js", id);
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

        {loading && <Loader/>}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p> No todos !</p>
        )}
      </div>
    </Context.Provider>
  );
}
