import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './index.css'

export default class Floor extends Component {
    render() {
        return (
            <div className="floor">
                <div className="w casual">
                    <div className="casual_hd">
                        <h3>Casual Style</h3>
                        <div className="tab_list">
                            <ul>
                                <li><Link to="#" className="style_orange">Hot</Link>|</li>
                                <li><Link to="#">Black</Link>|</li>
                                <li><Link to="#">White</Link>|</li>
                                <li><Link to="#">Blue</Link>|</li>
                                <li><Link to="#">Nude</Link>|</li>
                                <li><Link to="#">Green</Link>|</li>
                                <li><Link to="#">Yello</Link>|</li>
                                <li><Link to="#">Denim</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="casul_bd">
                        <div className="tab_list_item">
                            <div className="col_210">
                                <ul>
                                    <li><Link to="#">hot1</Link></li>
                                    <li><Link to="#">hot2</Link></li>
                                    <li><Link to="#">hot3</Link></li>
                                    <li><Link to="#">hot4</Link></li>
                                    <li><Link to="#">hot5</Link></li>
                                    <li><Link to="#">hot6</Link></li>
                                </ul>
                                <img src="../upload/hot1.jpg" alt="" />
                            </div>
                            <div className="col_329">
                                <Link to="#"><img src="../upload/hot2.jpg" alt="" /></Link>
                            </div>
                            <div className="col_221">
                                <Link to="#"><img src="../upload/hot3.jpg" alt="" /></Link>
                            </div>
                            <div className="col_221">
                                <Link to="#"><img src="../upload/hot4.jpg" alt="" /></Link>
                            </div>
                            <div className="col_219">
                                <Link to="#"><img src="../upload/hot2.jpg" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w sports">
                    <div className="casual_hd">
                        <h3>Sports Style</h3>
                        <div className="tab_list">
                            <ul>
                                <li><Link to="#" className="style_orange">Hot</Link>|</li>
                                <li><Link to="#">Black</Link>|</li>
                                <li><Link to="#">White</Link>|</li>
                                <li><Link to="#">Blue</Link>|</li>
                                <li><Link to="#">Nude</Link>|</li>
                                <li><Link to="#">Green</Link>|</li>
                                <li><Link to="#">Yello</Link>|</li>
                                <li><Link to="#">Denim</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="casul_bd">
                        <div className="tab_list_item">
                            <div className="col_210">
                                <ul>
                                    <li><Link to="#">hot1</Link></li>
                                    <li><Link to="#">hot2</Link></li>
                                    <li><Link to="#">hot3</Link></li>
                                    <li><Link to="#">hot4</Link></li>
                                    <li><Link to="#">hot5</Link></li>
                                    <li><Link to="#">hot6</Link></li>
                                </ul>
                                <img src="../upload/hot1.jpg" alt="" />
                            </div>
                            <div className="col_329">
                                <Link to="#"><img src="../upload/hot2.jpg" alt="" /></Link>
                            </div>
                            <div className="col_221">
                                <Link to="#"><img src="../upload/hot3.jpg" alt="" /></Link>
                            </div>
                            <div className="col_221">
                                <Link to="#"><img src="../upload/hot4.jpg" alt="" /></Link>
                            </div>
                            <div className="col_219">
                                <Link to="#"><img src="../upload/hot2.jpg" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w office">
                    <div className="casual_hd">
                        <h3>Office Style</h3>
                        <div className="tab_list">
                            <ul>
                                <li><Link to="#" className="style_orange">Hot</Link>|</li>
                                <li><Link to="#">Black</Link>|</li>
                                <li><Link to="#">White</Link>|</li>
                                <li><Link to="#">Blue</Link>|</li>
                                <li><Link to="#">Nude</Link>|</li>
                                <li><Link to="#">Green</Link>|</li>
                                <li><Link to="#">Yello</Link>|</li>
                                <li><Link to="#">Denim</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="casul_bd">
                        <div className="tab_list_item">
                            <div className="col_210">
                                <ul>
                                    <li><Link to="#">hot1</Link></li>
                                    <li><Link to="#">hot2</Link></li>
                                    <li><Link to="#">hot3</Link></li>
                                    <li><Link to="#">hot4</Link></li>
                                    <li><Link to="#">hot5</Link></li>
                                    <li><Link to="#">hot6</Link></li>
                                </ul>
                                <img src="../upload/hot1.jpg" alt="" />
                            </div>
                            <div className="col_329">
                                <Link to="#"><img src="../upload/hot2.jpg" alt="" /></Link>
                            </div>
                            <div className="col_221">
                                <Link to="#"><img src="../upload/hot3.jpg" alt="" /></Link>
                            </div>
                            <div className="col_221">
                                <Link to="#"><img src="../upload/hot4.jpg" alt="" /></Link>
                            </div>
                            <div className="col_219">
                                <Link to="#"><img src="../upload/hot2.jpg" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
