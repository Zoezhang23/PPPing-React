import { createStore, combineReducers } from "redux"
import productList from "./reducer/productList"
import order from "./reducer/order"

const allReducers = combineReducers({ productList: productList, order: order })

export default createStore(allReducers);