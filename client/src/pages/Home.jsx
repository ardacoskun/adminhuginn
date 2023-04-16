import React, { useEffect, useState } from "react";
import { Heading, useToast } from "@chakra-ui/react";
import { Loading, Networks } from "../components";
import { authFetch } from "../../helpers/authFetch";
import { useCookies } from "react-cookie";

const Home = () => {
  const toast = useToast();
  const [networks, setNetworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  useEffect(() => {
    const getNetworks = async () => {
      try {
        const res = await authFetch.get("/network");
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

  if (loading) return <Loading />;

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
