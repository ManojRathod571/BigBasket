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
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import { Link } from "react-router-dom";

const LoginSignUpOption = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
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
          <Flex>
            <Link to="/login">
              <Text
                color="#666"
                fontSize="13px"
                fontFamily="Poppins"
                cursor={"pointer"}
                mr=".3rem"
              >
                Login /
              </Text>
            </Link>
            <Link to="/signup">
              <Text
                color="#666"
                fontSize="13px"
                fontFamily="Poppins"
                cursor={"pointer"}
              >
                SignUp
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginSignUpOption;
