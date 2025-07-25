// import React
import React from "react";
import { createRoot } from "react-dom/client";

// import react-router
import { BrowserRouter as Router } from 'react-router-dom';

// import App
//import App from "./oriyostyles/App";
// import App from "./myprofile/App";
// import App from "./oriyo/App";
import App from "./oriyostyles/App";

// import css files
// import './oriyosoft/style.scss';
import './oriyostyles/index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
);
