import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Text,
  Heading,
  Stack,
  Image,
  Divider,
  Badge,
  Flex,
  Avatar,
  Box,
  Link,
} from "@chakra-ui/react";

const NetworkCard = ({ ...item }) => {
  const {
    networkName,
    enviroment,
    description,
    apr,
    imageUrl,
    userId,
    stakeUrl,
    status,
  } = item;
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt={networkName}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Heading size="md">{networkName}</Heading>
            </Flex>
            <Badge
              fontSize="0.8em"
              colorScheme={enviroment === 1 ? "red" : "green"}
              style={{
                borderRadius: "30px",
                padding: "5px 10px",
              }}
            >
              {enviroment === 1 ? "Testnet" : "Mainnet"}
            </Badge>
          </Flex>

          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {`APR: ${apr ? "%" : ""}${apr ? apr : ""}`}
          </Text>
        </Stack>
        <Flex spacing="4" mt="15px">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar size="sm" name="user" src="https://bit.ly/sage-adebayo" />
            <Box>
              <Text>
                created by <strong>User1</strong>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="10" width="100%">
          <Link
            href={status === 0 && stakeUrl}
            isExternal
            flex="1"
            className="link"
          >
            <Button
              as="a"
              variant="solid"
              colorScheme="blue"
              size="md"
              width="100%"
              isDisabled={status === 1}
            >
              {status === 0 ? "Stake Now" : "Soon"}
            </Button>
          </Link>
          <Button size="md" colorScheme="green" flex="1">
            Edit
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

NetworkCard.propTypes = {};

export default NetworkCard;
