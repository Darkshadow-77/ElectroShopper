import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import App from "./App";
import { CartProvider } from "./CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
);
