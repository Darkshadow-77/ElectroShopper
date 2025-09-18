import MyArticle from "../components/MyArticle";
import products from "../products.json";

export default function Products() {
  return (
    <div>
      <h1>Nos Produits</h1>

      {/* Conteneur en grille */}
      <div className="prd-box">
        {products.map((product) => (
            <MyArticle
            key={product.id}
            product = {product}
           />
        ))}
      </div>
    </div>
  );
}
