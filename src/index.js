import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "./app";

import "./scss/globals.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename="/rootz/">
    <App />
  </Router>
);
