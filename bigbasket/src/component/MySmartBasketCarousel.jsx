import { Box, Flex } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product_card from "./Product_card";

const MySmartBasketCarousel = ({ data }) => {
  // console.log("Data", data);
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  return (
    <Box w={{base:"70%",md:"100%"}} overflow={"hidden"} m="auto">
      <Slider {...settings}>
        {data?.map((item, id) => {
          return <Product_card  key={id} item={item} id={id} />;
        })}
      </Slider>
    </Box>
  );
};

export default MySmartBasketCarousel;
