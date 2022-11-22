import { Box } from '@chakra-ui/react'
import React from 'react';
import ProductPage from "./ProductPage";
import { useDispatch } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { useEffect } from "react";

const BeautyHygiene = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProducts("beauty"));
  // }, []);
  return (
    <Box>
    <ProductPage />
  </Box>
  )
}

export default BeautyHygiene
