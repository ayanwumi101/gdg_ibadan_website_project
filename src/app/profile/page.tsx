"use client";
import React, { useState } from "react";
import Navbar from "../../components/navbar";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { ChevronDownIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Buttons from "../../components/buttons";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <Box
        mt={{ base: "5.1rem", lg: "4.5rem" }}
        ml={{ base: "20px", lg: "476px" }}
        mr={{ base: "21px", lg: "477px" }}
        width={{ base: "380px", lg: "487px" }}
        max-width="100%"
        borderRadius="24px"
        height="auto"
        bg="#fff"
        boxShadow="0px 15px 60px rgba(30, 55, 71, 0.1)"
      >
        <Box pl="27px" pr="26px">
          <Heading
            pt="34"
            pb="38px"
            fontSize="32px"
            lineHeight="40px"
            fontWeight="500"
          >
            Edit Profile
          </Heading>
          <Stack direction="row" alignItems="center" pb="18px">
            <Avatar size="sm" src="https://bit.ly/broken-link" />
            <Text
              fontSize="14px"
              lineHeight="20px"
              fontWeight="400"
              color="#E05D2F"
            >
              Upload Avatar
            </Text>
          </Stack>
          <Text fontSize="14px" lineHeight="20px" fontWeight="400" pb="55px">
            Oluwafolayemi Anifowose
          </Text>

          <Flex columnGap="18px" pb="18px">
            <Stack spacing="6px">
              <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                FirstName
              </Text>
              <Input />
            </Stack>
            <Stack
              spacing="6px"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="400"
            >
              <Text>LastName</Text>
              <Input />
            </Stack>
          </Flex>
          <Stack spacing="6px" pb="18px">
            <Text fontSize="16px" lineHeight="24px" fontWeight="400">
              Email
            </Text>
            <Input />
          </Stack>
          <Stack spacing="6px">
            <Text fontSize="16px" lineHeight="24px" fontWeight="400">
              What are you do
            </Text>
            <InputGroup>
              <InputRightElement
                pointerEvents="painted"
                children={<ChevronDownIcon color="gray.300" />}
              />
              <Input placeholder="Vr developer" />
            </InputGroup>
          </Stack>
          <Stack spacing="6px" pb="48px">
            <Text fontSize="16px" lineHeight="24px" fontWeight="400">
              Password
            </Text>
            <InputGroup>
              <Input
                pr="4.5rem"
                type={showPassword ? "text" : "password"}
                // placeholder="Enter your password"
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  h="1.75rem"
                  size="sm"
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={handleTogglePassword}
                  variant="ghost"
                  aria-label={""}
                />
              </InputRightElement>
            </InputGroup>
          </Stack>
          <Box pb="110px">
            <Buttons btnText={"Update"} width="100%" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
