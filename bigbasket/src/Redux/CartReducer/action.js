import * as types from "./actionTypes";

const add_products = (payload) => {
  return {
    type: types.ADD_PRODUCT_TO_CART,
    payload,
  };
};

const removeProduct = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_FROM_CART,
    payload,
  };
};

const resetCart = () => {
  return {
    type: types.RESET_CART,
  };
};

export { add_products, resetCart, removeProduct };
