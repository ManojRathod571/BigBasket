import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { getProducts } from "../Redux/ProductReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopOffer = ({ src, url, link }) => {
  const dispatch = useDispatch();
  return (
    <Link to={`${link}`}>
      <Box
        border="1px solid #E8E8E8"
        _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        onClick={() => dispatch(getProducts(url))}
      >
        <Image src={src} alt="test" w="100%" h="auto" />
      </Box>
    </Link>
  );
};

export default TopOffer;
