import React, { Component } from 'react'
import './index.css'


export default class Mainboard extends Component {
    render() {
        return (
            <div className="mainboard w">
                <div className="main">
                    <div className="foucs">
                        <a href="javascript:;" className="arrow-l"></a>
                        <a href="javascript:;" className="arrow-r"></a>
                        <ul>
                            <li>
                                <div className="bear"></div>
                            </li>
                            <li>
                                <a href="#"><img src="../upload/focus.jpg" alt="" /></a>
                            </li>
                            <li>
                                <a href="#"><img src="" alt="../upload/focus1.jpg" alt="" /></a>
                            </li>
                            <li>
                                <a href="#"><img src="../upload/focus2.jpg" alt="" /></a>
                            </li>
                            <li>
                                <a href="#"><img src="../upload/focus3.jpg" alt="" /></a>
                            </li>
                        </ul>
                        <ol className="circle">
                        </ol>
                    </div>
                    <div className="flashnews">
                        <div className="news">
                            <div className="news_hd">
                                <h5>PPPing news</h5>
                                <a href="#">More</a>
                            </div>
                            <div className="news_bd">
                                <ul>
                                    <li>
                                        <a href="#">[Action] up to 90% discount ! Buy more, save more !</a>
                                    </li>
                                    <li>
                                        <a href="#">[Action] up to 90% discount !Buy more, save more !</a>
                                    </li>
                                    <li>
                                        <a href="#">[Action] up to 90% discount !Buy more, save more !</a>
                                    </li>
                                    <li>
                                        <a href="#">[Action] up to 90% discount !Buy more, save more !</a>
                                    </li>
                                    <li>
                                        <a href="#">[Action] up to 90% discount !Buy more, save more !</a>
                                    </li>

                                </ul>

                            </div>
                        </div>
                        <div className="life">
                            <ul>
                                <li><i></i>
                                    <p>MoneyMatters</p>
                                </li>
                                <li><i></i>
                                    <p>MoneyMatters</p>
                                </li>
                                <li><i></i>
                                    <p>MoneyMatters</p>
                                </li>
                                <li><i></i>
                                    <p>MoneyMatters</p>
                                </li>
                                <li><i></i>
                                    <p>MoneyMatters</p>
                                </li>
                                <li><i></i>
                                    <p>MoneyMatters</p>
                                </li>
                                <li><i></i>
                                    <p>MoneyMatters</p>
                                </li>
                                <li><i></i>
                                    <p>MoneyMatters</p>
                                </li>
                                <li><i></i>
                                    <p>MoneyMatters</p>
                                </li>
                                <li><i></i>
                                    <p>MoneyMatters</p>
                                </li>
                                <li><i></i>
                                    <p>MoneyMatters</p>
                                </li>
                                <li><i></i>
                                    <p>MoneyMatters</p>
                                </li>
                            </ul>
                        </div>
                        <div className="adver">
                            <img src="../upload/adv.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
