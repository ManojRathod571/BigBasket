import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";

const Sponers = ({ src }) => {
  return (
    <Box>
      <Box>
        <Image src={src} alt="" w="100%" h="auto" />
      </Box>
    </Box>
  );
};

export default Sponers;
