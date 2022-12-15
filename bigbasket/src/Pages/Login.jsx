import {
  Box,
  Flex,
  Input,
  Button,
  Text,
  useToast,
  FormControl,
  FormLabel,
  Grid,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [input, setInput] = useState(initialState);
  const toast = useToast();
  const { email, password } = initialState;
  const isEmail = email === "";
  const isPassword = password === "";

  const handleSubmit = async (event) => {
    event.preventDefault();

    let res = await axios.post(`http://localhost:8080/user/login`, input);
    console.log(res.data);
    if (res.data === "Please Signup first") {
      toast({
        title: "Login Failed",
        description: "You are a new user, Please Signup",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-middle",
      });
    } else if (res.data === "invalid Password") {
      toast({
        title: "Invalid email or password",
        // description: "You are a new user, Please Signup",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-middle",
      });
    } else {
      localStorage.setItem("token", res.data);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setInput({ ...input, [event.target.name]: value });
  };
  console.log(initialState);
  return (
    <Box bg="#f0f2f5" h="100vh">
      <Box w="60%" m="auto" pt="10rem">
        <Grid gridTemplateColumns="1fr 1fr">
          <Box></Box>
          <Box
            p="2rem"
            boxShadow="0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)"
            borderRadius="10px"
          >
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Enter your email"
                required
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
                required
                type="password"
                name="password"
                value={input.password}
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <Button
              w="100%"
              bg="#1877f2"
              _hover={{ bg: "#1877f2" }}
              mt="1rem"
              onClick={handleSubmit}
            >
              <Text
                fontSize="16px"
                fontFamily="Poppins"
                color="white"
                fontWeight="500"
              >
                Login
              </Text>
            </Button>
            <Flex mt="1rem" justifyContent="center">
              <Text fontSize="14px" fontWeight="500" fontFamily="Poppins">
                Don't have an account ?
              </Text>
              <Link to="/signup">
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  fontFamily="Poppins"
                  color="#1877f2"
                  ml="1rem"
                  cursor="pointer"
                >
                  Create account
                </Text>
              </Link>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
