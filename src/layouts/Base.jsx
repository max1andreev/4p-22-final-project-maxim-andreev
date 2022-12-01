import { Link } from "react-router-dom";
import ShoppingCart from "../components/ShoppingCart";
import "./Base.css";

export default function Base(props) {
    return (
        <div>
            <header className="base-header">
                <div className="base-header-top">
                <nav>
                        
                        <a >
                            <Link className="base-header__mainPage" to="/">Главная</Link>
                        </a>
                        <a >
                            <Link className="base-header__mainPage" to="/feedback">Обратная связь</Link>
                        </a>
                    
                </nav>
                </div>
                
            </header>
            <div className="ShoppingCart">
            <ShoppingCart products={props.selectedProducts} />
            </div>
            <div className="base-body">{props.children}</div>
        </div>
    );
}
