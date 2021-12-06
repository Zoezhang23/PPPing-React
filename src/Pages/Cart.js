import React, { Component } from 'react'
import ShoppingCart from '../Components/ShoppingCar'
import Logo from '../Components/Header/Logo'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <div className="w">
                    <Logo />
                </div>
                <ShoppingCart />
            </div>
        )
    }
}
