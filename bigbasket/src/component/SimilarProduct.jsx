import React from "react";
import { Text, Box, Grid } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product_card from "./Product_card";


const SimilarProduct = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Box my="3rem">
      <Box>
        <Text
          fontSize="18px"
          fontFamily="Poppins"
          fontWeight="500"
          color="#222"
        >
          Similar Products
        </Text>
      </Box>
      <Box borderBottom="1px solid #C8C8C8" mb="1rem" />
      <Box w={{ base: "70%", md: "100%" }} overflow={"hidden"} m="auto">
        {/* <Slider {...settings}>
          {products?.map((item, id) => {
            return <Product_card key={id} item={item} id={id} />;
          
        </Slider> */}

        <Grid
          gridTemplateColumns={{
            base: "1fr",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          rowGap="2rem"
        >
          {products.map((item, index) => {
            return <Product_card item={item} />;
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default SimilarProduct;
