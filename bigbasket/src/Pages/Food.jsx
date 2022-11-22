import { Box } from "@chakra-ui/react";
import ProductPage from "./ProductPage";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { useEffect } from "react";

const Food = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProducts("grains"));
  // }, []);
  return (
    <Box>
      <ProductPage />
    </Box>
  );
};

export default Food;
