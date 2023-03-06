import React from "react"
import { Route, Routes } from "react-router-dom"
import Cart from "../pages/cart/Cart"
import Checkout from "../pages/checkout/Checkout"
import Home from "../pages/home/Home"
import ProductDetails from "../pages/productdetails/ProductDetails"
import Shop from "../pages/shop/Shop"

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  )
}

export default Routers
