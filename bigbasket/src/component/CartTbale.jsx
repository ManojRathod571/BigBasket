import {
  Box,
  Flex,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Input,
  InputLeftAddon,
  InputRightAddon,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiCurrencyRupee } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../Redux/CartReducer/action";

const CartTbale = () => {
  const cartData = useSelector((store) => store.CartReducer.cartProduct);
  const dispatch = useDispatch();
  const [qty, setQty] = useState("");
  const handleQuantity = (e) => {
    console.log("");
    setQty(e.target.value);
  };

  console.log("Quantity", qty);
  // console.log("Cart Items:- ", cartData);

  const handleDelete = (id) => {
    // console.log("Id", id);
    dispatch(removeProduct(id));
  };

  return (
    <Box>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Tbody>
            {cartData.length > 0 ? (
              cartData?.map((item, id) => {
                return (
                  <>
                    <Tr key={id}>
                      <Td>
                        <Flex align="center">
                          <Image src={item.img_src} alt="" w="60px" h="60px" />
                          <Box ml="1rem">
                            <Text
                              fontWeight="500"
                              fontFmaily="Poppins"
                              fontSize="16px"
                              color="#58595b"
                              display="block"
                              width="200px"
                              overflow="hidden"
                              whiteSpace="nowrap"
                              textOverflow="ellipsis"
                            >
                              {item.product_info}
                            </Text>
                          </Box>
                        </Flex>
                      </Td>
                      <Td>
                        <Box ml="1rem">
                          <Flex align="center">
                            <HiCurrencyRupee fontSize="20px" />
                            <Text
                              fontWeight="500"
                              fontFmaily="Poppins"
                              fontSize="16px"
                              color="#58595b"
                              ml=".3rem"
                            >
                              <span
                                style={{
                                  textDecoration: "line-through",
                                  marginRight: "5px",
                                }}
                              >
                                MRP:-
                              </span>
                              {item.mrp}
                            </Text>
                          </Flex>
                        </Box>
                      </Td>
                      <Td>
                        <Box ml="1rem">
                          <Flex align="center">
                            <HiCurrencyRupee fontSize="20px" />
                            <Text
                              fontWeight="500"
                              fontFmaily="Poppins"
                              fontSize="16px"
                              color="#58595b"
                              ml=".3rem"
                            >
                              {item.price}
                            </Text>
                          </Flex>
                        </Box>
                      </Td>
                      <Td>
                        <Button
                          size="sm"
                          bg="linear-gradient(180deg,#fee77c 0,#f2ca76 99%)"
                          variant="solid"
                          color="#58595b"
                          _hover={{ bg: "84c225" }}
                          onClick={() => handleDelete(item.id)}
                        >
                          Remove
                        </Button>
                      </Td>
                      <Td>
                        <InputGroup size="sm" w="10rem">
                          <InputLeftAddon
                            fontSize="14px"
                            fontFamily="Poppins"
                            fontWeight="500"
                            children="Qty"
                            bg="linear-gradient(180deg,#fee77c 0,#f2ca76 99%)"
                            color="#58595b"
                          />
                          <Input
                            placeholder="enter.."
                            bg="white"
                            outline="none"
                            value={qty}
                            onChange={(e) => handleQuantity(e)}
                            _focus={{ outline: "none" }}
                          />
                          <InputRightAddon
                            fontSize="14px"
                            fontFamily="Poppins"
                            fontWeight="500"
                            children={qty.length === "" ? 1 : qty}
                          />
                        </InputGroup>
                      </Td>
                    </Tr>
                  </>
                );
              })
            ) : (
              <>
                <Flex
                  justify={"center"}
                  align="center"
                  my="2rem"
                  flexDirection={"column"}
                >
                  <Image
                    src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-png-image-download-pngm-2.png"
                    alt="empty-bag"
                    w="300px"
                    h="300px"
                  />
                  <Box
                    borderBottom="3px solid"
                    w="600px"
                    h="1px"
                    mt="-1.2rem"
                    borderBottomColor="#E8E8E9"
                  />
                  <Text
                    fontFamily="Poppins"
                    fontSize="18px"
                    fontWeight="400"
                    color="#58595b"
                    my="2rem"
                  >
                    Your cart is empty!🤓 Please Something and enjoy
                  </Text>
                </Flex>
              </>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CartTbale;
