import products from "../products.json";
import MyArticle from "../components/MyArticle";

export default function MyNewFeatures(){
    return(
        <div>
            <h2>New features</h2>
            <div className="ftr-grid">
                {products.filter(p => p.new).map((product) => (
                    <MyArticle
                        key={product.id}
                        product = {product}
                    />
                ))}

            </div>
        </div>
    )
}