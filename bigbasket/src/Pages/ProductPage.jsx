import { Box, Grid } from "@chakra-ui/react";
import Product_right_grid from "../component/Product_right_grid";
import Footer from "../organisam/Footer";
import Navbar from "../organisam/Navbar";

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <Box w={{ base: "90%", lg: "75%" }} m="auto">
        <Grid
          gridTemplateColumns={{ base: "1fr", lg: "3fr 10fr" }}
          h="auto"
          p="15px 10px"
        >
          <Box
            borderRight={{ lg: "1px solid #ccc" }}
            display={{ base: "none", lg: "block" }}
            // border="1px solid blue"
            h="100vh"
            position="sticky"
            bottom={0}
            top={0}
          >
            <Box pr="15px"></Box>
          </Box>
          <Box>
            <Product_right_grid />
          </Box>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default ProductPage;
