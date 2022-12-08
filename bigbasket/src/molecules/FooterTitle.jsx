import { Box, Text } from "@chakra-ui/react";
import React from "react";

const FooterTitle = ({ title }) => {
  return (
    <Box key={title.id}>
      <Text
        fontSize={{ base: "11px", md: "13px" }}
        fontFamily="Poppins"
        fontWeight="300"
        color="#808080"
        mb=".7rem"
      >
        {title}
      </Text>
    </Box>
  );
};

export default FooterTitle;
