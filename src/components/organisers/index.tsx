"use state";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Lead from "../../assets/lead-img.png";
import CoOrganiser from "../../assets/co-organiser.png";
import Organiser from "../../assets/orgaiser.png";
import Secretary from "../../assets/secretary.png";
import Buttons from "../buttons";

const Organisers = () => {
  return (
    <>
      <Box bgColor="#E9ECED" mt="104px" textAlign="center">
        <Heading
          textAlign="center"
          fontSize="45px"
          lineHeight="57px"
          fontWeight="500"
          pt="93px"
          //   fontFamily="Recoleta, sans-serif"
        >
          Let’s Meet the Organisers
        </Heading>
        <Flex
          justifyContent="center"
          columnGap="40px"
          pl="180px"
          pr="181px"
          pt="65px"
        >
          <Box>
            <Image src={Lead} alt={""} />
            <Box
            //   background="#fff"
            //   width="300px"
            //   height="200px"
            //   transform="translate(-50%, -50%)"
            >
              <Heading
                color="#E05D2F"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="500"
              >
                Lead
              </Heading>
              <Box
                as="p"
                fontSize="14px"
                lineHeight="20px"
                fontWeight="400"
                color="#1E3747"
              >
                Adeleke Oshin
              </Box>
            </Box>
          </Box>

          <Box>
            <Image src={CoOrganiser} alt={""} />
            <Box
            //   background="#fff"
            //   width="300px"
            //   height="200px"
            //   transform="translate(-50%, -50%)"
            >
              <Heading
                color="#E05D2F"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="500"
              >
                Co-Organiser
              </Heading>
              <Box
                as="p"
                fontSize="14px"
                lineHeight="20px"
                fontWeight="400"
                color="#1E3747"
              >
                Peters James
              </Box>
            </Box>
          </Box>

          <Box>
            <Image src={Organiser} alt={""} />
            <Box
            //   background="#fff"
            //   width="300px"
            //   height="200px"
            //   transform="translate(-50%, -50%)"
            >
              <Heading
                color="#E05D2F"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="500"
              >
                Organiser
              </Heading>
              <Box
                as="p"
                fontSize="14px"
                lineHeight="20px"
                fontWeight="400"
                color="#1E3747"
              >
                Okoro John
              </Box>
            </Box>
          </Box>

          <Box>
            <Image src={Secretary} alt={""} />
            <Box
            //   background="#fff"
            //   width="300px"
            //   height="200px"
            //   transform="translate(-50%, -50%)"
            >
              <Heading
                color="#E05D2F"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="500"
              >
                Secretary
              </Heading>
              <Box
                as="p"
                fontSize="14px"
                lineHeight="20px"
                fontWeight="400"
                color="#1E3747"
              >
                Okafor Nathaniel
              </Box>
            </Box>
          </Box>
        </Flex>
        <Buttons
          color={undefined}
          marginBottom="76px"
          marginTop="55px"
          background={undefined}
          btnText="Know More"
          width={undefined}
        />
      </Box>
    </>
  );
};

export default Organisers;
