import React, { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Heading, Spinner, useToast } from "@chakra-ui/react";
import { Networks } from "../components";
import { checkToken } from "../../helpers/authToken";

const Home = () => {
  const toast = useToast();
  const [networks, setNetworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNetworks = async () => {
      const { config } = checkToken();

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_API_URL}/network`,
          config
        );
        if (res.status === 200 && res?.data) {
          setNetworks(res.data);
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
    getNetworks();
  }, []);

  if (loading) {
    return (
      <Flex alignItems="center" justify="center">
        <Spinner width="100px" height="100px" />
      </Flex>
    );
  }

  if (!loading && networks?.length === 0) {
    return (
      <Heading as="h2" size="xl" textAlign="center" mt="10%">
        There are no networks yet.
      </Heading>
    );
  }

  return (
    <>
      <Networks networks={networks} />
    </>
  );
};

export default Home;
