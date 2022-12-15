import { Box } from "@chakra-ui/react";
import React from "react";
import ProductPage from "./ProductPage";

import Footer from "../organisam/Footer";
import Navbar from "../organisam/Navbar";

const Kitchen = () => {
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

export default Kitchen;
