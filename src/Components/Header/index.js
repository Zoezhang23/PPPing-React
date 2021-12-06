import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import SearchBar from './SearchBar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Logo from './Logo'
import './index.scss'


class Header extends Component {
    render() {
        const list = this.props.list;
        let total = 0;
        list.map(i => total += i.piceses)
        return (
            <header className="homeHeader w">
                {/* <!-- logo part --> */}
                <Logo />

                {/* <!-- search part --> */}
                <div className="search">
                    <SearchBar />
                </div>
                {/* <!-- hotwords parts --> */}
                <div className="hotwords">
                    <Link to="/Iphone">Iphone</Link>
                    <Link to="/">jeans</Link>
                    <Link to="/">loafer</Link>
                    <Link to="/">sneaker</Link>
                </div>
                {/* <!-- shopping car part --> */}
                <div className="shoppingCart">
                    <Link to="/cart"><ShoppingCartIcon fontSize="inherit" />MyCart <ChevronRightIcon fontSize="inherit" /></Link>
                    <i className="count">{total}</i>
                </div>
            </header>
        )
    }
}

export default connect(
    state => ({ list: state.productList }),
    {}
)(Header)