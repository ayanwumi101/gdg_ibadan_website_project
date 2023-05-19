"use state";
import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Buttons from "../buttons";
import Logo from "../logo";
import { LinkedinIcon, SlackIcon, TwitterIcon } from "../icons";

const Footer = () => {
  return (
    <>
      <Box pt="20rem">
        <Box
          as="footer"
          bgColor="#172B37"
          position="relative"
          ml="50px"
          mr="50px"
          borderRadius="24px"
          pb="119px"
        >
          <Box
            bgColor="#FCEFEA"
            ml="62px"
            mr="82"
            position="absolute"
            borderRadius="24px"
            bottom="25rem"
            left="0"
            right="0"
          >
            <Flex
              justifyContent="space-between"
              //   width="100%"
              //   mx="auto"
              alignItems="center"
            >
              <Box
                // as="h4"
                color="#1E3747"
                fontSize="45px"
                lineHeight="57px"
                fontWeight="500"
                pt="93px"
                pl="96px"
                pb="103px"
              >
                <Heading w="589px">
                  Ready to take your tech skills to the next level? Join our
                  community now!
                </Heading>
              </Box>
              <Box marginBottom="152px" marginTop="159px" mr="90px">
                <Buttons btnText="Join our Community" />
              </Box>
            </Flex>
            <Box
              position="absolute"
              inset="2rem auto auto 2rem"
              backgroundColor="#E05D2F"
              borderRadius="15px"
              width="9px"
              height="9px"
            ></Box>
            <Box
              position="absolute"
              inset="2rem auto auto 13rem"
              backgroundColor="#34A853"
              borderRadius="15px"
              width="9px"
              height="9px"
            ></Box>
            <Box
              position="absolute"
              inset="6rem 28rem auto auto"
              backgroundColor="#E05D2F"
              borderRadius="15px"
              width="8px"
              height="8px"
            ></Box>
            <Box
              position="absolute"
              inset="auto auto 4rem 10rem"
              backgroundColor="#FBBC04"
              borderRadius="15px"
              width="11px"
              height="11px"
            ></Box>
            <Box
              position="absolute"
              inset="auto auto 6rem 20rem"
              backgroundColor="#4285F4"
              borderRadius="15px"
              width="11px"
              height="11px"
            ></Box>
            <Box
              position="absolute"
              inset="auto auto 7rem 25rem"
              backgroundColor="#8F8F8F"
              borderRadius="15px"
              width="9px"
              height="9px"
            ></Box>
            <Box
              position="absolute"
              inset="auto auto 6.5em 30rem"
              backgroundColor="#4285F4"
              borderRadius="15px"
              width="11px"
              height="11px"
            ></Box>
            <Box
              position="absolute"
              inset="auto auto 10rem 35rem"
              backgroundColor="#34A853"
              borderRadius="15px"
              width="11px"
              height="11px"
            ></Box>
          </Box>

          <Box
            display="flex"
            color="#fff"
            pt="11rem"
            justifyContent="space-between"
            pl="141px"
            pr="174px"
            // pb="119px"
          >
            <Box>
              <Logo />
              <Text
                fontSize="14px"
                fontWeight="400"
                lineHeight="20px"
                pt="22px"
                w="335px"
              >
                We strive to create a space that fosters collaboration and
                learning among tech enthusiasts of all levels. Whether you're a
                beginner or an expert, our community welcomes you.
              </Text>
              <Flex paddingTop="56px" columnGap="25px" cursor="pointer">
                <Icon as={SlackIcon}></Icon>
                <Icon as={LinkedinIcon}></Icon>
                <Icon as={TwitterIcon}></Icon>
              </Flex>
            </Box>

            <Box>
              <Text
                fontSize="16px"
                fontWeight="500"
                lineHeight="24px"
                color="#E05D2F"
                pb="24px"
              >
                Quick Links
              </Text>
              <UnorderedList
                fontSize="16px"
                fontWeight="400"
                lineHeight="24px"
                cursor="pointer"
              >
                <ListItem pb="24px">About GDG Ibadan</ListItem>
                <ListItem pb="24px">Upcoming Events</ListItem>
                <ListItem pb="24px">Blog</ListItem>
                <ListItem pb="24px">Job Board</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Text
                fontSize="16px"
                fontWeight="500"
                lineHeight="24px"
                color="#E05D2F"
              >
                Legal
              </Text>
              <UnorderedList
                fontSize="16px"
                fontWeight="400"
                lineHeight="24px"
                pt="24px"
                cursor="pointer"
              >
                <ListItem>Terms/Privacy</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </Box>

      <Text
        textAlign="center"
        fontSize="14px"
        fontWeight="400"
        lineHeight="20px"
      >
        {" "}
        &copy; 2023 Ibadan devwebsite
      </Text>
    </>
  );
};

export default Footer;
