"use state";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import GDGLogo from "../../assets/GDG-logo.png";

const Logo = () => {
  return (
    <>
      <Flex columnGap="8.03px">
        <Image
          src={GDGLogo}
          alt=""
          style={{ width: "39.7px", height: "18.29px" }}
        />
        <Box fontSize="19.12px" lineHeight="24.13px" fontWeight="400">
          GDG Ibadan
        </Box>
      </Flex>
    </>
  );
};

export default Logo;
