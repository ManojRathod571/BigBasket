import * as types from "./actionTypes";

const initialState = {
    products: [],
    isLoading: false,
    isError: false
}
const CarouselReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case types.GET_DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: payload
            }
        case types.GET_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        default:
            return state
    }

}

export default CarouselReducer;
