import { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartContext from "../contexts/ShoppingCartContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
    const { addToCart } = useContext(ShoppingCartContext);

    return (
        <div className="product-card" title={product.description}>
            <div className="product-card-image">
                <img src={product.image} alt="product" />
            </div>
            <div className="product-card-body">
                <Link to={"/products/" + product.id}>{product.title}</Link>

            </div>
            <div className="product-info-tag">
                <button className="CommonButton" onClick={() => addToCart(product)}>В корзину</button>
            </div>
        </div>
    );
}
