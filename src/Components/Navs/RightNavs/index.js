import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBox from './Nav_box'

export default class RightNavs extends Component {
    render() {
        return (
            <div className="navitems">
                <ul>
                    <NavBox />
                    <NavBox />
                    <NavBox />
                    <NavBox />
                    <NavBox />
                    <NavBox />
                    <NavBox />
                    <NavBox />
                    <NavBox />
                </ul>
            </div>
        )
    }
}
