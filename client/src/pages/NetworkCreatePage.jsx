import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useToast } from "@chakra-ui/react";
import { NetworkCreate } from "../components";
import { checkToken } from "../../helpers/authToken";
import { useNavigate } from "react-router-dom";

const NetworkCreatePage = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { config } = checkToken();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_API_URL}/network/create`,
        values,
        config
      );
      if (res.status === 200 && res.data) {
        toast({
          status: "success",
          description: "Network created successfully...",
        });
        navigate("/");
        return;
      }
    } catch (error) {
      toast({
        title: "Error",
        status: "error",
        description: error.response.data,
      });
    }
  };

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      networkName: "",
      enviroment: 0,
      apr: 0,
      status: 0,
      description: "",
      imageUrl: "",
      stakeUrl: "",
      userId: 1,
    },
    onSubmit,
  });

  return (
    <NetworkCreate
      handleChange={handleChange}
      values={values}
      onSubmit={handleSubmit}
      setFieldValue={setFieldValue}
    />
  );
};

export default NetworkCreatePage;
