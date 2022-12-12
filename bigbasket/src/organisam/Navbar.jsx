import {
  Box,
  Flex,
  Image,
  Text,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { HiShoppingCart } from "react-icons/hi";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import LoginSignUpOption from "../component/LoginSignUpOption";
import SearchBar from "../component/SearchBar";
import Category from "../component/Category";
import "../index.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  const cartData = useSelector((store) => store.CartReducer.cartProduct);
  const changeNavbarBg = () => {
    console.log(window.scrollY);
    console.log("Nav", navbar);
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBg);
  return (
    <>
      <Box w="75.5%" m="auto" display={{ base: "none", lg: "block" }}>
        <LoginSignUpOption />
      </Box>
      <Box
        display={{ base: "none", lg: "block" }}
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
                    cursor="pointer"
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
                  {/* <MenuList className="basketProducts">
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                  </MenuList> */}
                </Menu>
              </Flex>
            </Link>
          </Flex>
        </Box>
      </Box>
      {navbar !== true ? (
        <Box
          display={{ base: "none", md: "none", lg: "block" }}
          w={{ base: "92%", md: "75.5%" }}
          m="auto"
        >
          <Category />
        </Box>
      ) : (
        <Box
          display={{ base: "none", md: "", lg: "none" }}
          w={{ base: "92%", md: "75.5%" }}
          m="auto"
        >
          <Category />
        </Box>
      )}

      {/* for mobile */}
      <Box
        display={{ lg: "none" }}
        w="100%"
        bg="#84c225"
        h="5rem"
        position={navbar ? "fixed" : null}
        zIndex={111}
      >
        <Flex py=".3rem" justify="space-between" align={"center"} px="1rem">
          <Box>
            <Box colorScheme="blue" onClick={onOpen}>
              <HamburgerIcon boxSize={7} color="white" />
            </Box>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px" bg="#84c225">
                  <Flex justify="space-between">
                    <Link to="/">
                      <Text color="white">Home</Text>
                    </Link>
                    <Box onClick={onClose}>
                      <CloseIcon color="white" boxSize={4} />
                    </Box>
                  </Flex>
                </DrawerHeader>
                <DrawerBody>
                  <Category />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
          <Box>
            <FaUserTie color="white" fontSize="1.3rem" />
          </Box>
          <Box>
            <Link to="/">
              <Image
                src="https://www.bbassets.com/static/v2610/custPage/build/content/img/bb-icon.png"
                alt="big-basket_logo"
                w="1.6rem"
                h="1.6rem"
              />
            </Link>
          </Box>
          <Box>
            <TiLocation color="white" fontSize="1.6rem" />
          </Box>
          <Box>
            <Link to="/cart">
              <HiShoppingCart color="white" fontSize="1.6rem" />
            </Link>
          </Box>
        </Flex>
        <Box pt=".4rem" px=".2rem">
          <SearchBar />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
