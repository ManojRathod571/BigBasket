import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const Authreducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuth: false,
      };

    case types.AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };

    case types.AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
      };

    default:
      return state;
  }
};

export default Authreducer;
