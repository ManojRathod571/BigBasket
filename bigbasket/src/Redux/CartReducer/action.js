
import * as types from "./actionTypes";

const add_products = (payload) => {
    return {
        type: types.ADD_PRODUCT_TO_CART,
        payload
    }
}

const reset = () => {
    return {
        type: types.RESET_CART
    }
}

export { add_products, reset }