import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import App from "./App";
import SignupForm from "./Component/Basic";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <SignupForm />
  </React.StrictMode>,
  rootElement
);
