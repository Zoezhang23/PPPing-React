import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBox extends Component {
    render() {
        return (
            <li>
                <div className="nav_box">
                    <div className="ifront">
                        <Link to='/'>BUY</Link>
                    </div>
                    <div className="iback">
                        <Link to='/'>Me</Link>
                    </div>
                </div>
            </li>
        )
    }
}
