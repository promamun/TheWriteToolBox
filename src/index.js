import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./components/frontend/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <App />
    <ScrollToTop />
  </React.Fragment>
);
reportWebVitals();
