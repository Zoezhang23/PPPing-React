import React, { Component } from 'react'
import Product from './Product'
import './index.scss'
import { DATA } from "../../data"

export default class ProductList extends Component {
    render() {
        const { iphones } = DATA;
        return (
            <div>
                <nav className="nav">
                    <div className="w">
                        {/* <!-- pop_up shopiing nav start --> */}
                        <div className="pps_item">
                            <ul>
                                <li><a href="#">LastChance</a> </li>
                                <li><a href="#">Limited</a></li>
                                <li><a href="#">LastChance</a></li>
                            </ul>
                        </div>
                        <div className="pps_con">
                            <ul>
                                <li><a href="#">Male</a></li>
                                <li><a href="#" className="style_orange">Female</a></li>
                                <li><a href="#">Children</a></li>
                                <li><a href="#">Baby</a></li>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">More</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <!-- List page Main part start--> */}
                <div className="w pps_main">
                    <div className="main_hd">
                        <img src="upload/pps_main.png" alt="" />
                    </div>
                    <div className="main_bd">
                        <ul className="clearfix">
                            {
                                iphones.map(iphone => {
                                    return <Product key={iphone.productId}
                                        productInfo={{ productId: iphone.productId, descrp: iphone.descrp, price: iphone.price, stock: iphone.stock, oldPrice: iphone.oldPrice, imgUrl: iphone.imgUrl }} />
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
