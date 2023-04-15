import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useToast } from "@chakra-ui/react";
import { NetworkCreate } from "../components";
import { useNavigate } from "react-router-dom";
import { authFetch } from "../../helpers/authFetch";

const NetworkCreatePage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [createLoading, setCreateLoading] = useState(false);
  const [file, setFile] = useState();
  const [imgUrl, setImgUrl] = useState();

  const handleImageChange = (changeEvent) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImgUrl(onLoadEvent.target.result);
      setFile(changeEvent.target.files[0]);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const onSubmit = async (values) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "huginn-admin");
    try {
      setCreateLoading(true);
      const uploadImg = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_NAME
        }/image/upload`,
        data,
        {
          withCredentials: false,
        }
      );
      const { url } = uploadImg.data;

      const res = await authFetch.post("/network/create", {
        ...values,
        imageUrl: url,
      });
      if (res.status === 200 && res.data) {
        setCreateLoading(false);
        toast({
          status: "success",
          description: "Network created successfully...",
        });
        navigate("/");
        return;
      }
    } catch (error) {
      setCreateLoading(false);
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
      loading={createLoading}
      onSubmit={handleSubmit}
      setFieldValue={setFieldValue}
      onChangeImage={handleImageChange}
      imageSrc={imgUrl}
    />
  );
};

export default NetworkCreatePage;
