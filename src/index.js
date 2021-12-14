import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeToggleProvider from "./context/themeToggle/Provider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeToggleProvider>
      <App />
    </ThemeToggleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
