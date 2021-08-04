import React, { useContext, useState, useEffect } from "react";
import TodoContext from "../Context";

export default function TodoForm() {
  const {
    state: { currentTodo = {} },
    dispatch,
  } = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    console.log("abcd" + currentTodo);
    if (currentTodo.id) {
      setTodo(currentTodo.text);
    } else {
      setTodo("");
    }
  }, [currentTodo.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentTodo.text) {
      dispatch({ type: "UPDATE_TODO", payload: todo });
    } else {
      dispatch({ type: "ADD_TODO", payload: todo });
    }
    console.log("todo :- " + todo);
    setTodo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
        />
      </form>
    </>
  );
}
