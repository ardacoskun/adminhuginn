import React from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const DrawerExample = ({ btnRef, isOpen, onClose, children }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader mb="40px">
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

DrawerExample.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  btnRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

DrawerExample.defaultProps = {
  isOpen: false,
  onClose: () => {},
};

export default DrawerExample;
