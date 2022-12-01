import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Main.css";

export default function Main() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    
    const [selectedCategory, setSelectedCategory] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                setDisplayProducts(json);
            });

        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(json => {
                setCategories(json);
            });
    }, []);

    useEffect(() => {
        let newDisplayProducts = [...products];
        if (selectedCategory) {
            newDisplayProducts = getProductsByCategory(newDisplayProducts);
        }
        if (search) {
            newDisplayProducts = searchProduct(newDisplayProducts);
        }
        setDisplayProducts(newDisplayProducts);
    }, [selectedCategory, search]);

    function getProductsByCategory(array) {
        return array.filter(product => product.category === selectedCategory);
    }

    function searchProduct(array) {
        return array.filter(product =>
            product.title.toLowerCase().includes(search.trim().toLowerCase())
        );
    }

    return (
        <div className="products">
            <div className="products-filters">
                <h2>Поиск товаров</h2>
                <input type="text" onChange={e => setSearch(e.target.value)} />
                <select onChange={e => setSelectedCategory(e.target.value)}>
                    <option  value="">All</option>
                    {categories.map((category, index) => {
                        return (
                            <option value={category} key={index}>
                                {category}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className="products-list">
                {displayProducts.map(product => {
                    return <ProductCard product={product} key={product.id} />;
                })}
            </div>
        </div>
    );
}
