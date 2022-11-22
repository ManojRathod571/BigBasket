import * as types from "./actionTypes";
import axios from "axios";

const get_productData_request = () => {
    return {
        type: types.GET_PRODUCT_REQUEST
    }
}
const get_productData_success = (payload) => {
    return {
        type: types.GET_PRODUCT_SUCCESS,
        payload,
    }
}
const get_productData_error = () => {
    return {
        type: types.GET_PRODUCT_ERROR
    }
}


const getProductForSearch = (query) => (dispatch) => {
    dispatch(get_productData_request())
    return axios.get(`http://localhost:8080/products?q=${query}&limit=32`).then((r) => {
        dispatch(get_productData_success(r.data))
        // console.log("data", r.data)
    }).catch((error) => {
        console.log(error)
    })
}

export { getProductForSearch }