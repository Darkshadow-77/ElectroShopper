import { useCart } from "../CartContext";

export default function Cart() {
  const { cart, clearCart } = useCart();

  return (
    <div>
      <h1>Mon Panier</h1>
      {cart.length === 0 ? (
        <p>Ton panier est vide</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <div key={index}
                style={{
                  width: "200px"
                }}
              >
                <img src={item.image}
                style={{
                  width: "100%"
                }}
                />
                <li>{item.name} - {item.price} €</li>
              </div> 
            ))}
          </ul>
          <button onClick={clearCart}>Vider le panier</button>
        </div>
      )}
    </div>
  );
}
