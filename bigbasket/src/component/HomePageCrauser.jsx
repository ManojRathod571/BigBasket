import React from "react";
import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomePageCrauser = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Box w="100%" overflow={"hidden"}>
      <Slider {...settings}>
        <Box>
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/YXTT6073_DT_1600x460_23rdnov22.jpg"
            alt="banner1"
            w="100%"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src=" https://www.bigbasket.com/media/uploads/banner_images/1904223_gourmet-snacks_460_1st.jpg"
            alt="banner1"
            w="100%"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_pl_tasties-origins_1600x460-141122.jpg"
            alt="banner1"
            w="100%"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayBangalore-1600x460-151122.jpeg"
            alt="banner1"
            w="100%"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_pl_oilandghee_1600x460-141122.jpg"
            alt="banner1"
            w="100%"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_gourmetpl_crazysnacking_1600x460-141122.jpg"
            alt="banner1"
            w="100%"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_bcd_paneer_1600x460-141122.jpg"
            alt="banner1"
            w="100%"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_800_131122_Bangalore.jpg"
            alt="banner1"
            w="100%"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_pl_oilandghee_1600x460-141122.jpg"
            alt="banner1"
            w="100%"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_Dry_FishBanner_1600x460_070922.jpg"
            alt="banner1"
            w="100%"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_T1-1600x460_221012.jpg"
            alt="banner1"
            w="100%"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/hp-winterbeauty_EPbanner_460_161122.jpg"
            alt="banner1"
            w="100%"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src=" https://www.bigbasket.com/media/uploads/banner_images/hp_m_gmpl_laio-cleaning_1600x460-141122.jpg"
            alt="banner1"
            w="100%"
            h="auto"
          />
        </Box>
      </Slider>
    </Box>
  );
};

export default HomePageCrauser;
