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
import { useState, useEffect, useRef } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import axios from "axios";
import lottie from "lottie-web";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../Redux/AuthReducer/action";
import BigBasketLoginHeading from "../molecules/BigBasketLoginHeading";
import GoToHome from "../molecules/GoToHome";
// import { Navigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [input, setInput] = useState(initialState);
  const toast = useToast();
  const { token, isAuth, isError } = useSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();
  const { email, password } = initialState;
  // const isEmail = email === "";
  // const isPassword = password === "";

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(Login(input));
    // console.log(token, isAuth);
    if (!isAuth) {
      toast({
        title: "Login Failed",
        description: "please enter correct email or password",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-middle",
      });
    } else if (isAuth) {
      toast({
        title: "Login Successfull",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-middle",
      });

      localStorage.setItem("token", token);
    }
    setInput({
      email: "",
      password: "",
    });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    // console.log(value);
    setInput({ ...input, [event.target.name]: value });
  };
  // console.log(isAuth);
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../lottie/cart1.json"),
    });
  }, []);
  return (
    <Box bg="#f0f2f5" h="100vh" pt="4rem">
      <Box>
        <BigBasketLoginHeading />
        <Link to="/">
          <GoToHome />
        </Link>
      </Box>
      <Box w="65%" m="auto" pt="4rem">
        <Grid
          gridTemplateColumns="1fr 1fr"
          align="center"
          alignContent={"center"}
          gap="3rem"
        >
          <Box h="21rem">
            <Box ref={container} />
          </Box>

          <Box
            p="2rem"
            boxShadow="0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)"
            borderRadius="10px"
            h="21rem"
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

export default LoginPage;
