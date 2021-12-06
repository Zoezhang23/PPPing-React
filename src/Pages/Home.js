import React, { Component } from 'react'
import Header from '../Components/Header'
import Mainboard from '../Components/Mainboard'
import Topbar from '../Components/Topbar'
import Recommand from '../Components/Recommand'
import Floor from '../Components/Floor'
import FixTool from '../Components/FixTool'
import Footer from '../Components/Footer'
import Navs from '../Components/Navs'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <Header />
                <Navs />
                <Mainboard />
                <Recommand />
                <Floor />
                <FixTool />
                <Footer />
            </div>
        )
    }
}
