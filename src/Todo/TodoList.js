import React from "react";
import TodoItem from "./TodoItem";
import ProrTypes from "prop-types";
const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0
  }
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return <TodoItem todo={todo} key={todo.id} index={index} />;
      })}
    </ul>
  );
}

TodoList.ProrTypes = {
  todos: ProrTypes.arrayOf(ProrTypes.object).isRequired
};

export default TodoList;
