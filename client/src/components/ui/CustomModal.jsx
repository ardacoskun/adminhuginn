import { useRef } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

const CustomModal = ({
  isOpen,
  onClose,
  title,
  description,
  onClick,
  btnText,
}) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isCentered
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{description}</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClick}>{btnText}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  title: PropTypes.string,
  btnText: PropTypes.string,
  description: PropTypes.string,
};

CustomModal.defaultProps = {
  isOpen: false,
  onClose: () => {},
  onClick: () => {},
  title: "",
  btnText: "",
  description: "",
};

export default CustomModal;
