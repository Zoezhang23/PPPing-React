import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
import PayBtn from './PayBtn/index'
import { connect } from "react-redux"
import { selectAll, incre, decre, deleteAll, clearAll, toggleCheck, delectOneType } from "../../Redux/actions/productList"


class ShoppingCart extends Component {

    //select All items
    selectAll = (e) => {
        this.props.selectAll(e.target.checked)
    }
    //Change Checked box status
    handleChecked = (productId) => {
        return () => {
            this.props.toggleCheck(productId)
        }
    }
    //ADD item
    addItem = (productId) => {
        return () => {
            this.props.incre(productId);
        }
    }
    //decrem item
    decItem = (productId) => {
        return () => {
            this.props.decre(productId)
        }
    }

    // delete One seleted type  iphone
    deletOneType = (productId) => {
        return () => {
            this.props.delectOneType(productId)
        }

    }

    //delete All selected items
    deleteSelectedAll = () => {
        this.props.deleteAll()
    }
    //delete All
    clearAll = () => {
        this.props.clearAll();
    }

    render() {
        const { list } = this.props;
        // 比较长度来决定是否全选
        const total = list.length;
        const selectChecked = list.filter(iphone => iphone.checked).length
        let totalPieces = 0;
        let totalAmount = 0;

        for (const i of list) {
            totalPieces += i.piceses;
            totalAmount += i.piceses * i.price;
        }
        return (
            <div>
                <div className="car-header">
                    <div className="w">
                        <div className="car-logo">
                            <b>Shopping Car</b>
                        </div>
                    </div>
                </div>
                {/* <!-- main part --> */}
                <div className="c-container">
                    <div className="w">
                        <div className="cart-filter-bar">
                            <em>All products</em>
                        </div>

                        <div >
                            <div className="cart-thead">
                                <div className="t-checkbox">
                                    <input type="checkbox" onChange={this.selectAll} checked={total === selectChecked ? true : false} /> All
                                </div>
                                <div className="t-goods">Product</div>
                                <div className="t-price">price</div>
                                <div className="t-num">picese</div>
                                <div className="t-sum">total</div>
                                <div className="t-action">opertation</div>
                            </div>
                            {/* <!-- DetailPart --> */}
                            <div className="cart-item-list">
                                {
                                    this.props.list.map(iphone => {
                                        return (
                                            <div className={iphone.checked ? "cart-item check-cart-item" : "cart-item"} key={iphone.productId}>
                                                <div className="p-checkbox">
                                                    <input type="checkbox" className="j-checkbox" checked={iphone.checked} onChange={this.handleChecked(iphone.productId)} />
                                                </div>
                                                <div className="p-goods">
                                                    <div className="p-img">
                                                        <img src={iphone.imgUrl} alt="" />
                                                    </div>
                                                    <div className="p-msg">{iphone.descrp}</div>
                                                </div>
                                                <div className="p-price">€{iphone.price}</div>
                                                <div className="p-num">
                                                    <div className="quantity-form">
                                                        <Link to=" " className="decrement" onClick={this.decItem(iphone.productId)}>-</Link>
                                                        <input type="text" className="itxt" value={iphone.piceses} />
                                                        <Link to=" " className="increment" onClick={this.addItem(iphone.productId)}>+</Link>
                                                    </div>
                                                </div>
                                                <div className="p-sum">€{(iphone.price * iphone.piceses).toFixed(2)}</div>
                                                <div className="p-action"><Link to=" " onClick={this.deletOneType(iphone.productId)}>delete</Link></div>
                                            </div>

                                        )
                                    })

                                }
                            </div>

                            {/* <!-- Payment --> */}
                            <div className="cart-floatbar">
                                <div className="select-all">
                                    <input type="checkbox" className="checkall" onChange={this.selectAll} checked={total === selectChecked ? true : false} />All
                                </div>
                                <div className="operation">
                                    <Link to=" " className="remove-batch" onClick={this.deleteSelectedAll}> Deleted Selected</Link>
                                    <Link to=" " className="clear-all" onClick={this.clearAll}>Clear All</Link>
                                </div>
                                <div className="toolbar-right">
                                    <div className="amount-sum">Selected<em>{totalPieces}</em>item</div>
                                    <div className="price-sum">Total price: <em>€{totalAmount.toFixed(2)}</em></div>
                                    <PayBtn />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default connect(
    state => ({ list: state.productList }),
    { selectAll, incre, decre, delectOneType, deleteAll, clearAll, toggleCheck }
)(ShoppingCart)