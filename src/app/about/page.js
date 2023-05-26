"use client";

import { Button, Heading, Box } from "@chakra-ui/react";
import React from "react";
import Hero from "./Hero";

const About = () => {
  return (
    <Box w="90%" mx="auto" mt="6" mb="16">
      <Box w="100%" bg="#1E3747" minH="500px" borderRadius="24px">
        <Hero />
      </Box>
    </Box>
  );
};

export default About;
