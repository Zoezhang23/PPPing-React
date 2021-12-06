import React, { Component } from 'react'
import Topbar from '../Components/Topbar'
import Header from '../Components/Header'
import ProductList from '../Components/ProductList'
import Footer from "../Components/Footer/index"

export default class Products extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <Header />
                <ProductList />
                <Footer />
            </div>
        )
    }
}
