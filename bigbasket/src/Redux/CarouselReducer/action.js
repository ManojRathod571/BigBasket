import * as types from "./actionTypes";
import axios from "axios";


const getDataRequest = () => {
    return {
        type: types.GET_DATA_REQUEST
    }
}

const getDataSuccess = (payload) => {
    return {
        type: types.GET_DATA_SUCCESS,
        payload
    }
}

const getDataError = () => {
    return {
        type: types.GET_DATA_ERROR
    }
}

const getDataForCarousel = () => (dispatch) => {
    dispatch(getDataRequest())
    return axios.get(`http://localhost:8080/products`)
        .then((r) => {
            dispatch(getDataSuccess(r.data))
            // console.log("responce", r.data)
        })
        .catch((error) => {
            console.log(error);
            dispatch(getDataError())
        })
}

export { getDataForCarousel, getDataRequest, getDataSuccess, getDataError }