import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { App } from "./App";
import "./index.css";

ReactDOM.hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <Route component={App} path="*" />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app")
);
