import React, { Component } from 'react'

import LeftDropDown from './LeftDropDown'
import RightNavs from './RightNavs'
import './index.scss'

export default class Navs extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="w">
                    <LeftDropDown />
                    <RightNavs />
                </div>
            </nav>
        )
    }
}
