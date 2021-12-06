import React, { Component } from 'react'

import Footer from '../Footer'
import Topbar from '../Topbar'
import Logo from "../Header/Logo"
import './index.scss'

export default class Locations extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <div className="w">
                    <Logo />
                    <div className="map">
                        <div className="city">
                            <div className="dot"></div>
                            <div className="wave1"></div>
                            <div className="wave2"></div>
                            <div className="wave3"></div>
                        </div>
                        <div className="city tb">
                            <div className="dot"></div>
                            <div className="wave1"></div>
                            <div className="wave2"></div>
                            <div className="wave3"></div>
                        </div>
                        <div className="city gz">
                            <div className="dot"></div>
                            <div className="wave1"></div>
                            <div className="wave2"></div>
                            <div className="wave3"></div>
                        </div>
                    </div>
                </div >
                <Footer />
            </div >
        )
    }
}
