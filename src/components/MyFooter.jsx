
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function MyFooter() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="logo">MyShop</h3>
        <p>&copy; {new Date().getFullYear()} MyShop. Tous droits réservés.</p>
      </div>

      <div className="footer-section">
        <h4>Liens rapides</h4>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/products">Produits</a></li>
          <li><a href="/cart">Panier</a></li>
          <li><a href="/checkout">Paiement</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <p>contact@myshop.com</p>
        <p>+33 6 12 34 56 78</p>
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}
