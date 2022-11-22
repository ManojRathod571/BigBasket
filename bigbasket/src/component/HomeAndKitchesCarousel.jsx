import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Image, Box } from "@chakra-ui/react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const HomeAndKitchesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Box w="80%" m="auto">
      <Slider {...settings}>
        <Box>
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_health-suppliment_25102_400.jpg"
            alt="1"
            w="100%"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_251022_400_1.jpg"
            alt="2"
            w="100%"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_pets-store_251022_400.jpg"
            alt="3"
            w="100%"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_251022_400.jpg"
            alt="4"
            w="100%"
            h="auto"
          />
        </Box>
      </Slider>
    </Box>
  );
};

export default HomeAndKitchesCarousel;
