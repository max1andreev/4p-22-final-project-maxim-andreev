import "./Product.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ShoppingCartContext from "../contexts/ShoppingCartContext";

export default function Product() {
    let { id } = useParams();
    const { addToCart } = useContext(ShoppingCartContext);

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + id)
            .then(res => res.json())
            .then(json => {
                setProduct(json);
            });
    }, [id]);

    return (
        <div className="product">

            <div className="product-card">
            <div className="product-info-tag">
                    <h2>Название</h2>
                    <p>{product.title}</p>
                    
            </div>

            <div className="product-info-tag">
                    <img className="product-info-img" src={product.image} alt="product" />
            </div>
            </div>

            <div className="product-info">
                <div className="product-info-tag">
                    <h2>Цена</h2>
                    <p>{product.price}</p>
                </div>
                
                <div className="product-info-tag">
                    <h2>Описание</h2>
                    <p>{product.description}</p>
                </div>
                
                <div className="product-info-tag">
                    <button className="CommonButton" onClick={() => addToCart(product)}>
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    );
}
