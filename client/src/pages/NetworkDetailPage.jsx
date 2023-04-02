import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Flex, Spinner, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import { NetworkCreate } from "../components";
import { checkToken } from "../../helpers/authToken";

const NetworkDetailPage = () => {
  const { networkId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { config } = checkToken();

  useEffect(() => {
    const getNetwork = async () => {
      try {
        setLoading(true);
        const { status, data } = await axios.get(
          `${import.meta.env.VITE_SERVER_API_URL}/network/${networkId}`,
          config
        );
        if (status === 200 && data) {
          setData(data);
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
    getNetwork();
  }, [networkId]);

  const onSubmit = () => {};

  const {
    networkName,
    enviroment,
    apr,
    status,
    description,
    imageUrl,
    stakeUrl,
    userId,
  } = data;
  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      networkName,
      enviroment,
      apr,
      status,
      description,
      imageUrl,
      stakeUrl,
      userId,
    },
    enableReinitialize: true,
    onSubmit,
  });

  const deleteNetwork = async () => {
    try {
      const { status, data } = await axios.delete(
        `${import.meta.env.VITE_SERVER_API_URL}/network/${networkId}`,
        config
      );
      if (status === 200) {
        navigate("/");
        toast({
          status: "success",
          description: data,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        status: "error",
        description: error.response.data,
      });
    }
  };

  return (
    <>
      {loading ? (
        <Flex alignItems="center" justify="center">
          <Spinner width="100px" height="100px" />
        </Flex>
      ) : (
        <NetworkCreate
          handleChange={handleChange}
          values={values}
          onSubmit={handleSubmit}
          setFieldValue={setFieldValue}
          deleteNetwork={deleteNetwork}
          isDetail
        />
      )}
    </>
  );
};

export default NetworkDetailPage;
