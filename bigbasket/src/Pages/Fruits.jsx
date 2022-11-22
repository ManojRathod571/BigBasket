import React from "react";
import { Box } from "@chakra-ui/react";
import ProductPage from "./ProductPage";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { useEffect } from "react";

const Fruits = () => {
  // const dispatch = useDispatch();
  // const fruits = useSelector((store) => store.ProductReducer?.products);
  // useEffect(() => {
  //   dispatch(getProducts("fruits"));
  // }, [fruits]);
  return (
    <Box>
      <ProductPage />
    </Box>
  );
};

export default Fruits;
