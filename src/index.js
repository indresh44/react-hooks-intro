import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
// import App from "./Login";
// import App from "./Register";
// import App from "./dataFetching/Fetch";
// import App from "./contextAndReducer/Home";
// import App from "./todo/TodoApp";
import App from "./router/App";
import { BrowserRouter as Router } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <App />
  </Router>,
  // </React.StrictMode>
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
