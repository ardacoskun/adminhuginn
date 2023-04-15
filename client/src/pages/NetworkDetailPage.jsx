import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import { Loading, NetworkCreate } from "../components";
import { authFetch } from "../../helpers/authFetch";

const NetworkDetailPage = () => {
  const { networkId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

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

  useEffect(() => {
    const getNetwork = async () => {
      try {
        setLoading(true);
        const { status, data } = await authFetch.get(`/network/${networkId}`);
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

  const onSubmit = async (values) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "huginn-admin");

    try {
      setUpdateLoading(true);
      let reqData;

      if (file) {
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

        reqData = { ...values, imageUrl: url };
      } else {
        reqData = values;
      }

      const res = await authFetch.put(`/network/${networkId}`, reqData);
      if (res.status === 200 && res.data) {
        setUpdateLoading(false);
        toast({
          status: "success",
          description: "Network updated successfully...",
        });
        navigate("/");
        return;
      }
    } catch (error) {
      setUpdateLoading(false);
      toast({
        title: "Error",
        status: "error",
        description: error.response.data,
      });
    }
  };

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
      const { status, data } = await authFetch.delete(`/network/${networkId}`);
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

  if (loading) return <Loading />;

  return (
    <NetworkCreate
      isDetail
      handleChange={handleChange}
      values={values}
      onSubmit={handleSubmit}
      setFieldValue={setFieldValue}
      deleteNetwork={deleteNetwork}
      loading={updateLoading}
      onChangeImage={handleImageChange}
      imageSrc={imgUrl}
    />
  );
};

export default NetworkDetailPage;
