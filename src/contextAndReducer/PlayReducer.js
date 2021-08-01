import React, { useReducer, useContext } from "react";
import Button from "@material-ui/core/Button";
import { UserContext } from "./Home";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return initialState;
  }
}

export default function PlayReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const username = useContext(UserContext);

  return (
    <>
      <h4>
        Counter : {state.count} , {username}
      </h4>
      <Button
        style={{ margin: "0.5em" }}
        variant="contained"
        size="small"
        color="primary"
        onClick={() => dispatch({ type: "increment" })}
      >
        increment
      </Button>
      <Button
        style={{ margin: "0.5em" }}
        variant="contained"
        size="small"
        color="secondary"
        onClick={() => dispatch({ type: "decrement" })}
      >
        decrement
      </Button>
      <Button
        style={{ margin: "0.5em" }}
        variant="contained"
        size="small"
        color="default"
        onClick={() => dispatch({ type: "reset" })}
      >
        reset
      </Button>
    </>
  );
}
