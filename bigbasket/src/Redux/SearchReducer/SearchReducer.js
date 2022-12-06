import React from "react";
import * as types from "./actionTypes";

const initialState = { productList: [], isLoading: false, isError: false };

const SearchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productList: payload,
      };
    case types.GET_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default SearchReducer;
