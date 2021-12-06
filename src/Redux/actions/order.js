import { ADDPRODUCT, DECREPRODUCT, DECREPRODUCTS, CLEARALL } from "../const"

export const incre = (data) => ({ type: ADDPRODUCT, data })
export const decre = (data) => ({ type: DECREPRODUCT, data })
export const decreAll = (data) => ({ type: DECREPRODUCTS, data })
export const clearAll = (data) => ({ type: CLEARALL, data })