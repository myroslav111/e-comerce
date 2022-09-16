import PrivateRoute from 'components/PrivateRoute';
import Cart from 'pages/Cart';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Product from 'pages/Product';
import ProductList from 'pages/ProductList';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/**/}
        {/* <Product /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <Cart /> */}
      </Routes>
    </>
  );
};
