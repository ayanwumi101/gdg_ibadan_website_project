"use client";
import React from "react";
import Navbar from "../../components/navbar";
import {
  Box,
  Center,
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
import Organisers from "../../components/organisers";
import Footer from "../../components/footer";
import HCardify from "../../assets/image 3.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        maxW="100%"
        height="auto"
        mt={{ base: "5.1rem", lg: "4.5rem" }}
        ml={{ base: "20px", lg: "50px" }}
        mr={{ base: "20px", lg: "50px" }}
        position="relative"
      >
        <Box height={{ base: "732px", lg: "auto" }}>
          <Image
            src={Header}
            alt={""}
            style={{ borderRadius: "24px", objectFit: "cover", height: "100%" }}
          />
        </Box>

        <Box
          position="absolute"
          top="0rem"
          textAlign="center"
          //   backgroundColor="rgb(0, 0, 0)"
          background="rgba(0, 0, 0, 0.5)"
          width="100%"
          pb={{ base: "0rem", lg: "14.5rem" }}
          pt={{ base: "0rem", lg: "10rem" }}
          borderRadius="24px"
          height={{ base: "100%" }}
        >
          <Text
            pt={{ base: "95px", lg: "94px" }}
            pl={{ base: "49px", lg: "163px" }}
            fontSize={{ base: "32px", lg: "42px" }}
            pr={{ base: "42px", lg: "164px" }}
            fontWeight="light"
            lineHeight={{ base: "60px", lg: "80px" }}
            color="#fff"
            paddingBottom={{ base: "56px" }}
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

      <Flex
        columnGap="51px"
        pl={{ base: "0px", lg: "120px" }}
        pr={{ base: "0px", lg: "132px" }}
        display={{ base: "block", lg: "flex" }}
      >
        <Box
          pt={{ base: "105px", lg: "181px" }}
          pl={{ base: "22px" }}
          pr={{ base: "52px" }}
        >
          <Heading
            color="#1E3747"
            fontWeight="500"
            fontSize={{ base: "32px", lg: "45px" }}
            lineHeight={{ base: "40px", lg: "57px" }}
            pb="38px"
            // fontFamily="Recoleta, sans-serif"
          >
            About Us
          </Heading>
          <UnorderedList
            fontSize="16px"
            fontWeight="500"
            lineHeight="20px"
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
            width={{ base: "302px", lg: "367px" }}
            as="p"
            // fontFamily="Google Sans Display, sans-serif"
          >
            We strive to create a space that fosters collaboration and learning
            among tech enthusiasts of all levels. Whether you're a beginner or
            an expert, our community welcomes you.
          </Text>
          <Buttons
            btnText="Know More"
            // marginBottom={{ base: "84px" }}
          />
        </Box>
        <Box pt={{ base: "84px", lg: "51px" }} pb={{ base: "61px" }}>
          <Image src={About} alt="" />
        </Box>
      </Flex>

      <Box pt={{ base: "27px", lg: "134px" }}>
        <Center
          fontSize={{ base: "32px", lg: "45px" }}
          fontWeight="500"
          lineHeight={{ base: "40px", lg: "57px" }}
        >
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
          display={{ base: "none", lg: "flex" }}
        >
          <Image src={Lacasera} alt={""} />
          <Image src={Cardify} alt={""} />
          <Image src={Ship} alt={""} />
          <Image src={Altschool} alt={""} />
          <Image src={Heyfood} alt={""} />
          <Image src={Halal} alt={""} />
        </Flex>
        <Box
          display={{ base: "flex", lg: "none" }}
          pl="0px"
          pr="30px"
          pt="32px"
          pb="85px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Image src={HCardify} alt={""} />
          <Image src={Ship} alt={""} />
          <Image src={Altschool} alt={""} />
        </Box>
      </Box>

      <Box
        bgColor="#1E3747"
        ml={{ base: "19px", lg: "118px" }}
        mr={{ base: "19px", lg: "133px" }}
        borderRadius="24px"
        color="#fff"
        overflow="hidden"
        position="relative"
        height={{ base: "105rem", lg: "41rem" }}
      >
        <Box pt={{ base: "4rem" }}>
          <Image src={Line} alt={""} />
        </Box>

        <Box
          textAlign="center"
          position="absolute"
          top="5rem"
          right="0"
          left="0"
        >
          <Heading
            fontSize={{ base: "32px", lg: "45px" }}
            lineHeight={{ base: "40px", lg: "57px" }}
            fontWeight="500"
          >
            Features
          </Heading>
          <Box
            fontSize={{ base: "18px", lg: "22px" }}
            lineHeight={{ base: "27px", lg: "28px" }}
            fontWeight="400"
            pt={{ base: "63px", lg: "27px" }}
            ml={{ base: "18.97px", lg: "313px" }}
            // width="563px"
            mr={{ base: "18.97px", lg: "313px" }}
            fontFamily="'Google Sans Display', sans-serif"
          >
            Fostering collaboration and learning among tech of all enthusiasts
            level
          </Box>
        </Box>
        <Flex
          pl={{ base: "20px", lg: "32px" }}
          pr={{ base: "13px", lg: "33px" }}
          columnGap="20px"
          position="relative"
          bottom={{ base: "0rem", lg: "5rem" }}
          cursor="pointer"
          top={{ base: "5rem", lg: "-5rem" }}
          display={{ base: "block", lg: "flex" }}
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
