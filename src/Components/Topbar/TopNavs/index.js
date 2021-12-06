import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../index.scss'

export default class TopNavs extends Component {

    render() {
        return (
            < NavLink className={({ isActive }) => isActive ? "" : ""
            }  {...this.props} />
        )
    }
}
