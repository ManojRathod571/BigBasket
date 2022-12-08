import { Box, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
    title: "Foodgrains, Oil & Masala",
    url: "grains",
  },
  {
    id: 3,
    link: "/bakery",
    src: "https://cdn-icons-png.flaticon.com/128/3404/3404299.png",
    title: "Baery, Cakes & Dairy",
    url: "cake",
  },
  {
    id: 4,
    link: "/beverages",
    src: "https://cdn-icons-png.flaticon.com/128/1163/1163558.png",
    title: "Beverages",
    url: "baverages",
  },
  {
    id: 5,
    link: "/snacks",
    src: "https://cdn-icons-png.flaticon.com/128/2515/2515322.png",
    title: "Snacks & Branded Foods",
    url: "sneakes",
  },
  {
    id: 6,
    link: "/beauty&hygiene",
    src: "https://cdn-icons-png.flaticon.com/128/1807/1807383.png",
    title: "Beauty & Hygiene",
    url: "beauty",
  },
  {
    id: 7,
    link: "/cleaning&household",
    src: "https://cdn-icons-png.flaticon.com/128/2553/2553629.png",
    title: "Cleaning & Household",
    url: "cleaning",
  },
  {
    id: 8,
    link: "/kitchen&pents&garden",
    src: "https://cdn-icons-png.flaticon.com/128/1969/1969195.png",
    title: "Kitchen, Garden & Pets",
    url: "kitchen",
  },
  {
    id: 9,
    link: "/egges&meat&fish",
    src: "https://cdn-icons-png.flaticon.com/128/1566/1566468.png",
    title: "Eggs, Meat & Fish",
    url: "eggs",
  },
  {
    id: 10,
    link: "/gourmet&worldfood",
    src: "https://cdn-icons-png.flaticon.com/128/3186/3186442.png",
    title: " Gourmet & World Food",
    url: "gourmatfoods",
  },
  {
    id: 11,
    link: "/babycare",
    src: "https://cdn-icons-png.flaticon.com/128/2234/2234018.png",
    title: "Baby Care",
    url: "babycare",
  },
];

const Subcategory = () => {
  const dispatch = useDispatch();
  return (
    <Box>
      {data.map((item) => {
        return (
          <Link to={item.link} key={item.id}>
            <Text
              fontWeight="400"
              fontFamily="Poppins"
              color="#555"
              fontSize="13px"
              lineHeight="1.5rem"
              textTransform="capitalize "
              cursor="pointer"
              _hover={{ color: "black", bg: "#E8E8E8" }}
              onClick={() => dispatch(getProducts(item.url))}
            >
              {item.title}
            </Text>
          </Link>
        );
      })}
    </Box>
  );
};

export default Subcategory;
