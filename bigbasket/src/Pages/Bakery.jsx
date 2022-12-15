import { Box } from "@chakra-ui/react";
import ProductPage from "./ProductPage";
import { useSelector } from "react-redux";
import Navbar from "../organisam/Navbar";
import Footer from "../organisam/Footer";

const Bakery = () => {
  const cartData = useSelector((store) => store.CartReducer.cartProducts);
  console.log("Cart Items:- ", cartData);
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

export default Bakery;
