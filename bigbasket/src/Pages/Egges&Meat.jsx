import { Box } from "@chakra-ui/react";
import React from "react";
import ProductPage from "./ProductPage";

import Navbar from "../organisam/Navbar";
import Footer from "../organisam/Footer";

const EggesMeat = () => {
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

export default EggesMeat;
