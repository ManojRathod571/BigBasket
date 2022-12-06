import * as types from "./actionTypes";

const initialState = {
  singleProduct: {},
  isLoading: false,
  isError: false,
};

const SingleProductReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_SINGLE_PRODUCT_LOADING:
      return {
        isLoading: true,
      };
    case types.ADD_SINGLE_PRODUCT:
      return {
        isLoading: false,
        singleProduct: payload,
      };

    case types.ADD_SINGLE_PRODUCT_ERROR:
      return {
        isError: true,
      };
    default:
      return state;
  }
};

export default SingleProductReducer;
