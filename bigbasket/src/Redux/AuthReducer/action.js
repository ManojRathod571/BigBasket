import axios from "axios";
import * as types from "./actionTypes";

// login
const AuthRequest = () => {
  return {
    type: types.AUTH_REQUEST,
  };
};

const AuthSuccess = (payload) => {
  return {
    type: types.AUTH_SUCCESS,
    payload,
  };
};

const AuthFailed = () => {
  return {
    type: types.AUTH_ERROR,
  };
};

const Login = (payload) => (dispatch) => {
  dispatch(AuthRequest());

  return axios({
    method: "post",
    url: "http://localhost:8080/user/login",
    data: payload,
  })
    .then((r) => {
      dispatch(AuthSuccess(r.data.token));
    })
    .catch((e) => {
      console.log("Error", e);
      dispatch(AuthFailed());
    });
};

export { Login, AuthFailed, AuthSuccess, AuthRequest };

