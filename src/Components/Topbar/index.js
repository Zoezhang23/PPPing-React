import React, { Component } from 'react'
import TopNavs from './TopNavs';
import BasicButtons from './BtnNav'
import './index.scss'
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import RecommendIcon from '@mui/icons-material/Recommend';



export default class Topbar extends Component {
    render() {
        return (
            <section className="shortcut">
                <div className="w">
                    <div className="fl">
                        <ul>
                            <li>Welcome to PPPing ! &nbsp;</li>
                            <li>
                                {/* <!-- login Button trigger modal --> */}
                                <BasicButtons />
                            </li>
                        </ul>
                    </div>
                    <div className="fr">
                        <ul>
                            <li><TopNavs to="/locations"><ListAltIcon fontSize="inherit" />My Order</TopNavs>
                            </li>
                            <li><TopNavs to="/locations"><AdUnitsIcon fontSize="inherit" />My products</TopNavs>
                            </li>
                            <li><TopNavs to="/locations"><LocationOnIcon fontSize="inherit" />Our locations</TopNavs>
                            </li>
                            <li><a href="https://www.instagram.com/" target="_blank"><RecommendIcon fontSize="inherit" /> Follow Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section >

        )
    }
}
