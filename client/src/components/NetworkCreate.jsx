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

const NetworkCreate = ({
  handleChange,
  values,
  onSubmit,
  setFieldValue,
  isDetail,
}) => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Container maxW="8xl" pb={isDesktop ? "" : "20px"}>
      <>
        <div
          style={{
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            gap: "20px",
          }}
        >
          <Box>
            <Image
              boxSize={isDesktop ? "350px" : "250px"}
              src="./images/emptyImage.png"
              alt="Dan Abramov"
              borderRadius="10px"
              margin={!isDesktop ? "auto" : ""}
              border="1px solid #000"
              p="20px"
            />
          </Box>
          <Box flex="1" display="flex" flexDirection="column" gap="15px">
            <FormControl>
              <FormLabel>Network Name</FormLabel>
              <CustomInput
                placeholder="Network name"
                onChange={handleChange}
                name="networkName"
                id="networkName"
                type="text"
                value={values?.networkName}
              />
            </FormControl>
            <FormControl>
              <FormLabel>%APR</FormLabel>
              <CustomNumberInput
                onChange={setFieldValue}
                name="apr"
                id="apr"
                value={values?.apr}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Mainnet-Testnet</FormLabel>
              <CustomSelectInput
                options={enviromentData}
                onChange={setFieldValue}
                name="enviroment"
                id="enviroment"
                value={values?.enviroment}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Network Status</FormLabel>
              <CustomSelectInput
                options={networkStatus}
                onChange={setFieldValue}
                name="status"
                id="status"
                value={values?.status}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Network Address</FormLabel>
              <CustomInput
                type="address"
                placeholder="link"
                onChange={handleChange}
                name="stakeUrl"
                id="stakeUrl"
                value={values?.stakeUrl}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <CustomTextArea
                placeholder="Description"
                onChange={handleChange}
                name="description"
                id="description"
                value={values?.description}
              />
            </FormControl>
            <ButtonGroup
              spacing="10"
              width={isDetail ? "100%" : "50%"}
              mx="auto"
            >
              <Button colorScheme="green" flex="1" onClick={onSubmit}>
                Save
              </Button>
              {isDetail && (
                <Button colorScheme="red" flex="1" onClick={() => {}}>
                  Delete
                </Button>
              )}
            </ButtonGroup>
          </Box>
        </div>
      </>
    </Container>
  );
};

NetworkCreate.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isDetail: PropTypes.bool,
};

NetworkCreate.defaultProps = {
  isDetail: false,
};

export default NetworkCreate;
