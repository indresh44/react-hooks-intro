import React, { useContext } from "react";
import { UserContext } from "./Home";

export default function Display() {
  const username = useContext(UserContext);

  return (
    <div>
      {/* Accessing state without Hooks:- */}
      {/* <UserContext.Consumer>
        {(value) => <div>hello , {value}</div>}
      </UserContext.Consumer> */}
      {/* Accessing State using useContext Hooks */}
      <h3>Hello, {username}</h3>
      Hello and wello
    </div>
  );
}
