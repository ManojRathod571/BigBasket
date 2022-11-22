import { Box } from "@chakra-ui/react";
import ProductPage from "./ProductPage";
import { useSelector } from "react-redux";

const Bakery = () => {
  const cartData = useSelector((store) => store.CartReducer.cartProducts);
  console.log("Cart Items:- ", cartData);
  return (
    <Box>
      <ProductPage />
    </Box>
  );
};

export default Bakery;
