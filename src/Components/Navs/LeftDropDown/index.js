import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class LeftDropDown extends Component {
    render() {
        return (
            <div className="dropdown">
                <div className="dt">All Products</div>
                <div className="dd">
                    <ul>

                        <li><Link to='/products'>IPhone</Link></li>
                        <li><Link to='/products'>IPhone</Link></li>
                        <li><Link to='/'>Get new look</Link></li>
                        <li><Link to='/products'>IPhone</Link></li>
                        <li><Link to='/products'>IPhone</Link></li>
                        <li><Link to='/products'>Lingerie</Link></li>
                        <li><Link to='/products'>designer</Link></li>
                        <li><Link to='/products'>Sustainable fashion</Link></li>
                        <li><Link to='/products'>Jackets</Link></li>
                        <li><Link to='/products'>Sweaters & Cardigans</Link></li>
                        <li><Link to='/products'>Dresses</Link></li>
                        <li><Link to='/products'>Tops & T-shirts</Link></li>
                        <li><Link to='/products'>Trousers</Link></li>
                        <li><Link to='/products'>Skirts</Link></li>
                        <li><Link to='/products'>swimwear</Link></li>
                    </ul>

                </div>
            </div>
        )
    }
}
