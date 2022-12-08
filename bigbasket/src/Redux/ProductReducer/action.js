import axios from "axios";
import * as types from "./actionTypes";

const get_product_request = () => {
  return {
    type: types.GET_PRODUCT_REQUEST,
  };
};
const get_product_success = (payload) => {
  return {
    type: types.GET_PRODUCT_SUCCESS,
    payload,
  };
};
const get_product_error = () => {
  return {
    type: types.GET_PRODUCT_ERROR,
  };
};

const getProducts = (category) => (dispatch) => {
  console.log("cat", category);
  dispatch(get_product_request());
  return axios
    .get(`http://localhost:8080/products?category=${category}`)
    .then((r) => {
      dispatch(get_product_success(r.data));
      console.log(`Category${r.data[0].category}:- `, r.data);
    })
    .catch((error) => {
      dispatch(get_product_error());
      console.log(error);
    });
};

export {
  getProducts,
  get_product_error,
  get_product_success,
  get_product_request,
};
