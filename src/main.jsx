import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
 var _jsxFileName = "C:/Users/Administrator/Desktop/ReactProject/recipe-app/src/main.jsx";
 import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import { FavoritesProvider } from "./context/FavoritesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoritesProvider>
    <App />
  </FavoritesProvider>
);