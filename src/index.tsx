import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NotFound from './notFound';
import Login from './login';
import Register from './register';
import Product from './product';
import Checkout from './checkout';
import Account from './account';
import Products from './products';
import App from './app';
import './index.css';

const formData = new FormData();
formData.append('token', localStorage.getItem('token') as string);

fetch('https://petrinet.azurewebsites.net/api/getCart/', {
    method: 'POST',
    body: formData,
})
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('cart', JSON.stringify(data));
    });


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AnimatePresence>
                <Routes>
                    <Route key="Home" path="/" element={<App />} />
                    <Route key="Login" path="/login" element={<Login />} />
                    <Route
                        key="Register"
                        path="/register"
                        element={<Register />}
                    />
                    <Route
                        key="Product"
                        path="/product/:id"
                        element={<Product />}
                    />
                    <Route
                        key="Checkout"
                        path="/checkout"
                        element={<Checkout />}
                    />
                    <Route
                        key="Account"
                        path="/account"
                        element={<Account />}
                    />
                    <Route
                        key="Products"
                        path="/products/:name"
                        element={<Products />}
                    />
                    <Route key="NotFound" path="*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
