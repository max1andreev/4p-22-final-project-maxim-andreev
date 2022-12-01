import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BaseLayout from "./layouts/Base";
import Product from "./pages/Product";
import Feedback from "./pages/Feedback";
import Main from "./pages/Main";
import { ShoppingCartContextProvider } from "./contexts/ShoppingCartContext";

export default function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <ShoppingCartContextProvider>
                    <BaseLayout>
                        <Routes>
                            <Route
                                path="/products/:id"
                                exact
                                element={<Product />}
                            />
                            <Route
                                path="/feedback"
                                exact
                                element={<Feedback />}
                            />
                            <Route path="/" exact element={<Main />} />
                        </Routes>
                    </BaseLayout>
                </ShoppingCartContextProvider>
            </BrowserRouter>
        </React.StrictMode>
    );
}
