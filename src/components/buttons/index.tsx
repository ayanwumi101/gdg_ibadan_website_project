"use client";
import { Box } from "@chakra-ui/react";
import { FC } from "react";

interface iButtonProps {
  btnText: string;
  handleClick?: () => void;
  background?: string;
  color?: string;
  marginTop?: string;
  marginBottom?: string;
  width?: string;
}
const Buttons: FC<iButtonProps> = ({
  btnText,
  handleClick,
  background,
  color,
  marginTop,
  marginBottom,
  width,
}) => {
  return (
    <>
      <Box
        onClick={handleClick}
        color={"#FFF"}
        bg={"#E05D2F"}
        style={{
          backgroundColor: background,
          color: color,
          marginTop: marginTop,
          marginBottom: marginBottom,
          width: width,
        }}
        as="button"
        borderRadius="md"
        p="13px 32px 13px 32px"
        fontSize="16px"
        fontWeight="500"
        lineHeight="20px"
      >
        {btnText}
      </Box>
    </>
  );
};

export default Buttons;
