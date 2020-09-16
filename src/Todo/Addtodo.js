import React, { useState } from "react";
import ProrTypes from "prop-types";
//import Context from "../context";

function AddTodo(onCreate) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

AddTodo.ProrTypes = { onCreate: ProrTypes.func.isRequired };
export default AddTodo;
