import React, { useContext, useReducer } from "react";
import TodoContext from "./Context";
import reducer from "./Reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default function TodoApp() {
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <TodoForm />
      <TodoList />
    </TodoContext.Provider>
  );
}
