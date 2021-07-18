import React, { useState, useEffect } from "react";


function App() {

  const colors = ['grey', 'yellow']

  const [count, setCount] = useState(0)
  const [index, setIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: null, y: null})
  const [netStatus, setNetStatus] = useState(window.navigator.onLine)

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline)
    }
  }, [count]); // remove count and make it empty box, and see the page title.

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1)
  }

  const changeIndex =() => {
    setIndex(prevColor => ( prevColor + 1) % 2)
  }

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  const handleOnline = event => {
    setNetStatus(window.navigator.onLine)
  }

  const handleOffline = event => {
    setNetStatus(window.navigator.onLine)
  }

  return (
    <>
    <button onClick={incrementCounter}>
      I was clicked {count} times.
    </button>

    <h2>Toggle light</h2>
    <div
      style={{
        height: '50px',
        width: '50px',
        background: colors[index]
      }}
      onClick={changeIndex}
    ></div>

    <h2>Mouse Position</h2>
    {JSON.stringify(mousePosition, null, 2)}
    <br />

    <h2>Network Status</h2>
    <p>Current network status is {netStatus ? "Online" : "Offline"}</p>
    
    </>

  );
}

export default App;
