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
import { HiCurrencyRupee } from "react-icons/hi";
import { useSelector } from "react-redux";

const CartTbale = () => {
  const cartData = useSelector((store) => store.CartReducer.cartProduct);
  console.log("Cart Items:- ", cartData);

  return (
    <Box>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Tbody>
            {cartData.map((item, id) => {
              return (
                <>
                  <Tr key={id}>
                    <Td>
                      <Flex align="center">
                        <Image src={item.img_src} alt="" w="100px" h="100px" />
                        <Box ml="1rem">
                          <Text
                            fontWeight="500"
                            fontFmaily="Poppins"
                            fontSize="16px"
                            color="black"
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
                            color="black"
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
                            color="black"
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
                        bg="#a5cd39"
                        variant="solid"
                        color="white"
                        _hover={{ bg: "84c225" }}
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
                          bg="#a5cd39"
                          color="white"
                        />
                        <Input
                          placeholder="enter.."
                          bg="white"
                          outline="none"
                          _focus={{ outline: "none" }}
                        />
                        <InputRightAddon
                          fontSize="14px"
                          fontFamily="Poppins"
                          fontWeight="500"
                          children="1"
                        />
                      </InputGroup>
                    </Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CartTbale;
