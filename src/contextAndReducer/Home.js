import React from "react";
import Display from "./Display";

export const UserContext = React.createContext();

const Username = "Brown munde";

export default function Home() {
  return (
    <div>
      <UserContext.Provider value={Username}>
        <Display />
      </UserContext.Provider>
    </div>
  );
}
