import { ADD_CART, SELECT_ALL, ADD_PRODUCT, DECRE_PRODUCT, CLEARALL, CHECk, UPDATELIST, DECRE_PRODUCTS, DELETMUL } from "../const"
export default function productList(preState = [], action) {
    const { type, data } = action
    switch (type) {
        case ADD_CART:
            const productId = data.productId
            const descrp = data.descrp
            const price = data.price
            const stock = data.stock
            const oldPrice = data.oldPrice
            const imgUrl = data.imgUrl
            const piceses = 1
            const checked = false
            const newItem = { productId, descrp, price, stock, oldPrice, imgUrl, piceses, checked }
            return [newItem, ...preState];
        case SELECT_ALL:
            preState.map(iphone => {
                iphone.checked = data
            });
            return [...preState];
        case ADD_PRODUCT:
            preState.map(iphone => {
                if (iphone.productId === data) {
                    if (iphone.piceses < iphone.stock) {
                        iphone.piceses++
                    }
                }
            });
            return [...preState];
        case DECRE_PRODUCT:
            preState.map(iphone => {
                if (iphone.productId === data) {
                    if (iphone.piceses > 0) {
                        iphone.piceses--;
                    }
                }
            });
            return [...preState];
        case CLEARALL:
            return [];
        case CHECk:
            preState.map(iphone => {
                if (iphone.productId === data) {
                    iphone.checked = !iphone.checked
                } else return preState;
            });
            return [...preState];
        case UPDATELIST:
            preState.map(iphone => {
                if (iphone.productId === data.productId) {
                    iphone.piceses++
                } else return preState;
            });
            return [...preState];
        case DECRE_PRODUCTS:
            const newState = preState.filter(iphone => iphone.productId !== data
            );
            return [...newState];
        case DELETMUL:
            const newList = preState.filter(iphone => iphone.checked === false);
            return [...newList];

        default:
            return preState;
    }

}