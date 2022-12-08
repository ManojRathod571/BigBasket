import * as types from "./actionTypes";
import axios from "axios";

const addItemLoading = () => {
  return {
    type: types.ADD_SINGLE_PRODUCT_LOADING,
  };
};

const addItem = (payload) => {
  return {
    type: types.ADD_SINGLE_PRODUCT,
    payload,
  };
};

const addItemError = () => {
  return {
    type: types.ADD_SINGLE_PRODUCT_ERROR,
  };
};

// const getSingleProduct = () => (dispatch) => {
//   console.log("SingleProducdId");
//   dispatch(addItemLoading());
//   return axios
//     .get(`http://localhost:8080/products`)
//     .then((r) => {
//       dispatch(addItem(r.data));
//       console.log("Single Product", r.data);
//     })
//     .catch((err) => {
//       dispatch(addItemError());
//       console.log("Error", err);
//     });
// };

export { addItem, addItemLoading, addItemError };
