import { Box, Flex, Image, Text, useToast, Button } from "@chakra-ui/react";
import { RiTruckFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { useState } from "react";
import "../index.css";
import { add_products } from "../Redux/CartReducer/action";
import { useDispatch } from "react-redux";

const Products = ({ item, id }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const AddProductToCart = () => {
    dispatch(add_products(item));
  };
  return (
    <Box>
      <Flex
        key={item.id}
        cursor="pointer"
        p=".3rem"
        align="center"
        justify="space-between"
        _hover={{ bg: "#f3f4f6" }}
      >
        <Image
          src={item.src}
          alt={""}
          w={{ base: "40px", md: "45px", lg: "50px" }}
          h={{ base: "40px", md: "45px", lg: "50px" }}
        />

        <Box w="100px">
          <Text
            display="block"
            width={{ base: "100px", md: "150px", lg: "200px" }}
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            fontWeight="400"
            fontSize={{ base: "11px", md: "", lg: "13px" }}
            fontFamily="Poppins"
            color="#666"
          >
            {item.product_info}
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight="400"
            fontSize={{ base: "11px", md: "", lg: "13px" }}
            fontFamily="Poppins"
            color="#666"
            ml={{ lg: "5rem" }}
          >
            Rs.{item.price}
          </Text>
        </Box>
        <Box mr={{ base: "", md: "", lg: "5px" }} _hover={{ color: "#79933b" }}>
          <RiTruckFill color="#a5cd39" fontSize="18px" />
        </Box>
        <Button
          rightIcon={<IoMdCart fontSize="15px" />}
          fontSize={{ base: "11px", md: "13px", lg: "14px" }}
          colorScheme="teal"
          variant="solid"
          size="xs"
          bg="#a5cd39"
          color="white"
          onClick={() => {
            AddProductToCart(item.id);
            toast({
              title: "Added to cart SuccessFully",
              description: `${item.product_info}`,
              position: "top-center",
              status: "success",
              duration: 1000,
              isClosable: true,
            });
          }}
        >
          Add To cart
        </Button>
      </Flex>
    </Box>
  );
};

export default Products;
