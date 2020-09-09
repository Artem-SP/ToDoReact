import React from "react";
import ProrTypes from "prop-types";
//import { findByLabelText } from "@testing-library/react";

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
  console.log("todo", todo);
  return (
    <li style={styles.li}>
      <span>
        <input type="checkbox" style={styles.input} onChange={() => todo.id} />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className="rm">&times;</button>
    </li>
  );
}

TodoItem.ProrTypes = {
  todo: ProrTypes.object.isRequired,
  index: ProrTypes.number,
  onChange: ProrTypes.func.isRequired
};
export default TodoItem;
