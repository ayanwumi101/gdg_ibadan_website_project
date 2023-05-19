"use client";
import React from "react";
import Navbar from "../../components/navbar";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import Header from "../../assets/gdg-header.jpg";
import Buttons from "../../components/buttons";
import About from "../../assets/images asset.png";
import Lacasera from "../../assets/lacasera.png";
import Cardify from "../../assets/cardify.png";
import Ship from "../../assets/ship.png";
import Altschool from "../../assets/Altschool.png";
import Heyfood from "../../assets/heyfood.png";
import Halal from "../../assets/halal.png";
import Line from "../../assets/line.png";
import Cards from "../../components/cards";
import BgLine from "../../assets/bg-line.jpg";
import Organisers from "../../components/organisers";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        maxW="100%"
        height="auto"
        mt="9rem"
        ml="50"
        mr="50"
        position="relative"
      >
        <Image src={Header} alt={""} style={{ borderRadius: "24px" }} />
        <Box
          position="absolute"
          top="0rem"
          textAlign="center"
          //   backgroundColor="rgb(0, 0, 0)"
          background="rgba(0, 0, 0, 0.5)"
          width="100%"
          pb="14.38rem"
          pt="7rem"
          borderRadius="24px"
        >
          <Text
            pt="94px"
            pl="163px"
            fontSize="42px"
            pr="164px"
            fontWeight="light"
            lineHeight="80px"
            color="#fff"
          >
            Welcome to{" "}
            <Text as="span" color="#E05D2F">
              GDG Ibadan
            </Text>{" "}
            website, where tech enthusiasts gather to share ideas and knowledge.
          </Text>
          <Buttons
            btnText="Join our Community"
            background="#E05D2F"
            color="#fff"
          />
        </Box>
      </Box>

      <Flex columnGap="51px" pl="120px" pr="132px">
        <Box pt="181px">
          <Heading
            color="#1E3747"
            fontWeight="500"
            fontSize="45px"
            lineHeight="57px"
            pb="38px"
            // fontFamily="Recoleta, sans-serif"
          >
            About Us
          </Heading>
          <UnorderedList
            fontSize="16px"
            fontWeight="500"
            lineHeight="24px"
            columnGap="37px"
            display="flex"
          >
            <ListItem color="#0F9D58">Connect</ListItem>
            <ListItem color="#4285F4">Learn</ListItem>
            <ListItem color="#EA4335">Grow</ListItem>
          </UnorderedList>
          <Text
            pt="20px"
            color="#6A7C88"
            fontSize="22px"
            fontWeight="400"
            lineHeight="28px"
            pb="44px"
            width="367px"
            as="p"
            // fontFamily="Google Sans Display, sans-serif"
          >
            We strive to create a space that fosters collaboration and learning
            among tech enthusiasts of all levels. Whether you're a beginner or
            an expert, our community welcomes you.
          </Text>
          <Buttons btnText="Know More" />
        </Box>
        <Box pt="51px">
          <Image src={About} alt="" />
        </Box>
      </Flex>

      <Box pt="134px">
        <Center fontSize="45px" fontWeight="500" lineHeight="57px">
          Our Sponsors
        </Center>
        <Flex
          alignItems="center"
          justifyContent="center"
          columnGap="52px"
          pl="219px"
          pr="220px"
          pt="67px"
          pb="66px"
        >
          <Image src={Lacasera} alt={""} />
          <Image src={Cardify} alt={""} />
          <Image src={Ship} alt={""} />
          <Image src={Altschool} alt={""} />
          <Image src={Heyfood} alt={""} />
          <Image src={Halal} alt={""} />
        </Flex>
      </Box>

      <Box
        bgColor="#1E3747"
        ml="118px"
        mr="133px"
        borderRadius="24px"
        color="#fff"
        overflow="hidden"
        position="relative"
      >
        <Image src={Line} alt={""} />
        <Box
          textAlign="center"
          position="absolute"
          top="5rem"
          right="0"
          left="0"
        >
          <Heading fontSize="45px" lineHeight="57px" fontWeight="500">
            Features
          </Heading>
          <Box
            fontSize="22px"
            lineHeight="28px"
            fontWeight="400"
            pt="27px"
            ml="313px"
            // width="563px"
            mr="313px"
            fontFamily="'Google Sans Display', sans-serif"
          >
            Fostering collaboration and learning among tech of all enthusiasts
            level
          </Box>
        </Box>
        <Flex
          pl="32px"
          pr="33px"
          columnGap="20px"
          position="relative"
          bottom="5rem"
          cursor="pointer"
        >
          <Cards
            hText={"Access"}
            paragraph={
              "Access a wealth of knowledge and resources in our extensive library of tech content."
            }
            background="#4285F4"
            color="#fff"
          />
          <Cards
            hText={"Connect"}
            paragraph={
              "Connect with fellow tech enthusiasts through our online community."
            }
            background="#34A853"
            color="#fff"
          />
          <Cards
            hText={"Events"}
            paragraph={
              "Attend exclusive events and meetups to learn from industry experts and expand your network."
            }
            background="#DA5847"
            color="#fff"
          />
          <Cards
            hText={"Discussion Forum"}
            paragraph={
              "Join groups and discussions centered around your specific interests within the tech industry."
            }
            background="#FBBC04"
            color="#fff"
          />
        </Flex>
      </Box>

      <Organisers />
      <Footer />
    </>
  );
};

export default Home;
