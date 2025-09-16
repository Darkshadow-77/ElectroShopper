import{useCart}from "../CartContext"
import products from "../products.json";

export default function Products() {
  const {addToCart} = useCart();
  return (
    <div>
      <h1>Nos Produits</h1>

      {/* Conteneur en grille */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", 
        gap: "20px", 
        marginTop: "20px" 
      }}>
        {products.map((product) => (
          <div 
            key={product.id} 
            style={{ 
              border: "1px solid #ccc", 
              borderRadius: "8px", 
              padding: "10px", 
              textAlign: "center",
              boxShadow: "2px 2px 6px rgba(0,0,0,0.1)"
            }}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: "100%", borderRadius: "6px" }} 
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p style={{ fontWeight: "bold" }}>{product.price} €</p>
            <button 
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "8px 12px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
              onClick={()=>addToCart(product)}
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
