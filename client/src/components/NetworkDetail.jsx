import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Box,
  Image,
  FormControl,
  FormLabel,
  Button,
  ButtonGroup,
  useBreakpointValue,
} from "@chakra-ui/react";
import CustomInput from "./ui/CustomInput";
import CustomNumberInput from "./ui/CustomNumberInput";
import CustomSelectInput from "./ui/CustomSelectInput";
import CustomTextArea from "./ui/CustomTextArea";
import { enviromentData, networkStatus } from "../../data/data";

const NetworkDetail = (props) => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Container maxW="8xl" pb={isDesktop ? "" : "20px"}>
      <FormControl>
        <div
          style={{
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            gap: "20px",
          }}
        >
          <Box>
            <Image
              boxSize={isDesktop ? "400px" : "250px"}
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              borderRadius="10px"
              margin={!isDesktop ? "auto" : ""}
            />
          </Box>
          <Box flex="1" display="flex" flexDirection="column" gap="15px">
            <Box>
              <FormLabel>Network Name</FormLabel>
              <CustomInput placeholder="Network name" />
            </Box>
            <Box>
              <FormLabel>%APR</FormLabel>
              <CustomNumberInput />
            </Box>
            <Box>
              <FormLabel>Mainnet-Testnet</FormLabel>
              <CustomSelectInput options={enviromentData} />
            </Box>
            <Box>
              <FormLabel>Network Status</FormLabel>
              <CustomSelectInput options={networkStatus} />
            </Box>
            <Box>
              <FormLabel>Network Address</FormLabel>
              <CustomInput type="address" placeholder="link" />
            </Box>
            <Box>
              <FormLabel>Description</FormLabel>
              <CustomTextArea placeholder="Description" />
            </Box>
            <ButtonGroup spacing="10">
              <Button colorScheme="green" flex="1">
                Save
              </Button>
              <Button colorScheme="red" flex="1">
                Delete
              </Button>
            </ButtonGroup>
          </Box>
        </div>
      </FormControl>
    </Container>
  );
};

NetworkDetail.propTypes = {};

export default NetworkDetail;
