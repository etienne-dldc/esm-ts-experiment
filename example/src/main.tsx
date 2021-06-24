import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { TestComponent } from "../../src/Component";

ReactDOM.render(
  <React.StrictMode>
    <TestComponent color="blue" />
  </React.StrictMode>,
  document.getElementById("root")
);
