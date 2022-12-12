import { useEffect, useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProductForSearch } from "../Redux/SearchReducer/action";
import Products from "./Products";

const SearchBar = () => {
  const data = useSelector((store) => store.SearchReducer?.productList);
  const dispatch = useDispatch();
  // console.log({ data });
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    if (inputText === "") {
      // console.log("query is empty");
    } else {
      dispatch(getProductForSearch(inputText));
    }
  }, [inputText]);

  return (
    <Box>
      <Flex
        // spacing={4}
        w={{ base: "100%", md: "550px", lg: "550px" }}
        mb={{ md: ".3rem" }}
      >
        {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
        <InputGroup size="sm" w={{ base: "100%", md: "", lg: "none" }}>
          <Input
            bg={{ base: "white", lg: "none" }}
            placeholder="Search for products"
            color="#222"
            fontFamily="Poppins"
            fontSize={{ base: "11px", lg: "13px" }}
            fontWeight="300"
            letterSpacing={1}
            value={inputText}
            onChange={handleChange}
            w="100%"
          />
          <InputRightAddon
            children={
              <Search2Icon
                color={{ base: "#222", lg: "white" }}
                fontSize="17px"
                bg={{ base: "white", lg: "none" }}
              />
            }
            bg={{ base: "white", lg: "#84c225" }}
          />
        </InputGroup>
      </Flex>
      {inputText.length > 0 ? (
        <Box
          mt={{ base: ".6rem", lg: "none" }}
          position="absolute"
          h="20rem"
          overflow="auto"
          bg="white"
          borderRadius="10px"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          w={{ base: "98%", md: "80%", lg: "35.8%" }}
          px={{ lg: ".4rem" }}
          zIndex={100}
        >
          {data?.map((item, index) => {
            return <Products item={item} id={index} />;
          })}
        </Box>
      ) : null}
    </Box>
  );
};

export default SearchBar;
