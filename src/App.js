import React, { Component } from 'react'
import Home from "./Pages/Home"
import Locations from "./Pages/Location"
import Cart from "./Pages/Cart"
import { Routes, Route, Navigate } from "react-router-dom"
import Products from './Pages/ProductList'

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="locations" element={<Locations />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </div>
    )
  }
}
