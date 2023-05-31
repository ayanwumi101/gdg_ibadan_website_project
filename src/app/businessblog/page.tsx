"use client";
import React from "react";
import Navbar from "../../components/navbar";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import BlogImage from "../../assets/Image (1).png";
import MobileImage from "../../assets/Image (2).png";
import Natt from "../../assets/Ellipse 1885.png";
import {
  AcebookIcon,
  InstagramIcon,
  InkedinIcon,
} from "../../components/icons";
import Footer from "../../components/footer";
import Orange from "../../assets/Image (3).png";
import Pear from "../../assets/Image (4).png";

const BusinessBlog = () => {
  return (
    <>
      <Navbar />
      <Box mt={{ base: "5.1rem", lg: "4.5rem" }} textAlign="center">
        <Center pb="15px">
          <Button
            color="#E05D2F"
            backgroundColor="#FCEFEA"
            borderRadius="100px"
            fontSize="20px"
            lineHeight="32px"
            fontWeight="400"
          >
            Business
          </Button>
        </Center>
        <Text
          as="p"
          fontSize="57px"
          lineHeight="64px"
          fontWeight="500"
          ml={{ base: "53px", lg: "161px" }}
          mr={{ base: "52px", lg: "160px" }}
          pb="15px"
          color="#1E3747"
        >
          Great productivity apps you can download for free this week on iPhone
        </Text>
        <Box border="1px" borderStyle="dotted" width="100%" height="1px" />
        <Flex
          alignItems="center"
          columnGap="5px"
          pt="15px"
          justifyContent="center"
        >
          <Text fontSize="16px" fontWeight="400" lineHeight="24px">
            May 02, 2022{" "}
          </Text>
          <Box
            backgroundColor="#E05D2F"
            borderRadius="15px"
            width="6.79px"
            height="6.79px"
          ></Box>
          <Text fontSize="16px" fontWeight="400" lineHeight="24px">
            3 min read
          </Text>
        </Flex>

        <Box
          mt={{ base: "57px", lg: "82px" }}
          ml={{ base: "20px", lg: "123px" }}
          mr={{ base: "20px", lg: "131px" }}
        >
          <Box display={{ base: "none", lg: "block" }}>
            <Image
              src={BlogImage}
              alt={""}
              style={{
                objectFit: "cover",
                height: "100%",
              }}
            />
          </Box>

          <Box
            height={{ base: "732px", lg: "auto" }}
            display={{ base: "block", lg: "none" }}
          >
            <Image
              src={MobileImage}
              alt={""}
              style={{
                height: "100%",
                width: "100%",
                maxWidth: "100%",
              }}
            />
          </Box>

          <Box
            pt={{ base: "89px", lg: "133px" }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pb={{ base: "30px", lg: "50px" }}
          >
            <Flex columnGap="20px" alignItems="center">
              <Image src={Natt} alt={"Designer Image"} />
              <Box fontSize="22px" lineHeight="28px" fontWeight="500">
                <Text pb="5px">Nattasha</Text>
                <Text>Designer</Text>
              </Box>
            </Flex>

            <Flex columnGap="25px" cursor="pointer" color="#E67D59">
              <Icon as={InstagramIcon}></Icon>
              <Icon as={AcebookIcon}></Icon>
              <Icon as={InkedinIcon}></Icon>
            </Flex>
          </Box>
          <Box border="1px" borderStyle="dotted" width="100%" height="1px" />
        </Box>
      </Box>

      <Box
        color="#6A7C88"
        pt={{ base: "51px", lg: "48px" }}
        pl={{ base: "22px", lg: "270px" }}
        pr={{ base: "20px", lg: "269px" }}
      >
        <Text fontSize="22px" lineHeight="28px" fontWeight="400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum been the industry's standard dummy text ever
          since the 1500s, when an unknown printegalley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting.
        </Text>
        <Heading
          as="h3"
          pt={{ base: "78px", lg: "60px" }}
          pb="20px"
          fontSize={{ base: "32px", lg: "45px" }}
          lineHeight={{ base: "40px", lg: "57px" }}
        >
          The Perfect Creativity
        </Heading>
        <Text fontSize="22px" lineHeight="28px" fontWeight="400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum been the industry's standard dummy text ever
          since the 1500s, when an unknown printegalley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting.
        </Text>
        <UnorderedList
          pt="25px"
          pb="40px"
          fontSize="22px"
          lineHeight="40px"
          fontWeight="400"
        >
          <ListItem>
            {" "}
            Efficiently myocardinate market-driven innovation.
          </ListItem>
          <ListItem>Idea-sharing with back end products.</ListItem>
          <ListItem>Ballpark value added activity to beta test.</ListItem>
        </UnorderedList>

        <Box display="flex" mb="40px">
          <Box
            border="1px solid #E05D2F"
            width="32px"
            height="auto"
            borderRadius="12px"
            bgColor="#E05D2F"
          ></Box>
          <Box bgColor="#E9ECED" borderRadius="12px">
            <Text
              fontSize="22px"
              lineHeight="40px"
              fontWeight="400"
              pt="59"
              pb={{ base: "31px", lg: "59px" }}
              pl={{ base: "20px", lg: "63px" }}
              pr={{ base: "24px", lg: "80px" }}
            >
              “Our team was able to teach themselves primchat in a day.it's like
              using a shared email inboxust way more robust looking . Primchat
              was the modern what we were looking.”
            </Text>
          </Box>
        </Box>
        <Heading
          color="#1E3747"
          as="h3"
          pb="20px"
          fontSize={{ base: "32px", lg: "45px" }}
          lineHeight={{ base: "40px", lg: "57px" }}
        >
          Make real time a wireframes services
        </Heading>
        <Text fontSize="22px" lineHeight="40px" fontWeight="400" pb="25px">
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letrsheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <UnorderedList
          pb={{ base: "83px", lg: "120px" }}
          fontSize="22px"
          lineHeight="40px"
          fontWeight="400"
          listStyleType="auto"
        >
          <ListItem>
            Efficiently myocardinate market-driven innovation.
          </ListItem>
          <ListItem>Idea-sharing with back end products.</ListItem>
          <ListItem>Ballpark value added activity to beta test.</ListItem>
          <ListItem>Voluptate at dolores ut dolor</ListItem>
        </UnorderedList>

        <Box bgColor="#E9ECED" borderRadius="12px">
          <Box
            pl={{ base: "20px", lg: "52px" }}
            pr={{ base: "20px", lg: "53px" }}
            pt="47px"
            // mb="47px"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={{ base: "45px", lg: "30px" }}
            >
              <Flex columnGap="20px" alignItems="center">
                <Image src={Natt} alt={"Designer Image"} />
                <Box fontSize="22px" lineHeight="28px" fontWeight="500">
                  <Text pb="5px">Nattasha</Text>
                  <Text>Designer</Text>
                </Box>
              </Flex>

              <Flex columnGap="25px" cursor="pointer" color="#E67D59">
                <Icon as={InstagramIcon}></Icon>
                <Icon as={AcebookIcon}></Icon>
                <Icon as={InkedinIcon}></Icon>
              </Flex>
            </Box>
            <Box border="1px" borderStyle="dotted" width="100%" height="1px" />
            <Text
              mt="30px"
              fontSize="22px"
              lineHeight="40px"
              fontWeight="400"
              pb="47px"
            >
              “Our team was able to teach themselves primchat in a day.it's like
              using a shared email inboxust way more robust looking.”Primchat
              was the modern what we were looking.”
            </Text>
          </Box>
        </Box>
      </Box>

      <Box pt="92px">
        <Heading
          color="#1E3747"
          pb={{ base: "26px", lg: "59px" }}
          fontSize={{ base: "32px", lg: "45px" }}
          lineHeight={{ base: "40px", lg: "57px" }}
          font-weight="500"
          textAlign="center"
          fontFamily="Recoleta, sans-serif"
        >
          Related Blogs
        </Heading>
        <Box
          columnGap="40px"
          display={{ base: "block", lg: "flex" }}
          pl={{ base: "26px", lg: "131px" }}
          pr={{ base: "26px", lg: "131px" }}
        >
          <Box>
            <Box pb="40px">
              <Image src={Orange} alt={"Orange Image"} />
            </Box>

            <Button
              color="#E05D2F"
              backgroundColor="#FCEFEA"
              borderRadius="100px"
              fontSize="20px"
              lineHeight="32px"
              fontWeight="400"
            >
              Designing
            </Button>
            <Text
              pt="14px"
              pb="14px"
              fontSize={{ base: "18px", lg: "32px" }}
              lineHeight={{ base: "22px", lg: "40px" }}
              font-weight="500"
            >
              The Best Productivity Apps for 2021 - Updated List
            </Text>
            <Box border="1px" borderStyle="dotted" width="100%" height="1px" />
            <Flex alignItems="center" columnGap="5px" pt="14px">
              <Text fontSize="16px" fontWeight="400" lineHeight="24px">
                May 02, 2022{" "}
              </Text>
              <Box
                backgroundColor="#1E3747"
                borderRadius="15px"
                width="6.79px"
                height="6.79px"
              ></Box>
              <Text fontSize="16px" fontWeight="400" lineHeight="24px">
                Nattasha
              </Text>
            </Flex>
          </Box>
          <Box>
            <Box pb="40px">
              <Image src={Pear} alt={"Pear Image"} />
            </Box>

            <Button
              color="#E05D2F"
              backgroundColor="#FCEFEA"
              borderRadius="100px"
              fontSize="20px"
              lineHeight="32px"
              fontWeight="400"
            >
              Development
            </Button>
            <Text
              pt="14px"
              pb="14px"
              fontSize={{ base: "18px", lg: "32px" }}
              lineHeight={{ base: "22px", lg: "40px" }}
              font-weight="500"
            >
              Turn Emails & Attachments Into To-Dos with Apps
            </Text>
            <Box border="1px" borderStyle="dotted" width="100%" height="1px" />
            <Flex alignItems="center" columnGap="5px" pt="14px">
              <Text fontSize="16px" fontWeight="400" lineHeight="24px">
                May 02, 2022{" "}
              </Text>
              <Box
                backgroundColor="#1E3747"
                borderRadius="15px"
                width="6.79px"
                height="6.79px"
              ></Box>
              <Text fontSize="16px" fontWeight="400" lineHeight="24px">
                Nattasha
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default BusinessBlog;
