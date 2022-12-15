import React from "react";
import { Box } from "@chakra-ui/react";
import ProductPage from "./ProductPage";

import Navbar from "../organisam/Navbar";
import Footer from "../organisam/Footer";

const Fruits = () => {
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

export default Fruits;
