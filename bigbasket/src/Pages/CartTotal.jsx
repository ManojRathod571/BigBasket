import { Box, HStack, Text, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { resetCart } from "../Redux/CartReducer/action";
import Footer from "../organisam/Footer";
import Navbar from "../organisam/Navbar";

const CartTotal = ({ total }) => {
  const dispatch = useDispatch();

  const EmptyBasket = () => {
    dispatch(resetCart());
  };
  return (
    <>
      {/* <Navbar /> */}
      <Box my="3rem">
        <HStack justify={"space-between"} align={"start"}>
          <Flex flexDirection="column">
            <Box mb="5rem">
              <Button
                leftIcon={<RiDeleteBin3Line fontSize="17px" />}
                borderRadius="5px"
                border="1px solid #f89629"
                bg=" linear-gradient(180deg,#fff 35%,#ebedea 99%)"
                color="#58595b"
                fontSize="12px"
                fontFamily="Poppins"
                fontWeight="500"
                onClick={() => EmptyBasket()}
              >
                EMPTY BASKET
              </Button>
            </Box>
            <Button
              leftIcon={<GiShoppingCart fontSize="17px" />}
              borderRadius="5px"
              border="1px solid #f89629"
              bg=" linear-gradient(180deg,#fff 35%,#ebedea 99%)"
              color="#58595b"
              fontSize="12px"
              fontFamily="Poppins"
              fontWeight="500"
            >
              CONTINUE SHIPPING
            </Button>
          </Flex>
          <Box ml="auto">
            <Box
              boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
              w="456px"
              border="1px solid #f89629"
              p="1.5rem"
              borderRadius="10px"
            >
              <Flex>
                <Box>
                  <Text
                    fontSize="13px"
                    fontFamily="Poppins"
                    fontWeight="400"
                    color="#58595b"
                  >
                    SubTotal
                  </Text>
                </Box>
                <Box ml="auto">
                  <Text
                    fontSize="13px"
                    fontFamily="Poppins"
                    fontWeight="400"
                    color="#58595b"
                  >
                    Rs: {total}
                  </Text>
                </Box>
              </Flex>
              <Flex my="1rem">
                <Box>
                  <Text
                    fontSize="13px"
                    fontFamily="Poppins"
                    fontWeight="400"
                    color="#58595b"
                  >
                    Delivery Charges
                  </Text>
                </Box>
                <Box ml="auto">
                  <Text
                    fontSize="13px"
                    fontFamily="Poppins"
                    fontWeight="400"
                    color="#58595b"
                  >
                    Rs: 60
                  </Text>
                </Box>
              </Flex>
              <Box borderBottom="1px solid #ccc" my="1rem" />
              <Flex>
                <Box>
                  <Text
                    fontSize="22px"
                    fontFamily="Poppins"
                    fontWeight="500"
                    color="#58595b"
                  >
                    TOTAL
                  </Text>
                </Box>
                <Box ml="auto">
                  <Text
                    fontSize="22px"
                    fontFamily="Poppins"
                    fontWeight="500"
                    color="#58595b"
                  >
                    RS:{total}
                  </Text>
                </Box>
              </Flex>
              <Box borderBottom="1px solid #ccc" mt="1rem" />
              <Flex justify={"center"} my="1.5rem">
                <Button
                  rightIcon={<GiShoppingCart fontSize="17px" />}
                  borderRadius="5px"
                  // border="1px solid #f89629"
                  bg="linear-gradient(180deg,#fee77c 0,#f2ca76 99%)"
                  color="#58595b"
                  fontSize="16px"
                  fontFamily="Poppins"
                  fontWeight="500"
                  px="1rem"
                >
                  CHECKOUT
                </Button>
              </Flex>
              <Text
                fontSize="12px"
                fontFamily="Poppins"
                fontWeight="400"
                color="#58595b"
                textAlign="center"
                my="1rem"
              >
                * To continue shopping click and on the CHECKOUT option
              </Text>
            </Box>
          </Box>
        </HStack>
      </Box>
      {/* <Footer /> */}
    </>
  );
};

export default CartTotal;
