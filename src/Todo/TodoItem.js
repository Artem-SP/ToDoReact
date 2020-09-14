import React, { useContext } from "react";

import ProrTypes from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padiing: ".5rem 1rem",
    border: "1px solid",
    borderRadius: "4px",
    marginBottom: ".5rem"
  },
  input: {
    marginRight: "1rem"
  }
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push("done");
    console.log("csasses[]", classes, "classes.length", classes.length);
  }
  return (
    <li style={styles.li}>
      <span className={classes.join("")}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className="rm" onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.prorTypes = {
  todo: ProrTypes.object.isRequired,
  index: ProrTypes.number,
  onChange: ProrTypes.func.isRequired
};
export default TodoItem;
