import * as types from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  isSignedup: false,
};

const signupReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSignedup: true,
      };
    case types.SIGNUP_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSignedup: false,
      };
    default:
      return state;
  }
};

export default signupReducer;
