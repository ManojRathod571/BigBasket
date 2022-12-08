import { Box, Text } from "@chakra-ui/react";
import React from "react";

const FooterHeading = ({ heading }) => {
  return (
    <Box mb="1rem">
      <Text
        fontSize={{ base: "13px", md: "16px" }}
        fontFamily="Poppins"
        fontWeight="300"
        color="#6cd138"
      >
        {heading}
      </Text>
    </Box>
  );
};

export default FooterHeading;
