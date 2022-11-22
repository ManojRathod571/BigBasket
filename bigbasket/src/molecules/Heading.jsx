import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Heading = ({ heading }) => {
  return (
    <Box mb="1rem">
      <Text
        textAlign="center"
        fontSize="22px"
        fontWeight="500px"
        fontFamily="Poppins"
        color="rgb(68, 68, 68)"
        mb=".5rem"
      >
        {heading}
      </Text>
      <Box borderBottom="1px solid 	#E8E8E8" w="100%"/>
    </Box>
  );
};

export default Heading;
