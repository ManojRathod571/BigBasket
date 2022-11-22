import * as types from "./actionTypes";

const initialState = {
  cartProduct: [],
};
const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("Payload", payload);
  switch (type) {
    case types.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartProduct: [...state.cartProduct, payload],
      };
    case types.RESET_CART:
      return {
        ...state,
        cartProduct: [],
      };

    default:
      return state;
  }
};
export default CartReducer;
