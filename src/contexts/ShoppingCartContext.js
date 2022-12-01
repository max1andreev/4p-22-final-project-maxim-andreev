import React, { useState } from "react";

const ShoppingCartContext = React.createContext();

export function ShoppingCartContextProvider({ children }) {
    const [selectedProducts, setSelectedProducts] = useState([]);

    function addToCart(product) {
        setSelectedProducts([...selectedProducts, product]);
    }

    return (
        <ShoppingCartContext.Provider value={{ selectedProducts, addToCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartContext;
