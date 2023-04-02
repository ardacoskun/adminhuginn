import { useFormik } from "formik";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthForm } from "../components";
import { loginSchema } from "../../schema/loginSchema";

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, ...others } = values;
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_API_URL}/auth/login`,
        others
      );
      if (res.data.userDetails) {
        toast({
          status: "success",
          description: `Welcome again ${res.data.userDetails?.username}`,
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

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: loginSchema,
  });

  return (
    <AuthForm
      isLogin
      handleChange={handleChange}
      values={values}
      onSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default Login;
