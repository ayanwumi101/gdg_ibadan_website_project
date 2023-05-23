"use client";
import {
  Box,
  Flex,
  Heading,
  Icon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import Buttons from "../buttons";
import Logo from "../logo";
import { LinkedinIcon, SlackIcon, TwitterIcon } from "../icons";

const Footer = () => {
  return (
    <>
      <Box pt={{ base: "40rem", lg: "20rem" }}>
        <Box
          as="footer"
          bgColor="#172B37"
          position="relative"
          ml={{ base: "19px", lg: "50px" }}
          mr={{ base: "18px", lg: "50px" }}
          borderRadius="24px"
          pb={{ base: "20px", lg: "119px" }}
        >
          <Box
            bgColor="#FCEFEA"
            ml={{ base: "19px", lg: "62px" }}
            mr={{ base: "18px", lg: "82px" }}
            position="absolute"
            borderRadius="24px"
            bottom={{ base: "36.5rem", lg: "25rem" }}
            left="0"
            right="0"
          >
            <Flex
              justifyContent="space-between"
              //   width="100%"
              //   mx="auto"
              alignItems="center"
              display={{ base: "block", lg: "flex" }}
            >
              <Box
                // as="h4"
                color="#1E3747"
                pt={{ base: "148px", lg: "93px" }}
                pl={{ base: "16px", lg: "96px" }}
                pb={{ base: "0px", lg: "103px" }}
                pr={{ base: "18px" }}
              >
                <Heading
                  w={{ base: "267px", lg: "465px" }}
                  fontSize={{ base: "32px", lg: "40px" }}
                  lineHeight={{ base: "48px", lg: "57px" }}
                  fontWeight="500"
                >
                  Ready to take your tech skills to the next level? Join our
                  community now!
                </Heading>
                e{" "}
              </Box>
              <Box
                marginBottom={{ base: "66px", lg: "152px" }}
                marginTop={{ base: "47px", lg: "159px" }}
                mr={{ base: "70px", lg: "90px" }}
                ml={{ base: "17px", lg: "0px" }}
              >
                <Buttons btnText="Join our Community" />
              </Box>
            </Flex>
            <Box display={{ base: "none" }}>
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

            <Box display={{ base: "block" }}>
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
                inset="8rem 10rem auto auto"
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
                inset="auto auto 17rem 18rem"
                backgroundColor="#8F8F8F"
                borderRadius="15px"
                width="9px"
                height="9px"
              ></Box>
              <Box
                position="absolute"
                inset="auto auto 13.5em 10rem"
                backgroundColor="#4285F4"
                borderRadius="15px"
                width="11px"
                height="11px"
              ></Box>
              <Box
                position="absolute"
                inset="auto auto 9rem 2rem"
                backgroundColor="#34A853"
                borderRadius="15px"
                width="11px"
                height="11px"
              ></Box>
            </Box>
          </Box>

          <Box
            display={{ base: "block", lg: "flex" }}
            color="#fff"
            pt={{ base: "8rem", lg: "11rem" }}
            justifyContent="space-between"
            pl={{ base: "32px", lg: "141px" }}
            pr={{ base: "0px", lg: "174px" }}
            // pb="119px"
          >
            <Box>
              <Logo />
              <Text
                fontSize="14px"
                fontWeight="400"
                lineHeight="20px"
                pt={{ base: "27px", lg: "22px" }}
                w={{ base: "252px", lg: "335px" }}
              >
                We strive to create a space that fosters collaboration and
                learning among tech enthusiasts of all levels. Whether you're a
                beginner or an expert, our community welcomes you.
              </Text>
              <Flex
                paddingTop={{ base: "27px", lg: "56px" }}
                columnGap="25px"
                cursor="pointer"
              >
                <Icon as={SlackIcon}></Icon>
                <Icon as={LinkedinIcon}></Icon>
                <Icon as={TwitterIcon}></Icon>
              </Flex>
            </Box>

            <Box pt={{ base: "39px" }}>
              <Text
                fontSize="16px"
                fontWeight="500"
                lineHeight="20px"
                color="#E05D2F"
                pb={{ base: "32px", lg: "24px" }}
              >
                Quick Links
              </Text>
              <UnorderedList
                fontSize="16px"
                fontWeight="400"
                lineHeight="20px"
                cursor="pointer"
              >
                <ListItem pb={{ base: "16px", lg: "24px" }}>
                  About GDG Ibadan
                </ListItem>
                <ListItem pb={{ base: "16px", lg: "24px" }}>
                  Upcoming Events
                </ListItem>
                <ListItem pb={{ base: "16px", lg: "24px" }}>Blog</ListItem>
                <ListItem pb={{ base: "16px", lg: "24px" }}>Job Board</ListItem>
              </UnorderedList>
            </Box>

            <Box pt={{ base: "15px" }}>
              <Text
                fontSize="16px"
                fontWeight="500"
                lineHeight="20px"
                color="#E05D2F"
              >
                Legal
              </Text>
              <UnorderedList
                fontSize="16px"
                fontWeight="400"
                lineHeight="20px"
                pt={{ base: "32px", lg: "24px" }}
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
        pt="25px"
        pb="25px"
      >
        {" "}
        &copy; 2023 Ibadan devwebsite
      </Text>
    </>
  );
};

export default Footer;
