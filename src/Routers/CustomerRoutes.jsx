import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../customer/pages/HomePages/HomePages";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Cart from "../customer/components/Cart/Cart";
import Product from "../customer/components/Product/Product";
import ProductDetail from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<Homepage />}></Route>
        <Route path="/register" element={<Homepage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
