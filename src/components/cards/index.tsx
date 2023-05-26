"use client";
import React from "react";
import { Box, Card, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Access from "../../assets/access.png";

export default function Cards({ hText, paragraph, background, color }) {
  return (
    <>
      <Card
        width={{ base: "100%px", lg: "266px" }}
        height={{ base: "316px", lg: "277px" }}
        background={background}
        color="#fff"
        borderRadius="32px"
        fontFamily="'Google Sans Display', sans-serif"
        marginBottom={{ base: "31.34px" }}
      >
        <Box
          pt={{ base: "43.93px", lg: "36.5px" }}
          pl={{ base: "22px", lg: "20px" }}
          pr={{ base: "22px", lg: "20px" }}
        >
          <Image
            src={Access}
            alt={""}
            style={{
              backgroundColor: background,
              color: color,
              paddingBottom: "16px",
            }}
          />
          <Heading
            as="h1"
            fontSize="16px"
            fontWeight="500"
            lineHeight="24px"
            pb="16px"
            // fontFamily="'Recoleta', serif"
          >
            {hText}
          </Heading>
          <Box
            as="p"
            fontSize="16"
            fontWeight="400"
            lineHeight="24px"
            fontFamily="'Google Sans Display', sans-serif"
          >
            {paragraph}
          </Box>
        </Box>
      </Card>
    </>
  );
}
