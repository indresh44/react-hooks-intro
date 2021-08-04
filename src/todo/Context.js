import React from "react";

const TodoContext = React.createContext({
  todos: [
    { id: "sdkah", text: "clean" },
    { id: "dsfakdjf", text: "homework" },
    { id: "sdkafjh", text: "react hookds" },
  ],
  currentTodo: {},
});

export default TodoContext;
