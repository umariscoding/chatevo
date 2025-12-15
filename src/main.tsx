import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import "./styles/index.css";
import { activeTheme, setActiveTheme } from "./config/colors";

// Apply theme before React renders
const savedTheme = localStorage.getItem('app-theme');
if (savedTheme) {
  setActiveTheme(savedTheme as any);
} else {
  setActiveTheme(activeTheme);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
