import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import { MdCall } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { FaUserTie } from "react-icons/fa";

const LoginSignUpOption = () => {
  return (
    <Flex mr="1rem">
      <Flex align="center" h="30px" ml="auto" gap={8}>
        <Flex align="center">
          <Box mr=".5rem">
            <MdCall />
          </Box>
          <Box>
            <Text color="#666" fontSize="13px" fontFamily="Poppins">
              1860 123 1000
            </Text>
          </Box>
        </Flex>
        <Flex align="center">
          <Box mr=".5rem">
            <TiLocation />
          </Box>
          <Box>
            <Text color="#666" fontSize="13px" fontFamily="Poppins">
              143-605, pune
            </Text>
          </Box>
        </Flex>
        <Flex align="center">
          <Box mr=".5rem">
            <FaUserTie />
          </Box>
          <Box>
            <Text color="#666" fontSize="13px" fontFamily="Poppins">
              Login / Sign Up
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginSignUpOption;
