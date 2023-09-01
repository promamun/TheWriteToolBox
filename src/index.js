import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./components/frontend/ScrollToTop";
import { Provider } from "react-redux";
import { Store } from "./app/store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Provider store={Store}>
      <App />
    </Provider>
    <ScrollToTop />
  </React.Fragment>
);
reportWebVitals();
