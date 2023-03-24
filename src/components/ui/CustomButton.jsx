import React from "react";
import { PropTypes } from "prop-types";
import { Button } from "@chakra-ui/react";

const CustomButton = ({ text, loadingText, onClick, isLoading }) => {
  return (
    <Button
      isLoading={isLoading}
      loadingText={loadingText}
      colorScheme="blue"
      variant="outline"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  loadingText: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  isLoading: false,
  loadingText: "",
  onClick: () => {},
};

export default CustomButton;
