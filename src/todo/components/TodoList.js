import React, { useContext } from "react";
import TodoContext from "../Context";

export default function TodoList() {
  const { state, dispatch } = useContext(TodoContext);
  const handleDelete = (event) => {
    dispatch({ type: "DELETE_TODO", payload: event.target.value });
  };
  const handleEdit = (todo) => {
    console.log("current todo: - " + JSON.stringify(todo));
    dispatch({ type: "UPDATE_CURRENT_TODO", payload: todo });
  };

  return (
    <>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleEdit(todo)}>Edit</button>
            <button onClick={handleDelete} value={todo.id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
