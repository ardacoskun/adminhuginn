import React from "react";
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
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
    _id,
  } = item;

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={imageUrl}
          alt={networkName}
          borderRadius="lg"
          width="300px"
          sx={{
            objectFit: "cover",
          }}
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
          <ChakraLink
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
          </ChakraLink>
          <Link to={`/${_id}`} className="link" style={{ flex: 1 }}>
            <Button as="a" size="md" colorScheme="green" width="100%">
              Edit
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

NetworkCard.propTypes = {};

export default NetworkCard;
