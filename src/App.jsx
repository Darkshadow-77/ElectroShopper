import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      {/* Menu de navigation */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/products">Produits</Link> |{" "}
        <Link to="/cart">Panier</Link> |{" "}
        <Link to="/checkout">Paiement</Link>
      </nav>

      {/* Les routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
