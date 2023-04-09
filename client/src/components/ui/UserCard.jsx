import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FaTelegram } from "react-icons/fa";

const UserCard = ({ ...item }) => {
  const { username, isAdmin, email, createdAt, telegramLink, avatar } = item;

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={avatar && avatar !== "" ? avatar : "./images/avatar.jpg"}
        alt={username}
      />

      <Stack width="100%">
        <CardBody>
          <Flex justify="space-between">
            <Heading size="md">{username}</Heading>
            <Badge
              fontSize="0.8em"
              colorScheme={isAdmin ? "red" : "green"}
              sx={{
                borderRadius: "30px",
                padding: "5px 10px",
              }}
            >
              {isAdmin ? "Admin" : "User"}
            </Badge>
          </Flex>
          <Text py="2">{email}</Text>
          <Heading size="sm">
            {new Date(createdAt).toDateString("dd-mm-yyyy")}
          </Heading>
        </CardBody>

        <CardFooter>
          <ChakraLink href={telegramLink} isExternal flex="1" className="link">
            <Button
              as="a"
              variant="solid"
              colorScheme="blue"
              size="md"
              leftIcon={<FaTelegram />}
            >
              Telegram
            </Button>
          </ChakraLink>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default UserCard;
