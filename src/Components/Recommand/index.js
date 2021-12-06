import React, { Component } from 'react'
import './index.css'

export default class Recommand extends Component {
    render() {
        return (
            <div className="w recom">
                <div className="recom_hd">
                    <div className="hot_box">
                        <div className="front">HotStyle!</div>
                        <div className="back">OnlyToday!</div>
                    </div>
                </div>
                <div className="recom_bd">
                    <ul>
                        <li><img src="../upload/recom1.jpg" alt="" /></li>
                        <li><img src="../upload/recom2.jpg" alt="" /></li>
                        <li><img src="../upload/recom3.jpg" alt="" /></li>
                        <li><img src="../upload/recom1.jpg" alt="" /></li>
                    </ul>
                </div>
            </div>
        )
    }
}
