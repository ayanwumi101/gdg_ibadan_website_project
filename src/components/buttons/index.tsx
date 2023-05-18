"use state";
import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Buttons({
  btnText,
  handleClick,
  background,
  color,
  marginTop,
  marginBottom,
  width,
}) {
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
        fontWeight="700"
      >
        {btnText}
      </Box>
    </>
  );
}

Buttons.propTypes = {
  btnText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
