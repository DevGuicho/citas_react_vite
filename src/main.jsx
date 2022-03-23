import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PacientesState from "./state/pacientes/PacientesState";

ReactDOM.render(
  <React.StrictMode>
    <PacientesState>
      <App />
    </PacientesState>
  </React.StrictMode>,
  document.getElementById("root")
);
