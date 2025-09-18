import React from "react";
import logo from "../assets/20250916_2045_Logo Électronique Circulaire_simple_compose_01k5a4a06yf979y0f67kkrdgns.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function MyHeader(){
    return (
        <header>
            <img src={logo} alt="ElectroShopper" className="logo" />
            <h1 className="title">
                Electro
                <br />
                Shopper
            </h1>
            
            {/* Menu de navigation */}
                  <nav className="navbar">
                    <Link to="/">Accueil</Link> |
                    <Link to="/products">Produits</Link> |
                    <Link to="/cart">Panier</Link> |
                    <Link to="/checkout">Paiement</Link>
                  </nav>

            <button className="search-btn">
                <FaSearch/>
            </button>
        </header>
    )
}