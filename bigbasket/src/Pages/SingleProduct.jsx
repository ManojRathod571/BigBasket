import React from "react";
import {
  Box,
  Grid,
  Image,
  Text,
  Flex,
  Button,
  VisuallyHidden,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { RiTruckFill } from "react-icons/ri";
import { GiSevenPointedStar } from "react-icons/gi";
import SimilarProduct from "../component/SimilarProduct";

const SingleProduct = () => {
  // const { product_id } = useParams();
  // console.log("ProductId", product_id);

  const singleProduct = useSelector(
    (store) => store.SingleProductReducer.singleProduct
  );

  console.log("Single product", singleProduct);

  return (
    <Box w={{ base: "90%", lg: "75%" }} m="auto">
      <Grid
        gridTemplateColumns={{ base: "1fr", lg: "2.7fr 10fr" }}
        h="auto"
        p="15px 0px"
        mt="2rem"
      >
        <Box
          borderRight={{ lg: "1px solid #ccc" }}
          display={{ base: "none", lg: "block" }}
          h="auto"
          position="sticky"
          bottom={0}
          top={0}
        >
          <Box pr="15px"></Box>
        </Box>
        <Box p=".5rem">
          <Grid gridTemplateColumns="0.8fr 1fr" columnGap="1rem">
            <Box>
              <Image
                src={singleProduct?.img_src}
                alt="product"
                w="100%"
                h="350px"
              />
            </Box>
            <Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontFamily=""
                  color="#666"
                  textAlign={"left"}
                  fontWeight="500"
                >
                  {singleProduct?.brand}
                </Text>
                <Box borderBottom="1px solid #E8E8E8" />
                <Text
                  fontSize="1.3rem"
                  fontFamily=""
                  color="#444"
                  textAlign={"left"}
                  fontWeight="400"
                >
                  {singleProduct?.product_info}
                </Text>
                <Text
                  fontSize="12px"
                  fontFamily=""
                  color="#666"
                  textAlign={"left"}
                  fontWeight="400"
                  mr="5px"
                  mt="1rem"
                >
                  MRP:
                  <span
                    style={{
                      textDecoration: "line-through",
                      marginLeft: "5px",
                    }}
                  >
                    Rs {singleProduct?.mrp}
                  </span>
                </Text>
                <Text
                  fontSize="14px"
                  fontFamily="Poppins"
                  color="#222"
                  textAlign={"left"}
                  fontWeight="500"
                >
                  Price: RS- {singleProduct?.price}
                </Text>
                <Flex py="5px" align="center">
                  <Flex
                    align="center"
                    bg="rgb(227, 235, 218)"
                    justify="space-around"
                    px="5px"
                    py="2px"
                    maxWidth="fit-content"
                    mr="7px"
                  >
                    <Text
                      fontSize="11px"
                      fontFamily=""
                      color="#689f38"
                      textAlign={"left"}
                      fontWeight="400"
                    >
                      {singleProduct?.rating}
                    </Text>
                    <Box pl="5px">
                      <GiSevenPointedStar color="#689f38" fontSize="10px" />
                    </Box>
                  </Flex>
                  <Text
                    fontSize="11px"
                    fontFamily=""
                    color="#4a4a4a"
                    fontWeight="400"
                  >
                    {singleProduct?.rating_Number} Ratings
                  </Text>
                </Flex>

                <Flex w="50%" justify={"space-between"} mb="2rem" mt=".8rem">
                  <Button
                    size="md"
                    color="#222"
                    border="1px solid #999"
                    borderRadius="3px"
                    bg="white"
                  >
                    1
                  </Button>
                  <Button
                    size="md"
                    bg="linear-gradient(180deg,#fee77c 0,#f2ca76 99%)"
                    _hover={{
                      bg: "linear-gradient(180deg,#fee77c 0,#f2ca76 99%)",
                    }}
                  >
                    Add To cart
                  </Button>
                  <Button
                    size="md"
                    border="1px solid #999"
                    borderRadius="3px"
                    bg="white"
                    _hover={{
                      bg: "linear-gradient(180deg,#fee77c 0,#f2ca76 99%)",
                    }}
                  >
                    Save
                  </Button>
                </Flex>
                <Flex pr="5px">
                  <Box mr="5px" _hover={{ color: "#79933b" }}>
                    <RiTruckFill color="#888" fontSize="18px" />
                  </Box>
                  <Text
                    fontSize="10px"
                    fontFamily=""
                    color="#333"
                    textAlign={"left"}
                    fontWeight="400"
                  >
                    {singleProduct?.delivery_day_time}
                  </Text>
                </Flex>
                <Text
                  fontSize="14px"
                  fontFamily=""
                  color="#444"
                  textAlign={"left"}
                  fontWeight="400"
                  mt=".5rem"
                >
                  Pack Sizes
                </Text>
                <Flex mt=".3rem" bg="rgba(132,194,37,.2)">
                  <Flex
                    border="1px solid #D0D0D0"
                    h="2.5rem"
                    w="100%"
                    borderRadius="5px"
                    justify={"space-between"}
                    align="center"
                    pl=".5rem"
                  >
                    <Box>
                      <Text
                        fontSize="14px"
                        fontFamily=""
                        color="#444"
                        textAlign={"left"}
                        fontWeight="400"
                      >
                        1Kg
                      </Text>
                    </Box>
                    <Flex>
                      <Text
                        fontSize="14px"
                        fontFamily=""
                        color="#444"
                        textAlign={"left"}
                        fontWeight="400"
                      >
                        Price: RS- {singleProduct?.price}
                      </Text>
                      <Text
                        fontSize="14px"
                        fontFamily=""
                        color="#444"
                        textAlign={"left"}
                        fontWeight="400"
                        ml=".5rem"
                      >
                        MRP:
                        <span
                          style={{
                            textDecoration: "line-through",
                            marginLeft: "5px",
                          }}
                        >
                          Rs {singleProduct?.mrp}
                        </span>
                      </Text>
                      <Text
                        fontSize="14px"
                        fontFamily=""
                        color="#444"
                        textAlign={"left"}
                        fontWeight="400"
                        ml=".5rem"
                      >
                        {singleProduct?.weight}
                      </Text>
                    </Flex>
                    <Box>
                      <Button bg="none">
                        <CheckIcon />
                      </Button>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>
      <SimilarProduct />
    </Box>
  );
};

export default SingleProduct;
