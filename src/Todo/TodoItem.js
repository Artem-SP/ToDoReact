import React from "react";
import ProrTypes from "prop-types";
import { findByLabelText } from "@testing-library/react";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padiing: "0.5rem 1rem",
    border: "1px solid",
    borderRadius: "4px",
    marginBottom: "0.5rem"
  }
};

function TodoItem({ todo, index }) {
  return (
    <li style={styles.li}>
      <span>
        <input type="checkbox" />
        <strong>{`${index + 1} `}</strong>
        {todo.title}
      </span>
      <button>&times;</button>
    </li>
  );
}

TodoItem.ProrTypes = {
  todo: ProrTypes.object.isRequired,
  index: ProrTypes.number
};
export default TodoItem;
