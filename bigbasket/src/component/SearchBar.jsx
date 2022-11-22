import { useEffect, useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProductForSearch } from "../Redux/SearchReducer/action";
import Products from "./Products";

const SearchBar = () => {
  const data = useSelector((store) => store.SearchReducer?.productList);
  // console.log({ data });
  const dispatch = useDispatch();
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
      <Stack spacing={4} w="550px" mb=".3rem">
        {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
        <InputGroup size="sm">
          <Input
            placeholder="Search for products"
            color="#222"
            fontFamily="Poppins"
            fontSize="13px"
            fontWeight="300"
            letterSpacing={1}
            value={inputText}
            onChange={handleChange}
          />
          <InputRightAddon
            children={<Search2Icon color="white" fontSize="17px" />}
            bg="#84c225"
          />
        </InputGroup>
      </Stack>
      {inputText.length > 0 ? (
        <Box
          position="absolute"
          h="20rem"
          overflow="auto"
          bg="white"
          borderRadius="10px"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          w="35.8%"
          px=".4rem"
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
