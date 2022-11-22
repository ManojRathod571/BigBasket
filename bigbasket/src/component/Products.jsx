import { Box, Flex, Image, Text, useToast, Button } from "@chakra-ui/react";
import { RiTruckFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { useState } from "react";
import "../index.css";

const Products = ({ item, id }) => {
  const [active, setActive] = useState(0);
  const toast = useToast();
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
        <Image src={item.src} alt={""} w="50px" h="50px" />

        <Box w="100px">
          <Text
            display="block"
            width="200px"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            fontWeight="400"
            fontSize="13px"
            fontFamily="Poppins"
            color="#666"
          >
            {item.product_info}
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight="400"
            fontSize="13px"
            fontFamily="Poppins"
            color="#666"
            ml="5rem"
          >
            Rs.{item.price}
          </Text>
        </Box>
        <Box mr="5px" _hover={{ color: "#79933b" }}>
          <RiTruckFill color="#a5cd39" fontSize="18px" />
        </Box>
        <Button
          rightIcon={<IoMdCart fontSize="15px" />}
          fontSize="14px"
          colorScheme="teal"
          variant="solid"
          size="xs"
          bg="#a5cd39"
          color="white"
          onClick={() => {
            toast({
              title: "Added to cart SuccessFully",
              description: `${item.product_info}`,
              position: "top-center",
              status: "success",
              duration: 9000,
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
