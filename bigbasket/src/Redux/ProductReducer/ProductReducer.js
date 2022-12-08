import React from "react";
import * as types from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};
const ProductReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCT_REQUEST:
      return {
        isLoading: true,
      };
    case types.GET_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        products: payload,
      };
    case types.GET_PRODUCT_ERROR:
      return {
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default ProductReducer;
