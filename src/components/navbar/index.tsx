"use client";
import {
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Img,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import Image from "next/image";
import { AboutIcon, JobBoardIcon } from "../../components/icons";
import Buttons from "../../components/buttons";
import Logo from "../logo";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      bg="#fff"
      pl="128px"
      pr="138px"
      pt="27px"
      pb="27px"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
    >
      <Logo />

      <Box
        display="flex"
        alignItems="center"
        fontSize="16px"
        lineHeight="24px"
        font-weight="lighter"
        listStyleType="none"
        cursor="pointer"
      >
        <Menu>
          <MenuButton
            as={Button}
            bg="white"
            rightIcon={<ChevronDownIcon ml="-10px" />}
            fontSize="16px"
            fontWeight="500"
            _hover={{ backgroundColor: "white", color: "black" }}
            p="0"
          >
            GDG Ibadan
          </MenuButton>
          <MenuList
            fontSize="16px"
            fontWeight="500"
            _hover={{ backgroundColor: "white", color: "black" }}
          >
            <MenuItem icon={<AboutIcon />}>About GDG Ibadan</MenuItem>
            <MenuItem icon={<JobBoardIcon />}>Job Board</MenuItem>
          </MenuList>
        </Menu>
        <Box as="li" ml="27.19">
          Events
        </Box>
        <Box as="li" ml="24px">
          Blog
        </Box>
      </Box>

      <Buttons btnText="Register" background="#E05D2F" color="#fff" />
    </Flex>
  );
};

export default Navbar;
