import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import LoginSignUpOption from "../component/LoginSignUpOption";
import SearchBar from "../component/SearchBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../index.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const cartData = useSelector((store) => store.CartReducer.cartProduct);
  const changeNavbarBg = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBg);
  return (
    <>
      <Box w="75.5%" m="auto">
        <LoginSignUpOption />
      </Box>
      <Box
        position={navbar ? "sticky" : null}
        zIndex={100}
        top={-0.5}
        w="100%"
        m="auto"
        bg="white"
        boxShadow={navbar ? "rgba(0, 0, 0, 0.16) 0px 1px 4px" : null}
      >
        <Box w="75.5%" m="auto" bg="white">
          <Flex justify="space-between" py=".6rem" align="center">
            {/* logo here */}
            <Box>
              {navbar ? (
                <Flex ml="1rem" align="center">
                  <Box>
                    <Link to="/">
                      <Image
                        src="https://www.bbassets.com/static/v2610/custPage/build/content/img/bb-icon.png"
                        alt="big-basket_logo"
                      />
                    </Link>
                  </Box>
                  <Text
                    color="black"
                    fontSize="14px"
                    fontFamily="Poppins"
                    fontWeight="500"
                    ml="1rem"
                  >
                    SHOP
                  </Text>
                  <Box ml=".5rem">
                    <IoIosArrowDown color="black" />
                  </Box>
                </Flex>
              ) : (
                <Box mt="-2rem">
                  <Link to="/">
                    <Image
                      src="https://www.bbassets.com/static/v2609/custPage/build/content/img/bb_logo.png"
                      alt="big-basket_logo"
                    />
                  </Link>
                </Box>
              )}
            </Box>
            <SearchBar />
            <Link to="/cart">
              <Flex px="1rem" align="center" cursor="pointer">
                <Box mr=".7rem">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/7878/7878683.png"
                    alt="big-basket_logo"
                    w="35px"
                    h="35px"
                  />
                </Box>
                <Menu>
                  <MenuButton className="basket">
                    <Box>
                      <Text color="red" fontSize="14px" fontFamily="Poppins">
                        My Basket
                      </Text>
                      <Text color="red" fontSize="14px" fontFamily="Poppins">
                        {`${cartData.length > 0 ? cartData.length : 0}`} Items
                      </Text>
                    </Box>
                  </MenuButton>
                  <MenuList className="basketProducts">
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Link>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
