import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Text,
  Flex,
  Select,
  Spinner,
  option,
} from "@chakra-ui/react";
import Product_card from "./Product_card";
import { RiTruckFill } from "react-icons/ri";
import { useSelector } from "react-redux";

const Product_right_grid = () => {
  const [selectVal, setSelectVal] = useState("desc");
  const products = useSelector((store) => store.ProductReducer.products);
  const loading = useSelector((store) => store.ProductReducer.isLoading);

  // let cat = products[0]?.category;

  const onChangeHandle = (e) => {
    setSelectVal(e.target.value);
  };

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
        <Box
          pl={{ lg: "15px" }}
          w={{ base: "100%", md: "none" }}
          m={{ base: "auto", md: "none" }}
        >
          {/* Product category title and number of product*/}
          <Flex mb="2rem">
            <Text
              fontSize={{ base: "16px", md: "22px", lg: "20px" }}
              fontFamily=""
              color="#333"
              textAlign={"left"}
              fontWeight="400"
            >
              {/* {cat === undefined ? null : `${cat} (${products.length})`} */}
            </Text>
            <Box ml="auto">
              <Select color="#666" size="sm" onChange={onChangeHandle}>
                <option value="pop">Popularity</option>
                <option value="asc">price- Low to High</option>
                <option value="desc">price- High to Low</option>
                <option value="alpha">Alphabetically</option>
                <option value="rating">Sort by rating</option>
              </Select>
            </Box>
          </Flex>
          <Flex mb="1.3rem" align={"center"} px="15px">
            <Box mr="5px">
              <RiTruckFill color="#84c225" fontSize="18px" />
            </Box>
            <Text
              fontSize={{ base: "10px", lg: "12px" }}
              fontWeight="600"
              fontFamily=""
              color="#58595b"
              letterSpacing={1}
            >
              All Products
            </Text>
          </Flex>
          <Box borderBottom="1px solid #999" mt="-1rem" mb="1.5rem">
            <Box w="130px" h="1.5px" bg="#84c225" />
          </Box>
          <Grid
            gridTemplateColumns={{
              base: "1fr",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            rowGap="2rem"
          >
            {products
              .sort((a, b) => {
                if (selectVal === "asc") {
                  console.log("selected value", selectVal);
                  return Number(a.price) - Number(b.price);
                }
                if (selectVal === "desc") {
                  return Number(b.price) - Number(a.price);
                }
                if (selectVal === "alpha") {
                  return (
                    a.product_info.charCodeAt(0) - b.product_info.charCodeAt(0)
                  );
                }
                if (selectVal === "rating") {
                  return Number(b.rating) - Number(a.rating);
                }
              })
              .map((item, id) => {
                return <Product_card id={id} item={item} key={id} />;
              })}
          </Grid>
        </Box>
      )}
    </>
  );
};
export default Product_right_grid;
