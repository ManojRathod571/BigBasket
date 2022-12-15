import {
  Box,
  Flex,
  Modal,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { useState, useRef } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const initialState = {
  email: "",
  password: "",
  name: "",
};

let res;
const SignUp = () => {
  const [display, setDisplay] = useState(false);
  const [input, setInput] = useState(initialState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();

    res = await axios.post(`http://localhost:8080/user/signup`, input);
    console.log(res.data);
    if (res.data === "User already exits, Please try login") {
      setDisplay(true);
      toast({
        title: "Sigup Failed",
        description: "User already exits, Please try login",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-middle",
      });
    } else if (res.data === "Sign up successfully") {
      setDisplay(true);
      toast({
        title: "Account Created ",
        description: "Signup successfull",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-middle",
      });
    } else {
      toast({
        title: "Signup Failed",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-middle",
      });
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setInput({ ...input, [event.target.name]: value });
  };
  // console.log(initialState);
  return (
    <>
      <Box>
        <Box>
          <Text
            color="#666"
            fontSize="13px"
            fontFamily="Poppins"
            cursor={"pointer"}
          >
            <span onClick={onOpen}>SignUp</span>
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
              <Text mt="1.5rem" fontSize="20px" fontWeight="600" color="black">
                Sign Up
              </Text>
            </Flex>

            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Enter your name"
                  required
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  // ref={initialRef}
                  placeholder="Enter your email"
                  required="true"
                  type="text"
                  name="email"
                  value={input.email}
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Enter your password"
                  required="true"
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
            </ModalBody>

            <Flex justify={"center"}>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={(event) => {
                    handleSubmit(event);
                  }}
                >
                  Sign up
                </Button>
              </ModalFooter>
            </Flex>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default SignUp;
