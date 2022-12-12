import React from "react";
import {
  Box,
  Flex,
  Text,
  Grid,
  Image,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";

const data = [
  {
    id: 1,
    link: "/fruits",
    src: "https://cdn-icons-png.flaticon.com/128/1147/1147934.png",
    title: "Fruits & Vegetables",
    url: "fruits",
  },
  {
    id: 2,
    link: "/food&masala",
    src: "https://cdn-icons-png.flaticon.com/128/2276/2276931.png",
    title: "FOODGRAINS, OIL & MASALA",
    url: "grains",
  },
  {
    id: 3,
    link: "/bakery",
    src: "https://cdn-icons-png.flaticon.com/128/3404/3404299.png",
    title: "BAKERY, CAKES & DAIRY",
    url: "cake",
  },
  {
    id: 4,
    link: "/beverages",
    src: "https://cdn-icons-png.flaticon.com/128/1163/1163558.png",
    title: "BEVERAGES",
    url: "baverages",
  },
  {
    id: 5,
    link: "/snacks",
    src: "https://cdn-icons-png.flaticon.com/128/2515/2515322.png",
    title: "SNACKS & BRANDED FOODS",
    url: "sneakes",
  },
  {
    id: 6,
    link: "/beauty&hygiene",
    src: "https://cdn-icons-png.flaticon.com/128/1807/1807383.png",
    title: "BEAUTY & HYGIENE",
    url: "beauty",
  },
  {
    id: 7,
    link: "/cleaning&household",
    src: "https://cdn-icons-png.flaticon.com/128/2553/2553629.png",
    title: "CLEANING & HOUSEHOLD",
    url: "cleaning",
  },
  {
    id: 8,
    link: "/kitchen&pents&garden",
    src: "https://cdn-icons-png.flaticon.com/128/1969/1969195.png",
    title: "KITCHEN, GARDEN & PETS",
    url: "kitchen",
  },
  {
    id: 9,
    link: "/egges&meat&fish",
    src: "https://cdn-icons-png.flaticon.com/128/1566/1566468.png",
    title: "EGGS, MEAT & FISH",
    url: "eggs",
  },
  {
    id: 10,
    link: "/gourmet&worldfood",
    src: "https://cdn-icons-png.flaticon.com/128/3186/3186442.png",
    title: " GOURMET & WORLD FOOD",
    url: "gourmatfoods",
  },
  {
    id: 11,
    link: "/babycare",
    src: "https://cdn-icons-png.flaticon.com/128/2234/2234018.png",
    title: "BABY CARE",
    url: "babycare",
  },
];

const Category = () => {
  const dispatch = useDispatch();

  return (
    <Box border="1px solid #E8E8E8">
      <Menu>
        <Flex>
          <MenuButton
            pr=".5rem"
            p=".5rem"
            bg="#84c225"
            w={{ base: "100%", lg: "15rem" }}
            _hover={{ bg: "#84c225" }}
            border="1px solid #84c225"
            className="category_Btn"
            borderRadius="0px"
            rightIcon={<ChevronDownIcon color="white" />}
            _expanded={{ bg: "#84c225" }}
          >
            <Text
              fontSize="15px"
              fontWeight="500"
              fontFamily="Poppins"
              color="white"
            >
              SHOP BY CATEGORY
            </Text>
          </MenuButton>
        </Flex>
        <Flex>
          <MenuList
            w={{ base: "113%", lg: "none" }}
            px=".3rem"
            mt="-.5rem"
            borderRadius="0px"
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          >
            {data.map(({ title, id, url, src, link }) => {
              return (
                <Link to={link} key={id}>
                  <MenuItem
                    minH="48px"
                    key={id}
                    onClick={() => dispatch(getProducts(url))}
                    //   _hover={{ color: "blue", bg: "#84c225" }}
                  >
                    <Image
                      boxSize="1rem"
                      borderRadius="full"
                      src={src}
                      alt="Fluffybuns the destroyer"
                      mr="12px"
                    />
                    <Text
                      fontSize="13px"
                      fontFamily="Poppins"
                      fontWeight="400"
                      color="#808080"
                    >
                      {title}
                    </Text>
                  </MenuItem>
                </Link>
              );
            })}
          </MenuList>
        </Flex>
      </Menu>
    </Box>
  );
};

export default Category;
