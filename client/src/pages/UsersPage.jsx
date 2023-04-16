import { useEffect, useState } from "react";
import { Loading, UserCard } from "../components";
import { Container, useToast } from "@chakra-ui/react";
import { authFetch } from "../../helpers/authFetch";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await authFetch.get("/user");
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

  if (loading) return <Loading />;

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
