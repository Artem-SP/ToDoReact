import React, { useState } from "react";
import ProrTypes from "prop-types";
//import Context from "../context";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  return {
    bind: { value, onChange: (event) => setValue(event.target.value) },
    clear: () => setValue(""),
    value: () => value
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
      // setValue("");
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

AddTodo.ProrTypes = { onCreate: ProrTypes.func.isRequired };
export default AddTodo;
