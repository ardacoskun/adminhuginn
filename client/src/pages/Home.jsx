import React, { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Networks } from "../components";
import { checkToken } from "../../helpers/authToken";

const Home = () => {
  const toast = useToast();
  const [networks, setNetworks] = useState([]);

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
        }
      } catch (error) {
        toast({
          title: "Error",
          status: "error",
          description: error.response.data,
        });
      }
    };
    getNetworks();
  }, []);

  return (
    <>
      <Networks networks={networks} />
    </>
  );
};

export default Home;
