import React from "react";

import {
  Box,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
  color,
} from "@chakra-ui/react";
import { MdCall } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { FaUserTie } from "react-icons/fa";
import { useRef } from "react";

const LoginSignUpOption = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Flex mr="1rem">
      <Flex align="center" h="30px" ml="auto" gap={8}>
        <Flex align="center">
          <Box mr=".5rem">
            <MdCall />
          </Box>
          <Box>
            <Text
              color="#666"
              fontSize="13px"
              fontFamily="Poppins"
              cursor={"pointer"}
            >
              1860 123 1000
            </Text>
          </Box>
        </Flex>
        <Flex align="center">
          <Box mr=".5rem">
            <TiLocation />
          </Box>
          <Box>
            <Text
              color="#666"
              fontSize="13px"
              fontFamily="Poppins"
              cursor={"pointer"}
            >
              143-605, pune
            </Text>
          </Box>
        </Flex>
        <Flex align="center">
          <Box mr=".5rem">
            <FaUserTie />
          </Box>
          <Box onClick={onOpen}>
            <Text
              color="#666"
              fontSize="13px"
              fontFamily="Poppins"
              cursor={"pointer"}
            >
              Login / Sign Up
            </Text>
          </Box>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <Flex justify={"center"}>
                <ModalHeader>Login</ModalHeader>
              </Flex>

              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Enter your email"
                    required
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder="Enter your password" required />
                </FormControl>
              </ModalBody>

              <Flex justify={"center"}>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3}>
                    Login
                  </Button>
                  {/* <Button onClick={onClose}>Cancel</Button> */}
                </ModalFooter>
              </Flex>
              <Flex justify="center" pb="1rem">
                <Text fontSize="" fontWeight="" fontFamily="" color="">
                  Don't have an account yet ?{" "}
                  <span style={{ color: "blue", cursor: "pointer" }}>
                    Create an Account
                  </span>
                </Text>
              </Flex>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginSignUpOption;
