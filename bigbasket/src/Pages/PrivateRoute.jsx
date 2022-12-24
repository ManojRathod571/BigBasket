import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((Store) => Store.AuthReducer.isAuth);
  const location = useLocation();
  console.log(location);

  if (!isAuth) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
