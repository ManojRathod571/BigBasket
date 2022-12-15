import React, { useEffect } from "react";
import { Box, Flex, Text, Grid, Image } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import HomePageCrauser from "../component/HomePageCrauser";
import Sponers from "../component/Sponers";
import { getDataForCarousel } from "../Redux/CarouselReducer/action";
import Heading from "../molecules/Heading";
import MySmartBasketCarousel from "../component/MySmartBasketCarousel";
import TopOffer from "../component/TopOffer";
import HomeAndKitchesCarousel from "../component/HomeAndKitchesCarousel";
import SponcerSectionForMobile from "../component/SponcerSectionForMobile";
import Category from "../component/Category";
import { getProducts } from "../Redux/ProductReducer/action";
import { Link } from "react-router-dom";
import Navbar from "../organisam/Navbar";
import Footer from "../organisam/Footer";

const topOffers = [
  {
    id: 1,
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/91b481ca-1f6a-4550-9c1c-52757c371a96/hp_dow-topoffersStorefront_m_480_251022_01.jpg",
    heading: "plannng",
  },
  {
    id: 2,
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/91b481ca-1f6a-4550-9c1c-52757c371a96/hp_big-pack-topoffersStorefront_m_480_251022_02.jpg",
  },
  {
    id: 3,
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/91b481ca-1f6a-4550-9c1c-52757c371a96/hp_combos-topoffersStorefront_m_480_251022_03.jpg",
  },
  {
    id: 4,
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/91b481ca-1f6a-4550-9c1c-52757c371a96/hp_30-corner-topoffersStorefront_m_480_251022_04.jpg",
  },
];

const bankOffers = [
  {
    id: 1,
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/2a46997a-8de3-47ba-af2d-25e7613f233d/t1_hp_aff_m_bob_360_101122.jpg",
  },
  {
    id: 2,
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/2a46997a-8de3-47ba-af2d-25e7613f233d/t1_hp_aff_m_IndusInd_360_101122.jpg",
  },
  {
    id: 3,
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/2a46997a-8de3-47ba-af2d-25e7613f233d/t1_hp_aff_m_rbl_360_101122.jpg",
  },
  {
    id: 4,
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/2a46997a-8de3-47ba-af2d-25e7613f233d/t1_hp_aff_m_kotak_360_101122.jpg",
  },
];

const fruits = [
  {
    id: 1,
    link: "/fruits",
    url: "fruits",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_organic-fnv_Storefront_m_251022_01.jpg",
  },
  {
    id: 2,
    link: "/fruits",
    url: "fruits",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_fresh-fruits-fnv_Storefront_m_251022_02.jpg",
  },
  {
    id: 3,
    link: "/fruits",
    url: "fruits",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_fresh-veggs-fnv_Storefront_m_251022_03.jpg",
  },
  {
    id: 4,
    link: "/fruits",
    url: "fruits",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_cutx-sprouts-fnv_Storefront_m_251022_04.jpg",
  },
  {
    id: 5,
    link: "/fruits",
    url: "fruits",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_exotic-fnv_Storefront_m_251022_05.jpg",
  },
  {
    id: 6,
    link: "/fruits",
    url: "fruits",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_herbs-seasoning-fnv_m_251022_06.jpg",
  },
];

const staples = [
  {
    id: 1,
    link: "/food&masala",
    url: "grains",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/fdc267dd-d968-4b49-933f-9f007b7aab7d/hp_atta-flour-staplesStorefront_m_480_251022_01.jpg",
  },
  {
    id: 2,
    link: "/food&masala",
    url: "grains",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/fdc267dd-d968-4b49-933f-9f007b7aab7d/hp_rice-staplesStorefront_m_480_251022_02.jpg",
  },
  {
    id: 3,
    link: "/food&masala",
    url: "grains",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/fdc267dd-d968-4b49-933f-9f007b7aab7d/hp_dals-pulses-staplesStorefront_m_480_251022_03.jpg",
  },
  {
    id: 4,
    link: "/food&masala",
    url: "grains",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/fdc267dd-d968-4b49-933f-9f007b7aab7d/hp_cooking-oil-staplesStorefront_m_480_251022_04.jpg",
  },
  {
    id: 5,
    link: "/food&masala",
    url: "grains",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/fdc267dd-d968-4b49-933f-9f007b7aab7d/hp_dry-fruits-staplesStorefront_m_480_251022_05.jpg",
  },
  {
    id: 6,
    link: "/food&masala",
    url: "grains",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/fdc267dd-d968-4b49-933f-9f007b7aab7d/hp_salt-sugar-staplesStorefront_m_480_251022_06.jpg",
  },
];

const Snack = [
  {
    id: 1,
    link: "/snacks",
    url: "sneakes",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_namkeens-snacksStorefront_m_480_251022_01.jpg",
  },
  {
    id: 2,
    link: "/snacks",
    url: "sneakes",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_frozen-snacks-snacksStorefront_m_480_251022_02.jpg",
  },
  {
    id: 3,
    link: "/snacks",
    url: "sneakes",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_soups-noodles-snacksStorefront_m_480_251022_03.jpg",
  },
  {
    id: 4,
    link: "/snacks",
    url: "sneakes",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_ready-cook-snacksStorefront_m_480_251022_04.jpg",
  },
  {
    id: 5,
    link: "/snacks",
    url: "sneakes",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_biscuit-cookies-snacksStorefront_m_480_251022_05.jpg",
  },
  {
    id: 6,
    link: "/snacks",
    url: "sneakes",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_chocolates-snacksStorefront_m_480_251022_06-13.jpg",
  },
];

const CleaningHousehold = [
  {
    id: 1,
    link: "/cleaning&household",
    url: "cleaning",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/d3dc58d9-5531-4b8c-ae8c-740a6f4dce51/hp_cleaners-disnfectants_m_480_251022_01.jpg",
  },
  {
    id: 2,
    link: "/cleaning&household",
    url: "cleaning",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/d3dc58d9-5531-4b8c-ae8c-740a6f4dce51/hp_detetgents-cleaningStorefront_m_480_251022_02.jpg",
  },
  {
    id: 3,
    link: "/cleaning&household",
    url: "cleaning",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/d3dc58d9-5531-4b8c-ae8c-740a6f4dce51/hp_kitchen-wipes-m_480_251022_03.jpg",
  },
  {
    id: 4,
    link: "/cleaning&household",
    url: "cleaning",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/d3dc58d9-5531-4b8c-ae8c-740a6f4dce51/hp_fresheners-repplent-_m_480_251022_04.jpg",
  },
];

const HomeKitchen = [
  {
    id: 1,
    link: "/kitchen&pents&garden",
    url: "kitchen",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/dd3c4480-6322-4f07-a1b2-daab29bae452/hp_under-149-GMStorefront(Till10th)_m_251022_01.jpg",
  },
  {
    id: 2,
    link: "/kitchen&pents&garden",
    url: "kitchen",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/dd3c4480-6322-4f07-a1b2-daab29bae452/hp_150-299-GMStorefront(Till10th)_m_251022_02.jpg",
  },
  {
    id: 3,
    link: "/kitchen&pents&garden",
    url: "kitchen",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/dd3c4480-6322-4f07-a1b2-daab29bae452/hp_pressure-cookers-GMStorefront(Till10th)_m_251022_03.jpg",
  },
  {
    id: 4,
    link: "/kitchen&pents&garden",
    url: "kitchen",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/dd3c4480-6322-4f07-a1b2-daab29bae452/hp_dinnerware-GMStorefront(Till10th)_m_251022_04.jpg",
  },
  {
    id: 5,
    link: "/kitchen&pents&garden",
    url: "kitchen",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/dd3c4480-6322-4f07-a1b2-daab29bae452/hp_dinnerware-GMStorefront(Till10th)_m_251022_04.jpg",
  },
  {
    id: 6,
    link: "/kitchen&pents&garden",
    url: "kitchen",
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/dd3c4480-6322-4f07-a1b2-daab29bae452/hp_storage-containers-GMStorefront(Till10th)_m_251022_06.jpg",
  },
];

const BrandStore = [
  {
    id: 1,
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/1bfc68c3-152f-4ed4-bce4-40644929dff2/hp_amul-brandStorefront_m_480_251022_01.jpg",
  },
  {
    id: 2,
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/1bfc68c3-152f-4ed4-bce4-40644929dff2/hp_dettol-brandStorefront_m_480_251022_02.jpg",
  },
  {
    id: 3,
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/1bfc68c3-152f-4ed4-bce4-40644929dff2/hp_harpic-brandStorefront_m_480_091122_03.jpg",
  },
  {
    id: 4,
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/1bfc68c3-152f-4ed4-bce4-40644929dff2/hp_lindberg-brandStorefront_m_480_251022_04.jpg",
  },
  {
    id: 5,
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/1bfc68c3-152f-4ed4-bce4-40644929dff2/hp_Tasties-brandStorefront_m_480_251022_05.jpg",
  },
  {
    id: 6,
    src: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/1bfc68c3-152f-4ed4-bce4-40644929dff2/hp_durex-brandStorefront_m_480_251022_06.jpg",
  },
];

// const
const Home = () => {
  const data = useSelector((store) => store.CarouselReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataForCarousel());
  }, []);
  let carousel = [];
  for (let i = 0; i < 20; i++) {
    carousel.push(data[i]);
  }
  return (
    <>
      <Navbar />
      {/* category */}

      {/* <Box w={{ base: "92%", md: "75.5%" }} m="auto">
        <Category />
      </Box> */}

      {/* Banner section */}
      <Box mb="3rem">
        <HomePageCrauser />
      </Box>

      <Box w={{ base: "92%", md: "75.5%" }} m="auto">
        {/* sponser section */}
        <Box display={{ base: "none", md: "block" }}>
          <Grid gridTemplateColumns={"repeat(6, 1fr)"} gap={6}>
            <Sponers src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_01.png" />
            <Sponers src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_02.png" />
            <Sponers src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_03.png" />
            <Sponers src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_04.png" />
            <Sponers src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_05.png" />
            <Sponers src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_06.png" />
          </Grid>
        </Box>
        {/* sponser section for mobile */}
        <Box display={{ base: "block", md: "none" }}>
          <SponcerSectionForMobile />
        </Box>

        {/* My Smart basket section */}
        <Box mt="2rem" display={{ base: "none", md: "block" }}>
          <Heading heading="My Smart Basket " />
          <MySmartBasketCarousel data={carousel} />
        </Box>
        {/* top offer section */}
        <Box mt="2rem">
          <Heading heading="Top Offers " />
          <Grid
            gridTemplateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
            gap={{ md: 4 }}
          >
            {topOffers.map(({ src, id }) => {
              return <TopOffer src={src} key={id} />;
            })}
          </Grid>
        </Box>
        {/* Best Sellers section */}
        <Box mt="2rem" w={{ md: "100" }} m="auto">
          <Heading heading="Best Sellers " />
          <MySmartBasketCarousel data={carousel} />
        </Box>
        {/* Bank Offers section */}
        <Box mt="2rem">
          <Heading heading="Bank Offers " />
          <Grid
            gridTemplateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
            gap={{ md: 4 }}
          >
            {bankOffers.map(({ src, id }) => {
              return <TopOffer src={src} key={id} />;
            })}
          </Grid>
        </Box>
        {/* Fruits & Vegetables section */}
        <Box mt="2rem">
          <Heading heading="Fruits & Vegetables" />
          <Grid
            gridTemplateColumns={{ base: "1fr 1fr", md: "repeat(6, 1fr)" }}
            gap={{ md: 4 }}
          >
            {fruits.map(({ src, id, link, url }) => {
              return <TopOffer src={src} key={id} link={link} url={url} />;
            })}
          </Grid>
        </Box>
        {/* staples section */}
        <Box mt="2rem">
          <Heading heading="Your Daily Staples" />
          <Grid
            gridTemplateColumns={{ base: "1fr 1fr", md: "repeat(6, 1fr)" }}
            gap={{ md: 4 }}
          >
            {staples.map(({ src, id, link, url }) => {
              return <TopOffer src={src} key={id} link={link} url={url} />;
            })}
          </Grid>
        </Box>
        {/*Beverages*/}
        <Box mt="2rem">
          <Heading heading="Beverages" />
          <Grid
            gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={{ md: 3 }}
          >
            <Box
              border="1px solid #E8E8E8"
              display={{ base: "none", md: "block" }}
            >
              <Image
                src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/c9120807-7db5-4f39-9895-3b03dee91c54/hp_hot-sips-beveragesStorefront_m_251022_560x378_01.jpg"
                alt="beauty_product"
                w="100%"
                h="auto"
              />
            </Box>
            <Grid gridTemplateColumns="1fr 1fr" gap={{ md: 3 }}>
              <Box border="1px solid #E8E8E8">
                <Image
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/c9120807-7db5-4f39-9895-3b03dee91c54/hp_coost-beveragesStorefront_m_251022_275x184_02.jpg"
                  alt=""
                  w="100%"
                  h="auto"
                />
              </Box>
              <Box border="1px solid #E8E8E8">
                <Image
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/c9120807-7db5-4f39-9895-3b03dee91c54/hp_coffee-beveragesStorefront_m_251022_275x184_03.jpg"
                  alt=""
                  w="100%"
                  h="auto"
                />
              </Box>
              <Box border="1px solid #E8E8E8">
                <Image
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/c9120807-7db5-4f39-9895-3b03dee91c54/hp_health-beveragesStorefront_m_251022_275x184_04.jpg"
                  alt=""
                  w="100%"
                  h="auto"
                />
              </Box>
              <Box border="1px solid #E8E8E8">
                <Image
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/c9120807-7db5-4f39-9895-3b03dee91c54/hp_energy-beveragesStorefront_m_251022_275x184_05.jpg"
                  alt=""
                  w="100%"
                  h="auto"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Snack Store*/}
        <Box mt="2rem">
          <Heading heading="Snack Store" />
          <Grid
            gridTemplateColumns={{ base: "1fr 1fr", md: "repeat(6, 1fr)" }}
            gap={{ md: 4 }}
          >
            {Snack.map(({ src, id, link, url }) => {
              return <TopOffer src={src} key={id} link={link} url={url} />;
            })}
          </Grid>
        </Box>
        {/* Cleaning & Household */}
        <Box mt="2rem">
          <Heading heading="Cleaning & Household" />
          <Grid
            gridTemplateColumns={{ base: "1fr 1fr", md: "repeat(4,1fr)" }}
            gap={{ md: 4 }}
          >
            {CleaningHousehold.map(({ src, id, link, url }) => {
              return <TopOffer src={src} key={id} url={url} link={link} />;
            })}
          </Grid>
        </Box>
        {/* Beauty & Hygiene */}
        <Box mt="2rem">
          <Heading heading="Beauty & Hygiene" />
          <Link to="/beauty&hygiene">
            <Grid
              gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={{ md: 3 }}
              onClick={() => dispatch(getProducts("beauty"))}
            >
              <Box
                border="1px solid #E8E8E8"
                display={{ base: "none", md: "block" }}
              >
                <Image
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/6fe7b988-d217-4451-a8ff-6ddd2762f3d5/hp_beauty-Storefront_m_251022_560x378_01.jpg"
                  alt="beauty_product"
                  w="100%"
                  h="auto"
                />
              </Box>
              <Grid gridTemplateColumns="1fr 1fr" gap={{ md: 3 }}>
                <Box border="1px solid #E8E8E8">
                  <Image
                    src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/6fe7b988-d217-4451-a8ff-6ddd2762f3d5/hp_beauty-Storefront_m_251022_275x184_02.jpg"
                    alt=""
                    w="100%"
                    h="auto"
                  />
                </Box>
                <Box border="1px solid #E8E8E8">
                  <Image
                    src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/6fe7b988-d217-4451-a8ff-6ddd2762f3d5/hp_beauty-Storefront_m_251022_275x184_05.jpg"
                    alt=""
                    w="100%"
                    h="auto"
                  />
                </Box>
                <Box border="1px solid #E8E8E8">
                  <Image
                    src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/6fe7b988-d217-4451-a8ff-6ddd2762f3d5/hp_beauty-Storefront_m_251022_275x184_04.jpg"
                    alt=""
                    w="100%"
                    h="auto"
                  />
                </Box>
                <Box border="1px solid #E8E8E8">
                  <Image
                    src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/6fe7b988-d217-4451-a8ff-6ddd2762f3d5/hp_beauty-Storefront_m_251022_275x184_03.jpg"
                    alt=""
                    w="100%"
                    h="auto"
                  />
                </Box>
              </Grid>
            </Grid>
          </Link>
        </Box>
        {/* Home & Kitchen Essentials */}
        <Box mt="2rem">
          <Heading heading="Home & Kitchen Essentials" />
          <Grid
            gridTemplateColumns={{ base: "1fr 1fr", md: "repeat(6,1fr)" }}
            gap={{ md: 4 }}
          >
            {HomeKitchen.map(({ src, id, link, url }) => {
              return <TopOffer src={src} key={id} link={link} url={url} />;
            })}
          </Grid>
        </Box>
        {/* Home & Kitchen Essentials carousel */}
        <Box mt="2rem">
          <HomeAndKitchesCarousel />
        </Box>

        {/* Brand Store */}
        <Box mt="2rem">
          <Heading heading="Brand Store" />
          <Grid
            gridTemplateColumns={{ base: "1fr 1fr", md: "repeat(6,1fr)" }}
            gap={{ md: 4 }}
          >
            {BrandStore.map(({ src, id }) => {
              return <TopOffer src={src} key={id} />;
            })}
          </Grid>
        </Box>
        {/* Featured Recipes */}
        <Box mt="2rem">
          <Heading heading="Featured Recipes" />
          <Image
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_bbw_c_400_web_wellness_banner_nov2_09112022.jpg"
            alt=""
            w="100%"
            h="auto"
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
