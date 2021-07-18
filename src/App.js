import React, { useState } from "react";


function App() {

  const [count, setCount] = useState(0)

  const incrementCounter = () => {
    setCount(count + 1)
  }

  return (
    <button onClick={incrementCounter}>
      I was clicked {count} times.
    </button>
  );
}

export default App;
