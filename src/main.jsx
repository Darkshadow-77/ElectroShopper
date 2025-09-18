import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss"
import App from "./App";
import { CartProvider } from "./CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
);
