// sign up

import axios from "axios";
import * as types from "./actionType";

const Signup_request = () => {
  return {
    type: types.SIGNUP_REQUEST,
  };
};

const Signup_success = (payload) => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload,
  };
};

const Signup_failed = () => {
  return {
    type: types.SIGNUP_FAILED,
  };
};

const Signup = (payload) => (dispatch) => {
  dispatch(Signup_request());

  return axios({
    method: "post",
    url: "http://localhost:8080/user/signup",
    data: payload,
  })
    .then((r) => {
      dispatch(Signup_success());
    })
    .catch((e) => {
      console.log("Error", e);
      dispatch(Signup_failed());
    });
};

export { Signup, Signup_request, Signup_success, Signup_failed };
