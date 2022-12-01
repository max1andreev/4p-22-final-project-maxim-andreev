import "./ShoppingCart.css";
import cart from "../images/shopping-cart.png";
import { useContext } from "react";
import ShoppingCartContext from "../contexts/ShoppingCartContext";

export default function ShoppingCart(props) {
    const { selectedProducts } = useContext(ShoppingCartContext);
    return (
        <div className="shoppingCart">
            
            <img src={cart} alt="" />
            <h1 className="shoppingCart-tag">
            Кол-во товаров в корзине:{selectedProducts.length}
            </h1>
        </div>
    );
}
