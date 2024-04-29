import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';
import Login from './login';
import Register from './register';
import Product from './product';
import Cart from './Cart';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/', element: <App />, errorElement: <NotFound />
  },
  {
    path: '/login', element: <Login />
  },
  {
    path: '/register', element: <Register />
  },
  {
    path: '/product', element: <Product/>
  },
  {
    path: '/Cart', element: <Cart/>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);