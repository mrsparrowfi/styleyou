import React from "react";
import { createRoot } from "react-dom/client";

// import App and react-router
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';

// import css files
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
);
