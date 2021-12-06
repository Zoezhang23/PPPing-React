import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { productList, updateList } from "../../../Redux/actions/productList"

class Product extends Component {

    addItem = (id) => {
        return (e) => {
            e.preventDefault();
            const index = this.props.list.findIndex(item => item.productId === id)
            if (index > -1) {
                this.props.updateList(this.props.list[index])
            } else
                this.props.productList(this.props.productInfo)
        }

    }

    render() {
        return (
            <li>
                <div className="product1">
                    <a href="detail.html"><img src={this.props.productInfo.imgUrl} /></a>
                    <p className="des"><Link to="detail"> {this.props.productInfo.descrp}</Link></p>
                    <div className="price">
                        <span className="now">&yen;{this.props.productInfo.price}
                            <i></i>
                        </span>
                        <span className="org">&yen;{this.props.productInfo.oldPrice}</span>
                    </div>
                    <div className="stocks">
                        <div className="Sold">Sold:99</div>
                        <div className="bar">
                            <div className="bar_in "></div>
                        </div>
                        <div className="Remain style_orange">Remain:{this.props.productInfo.stock}</div>
                    </div>
                    <button className="add_item" onClick={this.addItem(this.props.productInfo.productId)}>ADD</button>
                </div>
            </li>
        )
    }
}
export default connect(
    state => ({ list: state.productList }),
    {
        productList,
        updateList
    }
)(Product)
