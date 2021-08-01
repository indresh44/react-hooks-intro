import React from "react";
import { UserContext } from "./Home";

export default function Display() {
  return (
    <div>
      <UserContext.Consumer>
        {(value) => <div>hello , {value}</div>}
      </UserContext.Consumer>
      Hello and wello
    </div>
  );
}
