import {
  Box,
  Flex,
  Input,
  Button,
  Grid,
  Text,
  FormControl,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";

import { useState, useEffect, useRef } from "react";
import { useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import lottie from "lottie-web";
import { useDispatch, useSelector } from "react-redux";
import { Signup } from "../Redux/SignUpReducer/action";
import GoToHome from "../molecules/GoToHome";
import BigBasketLoginHeading from "../molecules/BigBasketLoginHeading";

const initialState = {
  email: "",
  password: "",
  name: "",
};

let res;
const SignUpPage = () => {
  const [input, setInput] = useState(initialState);
  const toast = useToast();
  const dispatch = useDispatch();
  const { isSignedup } = useSelector((store) => store.signupReducer);

  console.log("SignUp successfull", isSignedup);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(Signup(input));
    if (!isSignedup) {
      toast({
        title: "Sigup Failed",
        description: "User already exits, Please try login",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-middle",
      });
    } else if (isSignedup) {
      toast({
        title: "Account Created ",
        description: "Signup successfull",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-middle",
      });
      navigate("/login");
    } else {
      toast({
        title: "Signup Failed",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-middle",
      });
    }

    setInput({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setInput({ ...input, [event.target.name]: value });
  };

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../lottie/cart1.json"),
    });
  }, []);
  return (
    <Box bg="#f0f2f5" h="100vh">
      <Box pt="4rem">
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
            h="24rem"
          >
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
                Create Account
              </Text>
            </Button>
            <Flex mt="1rem" justifyContent="center">
              <Text fontSize="14px" fontWeight="500" fontFamily="Poppins">
                Already have an account ?
              </Text>
              <Link to="/login">
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  fontFamily="Poppins"
                  color="#1877f2"
                  ml="1rem"
                  cursor="pointer"
                >
                  Login
                </Text>
              </Link>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUpPage;
