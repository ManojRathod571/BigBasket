import React from "react";
import {
  Box,
  Grid,
  Image,
  Text,
  Flex,
  Button,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { RiTruckFill } from "react-icons/ri";
import { GiSevenPointedStar } from "react-icons/gi";
import SimilarProduct from "../component/SimilarProduct";
import ReactImageMagnify from "react-image-magnify";
import Subcategory from "../component/Subcategory";
import { useDispatch } from "react-redux";
import { add_products } from "../Redux/CartReducer/action";
import Navbar from "../organisam/Navbar";
import Footer from "../organisam/Footer";

const ImageSingle = ({ image }) => {
  console.log("Image", { image });

  return (
    <>
      <Navbar />
      <div style={{ width: "100", height: "350px" }}>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: image,
              width: 300,
              height: 350,
            },
            largeImage: {
              src: image,
              width: 800,
              height: 800,
            },
          }}
        />
      </div>
    </>
  );
};

const SingleProduct = () => {
  const toast = useToast();
  const singleProduct = useSelector(
    (store) => store.SingleProductReducer.singleProduct
  );

  const dispatch = useDispatch();

  const AddProductToCart = (singleProduct) => {
    dispatch(add_products(singleProduct));
  };

  const products = useSelector((store) => store.ProductReducer.products);
  const loading = useSelector((store) => store.ProductReducer.isLoading);

  let fewProducts = [];

  for (let i = 0; i < 13; i++) {
    fewProducts.push(products[i]);
  }

  return (
    <>
      {loading ? (
        <Flex h="70vh" w="full" align="center" justify="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : (
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
              pr="1rem"
            >
              <Box pr="15px">
                <Text
                  fontSize="16px"
                  fontFamily="Poppins"
                  fontWeight="500"
                  color="rgba(34,34,34,.87);"
                >
                  Category
                </Text>
              </Box>
              <Box borderBottom="1px solid #999" mb="1rem">
                <Box w="80px" h="1.5px" bg="#84c225" borderRadius="50%" />
              </Box>
              <Subcategory />
            </Box>
            <Box p=".5rem">
              <Grid
                gridTemplateColumns={{
                  base: "1fr",
                  md: "1fr",
                  lg: "0.8fr 1fr",
                }}
                columnGap="2rem"
                rowGap={"3rem"}
              >
                <Box zIndex={100}>
                  <ImageSingle image={singleProduct.img_src} />
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

                    <Flex
                      w={{ base: "70%", md: "60%", lg: "50%" }}
                      justify={"space-between"}
                      mb="2rem"
                      mt=".8rem"
                    >
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
                        onClick={() => {
                          AddProductToCart(singleProduct);
                          toast({
                            title: "Added to cart SuccessFully",
                            description: `${singleProduct.product_info}`,
                            position: "top-center",
                            status: "success",
                            duration: 1000,
                            isClosable: true,
                          });
                        }}
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
                        fontSize="13px"
                        fontFamily=""
                        color="#333"
                        textAlign={"left"}
                        fontWeight="400"
                      >
                        Standard Delivery: Tomorrow 3:00PM - 7:30PM
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
          <SimilarProduct products={fewProducts} />
        </Box>
      )}
      <Footer />
    </>
  );
};

export default SingleProduct;
