import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../index.scss'

export default class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <h1>
                    {/* <a href="index.html">ppping</a> */}
                    <Link to="/"></Link>
                </h1>
            </div>
        )
    }
}
