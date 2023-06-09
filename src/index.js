import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
`;

const Theme = {
  Yellow: "#ffcc00",
  DarkYellow: "#f7a600",
  Orange: "#f16b2f",
  DarkGreen: "#669933",
  LightGreen: "#8dc63f",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Fragment>
      <GlobalStyles theme={Theme} />
    </React.Fragment>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
