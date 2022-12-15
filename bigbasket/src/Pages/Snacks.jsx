import { Box } from "@chakra-ui/react";
import React from "react";
import ProductPage from "./ProductPage";
import { useDispatch } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { useEffect } from "react";
import Navbar from "../organisam/Navbar";
import Footer from "../organisam/Footer";

const Snacks = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Box>
        <ProductPage />
      </Box>
      {/* <Footer /> */}
    </>
  );
};

export default Snacks;
