const { v4: uuidv4 } = require("uuid");

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      if (
        action.payload &&
        state.todos.filter((todo) => {
          return todo.text === action.payload;
        }).length !== 1
      ) {
        const newTodo = {
          id: uuidv4(),
          text: action.payload,
        };
        const addedTodos = [...state.todos, newTodo];
        return {
          ...state,
          todos: addedTodos,
        };
      } else {
        return state;
      }
    case "UPDATE_CURRENT_TODO":
      const updated_state = { ...state, currentTodo: action.payload };
      return updated_state;
    case "UPDATE_TODO":
      const tempCurTodo = action.payload;
      const newUpdatedTodos = state.todos.map((todo) => {
        if (todo.id == state.currentTodo.id) {
          return { id: todo.id, text: tempCurTodo };
        } else return todo;
      });

      return { ...state, todos: newUpdatedTodos, currentTodo: {} };
    case "DELETE_TODO":
      const newTodos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
      return {
        ...state,
        todos: newTodos,
      };
    default:
      return state;
  }
}
