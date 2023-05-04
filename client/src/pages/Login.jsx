import { useFormik } from "formik";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../components";
import { loginSchema } from "../../schema/loginSchema";
import { authFetch } from "../../helpers/authFetch";
import { useCookies } from "react-cookie";
import { useState } from "react";

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const onSubmit = async (values) => {
    const { username, ...others } = values;
    try {
      setLoading(true);
      const res = await authFetch.post(`/auth/login`, others);
      if (res.status === 200 && res.data.userDetails) {
        const token = res.data.userDetails?.token;
        const userInfo = res.data.userDetails;

        setCookie("token", token);
        setCookie("user", userInfo);

        toast({
          status: "success",
          description: `Welcome again ${res.data.userDetails?.username}`,
        });
        setLoading(false);
        navigate("/");
        return;
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

  const { values, handleChange, handleSubmit, errors } = useFormik({
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
      loading={loading}
    />
  );
};

export default Login;
