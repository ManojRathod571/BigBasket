import { Box, Flex, Text } from "@chakra-ui/react";
import { ImHome } from "react-icons/im";
import { FaHandPointLeft } from "react-icons/fa";

const GoToHome = () => {
  return (
    <Flex justify={"center"} align="center" cursor="pointer">
      <Box>
        <ImHome color="#eb8d02" fontSize="" fontWeight="500" />
      </Box>
      <Box mx="1rem">
        <FaHandPointLeft color="#1877f2" fontSize="" fontWeight="" />
      </Box>

      <Text
        textAlign="center"
        color="#1877f2"
        fontSize="16px"
        fontWeight="500"
        fontFamily="Poppins"
      >
        <u> Go to home page</u>
      </Text>
    </Flex>
  );
};

export default GoToHome;
