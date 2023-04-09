import { useEffect, useState } from "react";
import axios from "axios";
import { UserCard } from "../components";
import { Container, Spinner, useToast } from "@chakra-ui/react";
import { checkToken } from "../../helpers/authToken";
import { Flex } from "@mantine/core";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const getUsers = async () => {
      const { config } = checkToken();

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_API_URL}/user`,
          config
        );
        if (res.status === 200 && res?.data) {
          setUsers(res.data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        toast({
          title: "Error",
          status: "error",
          description: error.response.data,
        });
      }
    };
    getUsers();
  }, []);

  if (loading) {
    return (
      <Flex alignItems="center" justify="center">
        <Spinner width="100px" height="100px" />
      </Flex>
    );
  }

  return (
    <Container
      maxW="4xl"
      display="flex"
      gap="20px"
      flexDirection="column"
      pb="20px"
    >
      {users?.map((item) => (
        <UserCard key={item._id} {...item} />
      ))}
    </Container>
  );
};

export default UsersPage;
